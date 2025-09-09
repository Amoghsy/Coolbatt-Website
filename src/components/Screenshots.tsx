import React from "react";
import Dashboard from "../assets/screenshots/DashboardShot.png";
import Stats from "../assets/screenshots/StatsShot.png";
import Notify from "../assets/screenshots/NotifyShot.png";


const Screenshots: React.FC = () => {
  const screenshots = [
    {
      title: "Dashboard",
      description: "Resource Management",
      image: Dashboard,
    },
    {
      title: "Battery & Thermal Monitoring",
      description: "Detailed battery analytics",
      image:Stats,
    },
    {
      title: "Notification System",
      description: "Instant Notifications for critical call events",
      image: Notify,
    },
  ];

  return (
    <section
      id="screenshots"
      className="py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {/* @ts-ignore */}
            <span text="gradient">App Preview</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Preview the intuitive interface we're building for power users
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 animate-on-scroll">
          {screenshots.map((screenshot, index) => (
            // @ts-ignore
            <div
              key={index}
              // @ts-ignore
              animate="float"
              className="group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mobile-mockup hover:scale-105 transition-transform duration-500">
                <div className="mobile-screen p-4 flex flex-col items-center">
  {/* 🔹 Centered Coolbatt title */}
  <div className="text-center mb-4">
    {/* @ts-ignore */}
    <div text="ai-blue" className="text-sm font-bold">
      Coolbatt
    </div>
  </div>

  {/* 🔹 Screenshot container */}
  <div className="flex-1 rounded-xl overflow-hidden shadow-lg aspect-[9/19.5] w-[250px] md:w-[300px]">
    <img
      src={screenshot.image}
      alt={screenshot.title}
      className="w-full h-full object-cover"
    />
  </div>
</div>

              </div>
              <div className="text-center mt-6">
                {/* @ts-ignore */}
                <h3 text="ai-blue" className="text-xl font-bold mb-2">
                  {screenshot.title}
                </h3>
                <p className="text-gray-400">{screenshot.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
