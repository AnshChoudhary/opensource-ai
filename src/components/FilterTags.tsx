import { X } from 'lucide-react';
import { getAllTags, getAllBatches, getAllTechStack } from '../utils/filterProjects';
import type { Project } from '../types/project';
import { motion } from 'framer-motion';

interface FilterTagsProps {
  projects: Project[];
  selectedTags: string[];
  selectedBatches: string[];
  selectedTechStack: string[];
  onToggleTag: (tag: string) => void;
  onToggleBatch: (batch: string) => void;
  onToggleTechStack: (tech: string) => void;
  onClearFilters: () => void;
}

export default function FilterTags({
  projects,
  selectedTags,
  selectedBatches,
  selectedTechStack,
  onToggleTag,
  onToggleBatch,
  onToggleTechStack,
  onClearFilters,
}: FilterTagsProps) {
  const allTags = getAllTags(projects);
  const allBatches = getAllBatches(projects);
  const allTechStack = getAllTechStack(projects);

  const hasActiveFilters =
    selectedTags.length > 0 ||
    selectedBatches.length > 0 ||
    selectedTechStack.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="frosted-glass sticky top-24 rounded-2xl p-6"
    >
      {hasActiveFilters && (
        <button
          onClick={onClearFilters}
          className="mb-6 flex w-full items-center justify-center space-x-2 rounded-lg border border-[#3b332c] bg-[#231d18] px-4 py-2 text-sm text-[#f3ece5] transition-colors hover:border-[#52473d] hover:bg-[#2a231d]"
        >
          <X size={16} />
          <span>Clear filters</span>
        </button>
      )}

      {allBatches.length > 0 && (
        <div className="mb-6">
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#8f857a]">
            YC Batch
          </h4>
          <div className="flex flex-wrap gap-2">
            {allBatches.map((batch) => (
              <button
                key={batch}
                onClick={() => onToggleBatch(batch)}
                className={`rounded-full border px-3 py-1.5 text-sm transition-all ${
                  selectedBatches.includes(batch)
                    ? 'border-accent-500 bg-accent-500/12 text-accent-400'
                    : 'border-[#3a322b] bg-[#1b1713] text-[#b7aea3] hover:border-[#5a4a3d] hover:text-[#f3ece5]'
                }`}
              >
                {batch}
              </button>
            ))}
          </div>
        </div>
      )}

      {allTags.length > 0 && (
        <div className="mb-6">
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#8f857a]">
            Tags
          </h4>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => onToggleTag(tag)}
                className={`rounded-full border px-3 py-1.5 text-sm transition-all ${
                  selectedTags.includes(tag)
                    ? 'border-accent-500 bg-accent-500/12 text-accent-400'
                    : 'border-[#3a322b] bg-[#1b1713] text-[#b7aea3] hover:border-[#5a4a3d] hover:text-[#f3ece5]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}

      {allTechStack.length > 0 && (
        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#8f857a]">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {allTechStack.map((tech) => (
              <button
                key={tech}
                onClick={() => onToggleTechStack(tech)}
                className={`rounded-full border px-3 py-1.5 text-sm transition-all ${
                  selectedTechStack.includes(tech)
                    ? 'border-accent-500 bg-accent-500/12 text-accent-400'
                    : 'border-[#3a322b] bg-[#1b1713] text-[#b7aea3] hover:border-[#5a4a3d] hover:text-[#f3ece5]'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
