import { brand, navLinks } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="font-display text-xl">{brand.name}</p>
          <p className="mt-2 text-sm text-sand/50">{brand.address}</p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-sand/60">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-gold">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="border-t border-white/10 py-6 text-center text-xs text-sand/40">
        © {new Date().getFullYear()} {brand.name}. All rights reserved.
      </p>
    </footer>
  );
}
