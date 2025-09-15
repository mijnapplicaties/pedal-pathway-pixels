import { Navigation } from "@/components/Navigation";
import { RideHighlights } from "@/components/RideHighlights";

const RouteHighlightsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <Navigation />
      <div className="pt-16">
        <RideHighlights />
      </div>
    </div>
  );
};

export default RouteHighlightsPage;