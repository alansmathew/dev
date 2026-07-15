import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Undetectable Backdoor via Veil Framework',
    description: 'Research paper on implementing an undetectable backdoor using Veil Framework with Kali Linux and Metasploit, targeting Windows machines.',
    tags: ['Security', 'Research', 'Metasploit'],
  },
  {
    title: 'getSchedule',
    description: 'Python algorithm to extract maximum efficiency with college course schedules without violating strict constraints.',
    tags: ['Python', 'Algorithm', 'Optimization'],
  },
  {
    title: 'tFlix',
    description: 'BitTorrent framework stream parsing engine for efficient media streaming and distribution.',
    tags: ['Python', 'Networking', 'Streaming'],
  },
  {
    title: 'Auto Complaint Register',
    description: 'Automated background script targeting system outages to automatically ping ISPs and log complaints.',
    tags: ['Python', 'Automation', 'Networking'],
  },
  {
    title: 'Data Mining Frameworks',
    description: 'Specialized implementations of Apriori, Sequence Pattern mining, Golomb Code, Playfair Cipher, and Elias Delta/Gamma coding.',
    tags: ['Python', 'Cryptography', 'Mining'],
  },
  {
    title: 'Open Source Personal Webpage',
    description: 'Developer portfolio built with HTML, CSS, and JavaScript as an open-source project.',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

export default function Projects() {
  return (
    <section className="py-24 md:py-32 px-6 bg-neutral-50">
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
          04 &mdash; Projects
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <motion.div
              key={project.title}
              className="group p-6 bg-white rounded-xl border border-neutral-200 hover:border-neutral-300 hover:shadow-sm transition-all duration-300"
              variants={fadeUp}
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-base font-semibold text-neutral-900 group-hover:text-neutral-950">
                  {project.title}
                </h3>
                <ExternalLink className="w-4 h-4 text-neutral-300 group-hover:text-neutral-500 transition-colors shrink-0 mt-0.5" />
              </div>
              <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono font-medium px-2 py-0.5 bg-neutral-50 text-neutral-500 rounded border border-neutral-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
