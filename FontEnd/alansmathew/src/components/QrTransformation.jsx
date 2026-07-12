import { useState, useEffect, useRef, useCallback } from 'react'
import { animate } from 'animejs'
import qrcodeUrl from '../assets/photo/qrcode.svg'
import prophotoUrl from '../assets/photo/prophoto.svg'

const SAMPLE_SIZE = 700
const GRID = 5

function sampleImage(url, size) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      const c = document.createElement('canvas')
      c.width = size
      c.height = size
      const ctx = c.getContext('2d')
      const svgAspect = img.naturalWidth / img.naturalHeight
      let dw, dh, dx, dy
      if (svgAspect > 1) {
        dh = size
        dw = size * svgAspect
        dx = -(dw - size) / 2
        dy = 0
      } else {
        dw = size
        dh = size / svgAspect
        dx = 0
        dy = -(dh - size) / 2
      }
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, size, size)
      ctx.drawImage(img, dx, dy, dw, dh)
      resolve(ctx.getImageData(0, 0, size, size).data)
    }
    img.onerror = reject
    img.src = url
  })
}

function extractCells(data, size, grid) {
  const cols = Math.floor(size / grid)
  const rows = Math.floor(size / grid)
  const cells = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let sr = 0, sg = 0, sb = 0, count = 0
      for (let py = r * grid; py < (r + 1) * grid && py < size; py++) {
        for (let px = c * grid; px < (c + 1) * grid && px < size; px++) {
          const i = (py * size + px) * 4
          sr += data[i]; sg += data[i + 1]; sb += data[i + 2]; count++
        }
      }
      const rAvg = sr / count
      const gAvg = sg / count
      const bAvg = sb / count
      const lum = rAvg * 0.299 + gAvg * 0.587 + bAvg * 0.114
      cells.push({ r, c, cx: c * grid + grid / 2, cy: r * grid + grid / 2, rAvg: Math.round(rAvg), gAvg: Math.round(gAvg), bAvg: Math.round(bAvg), lum, dark: lum < 180 })
    }
  }
  return { cells, cols, rows }
}

function buildParticles(qrCells, photoCells) {
  const qrDark = qrCells.filter(c => c.dark)
  const photoDark = photoCells.filter(c => c.dark)
  qrDark.sort((a, b) => a.r * 1000 + a.c - (b.r * 1000 + b.c))
  photoDark.sort((a, b) => a.r * 1000 + a.c - (b.r * 1000 + b.c))

  const count = Math.max(qrDark.length, photoDark.length)
  const particles = []

  for (let i = 0; i < count; i++) {
    const qr = i < qrDark.length ? qrDark[i] : null
    const photo = i < photoDark.length ? photoDark[i] : null

    let tx, ty, colorR, colorG, colorB
    if (photo) {
      tx = photo.cx; ty = photo.cy
      colorR = photo.rAvg; colorG = photo.gAvg; colorB = photo.bAvg
    } else {
      tx = SAMPLE_SIZE / 2; ty = SAMPLE_SIZE / 2
      colorR = colorG = colorB = 128
    }

    let sx, sy
    if (qr) {
      sx = qr.cx; sy = qr.cy
    } else {
      sx = tx + (Math.random() - 0.5) * SAMPLE_SIZE * 0.8
      sy = ty + (Math.random() - 0.5) * SAMPLE_SIZE * 0.8
    }

    const cx = qr ? qr.cx : tx
    const cy = qr ? qr.cy : ty
    const angle = Math.random() * Math.PI * 2
    const dist = 40 + Math.random() * 120

    particles.push({
      sx, sy, tx, ty,
      colorR, colorG, colorB,
      floatX: cx + Math.cos(angle) * dist,
      floatY: cy + Math.sin(angle) * dist,
      hasQr: !!qr,
      hasPhoto: !!photo,
      setDelay: Math.random() * 0.6,
    })
  }

  return { particles, qrCount: qrDark.length, photoCount: photoDark.length }
}

function lerp(a, b, t) { return a + (b - a) * t }
function easeOutQuart(t) { return 1 - Math.pow(1 - t, 4) }
function easeInOutQuart(t) { return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2 }
function easeOutBack(t) {
  const c = 1.2
  return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2)
}
function delayedProgress(progress, delay) {
  const window = 1 - delay
  if (window <= 0) return 1
  return Math.max(0, Math.min((progress - delay) / window, 1))
}

