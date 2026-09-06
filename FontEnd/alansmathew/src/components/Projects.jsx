import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import PixelBlast from './PixelBlast';

const GITHUB_USERNAME = 'alansmathew';
const MAX_PROJECTS = 6;

const fallbackDescription = 'Seems like, god only knows now 😬';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia?.('(max-width: 768px)').matches
  );

  useEffect(() => {
    const media = window.matchMedia('(max-width: 768px)');
    const onChange = (e) => setIsMobile(e.matches);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return;
        const mapped = (Array.isArray(data) ? data : [])
          .map((repo) => ({
            title: repo.name,
            description: repo.description || fallbackDescription,
            tags: [repo.language || 'README'],
            url: repo.html_url,
          }))
          .slice(0, MAX_PROJECTS);
        setProjects(mapped);
        setLoading(false);
      })
      .catch(() => {
        if (cancelled) return;
        setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 bg-neutral-50 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <PixelBlast
          variant="square"
          pixelSize={isMobile ? 8 : 4}
          color="#edb300"
          patternScale={isMobile ? 4 : 7.5}
          patternDensity={0.5}
          pixelSizeJitter={0.35}
          enableRipples={!isMobile}
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={isMobile ? 0.3 : 0.5}
          edgeFade={0.42}
          transparent
        />
      </div>
      <motion.div
        className="relative z-10 max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      >
        <motion.p
          variants={fadeUp}
          className="font-mono text-[11px] tracking-[0.2em] uppercase text-neutral-400 font-semibold mb-10 md:mb-12"
        >
          &mdash; Projects
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <motion.div
                  key={`skeleton-${i}`}
                  className="p-5 md:p-6 bg-white/50 backdrop-blur-md rounded-xl border border-white/50 shadow-lg shadow-neutral-200/50 animate-pulse"
                  variants={fadeUp}
                >
                  <div className="h-4 w-2/3 bg-neutral-200/70 rounded mb-3" />
                  <div className="h-3 w-full bg-neutral-200/70 rounded mb-2" />
                  <div className="h-3 w-4/5 bg-neutral-200/70 rounded" />
                </motion.div>
              ))
            : projects.map((project) => (
                <motion.a
                  key={project.title}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group min-w-0 p-5 md:p-6 bg-white/50 backdrop-blur-md rounded-xl border border-white/50 shadow-lg shadow-neutral-200/50 hover:bg-white/60 hover:border-white/70 hover:shadow-xl transition-all duration-300 touch-manipulation"
                  variants={fadeUp}
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-start justify-between gap-3 mb-3 min-w-0">
                    <h3 className="min-w-0 break-words text-base font-semibold text-neutral-900 group-hover:text-neutral-950 leading-snug">
                      {project.title}
                    </h3>
                    <ExternalLink className="w-4 h-4 shrink-0 mt-0.5 text-neutral-300 group-hover:text-neutral-500 transition-colors" />
                  </div>
                  <p className="min-w-0 break-words text-sm text-neutral-500 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono font-medium px-2 py-0.5 bg-neutral-50 text-neutral-500 rounded border border-neutral-100 break-words"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.a>
              ))}
        </div>

        <motion.div variants={fadeUp} className="mt-10 md:mt-12 flex justify-center">
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 font-mono text-xs tracking-wide uppercase text-neutral-700 bg-white/50 backdrop-blur-md rounded-full border border-white/60 hover:bg-white/70 hover:border-white/90 transition-colors touch-manipulation"
          >
            <ArrowUpRight className="w-4 h-4 shrink-0" />
            View more on GitHub
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
