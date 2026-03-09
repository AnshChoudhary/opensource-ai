import { Github, Mail, Code2, Shield, Lock, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 frosted-glass border-accent-500/30 rounded-lg mb-6">
            <Code2 className="w-8 h-8 text-accent-500" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 font-mono">
            <span className="text-accent-500">{'//'}</span> About Y_Decombinator
          </h1>
          <p className="text-xl text-gray-400 font-mono">
            Open-source alternatives to YC AI startups. Free alternatives to paid services.
          </p>
        </motion.div>

        <div className="space-y-8">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="frosted-glass rounded-lg p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-mono">
              <span className="text-accent-500">{'//'}</span> Our Mission
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              This is a critical commentary on the VC-backed "wrapper" startup culture. We believe 
              that many Y Combinator startups are selling UIs for public AI models—features, not companies. 
              The logic of the modern web belongs in the open, not behind subscription fees.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              We provide free, open-source alternatives to demonstrate that these services don't need 
              to be venture-backed companies. Software should be open. Features shouldn't require 
              monthly subscriptions.
            </p>
            <p className="text-gray-400 leading-relaxed">
              <span className="text-accent-500 font-mono">{'>'}</span> This is social criticism, not a commercial directory. 
              We're exposing the "wrapper" problem and offering alternatives.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="frosted-glass rounded-lg p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-6 font-mono">
              <span className="text-accent-500">{'//'}</span> Why This Matters
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-gray-800/60 rounded border border-gray-700/50">
                  <Code2 className="w-6 h-6 text-accent-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 font-mono">The Problem</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Many startups provide a specific UI for a general AI task (e.g., "AI for legal PDFs" 
                    or "AI for SQL queries"). These are features, not companies. A single well-maintained 
                    open-source tool can offer the same utility without the monthly B2B subscription fee.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-gray-800/60 rounded border border-gray-700/50">
                  <Shield className="w-6 h-6 text-accent-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 font-mono">Data Sovereignty & Privacy</h3>
                  <p className="text-gray-400 leading-relaxed">
                    When you use a B2B startup, your data is their product. Open-sourcing these services 
                    allows users to host them locally (or on their own cloud), ensuring sensitive information 
                    never leaves their sight. You control your data, not a third-party vendor.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-gray-800/60 rounded border border-gray-700/50">
                  <DollarSign className="w-6 h-6 text-accent-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 font-mono">Preventing "Feature-as-a-Service"</h3>
                  <p className="text-gray-400 leading-relaxed">
                    We believe that specialized AI tools (like PDF summarizers or SQL generators) are features, 
                    not companies. They belong in the public domain as utilities, not behind a corporate paywall. 
                    By providing free alternatives, we lower barriers for students, researchers, and small creators.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-gray-800/60 rounded border border-gray-700/50">
                  <Lock className="w-6 h-6 text-accent-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 font-mono">Low Technical Moats</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Because many startups rely on the same third-party APIs (OpenAI, Anthropic), they don't 
                    own the underlying "engine." If the tech is easy to replicate, it should be a public good 
                    rather than a venture-backed company. We're doing the opposite of what some startups do—taking 
                    closed ideas and returning them to the open-source ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="frosted-glass rounded-lg p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-mono">
              <span className="text-accent-500">{'//'}</span> Bring Your Own Key (BYOK)
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              We're honest about costs. While our services are free and open-source, you'll need to provide 
              your own API keys (OpenAI, Anthropic, etc.) for the underlying models. This means:
            </p>
            <ul className="list-none space-y-2 text-gray-400 ml-4 font-mono">
              <li><span className="text-accent-500">{'•'}</span> You pay for what you use, not for the privilege of using it</li>
              <li><span className="text-accent-500">{'•'}</span> No monthly subscription fees or vendor lock-in</li>
              <li><span className="text-accent-500">{'•'}</span> Complete control over your API usage and costs</li>
              <li><span className="text-accent-500">{'•'}</span> Option to run local models for zero API costs</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="frosted-glass rounded-lg p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-mono">
              <span className="text-accent-500">{'//'}</span> How It Works
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-800/40 rounded-lg border border-gray-700/50">
                <h3 className="text-lg font-bold text-white mb-2 font-mono">B2B Stack (What You're Replacing)</h3>
                <p className="text-gray-400 text-sm font-mono mb-2">
                  User → Proprietary Layer → Subscription Fee → AI Model
                </p>
                <p className="text-gray-500 text-xs">
                  Your data goes through a third-party server. You pay monthly regardless of usage.
                </p>
              </div>
              <div className="p-4 bg-gray-800/40 rounded-lg border border-accent-500/30">
                <h3 className="text-lg font-bold text-white mb-2 font-mono">Open-Source Stack (Our Alternative)</h3>
                <p className="text-accent-500 text-sm font-mono mb-2">
                  User → Open-Source Interface → Your API Key → AI Model
                </p>
                <p className="text-gray-400 text-xs">
                  Direct connection. You control the data. Pay only for API usage (or run locally for free).
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="frosted-glass rounded-lg p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-6 font-mono">
              <span className="text-accent-500">{'//'}</span> Contribute
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Found a YC startup that's just wrapping an API? Built an open-source alternative? 
              We'd love to feature it. This is a community effort to democratize AI utilities.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 frosted-glass-light hover:border-accent-500 px-6 py-3 rounded-lg transition-colors group"
              >
                <Github size={24} className="text-gray-400 group-hover:text-accent-500 transition-colors" />
                <span className="font-semibold text-white font-mono group-hover:text-accent-500 transition-colors">github</span>
              </a>
              <a
                href="mailto:anshc19@gmail.com"
                className="flex items-center space-x-3 frosted-glass-light hover:border-accent-500 px-6 py-3 rounded-lg transition-colors group"
              >
                <Mail size={24} className="text-gray-400 group-hover:text-accent-500 transition-colors" />
                <span className="font-semibold text-white font-mono group-hover:text-accent-500 transition-colors">email</span>
              </a>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="frosted-glass rounded-lg p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4 font-mono">
              <span className="text-accent-500">{'//'}</span> Disclaimer
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Y Decombinator is an independent project and is not affiliated with or endorsed
              by Y Combinator. This site is maintained by developers who believe AI utilities 
              should be open-source, not locked behind subscription fees. We're doing the opposite 
              of what some startups do—taking closed ideas and returning them to the public domain.
            </p>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
