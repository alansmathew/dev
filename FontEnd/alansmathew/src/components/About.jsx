import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <motion.div
        className="max-w-2xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      >
        <motion.p
          variants={fadeUp}
          className="font-mono text-[11px] tracking-[0.2em] uppercase text-neutral-400 font-semibold mb-6"
        >
          01 &mdash; About
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl leading-relaxed text-neutral-700"
        >
          Software craftsman building robust, elegant solutions across mobile and web.
          With deep expertise in iOS development, full-stack engineering, and security research,
          I focus on creating performant applications that solve real problems.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl leading-relaxed text-neutral-700 mt-6"
        >
          From leading iOS development at Roomvu to researching applied AI at Smart Centre,
          I bring a builder&apos;s mindset to every project &mdash; combining clean architecture
          with pragmatic execution.
        </motion.p>
      </motion.div>
    </section>
  );
}
