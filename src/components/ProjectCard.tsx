import { Link } from 'react-router-dom';
import { Github, ExternalLink, Star, DollarSign, Key } from 'lucide-react';
import type { Project } from '../types/project';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Link
        to={`/project/${project.id}`}
        className="group block h-full frosted-glass rounded-lg p-6 hover:border-accent-500/50 hover:bg-gray-900/70 transition-all duration-300 relative overflow-hidden"
      >
        {project.featured && (
          <div className="absolute top-4 right-4 backdrop-blur-xl bg-gray-800/80 border border-accent-500/50 text-accent-500 text-xs font-mono px-2 py-1 rounded">
            {'[FEATURED]'}
          </div>
        )}
        
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-accent-500 transition-colors font-mono pr-8">
            {project.name}
          </h3>
          {project.stars !== undefined && (
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <Star size={16} className="fill-accent-500/50 text-accent-500/50" />
              <span className="font-mono">{project.stars.toLocaleString()}</span>
            </div>
          )}
        </div>

        <p className="text-gray-400 mb-4 line-clamp-2 leading-relaxed text-sm">
          {project.description}
        </p>

        {/* Comparison Section */}
        <div className="mb-4 p-3 bg-gray-800/40 rounded-lg border border-gray-700/50">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <DollarSign size={14} className="text-red-400" />
              <span className="text-xs text-gray-500 font-mono">Proprietary:</span>
            </div>
            <span className="text-xs text-gray-400 font-mono">{project.proprietaryService}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-500 font-mono">Price:</span>
            </div>
            <span className="text-xs text-red-400 font-mono font-semibold">{project.proprietaryPrice}</span>
          </div>
          <div className="mt-2 pt-2 border-t border-gray-700/50 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-xs text-accent-500 font-mono">{'→'} Open Alternative:</span>
            </div>
            <span className="text-xs text-accent-500 font-mono font-semibold">$0/month</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4 text-sm">
          <span className="font-semibold text-gray-300 font-mono text-xs">Replaces: {project.startupName}</span>
          <span className="px-2 py-1 backdrop-blur-xl bg-gray-800/60 text-accent-500 rounded border border-accent-500/30 font-mono text-xs">
            YC_{project.ycBatch}
          </span>
        </div>

        {project.byok && (
          <div className="mb-4 flex items-center space-x-2 text-xs text-gray-500 font-mono">
            <Key size={12} className="text-accent-500" />
            <span>BYOK - Bring Your Own Key</span>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 backdrop-blur-xl bg-gray-800/60 text-gray-400 text-xs font-mono rounded border border-gray-700/50"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 backdrop-blur-xl bg-gray-800/60 text-gray-500 text-xs font-mono rounded border border-gray-700/50">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        <div className="flex items-center space-x-4 pt-4 border-t border-gray-800/50">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-400 hover:text-accent-500 transition-colors font-mono text-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={16} />
            <span>github</span>
          </a>
          {project.websiteUrl && (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-accent-500 transition-colors font-mono text-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={16} />
              <span>website</span>
            </a>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
