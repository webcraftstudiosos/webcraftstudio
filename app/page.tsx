import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Examples } from "@/components/Examples";
import { Process } from "@/components/Process";
import { BudgetCalculator } from "@/components/BudgetCalculator";
import { FAQ } from "@/components/FAQ";
import { TrustBadges } from "@/components/TrustBadges";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <Services />
        <Examples />
        <Process />
        <BudgetCalculator />
        <FAQ />
        <TrustBadges />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
