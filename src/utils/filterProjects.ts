import type { Project } from '../types/project';
import type { SortOption } from '../components/SortDropdown';

export interface FilterOptions {
  searchQuery: string;
  selectedTags: string[];
  selectedBatches: string[];
  selectedTechStack: string[];
}

export function filterProjects(
  projects: Project[],
  filters: FilterOptions
): Project[] {
  return projects.filter((project) => {
    // Search filter
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      const matchesSearch =
        project.name.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.startupName.toLowerCase().includes(query) ||
        project.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(query));

      if (!matchesSearch) return false;
    }

    // Tag filter
    if (filters.selectedTags.length > 0) {
      const hasSelectedTag = filters.selectedTags.some((tag) =>
        project.tags.includes(tag)
      );
      if (!hasSelectedTag) return false;
    }

    // Batch filter
    if (filters.selectedBatches.length > 0) {
      if (!filters.selectedBatches.includes(project.ycBatch)) return false;
    }

    // Tech stack filter
    if (filters.selectedTechStack.length > 0) {
      const hasSelectedTech = filters.selectedTechStack.some((tech) =>
        project.techStack.includes(tech)
      );
      if (!hasSelectedTech) return false;
    }

    return true;
  });
}

export function sortProjects(projects: Project[], sortBy: SortOption): Project[] {
  const sorted = [...projects];
  
  switch (sortBy) {
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case 'stars':
      return sorted.sort((a, b) => (b.stars || 0) - (a.stars || 0));
    case 'price':
      return sorted.sort((a, b) => {
        const priceA = parseInt(a.proprietaryPrice.replace(/[^0-9]/g, '')) || 0;
        const priceB = parseInt(b.proprietaryPrice.replace(/[^0-9]/g, '')) || 0;
        return priceB - priceA;
      });
    case 'newest':
      return sorted.sort((a, b) => {
        // Sort by batch (W24 > S23 > W23, etc.)
        const batchA = a.ycBatch;
        const batchB = b.ycBatch;
        if (batchA[0] !== batchB[0]) {
          return batchB[0].localeCompare(batchA[0]); // W before S
        }
        return parseInt(batchB.slice(1)) - parseInt(batchA.slice(1));
      });
    default:
      return sorted;
  }
}

export function getAllTags(projects: Project[]): string[] {
  const tagSet = new Set<string>();
  projects.forEach((project) => {
    project.tags.forEach((tag) => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}

export function getAllBatches(projects: Project[]): string[] {
  const batchSet = new Set<string>();
  projects.forEach((project) => {
    batchSet.add(project.ycBatch);
  });
  return Array.from(batchSet).sort().reverse();
}

export function getAllTechStack(projects: Project[]): string[] {
  const techSet = new Set<string>();
  projects.forEach((project) => {
    project.techStack.forEach((tech) => techSet.add(tech));
  });
  return Array.from(techSet).sort();
}
