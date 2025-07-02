
import { MapPin, Clock, Mountain } from "lucide-react";
import { Link } from "react-router-dom";

export const RideHighlights = () => {
  const highlights = [
    {
      id: 1,
      title: "Warming up",
      description: "feest the legendary mountain passes with breathtaking views and thrilling descents. This challenging route will test your endurance while rewarding you with spectacular alpine scenery.",
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      duration: "~3 hours",
      difficulty: "Hard",
      distance: "50 km"
    },
    {
      id: 2,
      title: "Getting ready",
      description: "Enjoy a peaceful ride along crystal-clear rivers surrounded by lush forests. Perfect for those who love nature and want to experience the serenity of flowing water and wildlife.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      duration: "~4 uur",
      difficulty: "Easy",
      distance: "95 km"
    },
    {
      id: 3,
      title: "The big day",
      description: "Navigate through ancient forest trails with towering trees and dappled sunlight. This magical route offers a perfect blend of adventure and tranquility in nature's cathedral.",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      duration: "~12 uur",
      difficulty: "Hard",
      distance: "250 km"
    },
    {
      id: 4,
      title: "Cooling down",
      description: "Navigate through ancient forest trails with towering trees and dappled sunlight. This magical route offers a perfect blend of adventure and tranquility in nature's cathedral.",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      duration: "~3 uur",
      difficulty: "Medium",
      distance: "50 km"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "text-green-600 bg-green-100";
      case "Medium": return "text-yellow-600 bg-yellow-100";
      case "Hard": return "text-red-600 bg-red-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <section id="highlights" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Route Highlights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the amazing destinations and experiences that await you on our carefully planned bicycle adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight) => (
            <Link
              key={highlight.id}
              to={`/daytrip/${highlight.id}`}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 group block"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(highlight.difficulty)}`}>
                    {highlight.difficulty}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {highlight.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{highlight.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{highlight.distance}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Mountain size={16} />
                    <span>{highlight.difficulty}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg">
            View Complete Itinerary
          </button>
        </div>
      </div>
    </section>
  );
};
