import React from "react";
import DemoVideo from "../assets/demo.mp4"; // replace with your actual video path

const VideoPreview: React.FC = () => {
  return (
    <section
      id="video-preview"
      className="py-20 px-4 bg-gradient-to-b from-gray-900/20 to-transparent"
    >
      <div className="max-w-7xl mx-auto text-center animate-on-scroll">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          {/* @ts-ignore */}
          <span text="gradient">Live Demo</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
          Watch the app in action inside a real mobile interface
        </p>

        <div className="flex justify-center">
          <div className="mobile-mockup hover:scale-105 transition-transform duration-500">
            <div className="mobile-screen p-4 flex flex-col items-center">
              {/* 🔹 Title */}
              <div className="text-center mb-4">
                {/* @ts-ignore */}
                <div text="ai-blue" className="text-sm font-bold">
                  Coolbatt
                </div>
              </div>

              {/* 🔹 Video container */}
              <div className="flex-1 rounded-xl overflow-hidden shadow-lg aspect-[9/19.5] w-[250px] md:w-[300px]">
                <video
                  src={DemoVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPreview;
