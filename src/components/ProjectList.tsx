import { Link } from 'react-router-dom';
import { Github, ExternalLink, Star, DollarSign, Key } from 'lucide-react';
import type { Project } from '../types/project';
import { motion } from 'framer-motion';

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  if (projects.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-16"
      >
        <div className="max-w-md mx-auto">
          <div className="w-24 h-24 mx-auto mb-4 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center">
            <div className="text-gray-600 font-mono text-4xl">{'{}'}</div>
          </div>
          <h3 className="text-xl font-semibold text-gray-300 mb-2 font-mono">
            {'//'} No projects found
          </h3>
          <p className="text-gray-500 font-mono text-sm">
            Try adjusting your search or filters
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-3">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.03 }}
        >
          <Link
            to={`/project/${project.id}`}
            className="group block frosted-glass rounded-lg p-6 hover:border-accent-500/50 hover:bg-gray-900/70 transition-all duration-300"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-accent-500 transition-colors font-mono">
                    {project.name}
                  </h3>
                  {project.featured && (
                    <span className="backdrop-blur-xl bg-gray-800/80 border border-accent-500/50 text-accent-500 text-xs font-mono px-2 py-1 rounded">
                      {'[FEATURED]'}
                    </span>
                  )}
                  {project.stars !== undefined && (
                    <div className="flex items-center space-x-1 text-gray-400 text-sm">
                      <Star size={14} className="fill-accent-500/50 text-accent-500/50" />
                      <span className="font-mono text-xs">{project.stars.toLocaleString()}</span>
                    </div>
                  )}
                </div>
                <p className="text-gray-400 mb-3 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs">
                  <div className="flex items-center space-x-2">
                    <DollarSign size={12} className="text-red-400" />
                    <span className="text-gray-500 font-mono">Replaces:</span>
                    <span className="text-gray-300 font-mono">{project.proprietaryService}</span>
                    <span className="text-red-400 font-mono">{project.proprietaryPrice}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-accent-500 font-mono">{'→'}</span>
                    <span className="text-gray-300 font-mono">{project.name}</span>
                    <span className="text-accent-500 font-mono">$0/month</span>
                  </div>
                  {project.byok && (
                    <div className="flex items-center space-x-1 text-accent-500">
                      <Key size={12} />
                      <span className="font-mono">BYOK</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 backdrop-blur-xl bg-gray-800/60 text-gray-400 text-xs font-mono rounded border border-gray-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-1 backdrop-blur-xl bg-gray-800/60 text-gray-500 text-xs font-mono rounded border border-gray-700/50">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-3 ml-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-accent-500 transition-colors rounded-lg hover:bg-gray-800/50"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={18} />
                </a>
                {project.websiteUrl && (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-accent-500 transition-colors rounded-lg hover:bg-gray-800/50"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
