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
      className="h-full"
    >
      <Link
        to={`/project/${project.id}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#302922] bg-[#1d1915] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#4a3c30] hover:bg-[#221d18]"
      >
        <div className="mb-4 flex flex-wrap items-center gap-2">
          {project.featured && (
            <div className="rounded-full border border-accent-500/40 bg-accent-500/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-400">
              Featured
            </div>
          )}
          <div className="rounded-full border border-[#3a322b] bg-[#211c17] px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-[#b7aea3]">
            Batch {project.ycBatch}
          </div>
          {project.stars !== undefined && (
            <div className="flex items-center space-x-1 rounded-full border border-[#3a322b] bg-[#211c17] px-2.5 py-1 text-[11px] text-[#b7aea3]">
              <Star size={12} className="fill-accent-500/25 text-accent-500" />
              <span>{project.stars.toLocaleString()} stars</span>
            </div>
          )}
        </div>

        <h3 className="mb-3 text-2xl font-semibold tracking-tight leading-8 text-[#fff7ef] transition-colors group-hover:text-white">
          {project.name}
        </h3>

        <p className="mb-5 line-clamp-3 text-[13px] leading-6 text-[#b7aea3]">
          {project.description}
        </p>

        <div className="mb-5 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-[#342c26] bg-[#181410] p-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#8f857a]">
              Replaces
            </p>
            <p className="mt-2 text-sm font-medium leading-5 text-[#f3ece5]">{project.startupName}</p>
          </div>
          <div className="rounded-xl border border-[#342c26] bg-[#181410] p-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#8f857a]">
              Proprietary Price
            </p>
            <p className="mt-2 inline-flex items-center gap-1 text-sm font-semibold leading-5 text-[#ffb37e]">
              <DollarSign size={14} className="text-accent-500" />
              {project.proprietaryPrice}
            </p>
          </div>
        </div>

        <div className="mb-4 flex flex-wrap items-center gap-2 text-sm">
          <span className="rounded-full border border-[#3a322b] bg-[#211c17] px-2.5 py-1 text-xs text-[#d8cfc4]">
            {project.proprietaryService}
          </span>
          <span className="text-sm font-semibold text-accent-400">$0/month app fee</span>
        </div>

        {project.byok && (
          <div className="mb-4 flex items-center space-x-2 text-xs text-accent-400">
            <Key size={12} />
            <span>Bring your own model key</span>
          </div>
        )}

        <div className="mb-5 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#3a322b] bg-[#211c17] px-2.5 py-1 text-xs text-[#c8beb1]"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="rounded-full border border-[#3a322b] bg-[#211c17] px-2.5 py-1 text-xs text-[#8f857a]">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        <div className="mt-auto flex items-center space-x-4 border-t border-[#2d2721] pt-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-sm text-[#c8beb1] hover:text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
          {project.websiteUrl && (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm text-[#c8beb1] hover:text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={16} />
              <span>Website</span>
            </a>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
