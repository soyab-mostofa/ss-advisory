import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import LogoSection from "../components/LogoSection";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-white w-full overflow-hidden">
      <Hero />
      <About />
      <LogoSection />
      <Services />
      <Testimonials />
      <FAQ />
    </div>
  );
}
