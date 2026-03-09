import { useState, useMemo } from 'react';
import type { Project } from '../types/project';
import { filterProjects } from '../utils/filterProjects';
import type { FilterOptions } from '../utils/filterProjects';
import projectsData from '../data/projects.json';

export function useProjects() {
  const [filters, setFilters] = useState<FilterOptions>({
    searchQuery: '',
    selectedTags: [],
    selectedBatches: [],
    selectedTechStack: [],
  });

  const projects = projectsData as Project[];

  const filteredProjects = useMemo(() => {
    return filterProjects(projects, filters);
  }, [projects, filters]);

  const updateSearchQuery = (query: string) => {
    setFilters((prev) => ({ ...prev, searchQuery: query }));
  };

  const toggleTag = (tag: string) => {
    setFilters((prev) => ({
      ...prev,
      selectedTags: prev.selectedTags.includes(tag)
        ? prev.selectedTags.filter((t) => t !== tag)
        : [...prev.selectedTags, tag],
    }));
  };

  const toggleBatch = (batch: string) => {
    setFilters((prev) => ({
      ...prev,
      selectedBatches: prev.selectedBatches.includes(batch)
        ? prev.selectedBatches.filter((b) => b !== batch)
        : [...prev.selectedBatches, batch],
    }));
  };

  const toggleTechStack = (tech: string) => {
    setFilters((prev) => ({
      ...prev,
      selectedTechStack: prev.selectedTechStack.includes(tech)
        ? prev.selectedTechStack.filter((t) => t !== tech)
        : [...prev.selectedTechStack, tech],
    }));
  };

  const clearFilters = () => {
    setFilters({
      searchQuery: '',
      selectedTags: [],
      selectedBatches: [],
      selectedTechStack: [],
    });
  };

  return {
    projects,
    filteredProjects,
    filters,
    updateSearchQuery,
    toggleTag,
    toggleBatch,
    toggleTechStack,
    clearFilters,
  };
}
