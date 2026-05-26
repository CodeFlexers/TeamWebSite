"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function FloatingParticle({ delay, duration, x, y, size }: { 
  delay: number; 
  duration: number; 
  x: number; 
  y: number;
  size: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
        background: `linear-gradient(135deg, var(--green-300), var(--mint))`,
        opacity: 0.6,
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.2, 1],
        opacity: [0.4, 0.8, 0.4],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

function GlowingOrb({ x, y, size, delay }: { x: number; y: number; size: number; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
        background: `radial-gradient(circle, var(--green-400), transparent)`,
      }}
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default function HeroSection() {
  const [particles, setParticles] = useState<Array<{ id: number; delay: number; duration: number; x: number; y: number; size: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 3,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 4 + Math.random() * 12,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--green-50)] via-white to-[var(--mint)]/20 dark:from-[var(--slate-900)] dark:via-[var(--slate-800)] dark:to-[var(--green-900)]/30 pb-20">
      {/* Background Glowing Orbs */}
      <GlowingOrb x={10} y={20} size={400} delay={0} />
      <GlowingOrb x={70} y={60} size={300} delay={1} />
      <GlowingOrb x={50} y={10} size={250} delay={2} />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <FloatingParticle key={particle.id} {...particle} />
      ))}

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(var(--green-300) 1px, transparent 1px), linear-gradient(90deg, var(--green-300) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--green-100)] dark:bg-[var(--green-900)]/50 border border-[var(--green-200)] dark:border-[var(--green-700)] mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--green-500)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--green-500)]"></span>
          </span>
          <span className="text-sm font-medium text-[var(--green-700)] dark:text-[var(--green-300)]">깔끔한 코드를 만드는 팀</span>
        </motion.div>

        {/* Team Name with Animated Letters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight"
            style={{
              background: `linear-gradient(135deg, var(--green-600), var(--green-500), var(--teal), var(--green-400))`,
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {"CODE FLEXERS".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.05,
                  ease: "easeOut",
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Animated Underline */}
          <motion.div
            className="h-1.5 bg-gradient-to-r from-[var(--green-400)] via-[var(--teal)] to-[var(--mint)] rounded-full mx-auto mt-4"
            initial={{ width: 0 }}
            animate={{ width: "60%" }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-8 text-lg md:text-xl text-[var(--slate-600)] dark:text-[var(--slate-300)] max-w-2xl mx-auto leading-relaxed"
        >
          혁신적인 아이디어와 열정으로 디지털 세계를 변화시키는
          <br className="hidden md:block" />
          개발자들의 여정에 오신 것을 환영합니다
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="absolute -bottom-32 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-[var(--slate-400)] dark:text-[var(--slate-500)]"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Corner Elements */}
      <motion.div
        className="absolute top-20 left-20 w-20 h-20 border-l-2 border-t-2 border-[var(--green-300)] dark:border-[var(--green-600)] rounded-tl-3xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-20 h-20 border-r-2 border-b-2 border-[var(--green-300)] dark:border-[var(--green-600)] rounded-br-3xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      />
    </section>
  );
}
