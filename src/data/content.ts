// Sample content. Replace project names, prices and quotes with real listings before launch.

export const brand = {
  name: "Meridian Properties",
  phone: "+971 4 000 0000",
  email: "sales@example.com",
  address: "Business Bay, Dubai, United Arab Emirates",
};

export const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Why UAE", href: "#why-uae" },
  { label: "Communities", href: "#communities" },
  { label: "Payment Plan", href: "#payment-plan" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: "25+", label: "Years of delivery" },
  { value: "12k", label: "Homes handed over" },
  { value: "0%", label: "Personal income tax" },
];

export type Project = {
  name: string;
  location: string;
  type: string;
  priceFrom: string;
  handover: string;
  status: "Off-plan" | "Ready" | "Launching soon";
  gradient: string;
};

export const projects: Project[] = [
  {
    name: "Azure Bay Residences",
    location: "Dubai Marina",
    type: "1–4 BR apartments",
    priceFrom: "AED 1.6M",
    handover: "Q4 2028",
    status: "Off-plan",
    gradient: "from-sky-900 via-cyan-800 to-teal-600",
  },
  {
    name: "The Palm Villas",
    location: "Palm Jumeirah",
    type: "5–6 BR beachfront villas",
    priceFrom: "AED 18M",
    handover: "Ready",
    status: "Ready",
    gradient: "from-amber-900 via-orange-800 to-yellow-600",
  },
  {
    name: "Saadiyat Grove",
    location: "Saadiyat Island, Abu Dhabi",
    type: "2–5 BR townhouses",
    priceFrom: "AED 3.4M",
    handover: "Q2 2029",
    status: "Launching soon",
    gradient: "from-emerald-950 via-emerald-800 to-lime-700",
  },
];

export const whyUae = [
  {
    title: "0% income tax",
    text: "No personal income tax on salaries and no tax on rental income for individual investors.",
  },
  {
    title: "Golden Visa",
    text: "Property investments of AED 2M or more can qualify you and your family for a 10-year UAE residence visa.",
  },
  {
    title: "Strong rental yields",
    text: "Prime Dubai communities have historically delivered gross yields above most major global cities.",
  },
  {
    title: "Protected payments",
    text: "Off-plan payments go into RERA-regulated escrow accounts tied to construction progress.",
  },
];

export const communities = [
  { name: "Downtown Dubai", tagline: "Burj Khalifa views and the city's cultural core" },
  { name: "Dubai Marina", tagline: "Waterfront towers, yachts and the JBR beach walk" },
  { name: "Palm Jumeirah", tagline: "Private beaches on the world's most famous island" },
  { name: "Dubai Hills Estate", tagline: "Green, family-first living around a championship golf course" },
  { name: "Saadiyat Island", tagline: "Abu Dhabi's museum district beside protected beaches" },
  { name: "Yas Island", tagline: "Entertainment, marinas and Formula 1 on your doorstep" },
];

export const paymentPlan = [
  { percent: 10, label: "On booking" },
  { percent: 50, label: "During construction" },
  { percent: 40, label: "On handover" },
];

export const testimonials = [
  {
    quote:
      "The team walked us through every step, from choosing a unit to getting our Golden Visa. Handover was on schedule.",
    name: "Sample client",
    detail: "Villa owner, Palm Jumeirah",
  },
  {
    quote:
      "I bought off-plan from overseas. Progress updates were regular, and the payment plan made it easy to manage.",
    name: "Sample client",
    detail: "Investor, Dubai Marina",
  },
  {
    quote:
      "Clear pricing, no pressure, and a great after-sales team. We are already looking at our second home with them.",
    name: "Sample client",
    detail: "Family buyer, Dubai Hills Estate",
  },
];
