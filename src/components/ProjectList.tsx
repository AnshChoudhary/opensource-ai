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
          <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-2xl border border-[#2f2923] bg-[#1c1814]">
            <div className="text-2xl font-semibold text-accent-500">{'</>'}</div>
          </div>
          <h3 className="mb-2 text-xl font-semibold text-[#fff7ef]">
            No projects found
          </h3>
          <p className="text-sm text-[#9f958a]">
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
            className="group block rounded-2xl border border-[#302922] bg-[#1d1915] p-6 transition-all duration-300 hover:border-[#4a3c30] hover:bg-[#221d18]"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-semibold text-[#fff7ef] transition-colors group-hover:text-white">
                    {project.name}
                  </h3>
                  {project.featured && (
                    <span className="rounded-full border border-accent-500/40 bg-accent-500/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-400">
                      Featured
                    </span>
                  )}
                  {project.stars !== undefined && (
                    <div className="flex items-center space-x-1 text-sm text-[#b7aea3]">
                      <Star size={14} className="fill-accent-500/25 text-accent-500" />
                      <span className="text-xs">{project.stars.toLocaleString()}</span>
                    </div>
                  )}
                </div>
                <p className="mb-3 text-sm leading-relaxed text-[#b7aea3]">
                  {project.description}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs">
                  <div className="flex items-center space-x-2 text-[#b7aea3]">
                    <DollarSign size={12} className="text-accent-500" />
                    <span>{project.proprietaryService}</span>
                    <span className="text-[#ffb37e]">{project.proprietaryPrice}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[#d8cfc4]">
                    <span>YC {project.ycBatch}</span>
                    <span className="text-accent-400">$0/month app fee</span>
                  </div>
                  {project.byok && (
                    <div className="flex items-center space-x-1 text-accent-400">
                      <Key size={12} />
                      <span>BYOK</span>
                    </div>
                  )}
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#3a322b] bg-[#211c17] px-2.5 py-1 text-xs text-[#c8beb1]"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="rounded-full border border-[#3a322b] bg-[#211c17] px-2.5 py-1 text-xs text-[#8f857a]">
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
                  className="rounded-lg border border-[#342d26] p-2 text-[#b7aea3] transition-colors hover:border-[#51443a] hover:text-white"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={18} />
                </a>
                {project.websiteUrl && (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-[#342d26] p-2 text-[#b7aea3] transition-colors hover:border-[#51443a] hover:text-white"
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
