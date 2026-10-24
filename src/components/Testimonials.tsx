import { testimonials } from "@/data/content";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <SectionHeading eyebrow="Our clients" title="Trusted by homeowners and investors" />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure key={t.detail} className="flex flex-col rounded-2xl border border-white/10 p-8">
            <span className="font-display text-5xl leading-none text-gold">&ldquo;</span>
            <blockquote className="mt-2 flex-1 leading-relaxed text-sand/80">{t.quote}</blockquote>
            <figcaption className="mt-8 border-t border-white/10 pt-5 text-sm">
              <p className="font-medium">{t.name}</p>
              <p className="text-sand/50">{t.detail}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
