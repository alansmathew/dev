import { motion } from 'framer-motion';
import { Smartphone, Server, Shield, Code2 } from 'lucide-react';

const LANGUAGES = [
  { name: 'Swift, UIKit', level: 'Expert', pct: 95 },
  { name: 'SwiftUI', level: 'Professional', pct: 85 },
  { name: 'Python', level: 'Expert', pct: 92 },
  { name: 'PHP', level: 'Expert', pct: 90 },
  { name: 'JavaScript', level: 'Expert', pct: 90 },
  { name: 'C | C++', level: 'Expert', pct: 90 },
  { name: 'Flutter', level: 'Expert', pct: 90 },
  { name: 'Dart', level: 'Expert', pct: 90 },
  { name: 'SQL', level: 'Expert', pct: 90 },
  { name: 'Java', level: 'Professional', pct: 82 },
  { name: 'C#', level: 'Professional', pct: 82 },
  { name: 'Objective-C', level: 'Intermediate', pct: 65 },
  { name: 'VB', level: 'Intermediate', pct: 60 },
];

const DOMAINS = [
  {
    icon: Smartphone,
    title: 'Apple iOS / macOS',
    skills: ['CoreML', 'ARKit', 'SceneKit', 'Core Data', 'Core Animation', 'Alamofire', 'SwiftyJson', 'MapKit', 'Stripe', 'App Store'],
  },
  {
    icon: Server,
    title: 'Backend & Cloud',
    skills: ['PHP', 'Python3', 'Docker', 'AWS', 'Azure', 'GCP', 'REST API', 'OAuth', 'MongoDB', 'MySQL'],
  },
  {
    icon: Shield,
    title: 'Web & Security',
    skills: ['JavaScript', 'TypeScript', 'HTML/CSS', 'Metasploit', 'Wireshark', 'Nmap', 'Kali Linux', 'OpenSSL', 'WordPress'],
  },
  {
    icon: Code2,
    title: 'Specialized Tech',
    skills: ['Machine Learning', 'Computer Vision', 'YOLO', 'Blender', 'Hackintosh', 'TCP/IP', 'NAS', 'VPN'],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

export default function Skills() {
  return (
    <section className="py-24 md:py-32 px-6">
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
      >
        <motion.p
          variants={fadeUp}
          className="font-mono text-[11px] tracking-[0.2em] uppercase text-neutral-400 font-semibold mb-12"
        >
          03 &mdash; Skills
        </motion.p>

        {/* Languages */}
        <motion.div variants={fadeUp} className="mb-16">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-6">
            Programming Languages
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
            {LANGUAGES.map((lang) => (
              <div key={lang.name} className="flex items-center gap-4">
                <span className="text-sm font-medium text-neutral-800 w-28 shrink-0">{lang.name}</span>
                <div className="flex-1 h-1 bg-neutral-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-neutral-900 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
                  />
                </div>
                <span className="text-[11px] font-mono text-neutral-400 w-24 text-right shrink-0">{lang.level}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Domains */}
        <motion.div variants={fadeUp}>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-6">
            Domain Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DOMAINS.map((domain) => (
              <motion.div
                key={domain.title}
                className="p-5 rounded-xl border border-neutral-200 hover:border-neutral-300 transition-colors"
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <domain.icon className="w-4 h-4 text-neutral-500" />
                  <h4 className="text-sm font-semibold text-neutral-900">{domain.title}</h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {domain.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-medium px-2.5 py-1 bg-neutral-50 text-neutral-600 rounded-md border border-neutral-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
