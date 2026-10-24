type Props = {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export default function SectionHeading({ eyebrow, title, text, align = "left" }: Props) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
      <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl md:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-base leading-relaxed text-sand/70">{text}</p>}
    </div>
  );
}
