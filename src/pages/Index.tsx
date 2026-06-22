import Hero from "@/components/Hero";
import Pain from "@/components/Pain";
import Solution from "@/components/Solution";
import Benefits from "@/components/Benefits";
import Included from "@/components/Included";
import Colors from "@/components/Colors";
import Trust from "@/components/Trust";

const Index = () => {
  return (
    <main className="min-h-screen bg-[#F5F5F5]">
      <Hero />
      <Pain />
      <Solution />
      <Benefits />
      <Included />
      <Colors />
      <Trust />
    </main>
  );
};

export default Index;