import { projects } from "@/data/content";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <SectionHeading
        eyebrow="Featured projects"
        title="A portfolio of signature addresses"
        text="From waterfront apartments to beachfront villas, each project is built to the highest specification."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-ink-soft transition-transform duration-300 hover:-translate-y-1"
          >
            <div className={`relative h-60 bg-gradient-to-br ${project.gradient}`}>
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(11,15,20,0.85),transparent_60%)]" />
              <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-xs font-medium backdrop-blur">
                {project.status}
              </span>
              <div className="absolute bottom-4 left-5 right-5">
                <p className="text-xs uppercase tracking-widest text-sand/70">{project.location}</p>
                <h3 className="mt-1 font-display text-2xl">{project.name}</h3>
              </div>
            </div>
            <dl className="grid grid-cols-2 gap-4 p-5 text-sm">
              <div>
                <dt className="text-sand/50">Starting from</dt>
                <dd className="mt-1 font-medium text-gold-light">{project.priceFrom}</dd>
              </div>
              <div>
                <dt className="text-sand/50">Handover</dt>
                <dd className="mt-1 font-medium">{project.handover}</dd>
              </div>
              <div className="col-span-2">
                <dt className="text-sand/50">Units</dt>
                <dd className="mt-1">{project.type}</dd>
              </div>
            </dl>
            <div className="px-5 pb-5">
              <a href="#contact" className="text-sm font-medium text-gold transition-colors group-hover:text-gold-light">
                Enquire about this project →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
