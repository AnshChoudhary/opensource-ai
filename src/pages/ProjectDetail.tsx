import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Star, Calendar, DollarSign, Key } from 'lucide-react';
import projectsData from '../data/projects.json';
import type { Project } from '../types/project';
import { motion } from 'framer-motion';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const projects = projectsData as Project[];
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-accent-500 mb-8 transition-colors font-mono"
          >
            <ArrowLeft size={20} />
            <span>{'<'} back_to_alternatives</span>
          </Link>

          <div className="frosted-glass rounded-lg overflow-hidden">
            <div className="frosted-glass-light border-b border-gray-800/50 p-8">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <h1 className="text-4xl font-bold text-white font-mono">{project.name}</h1>
                    {project.featured && (
                      <span className="inline-flex items-center backdrop-blur-xl bg-gray-800/80 border border-accent-500/50 text-accent-500 text-xs font-mono px-2 py-1 rounded">
                        {'[FEATURED]'}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-lg mb-4">{project.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                {project.stars !== undefined && (
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Star size={20} className="text-accent-500 fill-accent-500/20" />
                    <span className="font-mono">{project.stars.toLocaleString()} stars</span>
                  </div>
                )}
                <div className="flex items-center space-x-2 text-gray-400">
                  <Calendar size={20} />
                  <span className="font-mono">YC_{project.ycBatch}</span>
                </div>
                {project.byok && (
                  <div className="flex items-center space-x-2 text-accent-500">
                    <Key size={20} />
                    <span className="font-mono">BYOK</span>
                  </div>
                )}
              </div>
            </div>

            <div className="p-8">
              {/* Comparison Section */}
              <div className="mb-8 p-6 bg-gray-800/40 rounded-lg border border-gray-700/50">
                <h2 className="text-2xl font-bold text-white mb-4 font-mono">
                  <span className="text-accent-500">{'//'}</span> Cost Comparison
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="p-4 bg-gray-900/60 rounded border border-red-500/30">
                    <div className="flex items-center space-x-2 mb-2">
                      <DollarSign size={18} className="text-red-400" />
                      <h3 className="font-bold text-white font-mono">Proprietary Service</h3>
                    </div>
                    <p className="text-gray-300 font-mono mb-1">{project.proprietaryService}</p>
                    <p className="text-red-400 font-mono font-semibold">{project.proprietaryPrice}</p>
                    <p className="text-gray-500 text-xs mt-2">Monthly subscription • Vendor lock-in • Data leaves your servers</p>
                  </div>
                  <div className="p-4 bg-gray-900/60 rounded border border-accent-500/50">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-accent-500 font-mono">{'→'}</span>
                      <h3 className="font-bold text-white font-mono">Open Alternative</h3>
                    </div>
                    <p className="text-gray-300 font-mono mb-1">{project.name}</p>
                    <p className="text-accent-500 font-mono font-semibold">$0/month</p>
                    <p className="text-gray-400 text-xs mt-2">Open-source • Self-hosted • Your data stays private</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 italic text-center">
                  * Price information is provided for informational purposes only and should be verified independently. 
                  Pricing may vary and is subject to change.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-white mb-4 font-mono">
                      <span className="text-accent-500">{'//'}</span> About
                    </h2>
                    <p className="text-gray-400 leading-relaxed mb-4">
                      {project.longDescription}
                    </p>
                    {project.byok && (
                      <div className="mt-4 p-4 bg-gray-800/40 rounded-lg border border-accent-500/30">
                        <div className="flex items-center space-x-2 mb-2">
                          <Key size={18} className="text-accent-500" />
                          <h3 className="font-bold text-white font-mono">Bring Your Own Key (BYOK)</h3>
                        </div>
                        <p className="text-gray-400 text-sm">
                          This project requires you to provide your own API keys (OpenAI, Anthropic, etc.). 
                          You pay only for API usage—no monthly subscription fees. Optionally, you can run 
                          local models for zero API costs.
                        </p>
                      </div>
                    )}
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4 font-mono">
                      <span className="text-accent-500">{'//'}</span> Links
                    </h2>
                    <div className="flex flex-col space-y-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-4 frosted-glass-light hover:border-accent-500/50 rounded-lg transition-colors group"
                      >
                        <div className="p-2 backdrop-blur-xl bg-gray-800/60 group-hover:bg-gray-800/80 rounded border border-gray-700/50">
                          <Github size={24} className="text-gray-400 group-hover:text-accent-500 transition-colors" />
                        </div>
                        <div>
                          <div className="font-semibold text-white font-mono group-hover:text-accent-500 transition-colors">github</div>
                          <div className="text-sm text-gray-500 font-mono">// source code</div>
                        </div>
                      </a>
                      {project.websiteUrl && (
                        <a
                          href={project.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 p-4 frosted-glass-light hover:border-accent-500/50 rounded-lg transition-colors group"
                        >
                          <div className="p-2 backdrop-blur-xl bg-gray-800/60 group-hover:bg-gray-800/80 rounded border border-gray-700/50">
                            <ExternalLink size={24} className="text-gray-400 group-hover:text-accent-500 transition-colors" />
                          </div>
                          <div>
                            <div className="font-semibold text-white font-mono group-hover:text-accent-500 transition-colors">website</div>
                            <div className="text-sm text-gray-500 font-mono">// official site</div>
                          </div>
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 p-4 frosted-glass-light hover:border-accent-500/50 rounded-lg transition-colors group"
                        >
                          <div className="p-2 backdrop-blur-xl bg-gray-800/60 group-hover:bg-gray-800/80 rounded border border-gray-700/50">
                            <ExternalLink size={24} className="text-gray-400 group-hover:text-accent-500 transition-colors" />
                          </div>
                          <div>
                            <div className="font-semibold text-white font-mono group-hover:text-accent-500 transition-colors">demo</div>
                            <div className="text-sm text-gray-500 font-mono">// try it out</div>
                          </div>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <aside className="lg:col-span-1">
                  <div className="frosted-glass rounded-lg p-6 space-y-6">
                    <div>
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 font-mono">
                        <span className="text-accent-500">{'//'}</span> Replaces
                      </h3>
                      <p className="text-lg font-bold text-white font-mono">{project.startupName}</p>
                      <p className="text-sm text-gray-500 font-mono mt-1">YC {project.ycBatch}</p>
                    </div>

                    <div>
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 font-mono">
                        <span className="text-accent-500">{'//'}</span> Tags
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1.5 backdrop-blur-xl bg-gray-800/60 text-gray-300 text-sm font-mono rounded border border-gray-700/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 font-mono">
                        <span className="text-accent-500">{'//'}</span> Tech Stack
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 backdrop-blur-xl bg-gray-800/60 text-accent-500 text-sm font-mono rounded border border-accent-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
