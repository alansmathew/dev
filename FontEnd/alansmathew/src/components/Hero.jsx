import { motion } from "framer-motion";
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
  return (
    <section className="">
      <div className="mx-auto mt-20">
        <div className="flex gap-8 items-center justify-center">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <QrTransformation size={260} />
          </motion.div>

          <div className="space-y-2">
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-950"
            >
              Alan Sebastian Mathew
            </motion.h1>

            <p className="text-xs uppercase tracking-widest text-gray-500 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5" /> // SOFTWARE CRAFTMANSHIP
            </p>

            <div className="text-xs mt-2 font-mono">
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
              <span className="text-emerald-500">
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
              <span className="text-emerald-500">
                <DecryptedText
                  text={`"+1.226.753.6404"`}
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
              <span className="text-neutral-400">]</span>
            </div>

            <motion.blockquote
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="italic text-base md:text-sm lg:text-sm text-neutral-600 mt-4"
            >
              &ldquo;An idea 💡 can never live freely forever in my head 🧠.&rdquo;
            </motion.blockquote>
          </div>
        </div>
      </div>

    </section>
  );
}
