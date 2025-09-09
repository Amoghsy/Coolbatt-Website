import React from 'react';
import { Battery, Thermometer, Cpu, Bell, Shield } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Battery,
      title: "Battery Monitoring",
      description: "Real-time battery health tracking, charge cycle monitoring, and intelligent charging optimization",
      color: "text-green-400"
    },
    {
      icon: Thermometer,
      title: "Thermal Monitoring",
      description: "Advanced temperature sensors monitoring with heat map visualization and thermal alerts",
      color: "text-red-400"
    },
    {
      icon: Cpu,
      title: "Resource Management",
      description: "CPU and RAM optimization, background app management, and performance enhancement",
      color: "text-purple-400"
    },
    {
      icon: Bell,
      title: "Notification System",
      description: "Smart alerts for battery health, thermal warnings, and system optimization suggestions",
      color: "text-yellow-400"
    },
    {
      icon: Shield,
      title: "Cooldown Enforcement",
      description: "Automatic device protection with intelligent cooling algorithms and emergency shutdowns",
      color: "text-cyan-400"
    }
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {/* @ts-ignore */}
            <span text="gradient">Powerful Features</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Five comprehensive modules working together to keep your Android device running optimally
          </p>
        </div>
        
        {/* @ts-ignore */}
        <div grid-auto animate="stagger" className="animate-on-scroll">
          {features.map((feature, index) => (
            // @ts-ignore
            <div key={index} glass="card" hover-5 className="text-center group">
              <div className={`w-16 h-16 mx-auto mb-6 p-4 rounded-2xl bg-gray-800 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-full h-full" />
              </div>
              {/* @ts-ignore */}
              <h3 text="ai-blue" className="text-2xl font-bold mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-6 w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                <div className={`h-full bg-current ${feature.color} animate-pulse`} style={{ width: '100%' }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
