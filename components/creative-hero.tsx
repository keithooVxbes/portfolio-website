"use client"

import { motion } from "framer-motion"
import { Terminal, Shield, CheckCircle2 } from "lucide-react"

export function CreativeHero() {
  return (
    <motion.div
      className="w-full w-full max-w-lg mx-auto relative rounded-lg border border-zinc-800/80 bg-[#0d1117] overflow-hidden shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Window Header */}
      <div className="flex items-center px-4 py-3 border-b border-zinc-800/80 bg-[#161b22]">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-zinc-700/50 border border-zinc-600/50" />
          <div className="w-3 h-3 rounded-full bg-zinc-700/50 border border-zinc-600/50" />
          <div className="w-3 h-3 rounded-full bg-zinc-700/50 border border-zinc-600/50" />
        </div>
        <div className="flex-1 text-center flex items-center justify-center space-x-2 text-xs text-zinc-500 font-mono">
          <Terminal className="w-3 h-3" />
          <span>zayyan@sec-lab:~</span>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="p-5 font-mono text-xs md:text-sm text-zinc-400 space-y-5 h-[400px] md:h-[450px] overflow-y-auto">
        
        {/* Command 1 */}
        <div className="space-y-2">
          <div className="flex items-center text-zinc-300">
            <span className="text-emerald-400 mr-2">➜</span>
            <span className="text-cyan-400">~</span>
            <span className="mx-2">./run_audit.sh</span>
            <span className="text-zinc-500">--target</span>
            <span className="ml-2 text-zinc-300">webapp-prod</span>
          </div>
          <div className="text-zinc-500 pl-4 border-l border-zinc-800/80 ml-1 space-y-1 py-1">
            <div className="flex items-center"><Shield className="w-3 h-3 mr-2 text-emerald-500/70" /> Initializing security audit framework v4.2.1</div>
            <div>Loading payload signatures... [OK]</div>
            <div>Resolving target host... [OK]</div>
          </div>
        </div>

        {/* Scan Results */}
        <div className="space-y-2">
           <div className="text-zinc-300">
            <span className="text-emerald-400 mr-2">➜</span>
            <span className="text-cyan-400">~</span>
            <span className="mx-2">cat</span>
            <span className="text-zinc-300">reports/vulnerabilities.json</span>
          </div>
          <div className="bg-[#161b22] p-4 rounded-md border border-zinc-800/80 font-mono text-zinc-300 leading-relaxed">
            <div className="text-emerald-400">{"{"}</div>
            <div className="pl-4">
              <span className="text-cyan-300">"status"</span>: <span className="text-emerald-300">"analyzed"</span>,
            </div>
            <div className="pl-4">
              <span className="text-cyan-300">"findings"</span>: <span className="text-zinc-500">[</span>
            </div>
            <div className="pl-8">
              <span className="text-zinc-500">{"{"}</span>
            </div>
            <div className="pl-12">
              <span className="text-cyan-300">"id"</span>: <span className="text-zinc-400">"VULN-092"</span>,
            </div>
            <div className="pl-12">
              <span className="text-cyan-300">"severity"</span>: <span className="text-orange-400">"HIGH"</span>,
            </div>
            <div className="pl-12">
              <span className="text-cyan-300">"type"</span>: <span className="text-emerald-300">"IDOR"</span>,
            </div>
            <div className="pl-12">
              <span className="text-cyan-300">"endpoint"</span>: <span className="text-emerald-300">"/api/v1/users/{'{'}id{'}'}/profile"</span>
            </div>
            <div className="pl-8">
              <span className="text-zinc-500">{"}"}</span>
            </div>
            <div className="pl-4">
              <span className="text-zinc-500">]</span>
            </div>
            <div className="text-emerald-400">{"}"}</div>
          </div>
        </div>

        {/* Command 3 */}
        <div className="space-y-2">
          <div className="flex items-center text-zinc-300">
            <span className="text-emerald-400 mr-2">➜</span>
            <span className="text-cyan-400">~</span>
            <span className="mx-2">git</span>
            <span className="text-zinc-300">commit -m "Apply security patches"</span>
          </div>
          <div className="text-zinc-500 pl-4 border-l border-zinc-800/80 ml-1 py-1">
            <div className="flex items-center text-zinc-400"><CheckCircle2 className="w-3 h-3 mr-2 text-emerald-500" /> [main 8f3a9b2] Apply security patches</div>
            <div> 2 files changed, 45 insertions(+), 12 deletions(-)</div>
          </div>
        </div>
        
        {/* Cursor */}
        <div className="flex items-center text-zinc-300 mt-4">
            <span className="text-emerald-400 mr-2">➜</span>
            <span className="text-cyan-400">~</span>
            <span className="ml-2 w-2 h-4 bg-zinc-400 block animate-pulse"></span>
        </div>
      </div>
    </motion.div>
  )
}
