import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import WhyUae from "@/components/WhyUae";
import Communities from "@/components/Communities";
import PaymentPlan from "@/components/PaymentPlan";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <WhyUae />
        <Communities />
        <PaymentPlan />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
