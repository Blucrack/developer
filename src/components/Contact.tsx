"use client";

import { useState, type FormEvent } from "react";
import { brand, projects } from "@/data/content";

const inputClass =
  "w-full rounded-lg border border-white/15 bg-ink px-4 py-3 text-sm placeholder:text-sand/40 focus:border-gold focus:outline-none";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  // No backend yet: hook this up to a CRM or API route before launch.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-ink-soft">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-32">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Get in touch</p>
          <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
            Book a private viewing
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-sand/70">
            Tell us what you&apos;re looking for and a property consultant will contact you within one
            business day.
          </p>
          <dl className="mt-10 space-y-5 text-sm">
            <div>
              <dt className="text-sand/50">Phone</dt>
              <dd className="mt-1">
                <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="hover:text-gold">
                  {brand.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sand/50">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${brand.email}`} className="hover:text-gold">
                  {brand.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sand/50">Sales gallery</dt>
              <dd className="mt-1">{brand.address}</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-2xl border border-white/10 bg-ink/60 p-6 sm:p-10">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-16 text-center">
              <p className="font-display text-3xl text-gold-light">Thank you</p>
              <p className="mt-3 max-w-sm text-sand/70">
                Your request has been received. One of our consultants will be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
              <label className="sm:col-span-2">
                <span className="mb-2 block text-sm text-sand/70">Full name</span>
                <input name="name" required autoComplete="name" className={inputClass} placeholder="Your name" />
              </label>
              <label>
                <span className="mb-2 block text-sm text-sand/70">Email</span>
                <input name="email" type="email" required autoComplete="email" className={inputClass} placeholder="you@example.com" />
              </label>
              <label>
                <span className="mb-2 block text-sm text-sand/70">Phone</span>
                <input name="phone" type="tel" autoComplete="tel" className={inputClass} placeholder="+971" />
              </label>
              <label className="sm:col-span-2">
                <span className="mb-2 block text-sm text-sand/70">Interested in</span>
                <select name="project" className={inputClass} defaultValue="">
                  <option value="" disabled>
                    Select a project
                  </option>
                  {projects.map((p) => (
                    <option key={p.name}>{p.name}</option>
                  ))}
                  <option>Not sure yet</option>
                </select>
              </label>
              <label className="sm:col-span-2">
                <span className="mb-2 block text-sm text-sand/70">Message</span>
                <textarea name="message" rows={4} className={inputClass} placeholder="Budget, preferred unit size, timeline…" />
              </label>
              <button
                type="submit"
                className="rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-gold-light sm:col-span-2"
              >
                Send request
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
