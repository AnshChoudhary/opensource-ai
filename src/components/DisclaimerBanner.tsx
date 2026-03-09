import { AlertCircle } from 'lucide-react';

export default function DisclaimerBanner() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 py-3 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-gray-700 dark:text-gray-400 leading-relaxed font-mono">
            <strong className="text-gray-900 dark:text-white">Y Decombinator is an independent open-source project.</strong> We are NOT affiliated with, sponsored by, or endorsed by Y Combinator or any of its portfolio companies. We just think software should be open. This site provides critical commentary on the VC-backed "wrapper" startup culture and offers free alternatives.
          </p>
        </div>
      </div>
    </div>
  );
}
