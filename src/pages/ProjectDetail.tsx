import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Star, Calendar, DollarSign, Key } from 'lucide-react';
import projectsData from '../data/projects.json';
import type { Project } from '../types/project';
import { motion } from 'framer-motion';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const projects = projectsData as Project[];
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-[1080px] px-6 sm:px-8 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link
            to="/"
            className="mb-8 inline-flex items-center space-x-2 text-sm font-medium text-[#b7aea3] hover:text-white"
          >
            <ArrowLeft size={20} />
            <span>Back to alternatives</span>
          </Link>

          <div className="overflow-hidden rounded-2xl border border-[#302922] bg-[#1d1915]">
            <div className="border-b border-[#2d2721] bg-[#211c17] p-8">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <h1 className="font-display text-3xl text-[#fff7ef] md:text-4xl">{project.name}</h1>
                    {project.featured && (
                      <span className="inline-flex items-center rounded-full border border-accent-500/40 bg-accent-500/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-400">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="mb-4 max-w-2xl text-base leading-7 text-[#b7aea3]">{project.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                {project.stars !== undefined && (
                  <div className="flex items-center space-x-2 text-[#b7aea3]">
                    <Star size={20} className="text-accent-500 fill-accent-500/20" />
                    <span>{project.stars.toLocaleString()} stars</span>
                  </div>
                )}
                <div className="flex items-center space-x-2 text-[#b7aea3]">
                  <Calendar size={20} />
                  <span>YC {project.ycBatch}</span>
                </div>
                {project.byok && (
                  <div className="flex items-center space-x-2 text-accent-400">
                    <Key size={20} />
                    <span>BYOK</span>
                  </div>
                )}
              </div>
            </div>

            <div className="p-8">
              {/* Comparison Section */}
              <div className="mb-8 rounded-2xl border border-[#342c26] bg-[#181410] p-6">
                <h2 className="mb-4 text-xl font-semibold text-[#fff7ef]">
                  Cost comparison
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="rounded-xl border border-[#4a2e1c] bg-[#221915] p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <DollarSign size={18} className="text-[#ff9e63]" />
                      <h3 className="font-semibold text-[#fff7ef]">Proprietary Service</h3>
                    </div>
                    <p className="mb-1 text-[#e2d7ca]">{project.proprietaryService}</p>
                    <p className="font-semibold text-[#ffb37e]">{project.proprietaryPrice}</p>
                    <p className="mt-2 text-xs text-[#8f857a]">Monthly subscription, vendor lock-in, and hosted data flow.</p>
                  </div>
                  <div className="rounded-xl border border-accent-500/35 bg-accent-500/5 p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-accent-500">→</span>
                      <h3 className="font-semibold text-[#fff7ef]">Open Alternative</h3>
                    </div>
                    <p className="mb-1 text-[#e2d7ca]">{project.name}</p>
                    <p className="font-semibold text-accent-400">$0/month</p>
                    <p className="mt-2 text-xs text-[#b7aea3]">Open-source, self-hosted, and your infrastructure stays yours.</p>
                  </div>
                </div>
                <p className="text-center text-xs italic text-[#8f857a]">
                  * Price information is provided for informational purposes only and should be verified independently. 
                  Pricing may vary and is subject to change.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="mb-8">
                    <h2 className="mb-4 text-xl font-semibold text-[#fff7ef]">
                      About
                    </h2>
                    <p className="mb-4 leading-7 text-[#b7aea3]">
                      {project.longDescription}
                    </p>
                    {project.byok && (
                      <div className="mt-4 rounded-xl border border-accent-500/25 bg-accent-500/5 p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Key size={18} className="text-accent-500" />
                          <h3 className="font-semibold text-[#fff7ef]">Bring Your Own Key (BYOK)</h3>
                        </div>
                        <p className="text-sm leading-6 text-[#b7aea3]">
                          This project requires you to provide your own API keys (OpenAI, Anthropic, etc.). 
                          You pay only for API usage—no monthly subscription fees. Optionally, you can run 
                          local models for zero API costs.
                        </p>
                      </div>
                    )}
                  </div>

                  <div>
                    <h2 className="mb-4 text-xl font-semibold text-[#fff7ef]">
                      Links
                    </h2>
                    <div className="flex flex-col space-y-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center space-x-3 rounded-xl border border-[#342d26] bg-[#221d18] p-4 transition-colors hover:border-[#51443a]"
                      >
                        <div className="rounded-lg border border-[#3b332c] bg-[#1a1612] p-2">
                          <Github size={24} className="text-[#b7aea3] group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <div className="font-semibold text-[#fff7ef] transition-colors group-hover:text-white">GitHub</div>
                          <div className="text-sm text-[#8f857a]">Source code</div>
                        </div>
                      </a>
                      {project.websiteUrl && (
                        <a
                          href={project.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center space-x-3 rounded-xl border border-[#342d26] bg-[#221d18] p-4 transition-colors hover:border-[#51443a]"
                        >
                          <div className="rounded-lg border border-[#3b332c] bg-[#1a1612] p-2">
                            <ExternalLink size={24} className="text-[#b7aea3] group-hover:text-white transition-colors" />
                          </div>
                          <div>
                            <div className="font-semibold text-[#fff7ef] transition-colors group-hover:text-white">Website</div>
                            <div className="text-sm text-[#8f857a]">Official site</div>
                          </div>
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center space-x-3 rounded-xl border border-[#342d26] bg-[#221d18] p-4 transition-colors hover:border-[#51443a]"
                        >
                          <div className="rounded-lg border border-[#3b332c] bg-[#1a1612] p-2">
                            <ExternalLink size={24} className="text-[#b7aea3] group-hover:text-white transition-colors" />
                          </div>
                          <div>
                            <div className="font-semibold text-[#fff7ef] transition-colors group-hover:text-white">Demo</div>
                            <div className="text-sm text-[#8f857a]">Try it out</div>
                          </div>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <aside className="lg:col-span-1">
                  <div className="rounded-2xl border border-[#302922] bg-[#1a1612] p-6 space-y-6">
                    <div>
                      <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#8f857a]">
                        Replaces
                      </h3>
                      <p className="text-lg font-semibold text-[#fff7ef]">{project.startupName}</p>
                      <p className="mt-1 text-sm text-[#8f857a]">YC {project.ycBatch}</p>
                    </div>

                    <div>
                      <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#8f857a]">
                        Tags
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-[#3a322b] bg-[#211c17] px-3 py-1.5 text-sm text-[#d8cfc4]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#8f857a]">
                        Tech Stack
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-accent-500/25 bg-accent-500/8 px-3 py-1.5 text-sm text-accent-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
