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
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}
