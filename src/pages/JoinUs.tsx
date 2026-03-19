import { Github, Mail, Code2, Star, Users, Zap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function JoinUs() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-[1080px] px-6 py-16 sm:px-8 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="yc-pill mb-6">
            <Users className="mr-2 h-4 w-4 text-accent-500" />
            Submit a project
          </div>
          <h1 className="max-w-3xl font-display text-4xl text-[#fff7ef] md:text-5xl">
            Help expand the catalog of open-source AI startup alternatives.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#b7aea3]">
            If you have built a strong open-source tool or know a category that deserves a better public
            implementation, send it in. We want this directory to be useful, sharp, and well maintained.
          </p>
        </motion.div>

        <div className="space-y-8">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="frosted-glass rounded-2xl p-8"
          >
            <div className="mb-6 flex items-start space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#3c332c] bg-[#211b16]">
                <Code2 className="h-5 w-5 text-accent-500" />
              </div>
              <div className="flex-1">
                <h2 className="mb-4 text-2xl font-semibold text-[#fff7ef]">
                  What we want to feature
                </h2>
                <p className="mb-4 leading-7 text-[#b7aea3]">
                  We are looking for open-source products that solve the same user job as an AI startup:
                  document workflows, coding helpers, research tools, sales automation, security copilots,
                  and other narrow AI applications.
                </p>
                <p className="leading-7 text-[#b7aea3]">
                  The best submissions are usable, documented, and clear about how they work. They do not
                  need to be huge. They just need to be real and valuable.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="frosted-glass rounded-2xl p-8"
          >
            <h2 className="mb-6 text-2xl font-semibold text-[#fff7ef]">
              How to get featured
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-accent-500/35 bg-accent-500/10">
                  <span className="font-semibold text-accent-400">1</span>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-[#fff7ef]">Build something usable</h3>
                  <p className="leading-7 text-[#b7aea3]">
                    Your project should solve a concrete workflow, be open-source, and preferably be
                    runnable with your own keys or local models.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-accent-500/35 bg-accent-500/10">
                  <span className="font-semibold text-accent-400">2</span>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-[#fff7ef]">Send the details</h3>
                  <p className="leading-7 text-[#b7aea3]">
                    Open a pull request on GitHub or email the core details:
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-[#d7cdc1]">
                    <li>Project name and one-sentence description</li>
                    <li>GitHub repository URL and demo URL if available</li>
                    <li>What product or category it replaces</li>
                    <li>Key tags, stack details, and whether it is BYOK</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-accent-500/35 bg-accent-500/10">
                  <span className="font-semibold text-accent-400">3</span>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-[#fff7ef]">We review and publish it</h3>
                  <p className="leading-7 text-[#b7aea3]">
                    Once approved, the project is added to the directory with its links, category fit,
                    and any relevant notes that help users evaluate it quickly.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="frosted-glass rounded-2xl p-8"
          >
            <h2 className="mb-6 text-2xl font-semibold text-[#fff7ef]">
              What we look for
            </h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-[#342c26] bg-[#181410] p-5">
                <div className="mb-2 flex items-center space-x-2">
                  <Star className="h-5 w-5 text-accent-500" />
                  <h3 className="font-semibold text-[#fff7ef]">Quality</h3>
                </div>
                <p className="text-sm leading-6 text-[#b7aea3]">
                  Clear docs, a working product, and enough polish that someone can actually use it.
                </p>
              </div>
              <div className="rounded-2xl border border-[#342c26] bg-[#181410] p-5">
                <div className="mb-2 flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-accent-500" />
                  <h3 className="font-semibold text-[#fff7ef]">Active development</h3>
                </div>
                <p className="text-sm leading-6 text-[#b7aea3]">
                  We prefer tools that are being maintained and improved, not abandoned experiments.
                </p>
              </div>
              <div className="rounded-2xl border border-[#342c26] bg-[#181410] p-5">
                <div className="mb-2 flex items-center space-x-2">
                  <Code2 className="h-5 w-5 text-accent-500" />
                  <h3 className="font-semibold text-[#fff7ef]">Open source</h3>
                </div>
                <p className="text-sm leading-6 text-[#b7aea3]">
                  The code should be publicly available and genuinely inspectable.
                </p>
              </div>
              <div className="rounded-2xl border border-[#342c26] bg-[#181410] p-5">
                <div className="mb-2 flex items-center space-x-2">
                  <Users className="h-5 w-5 text-accent-500" />
                  <h3 className="font-semibold text-[#fff7ef]">Usefulness</h3>
                </div>
                <p className="text-sm leading-6 text-[#b7aea3]">
                  We want tools that help real users, not just clones made for optics.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="frosted-glass rounded-2xl p-8"
          >
            <h2 className="mb-6 text-2xl font-semibold text-[#fff7ef]">
              Why contribute
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-[#342c26] bg-[#181410] p-5 text-[#d7cdc1]">
                Get your project in front of users actively looking for open alternatives.
              </div>
              <div className="rounded-xl border border-[#342c26] bg-[#181410] p-5 text-[#d7cdc1]">
                Help shape a public directory that critiques lock-in with actual working software.
              </div>
              <div className="rounded-xl border border-[#342c26] bg-[#181410] p-5 text-[#d7cdc1]">
                Make it easier for teams to discover self-hosted or BYOK options.
              </div>
              <div className="rounded-xl border border-[#342c26] bg-[#181410] p-5 text-[#d7cdc1]">
                Add signal to the ecosystem by documenting what is real, useful, and open.
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="frosted-glass rounded-2xl p-8"
          >
            <h2 className="mb-4 text-2xl font-semibold text-[#fff7ef]">
              Get started
            </h2>
            <p className="mb-6 leading-7 text-[#b7aea3]">
              Ready to submit something? Send a PR or email with the project details and context.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/AnshChoudhary/opensource-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-xl border border-[#352d27] bg-[#221d18] px-6 py-3 text-[#f7efe7] hover:border-[#51443a]"
              >
                <Github size={20} className="text-[#b7aea3] group-hover:text-white" />
                <span className="font-semibold">GitHub</span>
                <span className="text-sm text-[#8f857a]">Submit PR</span>
                <ArrowRight size={16} className="text-accent-500" />
              </a>
              <a
                href="mailto:anshc19@gmail.com"
                className="group inline-flex items-center gap-3 rounded-xl border border-[#352d27] bg-[#221d18] px-6 py-3 text-[#f7efe7] hover:border-[#51443a]"
              >
                <Mail size={20} className="text-[#b7aea3] group-hover:text-white" />
                <span className="font-semibold">Email</span>
                <span className="text-sm text-[#8f857a]">anshc19@gmail.com</span>
                <ArrowRight size={16} className="text-accent-500" />
              </a>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="rounded-2xl border border-accent-500/25 bg-accent-500/5 p-8"
          >
            <h2 className="mb-4 text-2xl font-semibold text-[#fff7ef]">
              Questions?
            </h2>
            <p className="leading-7 text-[#d7cdc1]">
              If you want to discuss whether a tool fits the directory before submitting it, reach out.
              Strong curation matters as much as growth.
            </p>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
