import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pain from "@/components/Pain";
import Solution from "@/components/Solution";
import Catalog from "@/components/Catalog";
import Benefits from "@/components/Benefits";
import Included from "@/components/Included";
import Colors from "@/components/Colors";
import Trust from "@/components/Trust";
import Comparison from "@/components/Comparison";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";

const Index = () => {
  return (
    <main className="min-h-screen bg-[#F5F5F5]">
      <Header />
      <Hero />
      <Pain />
      <Solution />
      <Catalog />
      <Benefits />
      <Included />
      <Colors />
      <Trust />
      <Comparison />
      <Faq />
      <FinalCta />
    </main>
  );
};

export default Index;