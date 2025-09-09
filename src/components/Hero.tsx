import React from 'react';
import { Battery, Shield, Zap, Smartphone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* @ts-ignore */}
      <div className="text-center z-10 max-w-4xl mx-auto" animate="fade-up">
        {/* @ts-ignore */}
        <div className="mb-6" animate="fade-in">
          <div className="inline-flex items-center gap-3 p-4 glass rounded-2xl mb-8">
            <Battery className="w-8 h-8 text-cyan-400" />
            <Shield className="w-8 h-8 text-blue-400" />
            <Zap className="w-8 h-8 text-cyan-400" />
            <Smartphone className="w-8 h-8 text-blue-400" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <div className="flex items-center justify-center mb-4">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-green-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl">
              <img src="/src/assets/icon.png"  alt="App Logo" className="w-30 h-30 md:w-30 md:h-30"
/>
            </div>
          </div>
          <span className="text-white">Cool</span>
          {/* @ts-ignore */}
          <span text="gradient">batt</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Battery Thermal Monitoring and Resource Optimization System on Android
        </p>
        
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Enhance your device safety, optimize battery life, and improve performance with intelligent monitoring and thermal management
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* @ts-ignore */}
          <a href="#Waitlist" btn="blue" pulse hover-5 className="text-lg px-8 py-4">
            Join Waitlist
          </a>
          {/* @ts-ignore */}
          <a href="#features" btn="glass" hover-scale className="text-lg px-8 py-4">
            Explore Features
          </a>
        </div>
        
        {/* @ts-ignore */}
        <div className="mt-16" animate="float">
          <div className="inline-block p-2 glass rounded-full">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
          </div>
          <p className="text-sm text-gray-400 mt-2">Scroll to discover more</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
