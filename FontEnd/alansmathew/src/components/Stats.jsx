import { motion } from 'framer-motion';
import { Briefcase, Smartphone, Timer, CheckCircle } from 'lucide-react';

const STATS = [
  { value: '4+', label: 'Years as a Software Developer', icon: Briefcase },
  { value: '11+', label: 'Years iOS & macOS Experience', icon: Smartphone },
  { value: '78,840+', label: 'Hours Invested in Craft', icon: Timer },
  { value: '99.7%', label: 'Deployment Reliability', icon: CheckCircle },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

export default function Stats() {
  return (
    <section className="py-24 md:py-32 px-6">
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      >
        <motion.p
          variants={fadeUp}
          className="font-mono text-[11px] tracking-[0.2em] uppercase text-neutral-400 font-semibold mb-12"
        >
          &mdash; By the Numbers
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-xl border border-neutral-200 hover:border-neutral-300 transition-colors group"
              variants={fadeUp}
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
            >
              <stat.icon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-600 transition-colors mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950 mb-2">
                {stat.value}
              </div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
