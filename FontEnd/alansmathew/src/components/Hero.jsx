import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import QrTransformation from "./QrTransformation";
import DecryptedText from "./DecryptedText";
import { ChevronDown } from "lucide-react";
import { Terminal } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  }),
};

export default function Hero() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia?.('(max-width: 768px)').matches
  );

  useEffect(() => {
    const media = window.matchMedia('(max-width: 768px)');
    const onChange = (e) => setIsMobile(e.matches);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  return (
    <section className="w-full overflow-hidden">
      <div className="mx-auto mt-12 md:mt-20 px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 md:items-center md:justify-center">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <QrTransformation size={isMobile ? 180 : 260} />
          </motion.div>

          <div className="space-y-2 w-full max-w-lg md:w-auto text-left">
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-950 break-words"
            >
              Alan Sebastian Mathew
            </motion.h1>

            <p className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 flex  md:justify-start gap-2">
              <Terminal className="w-3.5 h-3.5 shrink-0" /> // SOFTWARE CRAFTMANSHIP
            </p>

            <div className="text-[10px] sm:text-xs mt-2 font-mono text-left">
              <span className="text-purple-500">
                <DecryptedText
                  text="var"
                  animateOn="view"
                  sequential
                  revealDirection="start"
                  speed={50}
                  useOriginalCharsOnly
                />
              </span>
              {" "}
              <span className="text-blue-500">
                <DecryptedText
                  text="coordinates"
                  animateOn="view"
                  sequential
                  revealDirection="start"
                  speed={40}
                  useOriginalCharsOnly
                />
              </span>
              <span className="text-neutral-400">: [</span>
              <br />
              <span className="text-neutral-400">&nbsp;&nbsp;</span>
              <span className="text-amber-500">
                <DecryptedText
                  text={`"email"`}
                  animateOn="view"
                  sequential
                  revealDirection="start"
                  speed={50}
                  useOriginalCharsOnly
                />
              </span>
              <span className="text-neutral-400">: </span>
              <span className="text-gray-900 break-all">
                <DecryptedText
                  text={`"alansmathew008@gmail.com"`}
                  animateOn="view"
                  sequential
                  revealDirection="start"
                  speed={40}
                  useOriginalCharsOnly
                />
              </span>
              <span className="text-neutral-400">,</span>
              <br />
              <span className="text-neutral-400">&nbsp;&nbsp;</span>
              <span className="text-amber-500">
                <DecryptedText
                  text={`"phone"`}
                  animateOn="view"
                  sequential
                  revealDirection="start"
                  speed={50}
                  useOriginalCharsOnly
                />
              </span>
              <span className="text-neutral-400">: </span>
              <span className="text-gray-900">
                <DecryptedText
                  text={`"+1 8137936404"`}
                  animateOn="view"
                  sequential
                  revealDirection="start"
                  speed={40}
                  maxIterations={12}
                  useOriginalCharsOnly
                />
              </span>
              <span className="text-neutral-400">,</span>
              <br />
              <span className="text-neutral-400">&nbsp;&nbsp;</span>
              <span className="text-amber-500">
                <DecryptedText
                  text={`"resume"`}
                  animateOn="view"
                  sequential
                  revealDirection="start"
                  speed={50}
                  useOriginalCharsOnly
                />
              </span>
              <span className="text-neutral-400">: </span>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-500 underline underline-offset-2 hover:text-sky-600 transition-colors touch-manipulation"
              >
                <DecryptedText
                  text={`"resume.pdf"`}
                  animateOn="view"
                  sequential
                  revealDirection="start"
                  speed={40}
                  useOriginalCharsOnly
                />
              </a>
              <span className="text-neutral-400">,</span>
              <br />
              <span className="text-neutral-400">]</span>
            </div>

            <motion.blockquote
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="italic text-xs md:text-base text-neutral-600 mt-4 break-words"
            >
              &ldquo;An idea 💡 can never live freely forever in my head 🧠.&rdquo;
            </motion.blockquote>
          </div>
        </div>
      </div>

    </section>
  );
}
