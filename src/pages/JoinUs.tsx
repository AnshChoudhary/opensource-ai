import { Github, Mail, Code2, Star, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function JoinUs() {
  return (
    <div className="min-h-screen bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 frosted-glass border-accent-500/30 rounded-lg mb-6">
            <Users className="w-8 h-8 text-accent-500" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 font-mono">
            <span className="text-accent-500">{'//'}</span> Join Us
          </h1>
          <p className="text-xl text-gray-400 font-mono">
            Help us open-source AI alternatives. Get featured on our website.
          </p>
        </motion.div>

        <div className="space-y-8">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="frosted-glass rounded-lg p-8"
          >
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-3 bg-gray-800/60 rounded-lg border border-gray-700/50">
                <Code2 className="w-6 h-6 text-accent-500" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-4 font-mono">
                  <span className="text-accent-500">{'//'}</span> We're Looking for Developers
                </h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  We're building a community of developers who believe software should be open. 
                  If you've built an open-source alternative to a Y Combinator AI startup, or want 
                  to help create one, we'd love to feature your work.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  By contributing, you're not just sharing code—you're challenging the "wrapper" 
                  startup culture and making AI utilities accessible to everyone.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="frosted-glass rounded-lg p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-6 font-mono">
              <span className="text-accent-500">{'//'}</span> How to Get Featured
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent-500/20 border border-accent-500/50 rounded-lg flex items-center justify-center">
                  <span className="text-accent-500 font-mono font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 font-mono">Build an Open-Source Alternative</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Create an open-source project that provides the same functionality as a Y Combinator 
                    AI startup. It should be free, self-hostable, and use your own API keys (BYOK).
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent-500/20 border border-accent-500/50 rounded-lg flex items-center justify-center">
                  <span className="text-accent-500 font-mono font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 font-mono">Submit Your Project</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Open a pull request on our GitHub repository or email us with:
                  </p>
                  <ul className="list-none space-y-2 text-gray-400 ml-4 mt-2 font-mono text-sm">
                    <li><span className="text-accent-500">{'•'}</span> Project name and description</li>
                    <li><span className="text-accent-500">{'•'}</span> GitHub repository URL</li>
                    <li><span className="text-accent-500">{'•'}</span> Which YC startup it replaces</li>
                    <li><span className="text-accent-500">{'•'}</span> Tech stack and tags</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent-500/20 border border-accent-500/50 rounded-lg flex items-center justify-center">
                  <span className="text-accent-500 font-mono font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 font-mono">Get Featured</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Once approved, your project will be featured on our website with your GitHub profile, 
                    project description, and links. Popular projects get the "Featured" badge.
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
            <h2 className="text-3xl font-bold text-white mb-6 font-mono">
              <span className="text-accent-500">{'//'}</span> What We're Looking For
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-gray-800/40 rounded-lg border border-gray-700/50">
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="w-5 h-5 text-accent-500" />
                  <h3 className="font-bold text-white font-mono">Quality Projects</h3>
                </div>
                <p className="text-gray-400 text-sm">
                  Well-documented, maintained, and actually functional alternatives
                </p>
              </div>
              <div className="p-4 bg-gray-800/40 rounded-lg border border-gray-700/50">
                <div className="flex items-center space-x-2 mb-2">
                  <Zap className="w-5 h-5 text-accent-500" />
                  <h3 className="font-bold text-white font-mono">Active Development</h3>
                </div>
                <p className="text-gray-400 text-sm">
                  Projects that are actively maintained and improving
                </p>
              </div>
              <div className="p-4 bg-gray-800/40 rounded-lg border border-gray-700/50">
                <div className="flex items-center space-x-2 mb-2">
                  <Code2 className="w-5 h-5 text-accent-500" />
                  <h3 className="font-bold text-white font-mono">Open Source</h3>
                </div>
                <p className="text-gray-400 text-sm">
                  Must be truly open-source with a permissive license
                </p>
              </div>
              <div className="p-4 bg-gray-800/40 rounded-lg border border-gray-700/50">
                <div className="flex items-center space-x-2 mb-2">
                  <Users className="w-5 h-5 text-accent-500" />
                  <h3 className="font-bold text-white font-mono">Community Focus</h3>
                </div>
                <p className="text-gray-400 text-sm">
                  Projects that benefit the developer community
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="frosted-glass rounded-lg p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-6 font-mono">
              <span className="text-accent-500">{'//'}</span> Benefits of Contributing
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-accent-500 font-mono">{'>'}</span>
                <p className="text-gray-400">
                  <strong className="text-white">Visibility:</strong> Get your project in front of thousands of developers looking for alternatives
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-accent-500 font-mono">{'>'}</span>
                <p className="text-gray-400">
                  <strong className="text-white">Community:</strong> Join a community of developers who believe in open-source
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-accent-500 font-mono">{'>'}</span>
                <p className="text-gray-400">
                  <strong className="text-white">Impact:</strong> Help democratize AI tools and challenge the subscription model
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-accent-500 font-mono">{'>'}</span>
                <p className="text-gray-400">
                  <strong className="text-white">Recognition:</strong> Featured projects get highlighted with badges and priority placement
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
              <span className="text-accent-500">{'//'}</span> Get Started
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Ready to contribute? Here's how to get in touch:
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
                <span className="text-gray-500 font-mono text-sm">// submit PR</span>
              </a>
              <a
                href="mailto:anshc19@gmail.com"
                className="flex items-center space-x-3 frosted-glass-light hover:border-accent-500 px-6 py-3 rounded-lg transition-colors group"
              >
                <Mail size={24} className="text-gray-400 group-hover:text-accent-500 transition-colors" />
                <span className="font-semibold text-white font-mono group-hover:text-accent-500 transition-colors">email</span>
                <span className="text-gray-500 font-mono text-sm">// anshc19@gmail.com</span>
              </a>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="frosted-glass rounded-lg p-8 border-accent-500/30"
          >
            <h2 className="text-2xl font-bold text-white mb-4 font-mono">
              <span className="text-accent-500">{'//'}</span> Questions?
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Have questions about contributing or want to discuss a project idea? Reach out! 
              We're always looking for passionate developers who want to make AI tools more accessible.
            </p>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
