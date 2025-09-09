import React from 'react';
import { Github, Twitter, Mail, Download, } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-4 bg-gradient-to-b from-transparent to-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-cyan-500 rounded-lg flex items-center justify-center">
                  <img src="/src/assets/icon.png"  alt="App Logo" className="w-12 h-12 md:w-12 md:h-12"/>
                </div>
                <div>
                  <span className="text-white">Cool</span>
                  {/* @ts-ignore */}
                  <span text="gradient">batt</span>
                </div>
              </div>
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Advanced Android Battery & Thermal Management for optimal device performance and longevity.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            {/* @ts-ignore */}
            <h4 text="ai-blue" className="font-bold mb-4">Features</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Battery Monitoring</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Thermal Management</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Resource Optimization</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Smart Notifications</a></li>
            </ul>
          </div>
          
          <div>
            {/* @ts-ignore */}
            <h4 text="ai-blue" className="font-bold mb-4">Download</h4>
            <div className="space-y-3">
              {/* @ts-ignore */}
              <a href="#waitlist" btn="blue" hover-5 className="flex items-center gap-2 text-sm">
                <Download className="w-4 h-4" />
                Download Preview APK
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 Coolbatt. All rights reserved. Built with advanced Android optimization technology.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
