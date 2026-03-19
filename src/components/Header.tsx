import { Link, useLocation } from 'react-router-dom';
import { Braces, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  const location = useLocation();

  const navLinkClass = (path: string) =>
    `text-sm font-medium transition-colors ${
      location.pathname === path
        ? 'text-[#fff7ef]'
        : 'text-[#b7aea3] hover:text-white'
    }`;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 border-b border-[#2d2721] bg-[#15120f]/95 backdrop-blur"
    >
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16 gap-6">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#43362b] bg-[#1c1713] text-accent-500 shadow-[0_8px_24px_rgba(255,102,0,0.18)]">
              <Braces size={18} />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#fff7ef]">Y Decombinator</div>
              <div className="text-xs text-[#8f857a]">Open-sourcing startup ideas built on AI</div>
            </div>
          </Link>
          <nav className="flex items-center space-x-5">
            <Link to="/projects" className={navLinkClass('/projects')}>
              Projects
            </Link>
            <Link to="/about" className={navLinkClass('/about')}>
              About
            </Link>
            <Link to="/join" className={navLinkClass('/join')}>
              Submit
            </Link>
            <a
              href="https://github.com/AnshChoudhary/opensource-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-[#2f2923] bg-[#1b1713] p-2 text-[#b7aea3] hover:border-[#453a31] hover:text-white"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
