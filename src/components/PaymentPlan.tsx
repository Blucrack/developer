import { paymentPlan } from "@/data/content";
import SectionHeading from "./SectionHeading";

export default function PaymentPlan() {
  return (
    <section id="payment-plan" className="border-y border-white/10 bg-ink-soft">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <SectionHeading
          eyebrow="Payment plan"
          title="Own your home with as little as 10% down"
          text="Spread payments across the construction period, with the balance due on handover."
          align="center"
        />

        <div className="mx-auto mt-14 max-w-4xl">
          <div className="flex h-3 overflow-hidden rounded-full">
            {paymentPlan.map((step, i) => (
              <div
                key={step.label}
                style={{ width: `${step.percent}%` }}
                className={["bg-gold", "bg-gold/60", "bg-gold/30"][i % 3]}
              />
            ))}
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {paymentPlan.map((step) => (
              <div key={step.label} className="text-center">
                <p className="font-display text-5xl text-gold-light">{step.percent}%</p>
                <p className="mt-2 text-sm uppercase tracking-widest text-sand/60">{step.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-xs text-sand/40">
            Indicative plan. Terms vary by project and are confirmed in the sales agreement.
          </p>
        </div>
      </div>
    </section>
  );
}
