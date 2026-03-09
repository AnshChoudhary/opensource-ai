import { useProjects } from '../hooks/useProjects';
import ProjectGrid from '../components/ProjectGrid';
import { motion } from 'framer-motion';
import { Code2, Terminal, DollarSign } from 'lucide-react';

export default function Home() {
  const { projects } = useProjects();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section - Full Screen */}
      <section className="relative overflow-hidden border-b border-gray-200 dark:border-gray-800" style={{ minHeight: 'calc(100vh - 140px)' }}>
        <div className="absolute inset-0 bg-grid-white opacity-100 dark:opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center justify-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-flex items-center space-x-2 frosted-glass border-accent-500/30 rounded-lg px-4 py-2 mb-8"
            >
              <Code2 className="w-4 h-4 text-accent-500" />
              <span className="text-gray-700 dark:text-gray-300 text-sm font-mono">open_source_alternatives</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight font-mono">
              <span className="text-accent-500">{'>'}</span> Open Source AI
              <br />
              <span className="text-gray-600 dark:text-gray-400">
                Startups
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Free, open-source alternatives to Y Combinator AI startups. Run the same functionality 
              yourself—with your own API keys, on your own infrastructure, with your data staying private.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center space-x-2 frosted-glass-light rounded-lg px-4 py-2 hover:border-accent-500/50 transition-colors"
              >
                <DollarSign className="w-5 h-5 text-accent-500" />
                <span className="text-gray-700 dark:text-gray-300 font-mono text-sm">$0/month</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center space-x-2 frosted-glass-light rounded-lg px-4 py-2 hover:border-accent-500/50 transition-colors"
              >
                <Code2 className="w-5 h-5 text-accent-500" />
                <span className="text-gray-700 dark:text-gray-300 font-mono text-sm">open_source</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center space-x-2 frosted-glass-light rounded-lg px-4 py-2 hover:border-accent-500/50 transition-colors"
              >
                <Terminal className="w-5 h-5 text-accent-500" />
                <span className="text-gray-700 dark:text-gray-300 font-mono text-sm">self_hosted</span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex justify-center"
            >
              <a
                href="/projects"
                className="inline-flex items-center space-x-2 frosted-glass border-2 border-accent-500 text-accent-500 px-8 py-4 rounded-lg font-mono hover:bg-accent-500/10 hover:border-accent-400 transition-all"
              >
                <span>{'$'} explore_alternatives()</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 font-mono">
            <span className="text-accent-500">{'//'}</span> Featured Alternatives
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-mono text-sm mb-6">
            Popular open-source alternatives to Y Combinator AI startups
          </p>
          <a
            href="/projects"
            className="inline-flex items-center space-x-2 text-accent-500 hover:text-accent-400 transition-colors font-mono text-sm"
          >
            <span>View all projects</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        <ProjectGrid projects={projects.filter(p => p.featured).slice(0, 6)} />
      </section>
    </div>
  );
}
