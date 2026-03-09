import { useState, useMemo } from 'react';
import { useProjects } from '../hooks/useProjects';
import SearchBar from '../components/SearchBar';
import FilterTags from '../components/FilterTags';
import ProjectGrid from '../components/ProjectGrid';
import ProjectList from '../components/ProjectList';
import ViewToggle from '../components/ViewToggle';
import SortDropdown, { type SortOption } from '../components/SortDropdown';
import { sortProjects } from '../utils/filterProjects';

export default function Projects() {
  const {
    filteredProjects,
    filters,
    updateSearchQuery,
    toggleTag,
    toggleBatch,
    toggleTechStack,
    clearFilters,
    projects,
  } = useProjects();

  const [view, setView] = useState<'card' | 'list'>('card');
  const [sortBy, setSortBy] = useState<SortOption>('name');

  const sortedProjects = useMemo(() => {
    return sortProjects(filteredProjects, sortBy);
  }, [filteredProjects, sortBy]);

  return (
    <div className="min-h-screen bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 font-mono">
            <span className="text-accent-500">{'//'}</span> All Projects
          </h1>
          <p className="text-gray-400 font-mono text-sm">
            Browse open-source alternatives to Y Combinator AI startups
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar
            value={filters.searchQuery}
            onChange={updateSearchQuery}
          />
        </div>

        {/* Controls Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center space-x-4">
            <ViewToggle view={view} onViewChange={setView} />
            <SortDropdown value={sortBy} onChange={setSortBy} />
          </div>
          <div className="text-gray-400 font-mono text-sm">
            {sortedProjects.length} project{sortedProjects.length !== 1 ? 's' : ''} found
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1">
            <FilterTags
              projects={projects}
              selectedTags={filters.selectedTags}
              selectedBatches={filters.selectedBatches}
              selectedTechStack={filters.selectedTechStack}
              onToggleTag={toggleTag}
              onToggleBatch={toggleBatch}
              onToggleTechStack={toggleTechStack}
              onClearFilters={clearFilters}
            />
          </aside>

          {/* Projects Display */}
          <div className="lg:col-span-3">
            {view === 'card' ? (
              <ProjectGrid projects={sortedProjects} />
            ) : (
              <ProjectList projects={sortedProjects} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
