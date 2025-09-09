import  { useEffect } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import Team from './components/Team';
import Waitlist from './components/Waitlist';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/globals.css';

function App() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all elements with animate-on-scroll class
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el) => observer.observe(el));

    // Cleanup
    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Features />
      <Screenshots />
      <Team />
      <Waitlist />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;