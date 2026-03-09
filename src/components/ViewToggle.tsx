import { Grid, List } from 'lucide-react';

interface ViewToggleProps {
  view: 'card' | 'list';
  onViewChange: (view: 'card' | 'list') => void;
}

export default function ViewToggle({ view, onViewChange }: ViewToggleProps) {
  return (
    <div className="flex items-center space-x-2 bg-gray-900 border border-gray-800 rounded-lg p-1">
      <button
        onClick={() => onViewChange('card')}
        className={`p-2 rounded transition-colors ${
          view === 'card'
            ? 'bg-gray-800 text-accent-500'
            : 'text-gray-400 hover:text-gray-300'
        }`}
        aria-label="Card view"
      >
        <Grid size={18} />
      </button>
      <button
        onClick={() => onViewChange('list')}
        className={`p-2 rounded transition-colors ${
          view === 'list'
            ? 'bg-gray-800 text-accent-500'
            : 'text-gray-400 hover:text-gray-300'
        }`}
        aria-label="List view"
      >
        <List size={18} />
      </button>
    </div>
  );
}
