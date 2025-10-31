"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "motion/react";
import { Rocket, Smile, ArrowRight, Palette, Layers, Zap, MousePointerClick } from "lucide-react";
import { Header } from "@/components/Header";
import { HeroCard } from "@/components/HeroCard";
import { ServiceCard } from "@/components/ServiceCard";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { PortfolioCarousel } from "@/components/PortfolioCarousel";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import { BackToTop } from "@/components/BackToTop";
import { ScrollPrompt } from "@/components/ScrollPrompt";
import { CustomCursor } from "@/components/CustomCursor";
import { ProcessStep } from "@/components/ProcessStep";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="bg-white overflow-x-hidden">
      <CustomCursor />
      <ScrollIndicator />
      <BackToTop />
      <Header scrolled={scrolled} />

      {/* Hero Section */}
      <section className="relative min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6 overflow-hidden bg-gradient-to-b from-white via-gray-50/30 to-white">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6E48]/5 via-transparent to-[#8054FF]/5 pointer-events-none" />

        <ScrollPrompt />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="z-10">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-6 leading-tight text-black">
                  Design That Launches{" "}
                  <span className="bg-gradient-to-r from-[#FF6E48] via-[#8054FF] to-[#FF4B9E] bg-clip-text text-transparent">Startups</span>.
                </h1>
              </motion.div>

              <motion.p
                className="text-lg md:text-xl text-black mb-6 md:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
              >
                Liftoff.design crafts <span className="accent-text">high-impact</span> digital experiences that transform bold ideas into beautiful products.
              </motion.p>

              <motion.div className="flex flex-col sm:flex-row gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
                <motion.a
                  href="#work"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center px-6 py-3 text-lg bg-gradient-to-r from-[#FF6E48] to-[#8054FF] text-white rounded-xl hover:shadow-lg transition-shadow group"
                >
                  See Our Work
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </motion.a>

                <motion.a
                  href="mailto:hello@liftoff.design"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center px-6 py-3 text-lg border-2 border-gray-300 text-gray-900 rounded-xl hover:border-gray-400 hover:shadow-md transition-all"
                >
                  Book a Discovery Call
                </motion.a>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-8 lg:mt-0">
              <HeroCard />
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-8 border-t border-gray-200">
            {[
              { value: "100+", label: "Projects" },
              { value: "50+", label: "Clients" },
              { value: "99%", label: "Satisfaction" },
              { value: "48h", label: "Turnaround" },
            ].map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }} className="text-center">
                <div className="text-3xl md:text-4xl mb-2 bg-gradient-to-r from-[#FF6E48] to-[#8054FF] bg-clip-text text-transparent">{stat.value}</div>
                <p className="text-sm md:text-base text-black">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Showreel Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto text-center mb-12 md:mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl sm:text-4xl md:text-5xl mb-4 md:mb-6 text-black">
            Our Work in <span className="bg-gradient-to-r from-[#FF6E48] to-[#8054FF] bg-clip-text text-transparent">Motion</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-lg md:text-xl text-black max-w-3xl mx-auto"
          >
            Explore a <span className="accent-text">curated reel</span> of our projects - from sleek SaaS dashboards to Web3 ecosystems - all designed to inspire, engage, and convert.
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto">
          <PortfolioCarousel />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl sm:text-4xl md:text-5xl mb-4 text-black">
              What We <span className="bg-gradient-to-r from-[#FF6E48] to-[#8054FF] bg-clip-text text-transparent">Do</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-lg md:text-xl text-black"
            >
              Strategic design for startups that move fast.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <ServiceCard icon={Layers} title="Product Design" description="Concept to pixel-perfect MVP." delay={0} />
            <ServiceCard icon={Palette} title="Brand Systems" description="Minimal, scalable identity." delay={0.1} />
            <ServiceCard icon={MousePointerClick} title="Motion & Interaction" description="Subtle animations that engage." delay={0.2} />
            <ServiceCard icon={Zap} title="Prototype Development" description="Figma to high-fidelity prototypes." delay={0.3} />
          </div>
        </div>
      </section>

      {/* About & Process Section */}
      <section className="py-20 md:py-32 px-4 md:px-6 bg-[#FAF9F7] relative overflow-hidden">
        {/* Subtle gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#FF6E48]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#8054FF]/10 to-transparent rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16 md:mb-24">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 leading-tight">
              We Launch Fast. We Design for{" "}
              <span className="bg-gradient-to-r from-[#FF6E48] to-[#8054FF] bg-clip-text text-transparent">Impact</span>.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-lg md:text-xl text-black leading-relaxed max-w-3xl mx-auto"
            >
              Our process blends strategy, creativity, and execution - helping startups go from <span className="accent-text">idea to launch</span> without friction.
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              { step: "01", title: "Discover", description: "Deep dive into your vision, target users, and competitive landscape.", iconType: "discover" as const },
              { step: "02", title: "Design", description: "Craft intuitive interfaces with pixel-perfect attention to detail.", iconType: "design" as const },
              { step: "03", title: "Deliver", description: "Launch production-ready designs that drive measurable results.", iconType: "deliver" as const },
            ].map((item, index, array) => (
              <ProcessStep key={item.step} step={item.step} title={item.title} description={item.description} iconType={item.iconType} index={index} isLast={index === array.length - 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="work" className="py-16 md:py-24 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl sm:text-4xl md:text-5xl mb-4 text-black">
              Selected <span className="bg-gradient-to-r from-[#FF6E48] to-[#8054FF] bg-clip-text text-transparent">Work</span>
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }} className="text-lg md:text-xl text-black max-w-3xl mx-auto whitespace-nowrap truncate">
              A glimpse into our recent launches - each crafted with <span className="accent-text">purpose, precision, and passion</span>.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <CaseStudyCard image="https://images.unsplash.com/photo-1521391406205-4a6af174a4c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjE4NzY2NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" title="SaaS Dashboard" description="A modern analytics platform that transforms complex data into actionable insights." delay={0} />
            <CaseStudyCard image="https://images.unsplash.com/photo-1633533447057-56ccf997f4fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc2MTc5NjE0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" title="Web3 Ecosystem" description="Building trust and clarity in the decentralized future through intuitive design." delay={0.1} />
            <CaseStudyCard image="https://images.unsplash.com/photo-1630522790545-67ad2cb700fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwbW9ja3VwfGVufDF8fHx8MTc2MTg3NDUxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" title="E-commerce Platform" description="Seamless shopping experience that converts browsers into buyers." delay={0.2} />
            <CaseStudyCard image="https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYxODYyMzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" title="Fintech App" description="Reimagining personal finance with beautiful, intuitive mobile experiences." delay={0.3} />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#0E0E0E] text-white py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-12 md:mb-16">
            <div>
              <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-heading text-3xl md:text-4xl mb-6">
                Liftoff.design
              </motion.h3>

              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-white/70 text-lg mb-6">
                Design that <span className="accent-text text-white/90">launches startups</span>.
              </motion.p>

              <motion.div className="flex gap-6 mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                {[
                  { name: "Dribbble", url: "#" },
                  { name: "Behance", url: "#" },
                  { name: "LinkedIn", url: "#" },
                ].map((social) => (
                  <motion.a key={social.name} href={social.url} whileHover={{ y: -2 }} className="text-white/60 hover:text-white transition-colors">
                    {social.name}
                  </motion.a>
                ))}
              </motion.div>

              <motion.a
                href="mailto:hello@liftoff.design"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ x: 2 }}
                className="inline-flex items-center text-lg text-white/80 hover:text-white transition-all"
              >
                hello@liftoff.design
              </motion.a>
            </div>

            <div className="flex items-center justify-center md:justify-end">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex gap-6">
                <motion.div whileHover={{ scale: 1.1, rotate: 10 }} className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center cursor-pointer" style={{ background: "linear-gradient(135deg, #FF6E48 0%, #FF4B9E 100%)" }}>
                  <Smile className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.1, rotate: -10 }} className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center cursor-pointer" style={{ background: "linear-gradient(135deg, #8054FF 0%, #3AC4FF 100%)" }}>
                  <Rocket className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Footer Bottom */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
            © 2025 Liftoff.design. All rights reserved.
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
