import { heroStats } from "@/data/content";
import Skyline from "./Skyline";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#3a2c14_0%,_#141a22_45%,_#0b0f14_80%)]" />
      <div className="absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-gold/25 blur-3xl" />
      <Skyline className="absolute inset-x-0 bottom-0 h-[32vh] w-full" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pb-48 pt-32 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Dubai · Abu Dhabi</p>
        <h1 className="mt-6 max-w-4xl font-display text-4xl leading-[1.1] sm:text-6xl lg:text-7xl">
          Residences that define <em className="text-gold-light">the skyline</em>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-sand/75 sm:text-lg">
          Off-plan and ready homes in the UAE&apos;s most sought-after communities, with flexible
          payment plans and Golden Visa eligibility.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="rounded-full bg-gold px-7 py-3.5 text-center text-sm font-medium text-ink transition-colors hover:bg-gold-light"
          >
            Explore projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-sand/30 px-7 py-3.5 text-center text-sm font-medium transition-colors hover:border-gold hover:text-gold"
          >
            Request a brochure
          </a>
        </div>

        <dl className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-3xl text-gold-light sm:text-4xl">{stat.value}</dd>
              <dd className="mt-1 text-xs text-sand/60 sm:text-sm">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
