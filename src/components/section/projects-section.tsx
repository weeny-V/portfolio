"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { useDeviceType } from "@/hooks/use-device-type";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const INITIAL_PROJECT_COUNT = 2;

export default function ProjectsSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isMobile } = useDeviceType();
  const previewProjectCount = isMobile ? 1 : 2;
  const hasMoreProjects = DATA.projects.length > INITIAL_PROJECT_COUNT;
  const visibleProjects = isExpanded
    ? DATA.projects
    : DATA.projects.slice(0, INITIAL_PROJECT_COUNT);
  const previewProjects = DATA.projects.slice(
    INITIAL_PROJECT_COUNT,
    INITIAL_PROJECT_COUNT + previewProjectCount
  );

  return (
    <section id="projects">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">
                Professional Projects
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Products I&apos;ve contributed to
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              A selection of commercial products I contributed to as part of
              cross-functional engineering teams. The descriptions highlight
              my role and contributions, not sole authorship.
            </p>
          </div>
        </div>

        <div id="all-projects" className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr w-full">
          {visibleProjects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={0.1}
              className="h-full"
            >
              <ProjectCard
                href={project.href}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>

        {!isExpanded && hasMoreProjects && (
          <div className="relative -mt-2 max-w-[800px] mx-auto w-full">
            <div
              className="grid grid-cols-1 gap-3 sm:grid-cols-2 h-44 overflow-hidden pointer-events-none select-none blur-[3px] opacity-45"
              aria-hidden="true"
              inert
            >
              {previewProjects.map((project) => (
                <ProjectCard
                  key={`preview-${project.title}`}
                  href={undefined}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={undefined}
                  links={[]}
                />
              ))}
            </div>
            <div className="absolute inset-0 bg-linear-to-b from-background/5 via-background/55 to-background" />
            <div className="absolute inset-x-0 bottom-[-20px] flex justify-center">
              <button
                type="button"
                onClick={() => setIsExpanded(true)}
                aria-expanded={false}
                aria-controls="all-projects"
                className="relative inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-background/95 px-5 text-sm font-medium text-foreground shadow-lg backdrop-blur-md transition-all hover:bg-accent hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Show more
                <ChevronDown className="size-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        )}

        {isExpanded && hasMoreProjects && (
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => setIsExpanded(false)}
              aria-expanded={true}
              aria-controls="all-projects"
              className="inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-background px-5 text-sm font-medium text-foreground transition-all hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Show less
              <ChevronUp className="size-4" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

