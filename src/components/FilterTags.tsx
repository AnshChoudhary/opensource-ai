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
      className="frosted-glass rounded-lg p-6 sticky top-24"
    >
      {hasActiveFilters && (
        <button
          onClick={onClearFilters}
          className="w-full flex items-center justify-center space-x-2 px-4 py-2 mb-6 backdrop-blur-xl bg-gray-100/60 dark:bg-gray-800/60 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:text-accent-500 rounded-lg transition-colors text-sm font-mono border border-gray-200 dark:border-gray-700/50"
        >
          <X size={16} />
          <span>clear_filters()</span>
        </button>
      )}

      {allBatches.length > 0 && (
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 font-mono">
            {'//'} YC Batch
          </h4>
          <div className="flex flex-wrap gap-2">
            {allBatches.map((batch) => (
              <button
                key={batch}
                onClick={() => onToggleBatch(batch)}
                className={`px-3 py-1.5 rounded border text-sm font-mono transition-all backdrop-blur-xl ${
                  selectedBatches.includes(batch)
                    ? 'bg-gray-100/80 dark:bg-gray-800/80 text-accent-500 border-accent-500'
                    : 'bg-gray-100/40 dark:bg-gray-800/40 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700/50 hover:border-accent-500/50 hover:text-accent-500/70 hover:bg-gray-100/60 dark:hover:bg-gray-800/60'
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
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 font-mono">
            {'//'} Tags
          </h4>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => onToggleTag(tag)}
                className={`px-3 py-1.5 rounded border text-sm font-mono transition-all backdrop-blur-xl ${
                  selectedTags.includes(tag)
                    ? 'bg-gray-100/80 dark:bg-gray-800/80 text-accent-500 border-accent-500'
                    : 'bg-gray-100/40 dark:bg-gray-800/40 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700/50 hover:border-accent-500/50 hover:text-accent-500/70 hover:bg-gray-100/60 dark:hover:bg-gray-800/60'
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
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 font-mono">
            {'//'} Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {allTechStack.map((tech) => (
              <button
                key={tech}
                onClick={() => onToggleTechStack(tech)}
                className={`px-3 py-1.5 rounded border text-sm font-mono transition-all backdrop-blur-xl ${
                  selectedTechStack.includes(tech)
                    ? 'bg-gray-100/80 dark:bg-gray-800/80 text-accent-500 border-accent-500'
                    : 'bg-gray-100/40 dark:bg-gray-800/40 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700/50 hover:border-accent-500/50 hover:text-accent-500/70 hover:bg-gray-100/60 dark:hover:bg-gray-800/60'
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
