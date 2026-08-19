import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

export default function PersonalProjectsSection() {
  return (
    <section id="personal-projects">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col items-center justify-center gap-y-4">
          <div className="flex w-full items-center">
            <div className="h-px flex-1 bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="z-10 rounded-xl border bg-primary px-4 py-1">
              <span className="text-sm font-medium text-background">Personal Projects</span>
            </div>
            <div className="h-px flex-1 bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col items-center justify-center gap-y-3">
            <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl">Projects I&apos;ve built independently</h2>
            <p className="text-balance text-center text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              Products I designed and developed myself, from the initial idea through implementation and delivery.
            </p>
          </div>
        </div>
        <div className="mx-auto grid w-full max-w-[800px] auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2">
          {DATA.personalProjects.map((project) => (
            <BlurFade key={project.title} delay={0.1} className="h-full">
              <ProjectCard href={project.href} title={project.title} description={project.description} dates={project.dates} tags={project.technologies} image={project.image} video={project.video} links={project.links} />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
