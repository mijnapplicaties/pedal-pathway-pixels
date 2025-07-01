
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { RideHighlights } from "@/components/RideHighlights";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <Navigation />
      <Hero />
      <RideHighlights />
    </div>
  );
};

export default Index;
