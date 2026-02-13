import { useEffect, useRef, useState } from 'react';
import { 
  Server, 
  Bot, 
  Gamepad2, 
  Globe, 
  Shield, 
  Zap, 
  Clock, 
  Headphones,
  ChevronRight,
  Twitter,
  Github,
  Mail,
  CheckCircle2,
  Cpu,
  HardDrive,
  Network,
  MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// Extend Window interface for GSAP
declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

function App() {
  const [activeNav, setActiveNav] = useState('home');
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkGsap = setInterval(() => {
      if (window.gsap && window.ScrollTrigger) {
        clearInterval(checkGsap);
        initAnimations();
      }
    }, 100);

    return () => clearInterval(checkGsap);
  }, []);

  const initAnimations = () => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);

    // Hero entrance animation
    const heroTl = gsap.timeline({ delay: 0.2 });
    heroTl
      .fromTo('.hero-headline', 
        { y: 40, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      )
      .fromTo('.hero-subheadline', 
        { y: 24, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, 
        '-=0.4'
      )
      .fromTo('.hero-cta', 
        { y: 18, opacity: 0, scale: 0.98 }, 
        { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: 'power3.out' }, 
        '-=0.3'
      )
      .fromTo('.hero-image', 
        { x: 80, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, 
        '-=0.6'
      )
      .fromTo('.hero-info', 
        { y: 16, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }, 
        '-=0.4'
      );

    // Section scroll animations
    const sections = ['vps', 'bot', 'game', 'web'];
    sections.forEach((section) => {
      gsap.fromTo(`#${section}-content`,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: `#${section}`,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      gsap.fromTo(`#${section}-image`,
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: `#${section}`,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    });

    // Features animation
    gsap.fromTo('.feature-card',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#features',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        }
      }
    );

    // Testimonials animation
    gsap.fromTo('.testimonial-card',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#testimonials',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        }
      }
    );

    // Contact animation
    gsap.fromTo('.contact-content',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#contact',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        }
      }
    );
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveNav(id);
    }
  };

  return (
    <div ref={mainRef} className="relative bg-dark-bg grain-overlay">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-4 flex items-center justify-between bg-dark-bg/90 backdrop-blur-md border-b border-white/5">
        <div className="font-orbitron font-bold text-xl text-white tracking-wide">
          K0MRAID<span className="text-neon-green">HOST</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {[
            { id: 'home', label: 'Home' },
            { id: 'vps', label: 'VPS' },
            { id: 'bot', label: 'BOT' },
            { id: 'game', label: 'GAME' },
            { id: 'web', label: 'WEB' },
            { id: 'contact', label: 'Contact' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`nav-link ${activeNav === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="relative min-h-screen grid-bg vignette flex items-center pt-24 pb-12"
      >
        <div className="w-full px-6 lg:px-[7vw]">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="relative z-10 space-y-6 order-2 lg:order-1">
              <h1 className="hero-headline font-orbitron font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-wide">
                K0MRAID<br />
                <span className="text-neon-green">HOST</span>
              </h1>
              <p className="hero-subheadline text-gray-400 text-base lg:text-lg max-w-md leading-relaxed">
                High-performance VPS, Bot, Game & Web hosting—built for speed, stability, and scale.
              </p>
              <div className="hero-cta">
                <Button 
                  onClick={() => scrollToSection('vps')}
                  className="btn-primary rounded-sm flex items-center gap-2"
                >
                  Explore Plans
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
              <div className="info-card p-4 rounded-sm max-w-xs mt-6">
                <p className="font-mono text-xs text-neon-green tracking-widest uppercase mb-1">Est. 2021</p>
                <p className="text-gray-400 text-sm">99.9% Uptime • 24/7 Support • Global Network</p>
              </div>
            </div>

            {/* Right Image */}
            <div className="hero-image relative order-1 lg:order-2">
              <div className="image-panel relative overflow-hidden rounded-sm">
                <img 
                  src="/hero_server_room.jpg" 
                  alt="Server Room" 
                  className="w-full h-[280px] sm:h-[350px] lg:h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/50 to-transparent" />
              </div>
              <div className="absolute -inset-4 bg-neon-green/15 blur-3xl -z-10 animate-pulse-glow" />
            </div>
          </div>
        </div>
      </section>

      {/* VPS Hosting Section */}
      <section id="vps" className="relative min-h-screen grid-bg vignette flex items-center py-20 lg:py-0">
        <div className="w-full px-6 lg:px-[7vw]">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Content */}
            <div id="vps-content" className="relative z-10 space-y-5 order-2 lg:order-1">
              <h2 className="font-orbitron font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-wide">
                VPS <span className="text-neon-green">HOSTING</span>
              </h2>
              <p className="text-gray-400 text-base lg:text-lg max-w-md leading-relaxed">
                Dedicated resources, full root access, and blazing-fast NVMe storage. Deploy in seconds, scale on demand.
              </p>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary rounded-sm flex items-center gap-2"
              >
                Configure VPS
                <ChevronRight className="w-4 h-4" />
              </Button>
              
              {/* Specs */}
              <div className="flex flex-wrap gap-3 pt-2">
                <div className="spec-item"><HardDrive className="w-4 h-4 text-neon-green" /> NVMe SSD</div>
                <div className="spec-item"><Shield className="w-4 h-4 text-neon-green" /> DDoS Protection</div>
                <div className="spec-item"><Network className="w-4 h-4 text-neon-green" /> 1Gbps Uplink</div>
              </div>

              {/* Info Card */}
              <div className="info-card p-4 rounded-sm max-w-xs mt-4">
                <p className="font-mono text-xs text-neon-green tracking-widest uppercase mb-1">From $6 / mo</p>
                <p className="text-gray-400 text-sm">Linux & Windows • Instant Setup</p>
              </div>
            </div>

            {/* Right Image */}
            <div id="vps-image" className="relative order-1 lg:order-2">
              <div className="image-panel relative overflow-hidden rounded-sm">
                <img 
                  src="/vps_rack_closeup.jpg" 
                  alt="VPS Server Rack" 
                  className="w-full h-[280px] sm:h-[350px] lg:h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/50 to-transparent" />
              </div>
              <div className="absolute -inset-4 bg-neon-green/10 blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* BOT Hosting Section */}
      <section id="bot" className="relative min-h-screen grid-bg vignette flex items-center py-20 lg:py-0">
        <div className="w-full px-6 lg:px-[7vw]">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Content */}
            <div id="bot-content" className="relative z-10 space-y-5 order-2 lg:order-1">
              <div>
                <h2 className="font-orbitron font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-wide">
                  BOT <span className="text-neon-green">HOSTING</span>
                </h2>
                <p className="font-mono text-xs text-gray-500 tracking-widest uppercase mt-2">Pterodactyl Panel</p>
              </div>
              <p className="text-gray-400 text-base lg:text-lg max-w-md leading-relaxed">
                Run Discord bots, automations, and scripts 24/7. Managed via Pterodactyl—restart, schedule, and monitor in clicks.
              </p>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary rounded-sm flex items-center gap-2"
              >
                Start Hosting Bots
                <ChevronRight className="w-4 h-4" />
              </Button>
              
              {/* Specs */}
              <div className="flex flex-wrap gap-3 pt-2">
                <div className="spec-item"><Bot className="w-4 h-4 text-neon-green" /> Pterodactyl Panel</div>
                <div className="spec-item"><Zap className="w-4 h-4 text-neon-green" /> Auto-Restart</div>
                <div className="spec-item"><Clock className="w-4 h-4 text-neon-green" /> 24/7 Online</div>
              </div>

              {/* Info Card */}
              <div className="info-card p-4 rounded-sm max-w-xs mt-4">
                <p className="font-mono text-xs text-neon-green tracking-widest uppercase mb-1">From $3 / mo</p>
                <p className="text-gray-400 text-sm">Node.js • Python • Go • Java</p>
              </div>
            </div>

            {/* Right Image */}
            <div id="bot-image" className="relative order-1 lg:order-2">
              <div className="image-panel relative overflow-hidden rounded-sm">
                <img 
                  src="/bot_workspace.jpg" 
                  alt="Bot Development Workspace" 
                  className="w-full h-[280px] sm:h-[350px] lg:h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/50 to-transparent" />
              </div>
              <div className="absolute -inset-4 bg-neon-green/10 blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* GAME Hosting Section */}
      <section id="game" className="relative min-h-screen grid-bg vignette flex items-center py-20 lg:py-0">
        <div className="w-full px-6 lg:px-[7vw]">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Content */}
            <div id="game-content" className="relative z-10 space-y-5 order-2 lg:order-1">
              <div>
                <h2 className="font-orbitron font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-wide">
                  GAME <span className="text-neon-green">HOSTING</span>
                </h2>
                <p className="font-mono text-xs text-gray-500 tracking-widest uppercase mt-2">Pterodactyl Panel</p>
              </div>
              <p className="text-gray-400 text-base lg:text-lg max-w-md leading-relaxed">
                Launch your world in minutes. Low ping, mod support, and full control—so you can focus on the gameplay.
              </p>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary rounded-sm flex items-center gap-2"
              >
                Launch Server
                <ChevronRight className="w-4 h-4" />
              </Button>
              
              {/* Specs */}
              <div className="flex flex-wrap gap-3 pt-2">
                <div className="spec-item"><Zap className="w-4 h-4 text-neon-green" /> Low Latency</div>
                <div className="spec-item"><Gamepad2 className="w-4 h-4 text-neon-green" /> Mod Support</div>
                <div className="spec-item"><Server className="w-4 h-4 text-neon-green" /> Fast Deploy</div>
              </div>

              {/* Info Card */}
              <div className="info-card p-4 rounded-sm max-w-xs mt-4">
                <p className="font-mono text-xs text-neon-green tracking-widest uppercase mb-1">From $8 / mo</p>
                <p className="text-gray-400 text-sm">Minecraft • Palworld • Rust • More</p>
              </div>
            </div>

            {/* Right Image */}
            <div id="game-image" className="relative order-1 lg:order-2">
              <div className="image-panel relative overflow-hidden rounded-sm">
                <img 
                  src="/game_controller_neon.jpg" 
                  alt="Gaming Setup" 
                  className="w-full h-[280px] sm:h-[350px] lg:h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/50 to-transparent" />
              </div>
              <div className="absolute -inset-4 bg-neon-green/10 blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* WEB Hosting Section */}
      <section id="web" className="relative min-h-screen grid-bg vignette flex items-center py-20 lg:py-0">
        <div className="w-full px-6 lg:px-[7vw]">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Content */}
            <div id="web-content" className="relative z-10 space-y-5 order-2 lg:order-1">
              <h2 className="font-orbitron font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-wide">
                WEB <span className="text-neon-green">HOSTING</span>
              </h2>
              <p className="text-gray-400 text-base lg:text-lg max-w-md leading-relaxed">
                Reliable hosting with cPanel, free SSL, and one-click installers. From landing pages to full apps—deploy fast.
              </p>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary rounded-sm flex items-center gap-2"
              >
                See Web Plans
                <ChevronRight className="w-4 h-4" />
              </Button>
              
              {/* Specs */}
              <div className="flex flex-wrap gap-3 pt-2">
                <div className="spec-item"><Globe className="w-4 h-4 text-neon-green" /> cPanel Included</div>
                <div className="spec-item"><Shield className="w-4 h-4 text-neon-green" /> Free SSL</div>
                <div className="spec-item"><CheckCircle2 className="w-4 h-4 text-neon-green" /> 99.9% Uptime</div>
              </div>

              {/* Info Card */}
              <div className="info-card p-4 rounded-sm max-w-xs mt-4">
                <p className="font-mono text-xs text-neon-green tracking-widest uppercase mb-1">From $2 / mo</p>
                <p className="text-gray-400 text-sm">PHP • Node • MySQL • Email</p>
              </div>
            </div>

            {/* Right Image */}
            <div id="web-image" className="relative order-1 lg:order-2">
              <div className="image-panel relative overflow-hidden rounded-sm">
                <img 
                  src="/web_laptop_dashboard.jpg" 
                  alt="Web Hosting Dashboard" 
                  className="w-full h-[280px] sm:h-[350px] lg:h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/50 to-transparent" />
              </div>
              <div className="absolute -inset-4 bg-neon-green/10 blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 lg:py-28 grid-bg">
        <div className="px-6 lg:px-[7vw]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-orbitron font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-4">
              Built for <span className="text-neon-green">builders</span>.
            </h2>
            <p className="text-gray-400 text-base">
              We focus on the fundamentals: fast hardware, clean networking, and honest support.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            <div className="feature-card card-hover rounded-sm">
              <Cpu className="w-7 h-7 text-neon-green mb-3" />
              <h3 className="font-orbitron font-semibold text-white text-sm mb-2">Fast Compute</h3>
              <p className="text-gray-400 text-xs leading-relaxed">AMD EPYC & NVMe-backed storage for consistent performance.</p>
            </div>
            <div className="feature-card card-hover rounded-sm">
              <Shield className="w-7 h-7 text-neon-green mb-3" />
              <h3 className="font-orbitron font-semibold text-white text-sm mb-2">DDoS Protection</h3>
              <p className="text-gray-400 text-xs leading-relaxed">Always-on mitigation to keep your services online.</p>
            </div>
            <div className="feature-card card-hover rounded-sm">
              <Network className="w-7 h-7 text-neon-green mb-3" />
              <h3 className="font-orbitron font-semibold text-white text-sm mb-2">Global Network</h3>
              <p className="text-gray-400 text-xs leading-relaxed">Low-latency routes with 1Gbps+ uplinks worldwide.</p>
            </div>
            <div className="feature-card card-hover rounded-sm">
              <Headphones className="w-7 h-7 text-neon-green mb-3" />
              <h3 className="font-orbitron font-semibold text-white text-sm mb-2">24/7 Support</h3>
              <p className="text-gray-400 text-xs leading-relaxed">Real humans, quick responses, no runarounds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-16 lg:py-24 bg-dark-secondary">
        <div className="px-6 lg:px-[7vw]">
          <h2 className="font-orbitron font-bold text-xl sm:text-2xl text-white text-center mb-10">
            What our <span className="text-neon-green">customers</span> say
          </h2>

          <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            <div className="testimonial-card rounded-sm">
              <p className="text-gray-300 text-sm mb-3 leading-relaxed">"Switched my game server over—ping dropped noticeably. Super smooth."</p>
              <p className="text-neon-green text-xs font-medium">— Alex R.</p>
            </div>
            <div className="testimonial-card rounded-sm">
              <p className="text-gray-300 text-sm mb-3 leading-relaxed">"The Pterodactyl setup just works. I can focus on my bot, not the server."</p>
              <p className="text-neon-green text-xs font-medium">— Sam T.</p>
            </div>
            <div className="testimonial-card rounded-sm">
              <p className="text-gray-300 text-sm mb-3 leading-relaxed">"Best price-to-performance I've found for VPS. Highly recommended!"</p>
              <p className="text-neon-green text-xs font-medium">— Jordan M.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 lg:py-28 grid-bg">
        <div className="contact-content px-6 lg:px-[7vw]">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="font-orbitron font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-4">
              Let's build something <span className="text-neon-green">fast</span>.
            </h2>
            <p className="text-gray-400 text-base">
              Questions? Need a custom setup? Reach out—we'll respond within one business day.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-md mx-auto mb-10">
            <div className="contact-card card-hover rounded-sm">
              <Mail className="w-7 h-7 text-neon-green mx-auto mb-3" />
              <h3 className="font-orbitron font-semibold text-white text-sm mb-1">Sales</h3>
              <p className="text-gray-400 text-xs">hello@k0mraid.host</p>
            </div>
            <div className="contact-card card-hover rounded-sm">
              <Headphones className="w-7 h-7 text-neon-green mx-auto mb-3" />
              <h3 className="font-orbitron font-semibold text-white text-sm mb-1">Support</h3>
              <p className="text-gray-400 text-xs">support@k0mraid.host</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button 
              onClick={() => scrollToSection('vps')}
              className="btn-primary rounded-sm flex items-center gap-2 text-sm"
            >
              Compare Plans
              <ChevronRight className="w-4 h-4" />
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.open('mailto:hello@k0mraid.host', '_blank')}
              className="border-white/20 text-white hover:bg-white/10 rounded-sm text-sm"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-dark-secondary border-t border-white/5 py-10">
        <div className="px-6 lg:px-[7vw]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
            <div className="font-orbitron font-bold text-lg text-white">
              K0MRAID<span className="text-neon-green">HOST</span>
            </div>
            <div className="flex items-center gap-5">
              <a href="#" className="text-gray-400 hover:text-neon-green text-xs transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-neon-green text-xs transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-neon-green text-xs transition-colors">Acceptable Use</a>
            </div>
            <div className="flex items-center gap-3">
              <MessageCircle className="w-4 h-4 text-gray-400 hover:text-neon-green cursor-pointer transition-colors" />
              <Twitter className="w-4 h-4 text-gray-400 hover:text-neon-green cursor-pointer transition-colors" />
              <Github className="w-4 h-4 text-gray-400 hover:text-neon-green cursor-pointer transition-colors" />
            </div>
          </div>
          <div className="text-center mt-6 pt-6 border-t border-white/5">
            <p className="text-gray-500 text-xs">© 2026 K0MRAID HOST. Established 2021.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
