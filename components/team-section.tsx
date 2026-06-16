"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const teamMembers = [
  {
    id: "jung-jiseop",
    name: "정지섭",
    role: "AI, Backend, Frontend, DB, Deploy",
    bio: "여러 분야에서 프로젝트 경험이 풍부하고 알고 싶은게 많은 개발자입니다.",
    skills: [
      "PyTorch",
      "TensorFlow",
      "LangChain",
      "CV",
      "FastAPI",
      "SpringBoot",
      "JPA",
      "NoSQL",
      "RDBMS",
      "CI/CD",
      "React",
      "TypeScript",
      "Next.js",
      "Docker",
      "AWS",
    ],
    gradient: "from-[var(--green-400)] to-[var(--teal)]",
    avatar: "JS",
  },
  {
    id: "lee-changho",
    name: "이창호",
    role: "Android, Backend, DB",
    bio: "안드로이드 어플리케이션, 서버, 데이터베이스 등 다양한 분야에서 경험이 있는 개발자입니다.",
    skills: [
      "Android",
      "SpringBoot",
      "MyBatis",
      "Oracle",
      "RDBMS",
      "CI/CD",
      "Firebase",
    ],
    gradient: "from-[var(--teal)] to-[var(--mint)]",
    avatar: "CH",
  },
  {
    id: "cha-yunha",
    name: "차윤하",
    role: "(예시) Full Stack Developer",
    bio: "(예시) 프론트엔드부터 백엔드까지 전 영역을 다루는 풀스택 개발자입니다.",
    skills: ["( 예시 )", "Vue.js", "Go", "Docker"],
    gradient: "from-[var(--mint)] to-[var(--green-300)]",
    avatar: "YH",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 bg-gradient-to-b from-white to-[var(--green-50)] dark:from-[var(--slate-900)] dark:to-[var(--slate-800)]"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--green-100)] dark:bg-[var(--green-900)]/50 text-[var(--green-700)] dark:text-[var(--green-300)] text-sm font-medium mb-4">
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--slate-900)] dark:text-white mb-6">
            팀원들을 소개합니다
          </h2>
          <p className="text-lg text-[var(--slate-600)] dark:text-[var(--slate-300)] max-w-2xl mx-auto">
            각자의 분야에서 전문성을 갖춘 팀원들이 함께 협력하여 최고의 결과물을
            만들어냅니다.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {teamMembers.map((member) => (
            <motion.div key={member.id} variants={cardVariants}>
              <Link href={`/portfolio/${member.id}`}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative bg-white dark:bg-[var(--slate-800)] rounded-3xl p-8 shadow-sm border border-[var(--green-100)] dark:border-[var(--green-800)] hover:shadow-xl hover:shadow-[var(--green-100)]/50 dark:hover:shadow-[var(--green-900)]/50 transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  {/* Background Gradient on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />

                  {/* Avatar */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div
                      className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {member.avatar}
                    </div>

                    {/* Name & Role */}
                    <h3 className="mt-6 text-xl font-bold text-[var(--slate-900)] dark:text-white group-hover:text-[var(--green-600)] dark:group-hover:text-[var(--green-400)] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-[var(--green-600)] dark:text-[var(--green-400)] font-medium text-sm mt-1">
                      {member.role}
                    </p>

                    {/* Bio */}
                    <p className="text-[var(--slate-500)] dark:text-[var(--slate-400)] text-center mt-4 text-sm leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap justify-center gap-2 mt-5">
                      {member.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 text-xs rounded-full bg-[var(--green-50)] dark:bg-[var(--green-900)]/50 text-[var(--green-700)] dark:text-[var(--green-300)] border border-[var(--green-200)] dark:border-[var(--green-700)] group-hover:bg-[var(--green-100)] dark:group-hover:bg-[var(--green-800)]/50 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* View Portfolio Link */}
                    <div className="mt-6 flex items-center gap-2 text-[var(--green-500)] font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>포트폴리오 보기</span>
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
