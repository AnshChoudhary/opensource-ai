import { Link, useLocation } from 'react-router-dom';
import { Github, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  const location = useLocation();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 frosted-glass border-b border-gray-800/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Code2 className="w-6 h-6 text-accent-500 group-hover:text-accent-400 transition-colors" />
            </div>
            <span className="text-xl font-bold text-white font-mono">Y_Decombinator</span>
          </Link>
          <nav className="flex items-center space-x-6">
            <Link
              to="/projects"
              className={`text-sm font-medium transition-colors font-mono ${
                location.pathname === '/projects'
                  ? 'text-accent-500'
                  : 'text-gray-400 hover:text-accent-500'
              }`}
            >
              {'>'} projects
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors font-mono ${
                location.pathname === '/about'
                  ? 'text-accent-500'
                  : 'text-gray-400 hover:text-accent-500'
              }`}
            >
              {'>'} about
            </Link>
            <Link
              to="/join"
              className={`text-sm font-medium transition-colors font-mono ${
                location.pathname === '/join'
                  ? 'text-accent-500'
                  : 'text-gray-400 hover:text-accent-500'
              }`}
            >
              {'>'} join
            </Link>
            <a
              href="https://github.com/AnshChoudhary/opensource-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-accent-500 hover:bg-gray-800/30 rounded-lg transition-colors backdrop-blur-sm"
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
