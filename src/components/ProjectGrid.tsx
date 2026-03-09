import type { Project } from '../types/project';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}
