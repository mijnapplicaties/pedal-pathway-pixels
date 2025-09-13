
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { ArrowLeft, Clock, MapPin, Mountain, Users, Camera, Route } from "lucide-react";

const DaytripPage = () => {
  const { id } = useParams<{ id: string }>();
  const daytripId = parseInt(id || "1", 10);

  const daytrips = [
    {
      id: 1,
      title: "Warming up",
      description: "Conquer the legendary mountain passes with breathtaking views and thrilling descents. This challenging route will test your endurance while rewarding you with spectacular alpine scenery.",
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      duration: "~3 hours",
      difficulty: "Hard",
      distance: "50 km",
      elevation: "1,200m",
      startLocation: "Alpine Base Camp",
      endLocation: "Mountain Summit",
      highlights: [
        "Panoramic mountain views",
        "Traditional alpine villages",
        "Wildlife spotting opportunities",
        "Historic mountain passes"
      ],
      detailedDescription: "This warming-up ride takes you through some of the most spectacular mountain terrain in the region. Starting from the Alpine Base Camp, you'll gradually ascend through winding mountain roads, passing through charming villages that have preserved their traditional architecture for centuries. The route offers multiple viewpoints where you can stop to capture breathtaking photographs of the surrounding peaks and valleys.",
      gallery: [
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      ]
    },
    {
      id: 2,
      title: "Getting ready",
      description: "Enjoy a peaceful ride along crystal-clear rivers surrounded by lush forests. Perfect for those who love nature and want to experience the serenity of flowing water and wildlife.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      duration: "2 days",
      difficulty: "Easy",
      distance: "95 km",
      elevation: "300m",
      startLocation: "Riverside Village",
      endLocation: "Forest Lodge",
      highlights: [
        "Crystal-clear river views",
        "Dense forest canopy",
        "Wildlife observation",
        "Peaceful riverside stops"
      ],
      detailedDescription: "A gentle introduction to our cycling adventure, this route follows the meandering path of a pristine river through dense forests. The relatively flat terrain makes it perfect for building up your cycling stamina while enjoying the tranquil sounds of flowing water and bird songs. Multiple rest stops along the way allow you to fully immerse yourself in the natural beauty.",
      gallery: [
        "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      ]
    },
    {
      id: 3,
      title: "The big day",
      description: "Navigate through ancient forest trails with towering trees and dappled sunlight. This magical route offers a perfect blend of adventure and tranquility in nature's cathedral.",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      duration: "4 days",
      difficulty: "Hard",
      distance: "250 km",
      elevation: "2,100m",
      startLocation: "Ancient Forest Entrance",
      endLocation: "Highland Plateau",
      highlights: [
        "Ancient forest trails",
        "Towering century-old trees",
        "Challenging mountain climbs",
        "Spectacular highland views"
      ],
      detailedDescription: "The ultimate challenge of our cycling adventure! This demanding route takes you deep into ancient forests where some trees have stood for over 500 years. The trail winds through varying terrain, from dense forest floors dappled with sunlight to challenging mountain ascents that will test your limits. The reward at the end is a breathtaking highland plateau with 360-degree views.",
      gallery: [
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
        "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      ]
    },
    {
      id: 4,
      title: "Cooling down",
      description: "Navigate through ancient forest trails with towering trees and dappled sunlight. This magical route offers a perfect blend of adventure and tranquility in nature's cathedral.",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      duration: "4 days",
      difficulty: "Medium",
      distance: "50 km",
      elevation: "500m",
      startLocation: "Highland Plateau",
      endLocation: "Coastal Village",
      highlights: [
        "Gentle descent to coast",
        "Panoramic ocean views",
        "Charming coastal villages",
        "Relaxing beach stops"
      ],
      detailedDescription: "The perfect way to end our cycling adventure! This cooling-down route takes you on a gentle descent from the highland plateau down to the beautiful coastline. The relatively easy terrain allows you to relax and reflect on the amazing journey while enjoying stunning ocean views and exploring charming coastal villages.",
      gallery: [
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
        "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      ]
    }
  ];

  const daytrip = daytrips.find(trip => trip.id === daytripId) || daytrips[0];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "text-green-600 bg-green-100 border-green-200";
      case "Medium": return "text-yellow-600 bg-yellow-100 border-yellow-200";
      case "Hard": return "text-red-600 bg-red-100 border-red-200";
      default: return "text-gray-600 bg-gray-100 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <Navigation />
      
      {/* Hero Banner */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('${daytrip.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{daytrip.title}</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">{daytrip.description}</p>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium mb-8"
        >
          <ArrowLeft size={20} />
          Back to Overview
        </Link>
      </div>

      {/* Trip Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Trip Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {daytrip.detailedDescription}
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Highlights</h3>
              <ul className="space-y-2">
                {daytrip.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Photo Gallery */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Camera size={24} />
                Photo Gallery
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {daytrip.gallery.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${daytrip.title} - Image ${index + 1}`}
                    className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trip Stats */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Trip Details</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-gray-500" />
                    <span className="text-gray-600">Duration</span>
                  </div>
                  <span className="font-semibold">{daytrip.duration}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-gray-500" />
                    <span className="text-gray-600">Distance</span>
                  </div>
                  <span className="font-semibold">{daytrip.distance}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Mountain size={16} className="text-gray-500" />
                    <span className="text-gray-600">Elevation</span>
                  </div>
                  <span className="font-semibold">{daytrip.elevation}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-gray-500" />
                    <span className="text-gray-600">Difficulty</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${getDifficultyColor(daytrip.difficulty)}`}>
                    {daytrip.difficulty}
                  </span>
                </div>
              </div>
            </div>

            {/* Route Info */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Route size={20} />
                Route Information
              </h3>
              <div className="space-y-3">
                <div>
                  <span className="text-sm text-gray-500">Starting Point</span>
                  <p className="font-semibold text-gray-900">{daytrip.startLocation}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Ending Point</span>
                  <p className="font-semibold text-gray-900">{daytrip.endLocation}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaytripPage;
