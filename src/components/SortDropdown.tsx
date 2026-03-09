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
        className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-gray-900 dark:text-gray-300 hover:border-accent-500/50 transition-colors font-mono text-sm"
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
          <div className="absolute top-full mt-2 right-0 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-xl z-20 min-w-[200px]">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm font-mono transition-colors ${
                  value === option.value
                    ? 'bg-gray-100 dark:bg-gray-800 text-accent-500'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
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
