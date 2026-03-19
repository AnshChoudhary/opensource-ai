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
    <div className="min-h-screen">
      <div className="mx-auto max-w-[1080px] px-6 sm:px-8 lg:px-8 py-12">
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8f857a]">
            Project Directory
          </p>
          <h1 className="mt-3 font-display text-3xl text-[#fff7ef] md:text-4xl">
            Open-source AI startup alternatives
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-7 text-[#b7aea3]">
            Search, filter, and compare open-source projects that do the same jobs as popular AI startup products.
          </p>
        </div>

        <div className="mb-8">
          <SearchBar
            value={filters.searchQuery}
            onChange={updateSearchQuery}
          />
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center space-x-4">
            <ViewToggle view={view} onViewChange={setView} />
            <SortDropdown value={sortBy} onChange={setSortBy} />
          </div>
          <div className="text-sm text-[#b7aea3]">
            {sortedProjects.length} project{sortedProjects.length !== 1 ? 's' : ''} found
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 xl:grid-cols-[230px_minmax(0,1fr)]">
          <aside>
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

          <div className="min-w-0">
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
