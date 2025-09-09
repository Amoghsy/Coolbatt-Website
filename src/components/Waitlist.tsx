import React, { useState } from "react";
import { Bell, Users, Rocket, CheckCircle } from "lucide-react";
import { db } from "../firebase"; // make sure you have src/firebase.ts
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Waitlist: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    try {
      await addDoc(collection(db, "waitlist"), {
        email,
        timestamp: serverTimestamp(),
      });

      setIsSubscribed(true);
      setEmail("");
    } catch (error) {
      console.error("Error adding to waitlist:", error);
      alert("Failed to join waitlist. Please try again.");
    }

    setLoading(false);
  };

  const benefits = [
    { icon: Bell, title: "Early Access", description: "Be the first to download when we launch" },
    { icon: Users, title: "Exclusive Updates", description: "Get development progress and feature previews" },
    { icon: Rocket, title: "Launch Bonus", description: "Special features for early supporters" },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/20" id="Waitlist">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium mb-6">
            <Rocket className="w-4 h-4" /> Coming Soon
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {/* @ts-ignore */}
            <span text="gradient">Join the Waitlist</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Be among the first to experience advanced Android battery and thermal management
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-on-scroll">
          {/* Waitlist Form */}
          {/* @ts-ignore */}
          <div glass="card">
            {!isSubscribed ? (
              <>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <Bell className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    {/* @ts-ignore */}
                    <h3 text="ai-blue" className="text-2xl font-bold">Get Notified</h3>
                    <p className="text-gray-400">Join 1,000+ users waiting for launch</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                    {/* @ts-ignore */}
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      form-input="true"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  {/* @ts-ignore */}
                  <button
                    type="submit"
                    /* @ts-ignore */
                    btn="blue"
                    pulse
                    hover-5
                    className="w-full flex items-center justify-center gap-3 text-lg"
                    disabled={loading}
                  >
                    <Bell className="w-5 h-5" />
                    {loading ? "Submitting..." : "Join Waitlist"}
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500">No spam, just launch updates and exclusive previews</p>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                {/* @ts-ignore */}
                <h3 text="ai-blue" className="text-2xl font-bold mb-4">You're In!</h3>
                <p className="text-gray-400">
                  Thanks for joining our waitlist. We'll notify you as soon as Coolbatt is available for download.
                </p>
              </div>
            )}
          </div>

          {/* Benefits */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">What You'll Get</h3>
            {benefits.map((benefit, index) => (
              // @ts-ignore
              <div
                key={index}
                className="flex items-start gap-4 p-4 glass rounded-xl hover:bg-white/10 transition-all duration-300"
                /* @ts-ignore */
                animate="slide-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-5 h-5 text-white" />
                </div>
                {/* @ts-ignore */}
                <div>
                  {/* @ts-ignore */}
                  <h4 text="ai-blue" className="font-bold text-lg mb-2">{benefit.title}</h4>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              </div>
            ))}

            <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-6 h-6 text-cyan-400" />
                {/* @ts-ignore */}
                <span text="ai-blue" className="font-bold text-lg">1,247</span>
                <span className="text-gray-400">users waiting</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full animate-pulse"
                  style={{ width: '73%' }}
                ></div>
              </div>
              <p className="text-sm text-gray-400 mt-2">Launch target: 2,000 signups</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
