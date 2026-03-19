import { Github, Mail, Code2, Shield, Lock, DollarSign, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-[1080px] px-6 py-16 sm:px-8 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="yc-pill mb-6">
            <Code2 className="mr-2 h-4 w-4 text-accent-500" />
            Why this project exists
          </div>
          <h1 className="max-w-3xl font-display text-4xl text-[#fff7ef] md:text-5xl">
            Open-sourcing the products people keep trying to rent back to you.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#b7aea3]">
            This project catalogs open-source AI tools that cover the same jobs as startup products,
            so builders can run them directly, inspect the code, and keep control of their data.
          </p>
        </motion.div>

        <div className="space-y-8">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="frosted-glass rounded-2xl p-8"
          >
            <h2 className="mb-4 text-2xl font-semibold text-[#fff7ef]">
              Our mission
            </h2>
            <p className="mb-4 leading-7 text-[#b7aea3]">
              A large share of AI startups package public models behind a polished interface, recurring
              pricing, and closed infrastructure. In many cases, the defensible part is thin while the
              user still pays like they are buying something irreplaceable.
            </p>
            <p className="mb-4 leading-7 text-[#b7aea3]">
              We want to make those product ideas legible, reproducible, and open. If the workflow can be
              built transparently and hosted by the user, it should be easy to discover an open-source path.
            </p>
            <p className="leading-7 text-[#d7cdc1]">
              This is partly a directory and partly a point of view: software should be understandable,
              portable, and much easier to own.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="frosted-glass rounded-2xl p-8"
          >
            <h2 className="mb-6 text-2xl font-semibold text-[#fff7ef]">
              Why this matters
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-[#342c26] bg-[#181410] p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#3c332c] bg-[#211b16]">
                  <Code2 className="h-5 w-5 text-accent-500" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#fff7ef]">Feature inflation</h3>
                <p className="leading-7 text-[#b7aea3]">
                  Many AI products are narrow workflows wrapped around a model call. A strong open-source
                  tool can often deliver the same utility without recurring SaaS markup.
                </p>
              </div>

              <div className="rounded-2xl border border-[#342c26] bg-[#181410] p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#3c332c] bg-[#211b16]">
                  <Shield className="h-5 w-5 text-accent-500" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#fff7ef]">Data ownership</h3>
                <p className="leading-7 text-[#b7aea3]">
                  Self-hostable tools let teams keep sensitive inputs on their own machines or cloud
                  accounts instead of routing everything through another vendor.
                </p>
              </div>

              <div className="rounded-2xl border border-[#342c26] bg-[#181410] p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#3c332c] bg-[#211b16]">
                  <DollarSign className="h-5 w-5 text-accent-500" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#fff7ef]">Cost clarity</h3>
                <p className="leading-7 text-[#b7aea3]">
                  Open tools make it clearer what you are really paying for: model usage, hosting, and
                  product polish, rather than a mystery bundle hidden in monthly pricing.
                </p>
              </div>

              <div className="rounded-2xl border border-[#342c26] bg-[#181410] p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#3c332c] bg-[#211b16]">
                  <Lock className="h-5 w-5 text-accent-500" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#fff7ef]">Lower lock-in</h3>
                <p className="leading-7 text-[#b7aea3]">
                  Open implementations give users leverage. You can fork, inspect, customize, and migrate
                  instead of rebuilding your workflow every time a startup changes pricing or disappears.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="frosted-glass rounded-2xl p-8"
          >
            <h2 className="mb-4 text-2xl font-semibold text-[#fff7ef]">
              Bring your own key
            </h2>
            <p className="mb-4 leading-7 text-[#b7aea3]">
              Most of these tools are not magic. They still rely on models, hosting, and infrastructure.
              When a project is BYOK, you bring the model account and pay directly for usage.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-[#342c26] bg-[#181410] p-5 text-[#d7cdc1]">
                You pay for actual model usage instead of a bundled subscription.
              </div>
              <div className="rounded-xl border border-[#342c26] bg-[#181410] p-5 text-[#d7cdc1]">
                You control rate limits, providers, and switching costs.
              </div>
              <div className="rounded-xl border border-[#342c26] bg-[#181410] p-5 text-[#d7cdc1]">
                You can swap APIs or run local models when the stack supports it.
              </div>
              <div className="rounded-xl border border-[#342c26] bg-[#181410] p-5 text-[#d7cdc1]">
                You keep a clearer line between software cost and model cost.
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="frosted-glass rounded-2xl p-8"
          >
            <h2 className="mb-4 text-2xl font-semibold text-[#fff7ef]">
              How to think about the stack
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-[#342c26] bg-[#181410] p-6">
                <h3 className="mb-2 text-lg font-semibold text-[#fff7ef]">Closed product path</h3>
                <p className="mb-2 text-sm text-[#d7cdc1]">
                  User → Proprietary layer → Monthly fee → Model provider
                </p>
                <p className="text-xs leading-6 text-[#8f857a]">
                  Usually faster to buy, but harder to inspect, move, or adapt.
                </p>
              </div>
              <div className="rounded-2xl border border-accent-500/25 bg-accent-500/5 p-6">
                <h3 className="mb-2 text-lg font-semibold text-[#fff7ef]">Open product path</h3>
                <p className="mb-2 text-sm text-accent-400">
                  User → Open-source app → Your key or local model → Your infrastructure
                </p>
                <p className="text-xs leading-6 text-[#b7aea3]">
                  Slightly more hands-on, but far more portable, inspectable, and customizable.
                </p>
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
              Contribute
            </h2>
            <p className="mb-6 leading-7 text-[#b7aea3]">
              Built an open-source alternative? Found a startup category that should have a public, reusable
              implementation? Send it over. The goal is to make good tools easier to find and easier to run.
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
                <ArrowRight size={16} className="text-accent-500" />
              </a>
              <a
                href="mailto:anshc19@gmail.com"
                className="group inline-flex items-center gap-3 rounded-xl border border-[#352d27] bg-[#221d18] px-6 py-3 text-[#f7efe7] hover:border-[#51443a]"
              >
                <Mail size={20} className="text-[#b7aea3] group-hover:text-white" />
                <span className="font-semibold">Email</span>
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
              Disclaimer
            </h2>
            <p className="leading-7 text-[#d7cdc1]">
              This is an independent project. Product names and brands are referenced for commentary and
              comparison only. The aim is to document open alternatives, not imply endorsement or affiliation.
            </p>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
