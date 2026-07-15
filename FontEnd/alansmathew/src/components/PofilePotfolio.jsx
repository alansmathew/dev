import { Terminal } from "lucide-react";
import QrTransformation from "./QrTransformation";

export default function PofilePotfolio() {
  return (
    <div className="min-h-screen bg-[#FCFCFC] font-mono text-sm">
      <div className="max-w-6xl mx-auto px-4 py-8">

        {/* Profile header row */}
        <div className="flex gap-6 items-start mb-16">
          <QrTransformation size={128} />
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-black">
              Alan Sebastian Mathew
            </h1>
            <p className="text-xs uppercase tracking-widest text-gray-500 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5" /> // SOFTWARE CRAFTMANSHIP
            </p>
            <div className="text-xs mt-2 leading-relaxed">
              <span className="text-purple-500">var</span>{" "}
              <span className="text-blue-500">coordinates</span>: [<br />
              &nbsp;&nbsp;<span className="text-amber-500">"email"</span>:
              <a href="mailto:alansmathew008@gmail.com" className="text-emerald-500 hover:underline ml-1">
                "alansmathew008@gmail.com"
              </a>,<br />
              &nbsp;&nbsp;<span className="text-amber-500">"phone"</span>:
              <a href="tel:+12267536404" className="text-emerald-500 hover:underline ml-1">
                "+1.226.753.6404"
              </a>,<br />
              ]
            </div>
          </div>
        </div>

        {/* Terminal windows row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Terminal 1 */}
          <div className="border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm">
            <div className="bg-gray-100 px-3 py-1.5 border-b border-gray-200 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs text-gray-500 ml-2">portfolio.sh</span>
            </div>
            <div className="p-4 text-xs leading-relaxed">
              <span className="text-emerald-600">$</span>{" "}
              <span className="text-blue-500">cat</span> about.md<br />
              <span className="text-gray-600">Software craftsman building</span><br />
              <span className="text-gray-600">robust, elegant solutions</span><br />
              <span className="text-gray-600">with modern web + mobile</span><br />
              <span className="text-gray-400">technologies.</span>
            </div>
          </div>

          {/* Terminal 2 */}
          <div className="border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm">
            <div className="bg-gray-100 px-3 py-1.5 border-b border-gray-200 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs text-gray-500 ml-2">skills.sh</span>
            </div>
            <div className="p-4 text-xs leading-relaxed">
              <span className="text-emerald-600">$</span>{" "}
              <span className="text-blue-500">ls</span> ./stack/<br />
              <span className="text-cyan-600">react/</span>&nbsp;
              <span className="text-cyan-600">node/</span>&nbsp;
              <span className="text-cyan-600">swift/</span><br />
              <span className="text-cyan-600">python/</span>&nbsp;
              <span className="text-cyan-600">docker/</span>&nbsp;
              <span className="text-cyan-600">aws/</span><br />
              <span className="text-gray-400">12 directories</span>
            </div>
          </div>

          {/* Terminal 3 */}
          <div className="border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm">
            <div className="bg-gray-100 px-3 py-1.5 border-b border-gray-200 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs text-gray-500 ml-2">contact.sh</span>
            </div>
            <div className="p-4 text-xs leading-relaxed">
              <span className="text-emerald-600">$</span>{" "}
              <span className="text-blue-500">curl</span> contact.sh<br />
              <span className="text-amber-500">"email"</span>:{" "}
              <span className="text-emerald-500">alansmathew008@gmail.com</span><br />
              <span className="text-amber-500">"phone"</span>:{" "}
              <span className="text-emerald-500">+1.226.753.6404</span><br />
              <span className="text-gray-400">200 OK</span>
            </div>
          </div>
        </div>

        {/* Quote section */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-xs text-gray-500 italic leading-relaxed">
            "Some people code to live, I live to code."
          </p>
        </div>

      </div>
    </div>
  );
}
