import { Grid, List } from 'lucide-react';

interface ViewToggleProps {
  view: 'card' | 'list';
  onViewChange: (view: 'card' | 'list') => void;
}

export default function ViewToggle({ view, onViewChange }: ViewToggleProps) {
  return (
    <div className="flex items-center space-x-2 rounded-lg border border-[#352e27] bg-[#1b1713] p-1">
      <button
        onClick={() => onViewChange('card')}
        className={`p-2 rounded transition-colors ${
          view === 'card'
            ? 'bg-[#2a231d] text-accent-400'
            : 'text-[#8f857a] hover:text-[#f3ece5]'
        }`}
        aria-label="Card view"
      >
        <Grid size={18} />
      </button>
      <button
        onClick={() => onViewChange('list')}
        className={`p-2 rounded transition-colors ${
          view === 'list'
            ? 'bg-[#2a231d] text-accent-400'
            : 'text-[#8f857a] hover:text-[#f3ece5]'
        }`}
        aria-label="List view"
      >
        <List size={18} />
      </button>
    </div>
  );
}
