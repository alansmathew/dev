import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, GitFork, Link2, Download } from 'lucide-react';
import resumePdf from '../assets/Alan Mathew Resume_Software Developer.pdf';

const CONTACTS = [
  { icon: Mail, label: 'Email', value: 'alansmathew008@gmail.com', href: 'mailto:alansmathew008@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+1.226.753.6404', href: 'tel:+12267536404' },
  { icon: Link2, label: 'LinkedIn', value: 'linkedin.com/in/alansmathew', href: 'https://linkedin.com/in/alansmathew' },
  { icon: GitFork, label: 'GitHub', value: 'github.com/alansmathew', href: 'https://github.com/alansmathew' },
  { icon: MapPin, label: 'Location', value: 'Toronto, Canada', href: null },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-neutral-50">
      <motion.div
        className="max-w-2xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      >
        <motion.p
          variants={fadeUp}
          className="font-mono text-[11px] tracking-[0.2em] uppercase text-neutral-400 font-semibold mb-12"
        >
          &mdash; Contact
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="text-2xl md:text-3xl font-extrabold text-neutral-950 mb-8"
        >
          Let&apos;s connect.
        </motion.h2>

        <div className="space-y-4 mb-10">
          {CONTACTS.map((item) => (
            <motion.div
              key={item.label}
              className="flex items-center gap-4 group"
              variants={fadeUp}
            >
              <div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center shrink-0 group-hover:border-neutral-300 transition-colors">
                <item.icon className="w-4 h-4 text-neutral-500" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-0.5">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-sm font-medium text-neutral-800 hover:text-neutral-950 transition-colors truncate block"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-neutral-800 truncate">{item.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.a
          variants={fadeUp}
          href={resumePdf}
          download
          className="inline-flex items-center gap-2.5 px-6 py-3 bg-neutral-950 text-white text-sm font-semibold rounded-lg hover:bg-neutral-800 transition-colors"
        >
          <Download className="w-4 h-4" />
          Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
}
