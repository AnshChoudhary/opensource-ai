export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[#2b241e] bg-[#120f0c]">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10 py-12">
        <div className="space-y-6 text-center">
          <div>
            <p className="mb-2 text-sm font-medium text-[#f2ece5]">
              Open-source alternatives to AI startups, built for people who want to run the product themselves.
            </p>
            <p className="text-sm text-[#8f857a]">
              © {new Date().getFullYear()} Open Source AI Startups.
            </p>
          </div>
          <div className="border-t border-[#2b241e] pt-6">
            <p className="mx-auto max-w-4xl text-xs leading-relaxed text-[#8f857a]">
              <strong className="font-semibold text-[#d8cfc4]">This is an independent open-source project.</strong> Product names, logos, and brands belong to their respective owners and are used here for comparison and commentary only. Price and feature data should be verified independently.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
