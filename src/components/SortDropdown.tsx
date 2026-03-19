import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export type SortOption = 'name' | 'stars' | 'price' | 'newest';

interface SortDropdownProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const options: { value: SortOption; label: string }[] = [
    { value: 'name', label: 'Name (A-Z)' },
    { value: 'stars', label: 'Most Stars' },
    { value: 'price', label: 'Highest Price' },
    { value: 'newest', label: 'Newest First' },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 rounded-lg border border-[#352e27] bg-[#1b1713] px-4 py-2 text-sm text-[#f7efe7] transition-colors hover:border-[#52473d]"
      >
        <span>Sort: {options.find((o) => o.value === value)?.label}</span>
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full right-0 z-20 mt-2 min-w-[220px] rounded-xl border border-[#352e27] bg-[#1b1713] shadow-[0_24px_60px_rgba(0,0,0,0.3)]">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                  value === option.value
                    ? 'bg-accent-500/12 text-accent-400'
                    : 'text-[#d5ccc1] hover:bg-[#26211c]'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
