import { motion, useReducedMotion } from 'framer-motion';
import { Link2, GitMerge, Mail, Phone, MapPin, GitFork, User } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const staggerContainerFast = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
};

const CONTACT_DATA = [
  { key: 'email', label: 'email', value: 'alansmathew008@gmail.com', icon: Mail },
  { key: 'github', label: 'github', value: 'github.com/alansmathew', icon: GitFork },
  { key: 'linkedin', label: 'linkedin', value: 'linkedin.com/in/alansmathew', icon: User },
  { key: 'location', label: 'location', value: 'Toronto, Canada', icon: MapPin },
  { key: 'phone', label: 'phone', value: '+1.226.753.6404', icon: Phone },
];

const EXPERIENCE_DATA = [
  { year: 'Today', role: 'Lead iOS Developer', company: 'Roomvu — Vancouver, BC, Canada' },
  { year: '2024', role: 'Lead Software Developer | iOS', company: 'Self employed FoodARomma — Waterloo, ON, Canada' },
  { year: '2023', role: 'Software Developer | Researcher', company: 'Smart Centre Applied Research — Cambridge, ON, Canada' },
  { year: '2022', role: 'Lead Software Developer | iOS', company: 'Self employed Penny — Waterloo, ON, Canada' },
  { year: '2021', role: 'iOS Developer | Flutter Developer', company: 'Innovation Incubator Advisory — Trivandrum, Kerala, India' },
  { year: '2020', role: 'Flutter Developer | Web Developer', company: 'Self Employed Find — Kanjirapally, Kerala, India' },
  { year: '2019', role: 'iOS Developer', company: '2Airport Driver & 2Airport — Trivandrum, Kerala, India' },
  { year: '2018', role: '', company: '', onlyYear: true },
];

const LANGUAGES_DATA = [
  { name: 'Objective-C', level: 'Intermediate' },
  { name: 'Swift, UIKit', level: 'Expert' },
  { name: 'SwiftUI', level: 'Professional' },
  { name: 'Python', level: 'Expert' },
  { name: 'PHP', level: 'Expert' },
  { name: 'SQL', level: 'Expert' },
  { name: 'C#', level: 'Professional' },
  { name: 'Java', level: 'Professional' },
  { name: 'C | C++', level: 'Expert' },
  { name: 'Flutter', level: 'Expert' },
  { name: 'JavaScript', level: 'Expert' },
  { name: 'VB', level: 'Intermediate' },
  { name: 'Dart', level: 'Expert' },
];

const VALUES_DATA = [
  'Continuous learner',
  'Thrive on problem solving',
  'Moderate perfectionist',
  'Client focused',
  'Curious and adventurous',
  'Performance optimizer',
  'Code debugging junkie',
  'Understand full scope',
  'Need to find root cause',
  'Independent',
  'Love teaching & sharing',
  'Avid rule abider & challenger',
  'Open source proponent',
];

const SOCIAL_LINKS = [
  {
    label: 'Skills & Experience',
    href: 'https://bit.ly/41VxeoP',
    icon: Link2,
    rotate: 5,
  },
  {
    label: 'Hobbies & Passion',
    href: 'https://bit.ly/3RN2H8a',
    icon: GitMerge,
    rotate: -5,
  },
];

const SKILLS_LEFT = [
  'Software Developer',
  'Bug Hacker',
  'Software Architect',
  'Security Analyst',
];

const SKILLS_RIGHT = [
  { label: 'Agile Methodology', offset: 'pl-[62px]' },
  { label: 'Creative Solutions', offset: 'pl-[76px]' },
  { label: 'Rock Solid Implementations', offset: 'pl-[38px]' },
];

