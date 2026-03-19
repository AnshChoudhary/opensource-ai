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
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium text-accent-400">
          Search
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-xl border border-[#302922] bg-[#1b1713] py-4 pl-20 pr-12 text-[#f7efe7] shadow-[0_14px_40px_rgba(0,0,0,0.22)] transition-all placeholder:text-[#7d7368] focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/15"
        />
        {value && (
          <button
            onClick={() => onChange('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-[#8f857a] hover:text-accent-400 transition-colors"
          >
            <X size={18} />
          </button>
        )}
      </div>
    </motion.div>
  );
}
