import { communities } from "@/data/content";
import SectionHeading from "./SectionHeading";

export default function Communities() {
  return (
    <section id="communities" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <SectionHeading
        eyebrow="Communities"
        title="Live where the UAE comes alive"
        text="We build in established, high-demand districts with strong capital appreciation and rental demand."
      />
      <ul className="mt-14 divide-y divide-white/10 border-y border-white/10">
        {communities.map((community, i) => (
          <li key={community.name}>
            <a
              href="#contact"
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 py-6 sm:gap-8 sm:py-8"
            >
              <span className="w-8 font-display text-sm text-sand/40">0{i + 1}</span>
              <div className="sm:flex sm:items-baseline sm:gap-8">
                <h3 className="font-display text-2xl transition-colors group-hover:text-gold sm:min-w-72 sm:text-3xl">
                  {community.name}
                </h3>
                <p className="mt-1 text-sm text-sand/60 sm:mt-0">{community.tagline}</p>
              </div>
              <span className="text-xl text-sand/40 transition-all group-hover:translate-x-1 group-hover:text-gold">→</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
