import { X } from 'lucide-react';
import { motion } from 'framer-motion';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = 'Search projects...',
}: SearchBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative max-w-2xl mx-auto"
    >
      <div className="relative">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-accent-500 font-mono text-sm">
          {'>'}
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-8 pr-12 py-4 text-gray-900 dark:text-gray-100 frosted-glass rounded-lg focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all placeholder-gray-500 dark:placeholder-gray-600 font-mono"
        />
        {value && (
          <button
            onClick={() => onChange('')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 text-gray-500 hover:text-accent-500 transition-colors"
          >
            <X size={18} />
          </button>
        )}
      </div>
    </motion.div>
  );
}