function drawFrame(ctx, particles, progress, phase) {
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, SAMPLE_SIZE, SAMPLE_SIZE)
  const sz = GRID - 1

  for (let i = 0; i < particles.length; i++) {
    const p = particles[i]
    const stagger = (i / particles.length) * 0.25
    const lt = Math.max(0, Math.min((progress - stagger) / (1 - stagger), 1))

    let x, y, r, g, b, alpha

    if (phase === 'idle') {
      if (!p.hasQr) continue
      x = p.sx; y = p.sy
      r = g = b = 30; alpha = 1
    } else if (phase === 'toFloat') {
      const et = easeOutQuart(lt)
      x = lerp(p.sx, p.floatX, et)
      y = lerp(p.sy, p.floatY, et)
      r = g = b = 30
      alpha = p.hasQr ? 1 : et
    } else if (phase === 'float') {
      const time = Date.now() / 1000
      const offX = Math.sin(time * 1.2 + i * 0.7) * 8
      const offY = Math.cos(time * 0.9 + i * 0.5) * 8
      x = p.floatX + offX
      y = p.floatY + offY
      r = g = b = 30; alpha = 1
    } else if (phase === 'toPortrait') {
      const pt = delayedProgress(progress, p.setDelay)
      const et = easeOutQuart(pt)
      x = lerp(p.floatX, p.tx, easeOutBack(et))
      y = lerp(p.floatY, p.ty, easeOutBack(et))
      r = Math.round(lerp(30, p.colorR, et))
      g = Math.round(lerp(30, p.colorG, et))
      b = Math.round(lerp(30, p.colorB, et))
      alpha = p.hasPhoto ? 1 : 1 - et
    } else if (phase === 'portrait') {
      if (!p.hasPhoto) continue
      x = p.tx; y = p.ty
      r = p.colorR; g = p.colorG; b = p.colorB; alpha = 1
    } else if (phase === 'toQR') {
      const pt = delayedProgress(progress, p.setDelay)
      const et = easeOutQuart(pt)
      x = lerp(p.tx, p.sx, easeOutBack(et))
      y = lerp(p.ty, p.sy, easeOutBack(et))
      r = Math.round(lerp(p.colorR, 30, et))
      g = Math.round(lerp(p.colorG, 30, et))
      b = Math.round(lerp(p.colorB, 30, et))
      alpha = p.hasQr ? 1 : 1 - et
    } else {
      continue
    }

    if (alpha < 0.01) continue
    ctx.globalAlpha = alpha
    ctx.fillStyle = `rgb(${r},${g},${b})`
    ctx.fillRect(Math.round(x - sz / 2), Math.round(y - sz / 2), sz, sz)
  }
  ctx.globalAlpha = 1
}

export default function QrTransformation() {
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const animRef = useRef(null)
  const floatRafRef = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let cancelled = false
    async function init() {
      const canvas = canvasRef.current
      const displaySize = canvas.clientWidth || 600
      const dpr = window.devicePixelRatio || 1
      canvas.width = displaySize * dpr
      canvas.height = displaySize * dpr

      const [qrRaw, photoRaw] = await Promise.all([
        sampleImage(qrcodeUrl, SAMPLE_SIZE),
        sampleImage(prophotoUrl, SAMPLE_SIZE),
      ])
      if (cancelled) return
      const qr = extractCells(qrRaw, SAMPLE_SIZE, GRID)
      const photo = extractCells(photoRaw, SAMPLE_SIZE, GRID)
      const result = buildParticles(qr.cells, photo.cells)
      particlesRef.current = result.particles

      const ctx = canvas.getContext('2d')
      const s = (displaySize * dpr) / SAMPLE_SIZE
      ctx.scale(s, s)
      drawFrame(ctx, result.particles, 0, 'idle')
      setReady(true)
    }
    init()
    return () => { cancelled = true }
  }, [])

  const animatePhase = useCallback((phase, duration) => {
    if (animRef.current) {
      animRef.current.pause()
      animRef.current = null
    }
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const particles = particlesRef.current
    const state = { t: 0 }
    return new Promise((resolve) => {
      animRef.current = animate(state, {
        t: [0, 1],
        duration,
        easing: 'spring(1, 80, 12, 0)',
        onUpdate: () => {
          ctx.save()
          ctx.setTransform(1, 0, 0, 1, 0, 0)
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          ctx.restore()
          drawFrame(ctx, particles, state.t, phase)
        },
        onComplete: resolve,
      })
    })
  }, [])

  const startFloating = useCallback(() => {
    if (animRef.current) {
      animRef.current.pause()
      animRef.current = null
    }
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const particles = particlesRef.current
    function loop() {
      ctx.save()
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.restore()
      drawFrame(ctx, particles, 1, 'float')
      floatRafRef.current = requestAnimationFrame(loop)
    }
    floatRafRef.current = requestAnimationFrame(loop)
  }, [])

  const stopFloating = useCallback(() => {
    if (floatRafRef.current) cancelAnimationFrame(floatRafRef.current)
  }, [])

  useEffect(() => {
    if (!ready) return
    let cancelled = false
    async function run() {
      while (!cancelled) {
        await new Promise(r => setTimeout(r, 5000))
        if (cancelled) break
        await animatePhase('toFloat', 1200)
        if (cancelled) break
        startFloating()
        await new Promise(r => setTimeout(r, 1500))
        if (cancelled) break
        stopFloating()
        await animatePhase('toPortrait', 3000)
        if (cancelled) break
        await new Promise(r => setTimeout(r, 5000))
        if (cancelled) break
        await animatePhase('toQR', 3000)
      }
    }
    run()
    return () => { cancelled = true }
  }, [ready, animatePhase, startFloating, stopFloating])

  return (
    <div className="qr-transform">
      <div className="canvas-wrap">
        <canvas ref={canvasRef} className="main-canvas" />
        {!ready && <div className="overlay">Loading...</div>}
      </div>
    </div>
  )
}
