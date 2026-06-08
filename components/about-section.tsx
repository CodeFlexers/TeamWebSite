"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "클린 코드",
    description: "읽기 쉽고 유지보수가 용이한 코드를 작성합니다.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "빠른 실행",
    description: "최적화된 성능으로 사용자 경험을 극대화합니다.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "팀워크",
    description: "협업을 통해 더 나은 결과물을 만들어냅니다.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "창의성",
    description: "혁신적인 아이디어로 문제를 해결합니다.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-white dark:bg-[var(--slate-900)] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--green-50)] dark:from-[var(--green-900)]/20 to-transparent opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--green-100)] dark:bg-[var(--green-900)]/50 text-[var(--green-700)] dark:text-[var(--green-300)] text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--slate-900)] dark:text-white mb-6">
              우리는{" "}
              <span className="text-[var(--green-500)]">CODE FLEXERS</span>
              입니다
            </h2>
            <p className="text-lg text-[var(--slate-600)] dark:text-[var(--slate-300)] max-w-3xl mx-auto leading-relaxed">
              최신 기술 트렌드를 선도하며, 사용자 중심의 솔루션을 개발하는 열정적인 개발자 팀입니다.
              각자의 전문 분야에서 탁월한 역량을 발휘하며, 함께 성장하는 문화를 만들어가고 있습니다.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group p-6 rounded-2xl bg-white dark:bg-[var(--slate-800)] border border-[var(--green-100)] dark:border-[var(--green-800)] hover:border-[var(--green-300)] dark:hover:border-[var(--green-600)] hover:shadow-lg hover:shadow-[var(--green-100)] dark:hover:shadow-[var(--green-900)]/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--green-400)] to-[var(--teal)] flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-[var(--slate-900)] dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-[var(--slate-600)] dark:text-[var(--slate-400)] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          {/* <motion.div 
            variants={containerVariants}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: "50+", label: "완료된 프로젝트" },
              { number: "6", label: "팀원" },
              { number: "3+", label: "경력 연수" },
              { number: "100%", label: "열정" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--green-500)] to-[var(--teal)] bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-[var(--slate-500)] dark:text-[var(--slate-400)] mt-2 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}
