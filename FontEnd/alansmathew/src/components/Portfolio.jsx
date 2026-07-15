import React from 'react';
import { 
  Terminal, Mail, Phone, Code2, Shield, Server, Smartphone, 
  Binary, Cpu, Award, Hourglass, Layers, CheckCircle2 
} from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-mono selection:bg-emerald-500 selection:text-slate-950">
      {/* Top Border Accent */}
      <div className="h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-600" />

      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 lg:px-8">
        
        {/* HEADER SECTION */}
        <header className="border-b border-slate-800 pb-8 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-2">
                Alan Sebastian Mathew
              </h1>
              <p className="text-emerald-400 font-semibold tracking-widest text-xs uppercase flex items-center gap-2">
                <Terminal className="w-4 h-4 animate-pulse" /> // SOFTWARE CRAFTMANSHIP
              </p>
            </div>
            
            {/* Interactive Swift-style contact block */}
            <div className="w-full md:w-auto bg-slate-900 border border-slate-800 rounded-lg p-4 font-mono text-xs shadow-xl">
              <span className="text-purple-400">var</span> <span className="text-blue-400">coordinates</span>: [<span className="text-teal-400">String</span>:<span className="text-teal-400">String</span>] = [
              <div className="pl-4 mt-1">
                <span className="text-amber-300">"email"</span>: <a href="mailto:alansmathew008@gmail.com" className="text-emerald-400 hover:underline">"alansmathew008@gmail.com"</a>,
                <br />
                <span className="text-amber-300">"phone"</span>: <a href="tel:+12267536404" className="text-emerald-400 hover:underline">"+1.226.753.6404"</a>
              </div>
              ]
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <blockquote className="text-slate-400 italic text-sm border-l-2 border-emerald-500 pl-4 py-1">
              "Some people code to live, I live to code."
            </blockquote>
            <span className="bg-emerald-500/10 text-emerald-400 text-xs px-3 py-1.5 rounded-full border border-emerald-500/20 font-semibold tracking-wide">
              Software Developer
            </span>
          </div>
        </header>

        {/* METRICS DASHBOARD */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {[
            { value: "04+", label: "Years as a software developer", icon: Hourglass },
            { value: "011+", label: "Years usage in iOS and macOS", icon: Smartphone },
            { value: "78840+", label: "Hours invested in improving my trade", icon: Cpu },
            { value: "99.7%", label: "Reliability average of live commercial deployments", icon: Award },
          ].map((stat, idx) => (
            <div key={idx} className="bg-slate-900/50 border border-slate-800/80 p-5 rounded-xl hover:border-slate-700 transition-all group">
              <div className="flex justify-between items-start mb-3">
                <span className="text-2xl md:text-3xl font-bold text-white group-hover:text-emerald-400 transition-colors">{stat.value}</span>
                <stat.icon className="w-5 h-5 text-slate-500 group-hover:text-emerald-500 transition-colors" />
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* MAIN SPLIT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN: EXPERIENCES & CHRONOLOGY */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <h2 className="text-xl font-bold text-white mb-8 flex items-center gap-2 tracking-wide uppercase text-sm border-b border-slate-800 pb-2">
                <Layers className="w-4 h-4 text-emerald-500" /> Experience Timeline
              </h2>
              
              <div className="relative border-l border-slate-800 pl-6 space-y-10 ml-2">
                {[
                  { year: "Today", role: "Lead iOS Developer", company: "Roomvu", loc: "Vancouver, British Columbia, Canada" },
                  { year: "2024", role: "Lead Software Developer | iOS", company: "Self employed FoodARomma", loc: "Waterloo, Ontario, Canada" },
                  { year: "2023", role: "Software Developer | Researcher", company: "Smart Centre Applied Research", loc: "Cambridge, Ontario, Canada" },
                  { year: "2022", role: "Lead Software Developer | iOS", company: "Self employed Penny", loc: "Waterloo, Ontario, Canada" },
                  { year: "2021", role: "iOS Developer | Flutter Developer", company: "Innovation Incubator Advisory", loc: "Trivandram, Kerala, India" },
                  { year: "2020", role: "Flutter Developer | Web Developer", company: "Self Employed Find", loc: "Kanjirapally, Kerala, India" },
                  { year: "2019", role: "iOS Developer", company: "2Airport Driver & 2Airport", loc: "Trivandram, Kerala, India" },
                ].map((job, idx) => (
                  <div key={idx} className="relative group">
                    {/* Timeline node */}
                    <div className="absolute -left-[31px] top-1.5 w-2 h-2 rounded-full bg-slate-800 border-2 border-slate-900 group-hover:bg-emerald-500 group-hover:border-emerald-900 transition-all ring-4 ring-slate-950" />
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <h3 className="text-base font-bold text-slate-200 group-hover:text-white transition-colors">{job.role}</h3>
                      <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10 self-start sm:self-auto">{job.year}</span>
                    </div>
                    <p className="text-xs text-slate-400 font-medium">{job.company} <span className="text-slate-600">|</span> {job.loc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* PROJECTS SECTION */}
            <div className="bg-slate-900/30 border border-slate-800/60 rounded-xl p-6">
              <h3 className="text-sm font-bold tracking-wide text-white mb-4 uppercase">
                Featured Engineering Implementations
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                Implementing an Undetectable Backdoor by Applying Veil Framework with Kali Linux and Metasploit targeted on Windows Machine (Research Paper), Dev as an open-source personal webpage using HTML, CSS, and JS.
              </p>
              <p className="text-slate-400 text-xs leading-relaxed">
                <strong className="text-slate-300">getSchedule:</strong> A Python algorithm to extract maximum efficiency with college course schedules without violating strict parameters. <strong className="text-slate-300">Auto_Complaint_Register:</strong> Automated background script targeting system outages to automatically ping ISPs. Specialized implementation of mining frameworks: Apriori, Sequence_pattern, Golomb_Code, Playfair_cipher, Elias_Delta, Elias_Gamma, and <strong className="text-slate-300">tFlix</strong> (BitTorrent framework stream parsing engine).
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: ARCHITECTURAL SKILLS & VALUES */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* TECH MATRIX */}
            <div>
              <h2 className="text-xl font-bold text-white mb-8 flex items-center gap-2 tracking-wide uppercase text-sm border-b border-slate-800 pb-2">
                <Binary className="w-4 h-4 text-emerald-500" /> Domain Capabilities
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Apple iOS / macOS Experience",
                    icon: Smartphone,
                    skills: "CoreML, RESTFUL API, In-app payment processing, Stripe, SceneKit, ARKit, SwiftyJson, Alamofire, Google Maps, Mapbox, MapKit, Core Location, SQLite, Core Data, UserDefaults, Custom UI/UX, Core Animation, App Store Deployments, DGCharts, User Notifications."
                  },
                  {
                    title: "Backend Server Environment",
                    icon: Server,
                    skills: "PHP, MongoDB, MariaDB, MySQL, Optimization, Docker Containers, Server Replications, Linux Administration, Apache Local Hosts, Python3, OAuth, HTTP/HTTPS Custom API, REST API, AWS Lambda, S3, IAM, RDS, SageMaker, EC2, CloudWatch, API Gateway, Azure, GCP."
                  },
                  {
                    title: "Web & Cyber Security Matrix",
                    icon: Shield,
                    skills: "HTML, JavaScript, TypeScript, jQuery, CSS, XML, Regex, Ajax, UI/UX, WordPress, Bootstrap, JSON, Metasploit, Nmap, Wireshark, sqlmap, John the Ripper, OpenSSL, ARP Port Scanning, Veil Framework, Reverse TCP, Kali Linux."
                  },
                  {
                    title: "IT & Specialized Technologies",
                    icon: Code2,
                    skills: "Machine Learning, Computer Vision, YOLO, SSD Mobilenet, Model Weight Conversion, Blender, AI 3D Model Conversion, Hackintosh Engineering, Advanced TCP/IP, IPv4/IPv6, NAS Systems, Network Security, QoS Prioritization, LanChat, VPN architectures."
                  }
                ].map((cat, idx) => (
                  <div key={idx} className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl">
                    <h3 className="text-xs font-bold text-white flex items-center gap-2 mb-2">
                      <cat.icon className="w-3.5 h-3.5 text-emerald-400" /> {cat.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed font-sans">{cat.skills}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CORE VALUE PILLS */}
            <div>
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2 tracking-wide uppercase text-sm border-b border-slate-800 pb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Core Principles
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Continuous learner", "Thrive on problem solving", "Moderate perfectionist",
                  "Client focused", "Curious and adventurous", "Performance optimizer",
                  "Code debugging junkie", "Understand full scope", "Need to find root cause",
                  "Independent", "Love teaching & sharing", "Avid rule abider & challenger",
                  "Open source proponent", "Programming Languages", "Bug Hacker",
                  "Agile Methodology", "Creative Solutions", "Software Architect",
                  "Rock Solid Implementations", "Security Analyst"
                ].map((value, idx) => (
                  <span key={idx} className="text-xs bg-slate-900 border border-slate-800 px-3 py-1.5 rounded text-slate-300 hover:border-emerald-500/40 hover:text-white transition-colors">
                    {value}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
        
        {/* FOOTER */}
        <footer className="mt-20 pt-8 border-t border-slate-900 text-center text-xs text-slate-600">
          Alan Sebastian Mathew &copy; {new Date().getFullYear()} &bull; Executing with Absolute Precision
        </footer>

      </div>
    </div>
  );
}