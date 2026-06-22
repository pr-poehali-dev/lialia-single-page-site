import Hero from "@/components/Hero";
import Pain from "@/components/Pain";
import Solution from "@/components/Solution";
import Benefits from "@/components/Benefits";
import Included from "@/components/Included";

const Index = () => {
  return (
    <main className="min-h-screen bg-[#F5F5F5]">
      <Hero />
      <Pain />
      <Solution />
      <Benefits />
      <Included />
    </main>
  );
};

export default Index;