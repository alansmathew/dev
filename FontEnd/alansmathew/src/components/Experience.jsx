import { useRef, useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const EXPERIENCE = [
  {
    year: 'Today', role: 'Lead iOS Developer', company: 'Roomvu', location: 'Vancouver, BC, Canada',
    details: [
      'Leading iOS architecture and development for AI-powered real estate video platform',
      'Driving technical decisions across mobile and backend integration',
      'Mentoring junior developers and establishing code quality standards',
    ],
  },
  {
    year: '2024', role: 'Lead Software Developer | iOS', company: 'FoodARomma', location: 'Waterloo, ON, Canada',
    details: [
      'Built augmented reality food visualization app from concept to launch',
      'Implemented CoreML-powered nutrition analysis and 3D food rendering',
      'Designed scalable architecture with real-time AR overlay pipeline',
    ],
  },
  {
    year: '2023', role: 'Software Developer | Researcher', company: 'Smart Centre Applied Research', location: 'Cambridge, ON, Canada',
    details: [
      'Conducted applied research in computer vision and machine learning',
      'Developed prototype applications using YOLO and SSD MobileNet',
      'Published findings on real-time object detection for smart environments',
    ],
  },
  {
    year: '2022', role: 'Lead Software Developer | iOS', company: 'Penny', location: 'Waterloo, ON, Canada',
    details: [
      'Architected personal finance tracking app with SwiftUI and Core Data',
      'Implemented bank-level encryption for sensitive financial data',
      'Optimized app performance reducing load times by 40%',
    ],
  },
  {
    year: '2021', role: 'iOS Developer | Flutter Developer', company: 'Innovation Incubator Advisory', location: 'Trivandrum, Kerala, India',
    details: [
      'Developed cross-platform mobile applications using Flutter and Dart',
      'Built RESTful API integrations with third-party payment gateways',
      'Delivered 3 client projects on time with 98% client satisfaction',
    ],
  },
  {
    year: '2020', role: 'Flutter Developer | Web Developer', company: 'Find', location: 'Kanjirapally, Kerala, India',
    details: [
      'Created location-based discovery platform with real-time updates',
      'Integrated Google Maps API with custom clustering algorithms',
      'Built responsive web dashboard for admin and analytics',
    ],
  },
  {
    year: '2019', role: 'iOS Developer', company: '2Airport Driver & 2Airport', location: 'Trivandrum, Kerala, India',
    details: [
      'Developed ride-hailing iOS application with real-time GPS tracking',
      'Implemented dual-app system for drivers and passengers',
      'Integrated in-app payments and automated fare calculation',
    ],
  },
];

function ExperienceItem({ job, isActive, prefersReduced }) {
  const dur = prefersReduced ? 0 : 0.4;

  return (
    <div className="relative pl-8">
      {/* Dot */}
      <motion.div
        className="absolute left-0 top-[7px] w-[15px] h-[15px] rounded-full border-2 z-10"
        animate={{
          scale: isActive ? 1.15 : 1,
          backgroundColor: isActive ? '#171717' : '#ffffff',
          borderColor: isActive ? '#171717' : '#d4d4d4',
        }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        aria-hidden="true"
      />

      {/* Card */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
          <motion.h3
            className="text-base font-semibold"
            animate={{ color: isActive ? '#171717' : '#737373' }}
            transition={{ duration: 0.25 }}
          >
            {job.role}
          </motion.h3>
          <motion.span
            className="text-xs font-mono font-semibold"
            animate={{ color: isActive ? '#171717' : '#a3a3a3' }}
            transition={{ duration: 0.25 }}
          >
            {job.year}
          </motion.span>
        </div>
        <motion.p
          className="text-sm mt-1"
          animate={{ color: isActive ? '#525252' : '#a3a3a3' }}
          transition={{ duration: 0.25 }}
        >
          {job.company} &mdash; {job.location}
        </motion.p>

        {/* Details accordion */}
        <motion.div
          initial={false}
          animate={{
            height: isActive ? 'auto' : 0,
            opacity: isActive ? 1 : 0,
          }}
          transition={{
            height: { duration: dur, ease: [0.4, 0, 0.2, 1] },
            opacity: { duration: dur * 0.75, ease: 'easeOut' },
          }}
          style={{ overflow: 'hidden' }}
        >
          <ul className="mt-3 space-y-1.5">
            {job.details.map((detail, i) => (
              <li
                key={i}
                className="text-sm text-neutral-600 flex items-start gap-2"
              >
                <span className="text-neutral-300 mt-1.5 text-xs">-</span>
                {detail}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      itemRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const distance = Math.abs(itemCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = idx;
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linePercent = prefersReduced
    ? '100%'
    : `${((activeIndex + 1) / EXPERIENCE.length) * 100}%`;

  return (
    <section className="py-24 md:py-20 px-6">
      <div ref={containerRef} className="max-w-3xl mx-auto">
        <motion.p
          className="font-mono text-[11px] tracking-[0.2em] uppercase text-neutral-400 font-semibold mb-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
        &mdash; Experience
        </motion.p>

        <div className="relative">
          {/* Background track */}
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px bg-neutral-200"
            aria-hidden="true"
          />

          {/* Animated fill line */}
          <motion.div
            className="absolute left-[7px] top-2 w-px bg-neutral-900 origin-top"
            animate={{ height: linePercent }}
            transition={{ duration: prefersReduced ? 0 : 0.4, ease: [0.4, 0, 0.2, 1] }}
            aria-hidden="true"
          />

          <div className="space-y-10">
            {EXPERIENCE.map((job, idx) => (
              <div
                key={idx}
                ref={(el) => { itemRefs.current[idx] = el; }}
              >
                <ExperienceItem
                  job={job}
                  isActive={activeIndex === idx}
                  prefersReduced={prefersReduced}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
