import { AlertCircle } from 'lucide-react';

export default function DisclaimerBanner() {
  return (
    <div className="border-b border-[#26211c] bg-[#120f0c] py-3 px-4">
      <div className="mx-auto max-w-[1240px] px-2 sm:px-4 lg:px-6">
        <div className="flex items-start gap-3">
          <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-500" />
          <p className="text-xs leading-relaxed text-[#9f958a]">
            <strong className="font-semibold text-[#f7efe7]">Independent project.</strong> Not affiliated with or endorsed by Y Combinator or its portfolio companies. This site exists to surface open-source alternatives and critique subscription-only wrapper products.
          </p>
        </div>
      </div>
    </div>
  );
}
