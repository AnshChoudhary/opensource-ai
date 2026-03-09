export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-2 font-mono text-sm">
              {'//'} Showcasing open-source AI projects from Y Combinator startups
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 font-mono">
              © {new Date().getFullYear()} Y_Decombinator. All rights reserved.
            </p>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
            <p className="text-xs text-gray-600 dark:text-gray-500 leading-relaxed max-w-4xl mx-auto text-center font-mono">
              <strong className="text-gray-700 dark:text-gray-400">Y Decombinator is an independent open-source project.</strong> We are NOT affiliated with, sponsored by, or endorsed by Y Combinator or any of its portfolio companies. We just think software should be open. This site provides critical commentary on the VC-backed "wrapper" startup culture and offers free alternatives. All product names, logos, and brands are property of their respective owners. Their use here is for comparative and informational purposes only. Price comparisons and feature descriptions are provided for informational purposes and should be verified independently.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