export default function ResumePage() {
  const _prefersReducedMotion = useReducedMotion();
  const viewport = { once: true, margin: '-50px' };

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-950 font-sans antialiased flex justify-center py-12 px-4 md:px-8 selection:bg-primary/30">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <main id="main-content" className="w-full max-w-[900px] mx-auto" role="main">
        <motion.article
          className="bg-white/80 backdrop-blur-xl backdrop-saturate-150 shadow-2xl rounded-2xl border border-neutral-200/50 overflow-hidden relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" aria-hidden="true" />

          <div className="relative p-6 md:p-10 lg:p-12 flex flex-col gap-8 md:gap-10 lg:gap-12 min-h-[1000px]">

            {/* ================= HEADER SECTION ================= */}
            <header className="relative">
              <motion.div
                className="grid grid-cols-12 gap-6 md:gap-8 items-start pb-8 md:pb-10 border-b border-neutral-200/60"
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={staggerContainer}
              >
                {/* QR Code Graphic */}
                <motion.div
                  className="col-span-12 md:col-span-3 flex justify-center md:justify-start"
                  variants={fadeInUp}
                >
                  <div className="w-20 md:w-24 h-20 md:h-24 border-4 border-neutral-900 p-1.5 flex flex-col justify-between relative bg-white/50 backdrop-blur-sm shrink-0 rounded-lg shadow-lg shadow-neutral-900/5">
                    <div className="flex justify-between h-[30%]">
                      <div className="w-[30%] h-full border-2 border-neutral-900 bg-neutral-900 rounded-sm" />
                      <div className="w-[30%] h-full border-2 border-neutral-900 bg-neutral-900 rounded-sm" />
                    </div>
                    <div className="flex justify-between h-[25%] my-1">
                      <div className="w-[15%] h-full bg-neutral-900 rounded-sm" />
                      <div className="w-[45%] h-full bg-neutral-900 rounded-sm" />
                      <div className="w-[15%] h-full bg-neutral-900 rounded-sm" />
                    </div>
                    <div className="flex justify-between h-[30%]">
                      <div className="w-[30%] h-full border-2 border-neutral-900 bg-neutral-900 rounded-sm" />
                      <div className="w-[45%] h-full flex flex-col justify-between">
                        <div className="w-full h-[40%] bg-neutral-900 rounded-sm" />
                        <div className="w-[60%] h-[40%] bg-neutral-900 rounded-sm" />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* User Information */}
                <motion.div
                  className="col-span-12 md:col-span-9 space-y-3 md:space-y-4"
                  variants={staggerContainerFast}
                >
                  <motion.h1
                    className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 leading-[1.1]"
                    variants={fadeInUp}
                  >
                    Alan Sebastian Mathew
                  </motion.h1>
                  <motion.p
                    className="text-neutral-500 font-mono text-xs md:text-[11px] tracking-[0.2em] font-semibold uppercase"
                    variants={fadeInUp}
                  >
                    // SOFTWARE CRAFTSMANSHIP
                  </motion.p>

                  <motion.div
                    className="font-mono text-xs md:text-[12px] text-neutral-800 bg-neutral-100/50 p-3 md:p-4 rounded-xl border border-neutral-200/50 leading-relaxed mt-4"
                    variants={fadeInUp}
                    role="region"
                    aria-label="Contact information"
                  >
                    {CONTACT_DATA.map((item, idx) => (
                      <motion.div
                        key={item.key}
                        className="flex items-baseline gap-2 md:gap-3 pl-6"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + idx * 0.05, duration: 0.4 }}
                      >
                        <span className="text-neutral-500 font-medium">var</span>{' '}
                        <span className="text-neutral-500">{item.label}</span>
                        <span className="text-neutral-500">:</span>{' '}
                        <motion.span
                          className="text-primary font-medium"
                          whileHover={{ scale: 1.02 }}
                        >
                          {item.value}
                        </motion.span>
                        {idx < CONTACT_DATA.length - 1 && <span className="text-neutral-500">,</span>}
                      </motion.div>
                    ))}
                    <motion.span
                      className="block pl-6 text-neutral-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      ]
                    </motion.span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </header>

            {/* ================= TAGLINE / CALLOUT ================= */}
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeInUp}
            >
              <div className="bg-neutral-100/60 backdrop-blur-sm rounded-2xl py-5 md:py-6 px-6 md:px-8 text-center border border-neutral-200/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" aria-hidden="true" />
                <motion.blockquote
                  className="relative z-10 text-base md:text-lg lg:text-xl font-medium italic text-neutral-800 tracking-wide leading-relaxed max-w-3xl mx-auto"
                >
                  &ldquo;Some people code to live, I live to code.&rdquo;
                </motion.blockquote>
              </div>
            </motion.div>

            {/* ================= TWO-COLUMN GRID ================= */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 flex-1 items-start"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={staggerContainer}
            >
              {/* LEFT COLUMN: Skills Dendrogram & Timeline */}
              <motion.div
                className="lg:col-span-7 flex flex-col gap-8 lg:gap-10 pr-4 lg:pr-6 border-r border-neutral-200/50"
                variants={fadeInUp}
              >
                {/* Skills Tree (Dendrogram) */}
                <motion.section
                  className="relative h-[280px] md:h-[320px] flex items-center justify-center"
                  variants={fadeInUp}
                  aria-label="Skills visualization"
                >
                  {/* Left branches */}
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-right pr-4 w-[45%] z-10"
                    variants={staggerContainerFast}
                  >
                    {SKILLS_LEFT.map((skill, _idx) => (
                      <motion.div
                        key={skill}
                        className="flex items-center justify-end gap-2 h-14 md:h-16"
                        variants={slideInLeft}
                      >
                        <span className="text-xs md:text-[12px] font-semibold text-neutral-700 whitespace-nowrap">{skill}</span>
                        <span className="w-3 h-3 rounded-full bg-neutral-400 ring-2 ring-white flex-shrink-0" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* SVG Connection Lines */}
                  <motion.svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 1, pathLength: 1, transition: { delay: 0.4, duration: 1.2, ease: [0.4, 0, 0.2, 1] } }}
                    role="img"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient id="trunkGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#e5e5e5" />
                        <stop offset="50%" stopColor="#d4d4d4" />
                        <stop offset="100%" stopColor="#a3a3a3" />
                      </linearGradient>
                    </defs>
                    <g stroke="url(#trunkGradient)" strokeLinecap="round" fill="none">
                      <path d="M 220,16 L 220,290" strokeWidth="2.5" />
                      <path d="M 175,16 H 220" strokeWidth="1.5" />
                      <path d="M 175,88 H 220" strokeWidth="1.5" />
                      <path d="M 175,160 H 225" strokeWidth="1.5" />
                      <path d="M 175,232 H 230" strokeWidth="1.5" />
                      <path d="M 220,48 H 280" strokeWidth="1.5" />
                      <path d="M 225,112 H 295" strokeWidth="1.5" />
                      <path d="M 230,184 H 265" strokeWidth="1.5" />
                    </g>
                  </motion.svg>

                  {/* Right branches */}
                  <motion.div
                    className="absolute right-0 top-0 bottom-0 flex flex-col justify-around text-left pl-4 w-[45%] z-10"
                    variants={staggerContainerFast}
                  >
                    {SKILLS_RIGHT.map((skill, _idx) => (
                      <motion.div
                        key={skill.label}
                        className={`flex items-center justify-start gap-2 h-14 md:h-16 ${skill.offset}`}
                        variants={slideInRight}
                      >
                        <span className="w-3 h-3 rounded-full bg-neutral-400 ring-2 ring-white flex-shrink-0" />
                        <span className="text-xs md:text-[12px] font-semibold text-neutral-700 whitespace-nowrap">{skill.label}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.section>

                {/* Experience Timeline */}
                <motion.section
                  className="space-y-5 md:space-y-6 relative pl-12 md:pl-16"
                  variants={staggerContainerFast}
                  aria-label="Work experience"
                >
                  <motion.div
                    className="absolute left-[2.5rem] md:left-[3.25rem] top-2 bottom-2 w-[2px] bg-neutral-200"
                    initial={{ scaleY: 0, originY: 0 }}
                    animate={{ scaleY: 1, transition: { delay: 0.3, duration: 0.8, ease: [0.4, 0, 0.2, 1] } }}
                    aria-hidden="true"
                  />

                  {EXPERIENCE_DATA.map((item, idx) => (
                    <motion.article
                      key={idx}
                      className="relative group"
                      variants={fadeInUp}
                      whileHover={{ x: 4, transition: { duration: 0.2 } }}
                    >
                      <time
                        className="absolute -left-10 md:-left-16 top-1 w-10 md:w-12 text-right font-semibold text-sm md:text-[13px] text-neutral-500 select-none"
                        dateTime={item.year === 'Today' ? '2025' : item.year}
                      >
                        {item.year}
                      </time>

                      {!item.onlyYear && (
                        <motion.div
                          className="pl-4 md:pl-5 pb-4 md:pb-5 border-l-2 border-transparent group-hover:border-primary/50 transition-colors duration-300"
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.06 }}
                        >
                          <h4 className="text-sm md:text-[14.5px] font-bold text-neutral-950 leading-tight">
                            {item.role}
                          </h4>
                          <p className="text-xs md:text-[12px] text-neutral-600 font-medium leading-relaxed mt-1">
                            {item.company}
                          </p>
                        </motion.div>
                      )}

                      <motion.div
                        className="absolute left-[2.5rem] md:left-[3.25rem] top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-white border-2 border-neutral-300 group-hover:border-primary group-hover:bg-primary group-hover:scale-110 transition-all duration-300"
                        aria-hidden="true"
                      />
                    </motion.article>
                  ))}
                </motion.section>
              </motion.div>

              {/* RIGHT COLUMN: Languages & Values */}
              <motion.div
                className="lg:col-span-5 flex flex-col gap-8 lg:gap-10 pl-2 lg:pl-4"
                variants={fadeInUp}
              >
                {/* Programming Languages */}
                <motion.section
                  className="flex"
                  variants={staggerContainerFast}
                  aria-label="Programming languages"
                >
                  <motion.div
                    className="w-10 flex-shrink-0 flex items-center justify-center select-none relative"
                    variants={slideInLeft}
                  >
                    <span className="absolute transform -rotate-90 origin-center whitespace-nowrap text-neutral-500 font-bold tracking-[0.25em] text-[10px] uppercase">
                      Programming Languages
                    </span>
                  </motion.div>

                  <motion.div
                    className="flex-1 space-y-1.5 border-l border-neutral-200/50 pl-4"
                    variants={staggerContainerFast}
                  >
                    {LANGUAGES_DATA.map((lang, idx) => (
                      <motion.div
                        key={idx}
                        className="flex justify-between items-baseline text-sm group py-1.5 relative"
                        variants={slideInRight}
                        whileHover={{ x: 4, transition: { duration: 0.2 } }}
                      >
                        <span className="font-bold text-neutral-900 tracking-tight pr-4">{lang.name}</span>
                        <span className="text-neutral-500 text-xs font-semibold whitespace-nowrap">
                          {lang.level}
                        </span>
                        <motion.div
                          className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-px bg-primary group-hover:w-full transition-all duration-300"
                          aria-hidden="true"
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.section>

                {/* Core Values */}
                <motion.section
                  className="flex"
                  variants={staggerContainerFast}
                  aria-label="Core values"
                >
                  <motion.div
                    className="w-10 flex-shrink-0 flex items-center justify-center select-none relative"
                    variants={slideInLeft}
                  >
                    <span className="absolute transform -rotate-90 origin-center whitespace-nowrap text-neutral-500 font-bold tracking-[0.25em] text-[10px] uppercase">
                      Core Values
                    </span>
                  </motion.div>

                  <motion.div
                    className="flex-1 text-right space-y-2 border-l border-neutral-200/50 pr-2 pl-4"
                    variants={staggerContainerFast}
                  >
                    {VALUES_DATA.map((value, idx) => (
                      <motion.div
                        key={idx}
                        className="text-sm md:text-[13px] font-semibold text-neutral-850 tracking-tight relative group py-0.5"
                        variants={slideInRight}
                        whileHover={{ x: -4, transition: { duration: 0.2 } }}
                      >
                        {value}
                        <motion.div
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-px bg-accent group-hover:w-full transition-all duration-300"
                          aria-hidden="true"
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.section>

                {/* Social Links */}
                <motion.section
                  className="mt-auto pt-6 border-t border-neutral-200/50 space-y-4"
                  variants={staggerContainerFast}
                  aria-label="Social links"
                >
                  {SOCIAL_LINKS.map((link, idx) => (
                    <motion.a
                      key={idx}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center text-center group cursor-pointer p-4 rounded-2xl bg-neutral-50/50 border border-neutral-200/50 hover:bg-neutral-100/50 hover:border-primary/20 transition-all duration-300"
                      variants={fadeInUp}
                      whileHover={{ scale: 1.02, y: -2, transition: { duration: 0.2 } }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        className="p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-neutral-200/50 shadow-sm shadow-neutral-900/5 group-hover:shadow-md group-hover:shadow-primary/10 transition-all duration-300"
                        whileHover={{ scale: 1.15, rotate: link.rotate, transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] } }}
                      >
                        <link.icon className="w-5 h-5 text-neutral-900 fill-current stroke-none" aria-hidden="true" />
                      </motion.div>
                      <div className="mt-3">
                        <p className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-900">
                          {link.label}
                        </p>
                        <span className="text-xs text-neutral-500 hover:text-primary font-semibold mt-1 block transition-colors">
                          {link.href}
                        </span>
                      </div>
                    </motion.a>
                  ))}
                </motion.section>
              </motion.div>
            </motion.div>

            {/* ================= BOTTOM METRICS BAR ================= */}
            <motion.footer
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-neutral-200/50"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={staggerContainerFast}
            >
              <MetricCard
                value="4+"
                label="Years as a Software Developer"
                icon="💼"
                delay={0}
              />
              <MetricCard
                value="11+"
                label="Years iOS & macOS Experience"
                icon="📱"
                delay={1}
              />
              <MetricCard
                value="78,840+"
                label="Hours Invested in Craft"
                icon="⏱️"
                delay={2}
              />
              <MetricCard
                value="99.7%"
                label="Deployment Reliability"
                icon="✅"
                delay={3}
              />
            </motion.footer>

          </div>
        </motion.article>
      </main>
    </div>
  );
}

function MetricCard({ value, label, icon, delay }) {
  return (
    <motion.div
      className="text-center p-4 md:p-6 bg-neutral-50/50 backdrop-blur-sm rounded-2xl border border-neutral-200/50 hover:bg-neutral-100/50 hover:border-primary/20 transition-all duration-300 group"
      variants={fadeInUp}
      style={{ transitionDelay: `${delay * 0.08}s` }}
      whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="text-2xl md:text-3xl mb-2"
        whileHover={{ scale: 1.1, rotate: 3, transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] } }}
        aria-hidden="true"
      >
        {icon}
      </motion.div>
      <div className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950 leading-none">
        {value}
      </div>
      <p className="text-[10px] font-bold leading-normal text-neutral-500 mt-2 uppercase tracking-wider">
        {label}
      </p>
    </motion.div>
  );
}