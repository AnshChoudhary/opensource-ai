import { useProjects } from '../hooks/useProjects';
import ProjectGrid from '../components/ProjectGrid';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export default function Home() {
  const { projects } = useProjects();
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 6);

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden border-b border-[#29231d]">
        <div className="absolute inset-0 bg-grid-white opacity-30" />
        <div className="relative mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10 py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_360px] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="yc-pill mb-6">
                <Sparkles className="mr-2 h-4 w-4 text-accent-500" />
                Open-source alternatives to AI startups
              </div>
              <h1 className="yc-section-title max-w-4xl">
                Open-sourcing the AI startup playbook,
                <span className="text-accent-500"> one product at a time.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 yc-muted">
                Browse open-source replacements for YC-backed AI startups, compare what they charge,
                and find projects you can run yourself with your own keys, stack, and infrastructure.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/projects" className="yc-button-primary">
                  Explore projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a href="/about" className="yc-button-secondary">
                  Why this exists
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 text-sm">
                <span className="yc-pill">$0 platform fee</span>
                <span className="yc-pill">Self-hosted first</span>
                <span className="yc-pill">Bring your own model keys</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.5 }}
              className="frosted-glass rounded-2xl p-6"
            >
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8f857a]">
                What You Get
              </p>
              <div className="mt-6 space-y-5">
                <div className="border-b border-[#302922] pb-5">
                  <div className="text-2xl font-semibold text-[#fff7ef]">{projects.length}+</div>
                  <p className="mt-2 text-sm leading-6 text-[#b7aea3]">
                    Open-source projects mapped to fast-growing AI startup categories and adjacent tools.
                  </p>
                </div>
                <div className="space-y-4">
                  {[
                    'Direct links to GitHub repos and live demos when available.',
                    'Cost framing that makes subscription pricing easier to compare.',
                    'Filters for batch, tags, and tech stack so you can scan quickly.',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-500" />
                      <p className="text-sm leading-6 text-[#d7cdc1]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10 py-16">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8f857a]">
              Featured Alternatives
            </p>
            <h2 className="mt-3 font-display text-3xl text-[#fff7ef] md:text-4xl">
              Popular projects worth starting with
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-[#b7aea3]">
              A curated set of strong open-source options for some of the most visible AI startup categories.
            </p>
          </div>
          <a
            href="/projects"
            className="inline-flex items-center text-sm font-semibold text-accent-400 hover:text-accent-500"
          >
            View all projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
        <ProjectGrid projects={featuredProjects} className="lg:grid-cols-3 2xl:grid-cols-3" />
      </section>
    </div>
  );
}
