import React from 'react';
import { Github, Linkedin, Twitter, Code, Palette,}from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Sarthak Updayay",
      role: "React Developer",
 
      image: "/src/assets/profile.png",
      icon: Code,
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Arpita Gouda",
      role: "UI/UX Designer",
      image: "/src/assets/profile.png",
      icon: Palette,
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Amogh S Y",
      role: " Android Developer",
      image: "/src/assets/profile.png",
      icon: Code,
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <section id="team" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {/* @ts-ignore */}
            <span text="gradient">Meet Our Team</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The passionate experts building the future of Android battery management
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll">
          {teamMembers.map((member, index) => (
            // @ts-ignore
            <div key={index} glass="card" className="text-center group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-gray-700 group-hover:border-cyan-400 transition-colors duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <member.icon className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                {/* Member Info */}
                {/* @ts-ignore */}
                <h3 text="ai-blue" className="text-xl font-bold mb-2">{member.name}</h3>
                {/* @ts-ignore */}
                <p text="ai-green" className="text-sm font-medium mb-4 uppercase tracking-wide">{member.role}</p>
                
                
                <div className="flex justify-center gap-3">
                  <a 
                    href={member.social.github} 
                    className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 hover:text-cyan-400 transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a 
                    href={member.social.linkedin} 
                    className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a 
                    href={member.social.twitter} 
                    className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all duration-300"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        
      </div>
    </section>
  );
};

export default Team;
