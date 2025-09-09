import React, { useState } from "react";
import { MessageSquare, Send } from "lucide-react";
import { db } from "../firebase"; // make sure this path is correct
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "contactUs"), {
        ...formData,
        timestamp: serverTimestamp(),
      });

      setIsSent(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {/* @ts-ignore */}
            <span text="gradient">Get In Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have questions about Coolbatt? We'd love to hear from you.
          </p>
        </div>

        {/* @ts-ignore */}
        <div glass="card" className="animate-on-scroll">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div>
              {/* @ts-ignore */}
              <h3 text="ai-blue" className="text-2xl font-bold">Contact Us</h3>
              <p className="text-gray-400">Send us a message and we'll respond shortly</p>
            </div>
          </div>

          {!isSent ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                {/* @ts-ignore */}
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  form-input="true"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                {/* @ts-ignore */}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  form-input="true"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                {/* @ts-ignore */}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  form-textarea="true"
                  placeholder="Tell us about your question"
                  required
                ></textarea>
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
                <Send className="w-5 h-5" />
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-8 h-8 text-green-400" />
              </div>
              {/* @ts-ignore */}
              <h3 text="ai-blue" className="text-2xl font-bold mb-4">Message Sent!</h3>
              <p className="text-gray-400">
                Thanks for contacting us. We'll get back to you as soon as possible.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
