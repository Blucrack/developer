import { whyUae } from "@/data/content";
import SectionHeading from "./SectionHeading";

export default function WhyUae() {
  return (
    <section id="why-uae" className="bg-sand text-ink">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8 lg:py-32">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9a7b3c]">Why invest in the UAE</p>
          <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
            One of the world&apos;s most investor-friendly property markets
          </h2>
          <p className="mt-5 leading-relaxed text-ink/70">
            Stable currency pegged to the US dollar, full foreign ownership in freehold areas, and a
            fast-growing population make the UAE a compelling place to own property.
          </p>
        </div>
        <div className="grid gap-px overflow-hidden rounded-2xl bg-ink/10 sm:grid-cols-2">
          {whyUae.map((item, i) => (
            <div key={item.title} className="bg-sand p-8">
              <span className="font-display text-sm text-[#9a7b3c]">0{i + 1}</span>
              <h3 className="mt-3 font-display text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
