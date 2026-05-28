"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft, Github, ExternalLink, Map, Leaf,
  Database, Server, Code, Sparkles, Navigation,
  BarChart, Zap, CheckCircle2
} from "lucide-react";

// 공통 애니메이션 속성
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
} as const;

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
} as const;

const hoverCard = {
  hover: { y: -5, transition: { duration: 0.2 } }
} as const;

export default function ChaYunhaPortfolio() {
  const containerRef = useRef<HTMLDivElement>(null);

  // 패럴랙스 스크롤을 위한 설정
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-[var(--green-500)] selection:text-white">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 right-[-10%] w-[50vw] h-[50vw] bg-gradient-to-br from-[var(--green-400)]/10 to-transparent rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-gradient-to-tr from-[var(--teal)]/10 to-transparent rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-screen" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 backdrop-blur-md bg-background/50 border-b border-border/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold text-sm">돌아가기</span>
          </Link>
          <div className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--green-500)] to-[var(--teal)]">
            CHA YUNHA
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 space-y-32">
        {/* --- Hero Section --- */}
        <motion.section
          style={{ y: heroY, opacity: heroOpacity }}
          className="max-w-7xl mx-auto px-6 pt-12 md:pt-24 flex flex-col items-center text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--green-100)] dark:bg-[var(--green-900)]/30 border border-[var(--green-200)] dark:border-[var(--green-800)]/50 mb-8"
          >
            <Sparkles size={16} className="text-[var(--green-600)] dark:text-[var(--green-400)]" />
            <span className="text-sm font-semibold text-[var(--green-700)] dark:text-[var(--green-300)]">
              Full Stack Developer
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            끊임없이 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--green-500)] to-[var(--teal)]">성장</span>하고<br />
            경험을 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--teal)] to-[var(--mint)]">연결</span>합니다.
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            프론트엔드부터 백엔드까지 전 영역을 아우르며, 데이터베이스 최적화와 AI 연동을 통해 사용자 중심의 완성도 높은 서비스를 만듭니다.
          </motion.p>
        </motion.section>


        {/* --- Project 1: Travel Shoot --- */}
        <section className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col gap-12"
          >
            {/* Project Header */}
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border/50">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">✈️</span>
                  <h2 className="text-3xl md:text-5xl font-bold">Travel Shoot</h2>
                </div>
                <p className="text-xl font-medium text-muted-foreground">AI 기반 원스톱 숙박 예약 서비스</p>
              </div>
              <div className="flex items-center gap-3">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-muted hover:bg-[var(--green-100)] dark:hover:bg-[var(--green-900)]/50 hover:text-[var(--green-600)] transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://travelshoot.store" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-full bg-[var(--slate-900)] dark:bg-white text-white dark:text-[var(--slate-900)] font-semibold hover:opacity-90 transition-opacity">
                  <span>서비스 방문</span>
                  <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
              {/* Main Image Card (Span 2) */}
              <motion.div
                variants={fadeInUp}
                whileHover="hover"
                className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden border border-border/50 bg-muted/30 group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                <div className="relative w-full h-full min-h-[360px]">
                  {/* 임시 이미지 (배경으로 활용) */}
                  <Image
                    src="https://github.com/user-attachments/assets/4d92168a-3461-47bd-9335-f6f72e57e0b9"
                    alt="Travel Shoot Main"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    unoptimized
                  />
                </div>
                <div className="absolute bottom-0 left-0 p-8 z-20 text-white">
                  <h3 className="text-2xl font-bold mb-2">끊김 없는 여행의 시작</h3>
                  <p className="text-white/80 max-w-md line-clamp-2">숙소 예약부터 맞춤형 코스 생성, AI 리뷰 요약까지 하나의 플랫폼에서 해결하는 혁신적인 여행 솔루션입니다.</p>
                </div>
              </motion.div>

              {/* Role & Tech Card */}
              <motion.div
                variants={fadeInUp}
                className="rounded-3xl p-8 border border-border/50 bg-gradient-to-br from-card to-muted/20 flex flex-col justify-center shadow-sm"
              >
                <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">My Role</h4>
                <div className="flex items-start gap-3 mb-6">
                  <Database className="text-[var(--green-500)] mt-1 shrink-0" size={24} />
                  <div>
                    <div className="font-bold text-lg">DB 설계 및 최적화</div>
                    <div className="text-sm text-muted-foreground mt-1">Amazon S3 연동 및 효율적인 데이터 모델링</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Code className="text-[var(--teal)] mt-1 shrink-0" size={24} />
                  <div>
                    <div className="font-bold text-lg">Full Stack 개발</div>
                    <div className="text-sm text-muted-foreground mt-1">리뷰 시스템 및 숙소 상세 서비스 풀스택 구현</div>
                  </div>
                </div>
              </motion.div>

              {/* AI Feature Card */}
              <motion.div
                variants={fadeInUp}
                className="rounded-3xl p-8 border border-border/50 bg-gradient-to-br from-[var(--green-50)] to-[var(--mint)]/20 dark:from-[var(--slate-800)] dark:to-[var(--green-900)]/20 shadow-sm relative overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 text-[var(--green-500)]/10">
                  {/* <Sparkles size={120} /> */}
                </div>
                <h4 className="text-xl font-bold mb-3 relative z-10">GPT-5 AI 리뷰 요약</h4>
                <p className="text-sm text-muted-foreground leading-relaxed relative z-10 mb-6">
                  사용자 리뷰를 분석하여 6가지 세부 별점과 장단점을 자동 추출합니다. JSON 강제 파싱으로 안정성을 확보했습니다.
                </p>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {['React 19', 'Spring Boot', 'MySQL', 'Redis', 'GPT-5'].map(tech => (
                    <span key={tech} className="px-3 py-1 text-xs font-semibold rounded-full bg-background/80 backdrop-blur-sm border border-border">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Achievement / Architecture List */}
            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Navigation, title: 'AI 여행 코스 생성', desc: 'Haversine 공식 및 GPT를 활용하여 거리 기반 최적의 동선 생성 (계획 시간 90% 단축)' },
                { icon: BarChart, title: '동적 추천 시스템', desc: '4단계 사용자 분류 및 실시간 AI 스코어링을 통한 맞춤형 큐레이션' },
                { icon: Zap, title: '성능 최적화', desc: '무한 스크롤, React Query 캐싱 및 다중 필터링을 통한 쾌적한 검색 환경' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-6 rounded-2xl bg-card border border-border/40 hover:border-[var(--green-300)]/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[var(--green-50)] dark:bg-[var(--green-900)]/30 flex items-center justify-center shrink-0">
                    <item.icon size={20} className="text-[var(--green-600)] dark:text-[var(--green-400)]" />
                  </div>
                  <div>
                    <h5 className="font-bold mb-2">{item.title}</h5>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>


        {/* --- Divider --- */}
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-center">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-full" />
          <div className="w-3 h-3 rounded-full bg-[var(--green-500)]/20 border border-[var(--green-500)]/50 absolute" />
        </div>


        {/* --- Project 2: Jupging --- */}
        <section className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col gap-12"
          >
            {/* Project Header (Reverse Layout Feel) */}
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row-reverse md:items-end justify-between gap-6 pb-6 border-b border-border/50 text-right">
              <div className="text-left md:text-right">
                <div className="flex items-center md:justify-end gap-3 mb-4">
                  <h2 className="text-3xl md:text-5xl font-bold">Jupging</h2>
                  <span className="text-2xl">🌏</span>
                </div>
                <p className="text-xl font-medium text-muted-foreground">환경 보호와 건강을 위한 플로깅 앱</p>
              </div>
              <div className="flex items-center gap-3">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-muted hover:bg-[var(--teal)]/10 hover:text-[var(--teal)] transition-colors">
                  <Github size={20} />
                </a>
              </div>
            </motion.div>

            {/* Bento Grid Reverse */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">

              {/* Model & AI Card */}
              <motion.div
                variants={fadeInUp}
                className="rounded-3xl p-8 border border-border/50 bg-gradient-to-br from-card to-[var(--teal)]/5 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-[var(--teal)] uppercase tracking-wider mb-4">Core Technology</h4>
                  <div className="text-2xl font-bold mb-4">YOLO V8 기반<br />쓰레기 객체 탐지</div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    12만장의 데이터를 학습하여 쓰레기 종류와 위치를 식별하고, 구글맵에 마커로 매핑하여 사용자에게 정확한 정보를 제공합니다.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <CheckCircle2 size={16} className="text-[var(--teal)]" />
                  mAP50 0.95 달성
                </div>
              </motion.div>

              {/* Main Image Card (Span 2) */}
              <motion.div
                variants={fadeInUp}
                whileHover="hover"
                className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden border border-border/50 bg-muted/30 group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#003a25]/80 via-transparent to-transparent z-10" />
                <div className="relative w-full h-full min-h-[360px] flex items-center justify-center p-8">
                  {/* 임시 모바일 프레임 느낌 적용 */}
                  <Image
                    src=""
                    alt="Jupging Architecture & Screen"
                    fill
                    className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
                    unoptimized
                  />
                </div>
                <div className="absolute bottom-0 left-0 p-8 z-20 text-white">
                  <h3 className="text-2xl font-bold mb-2">나와 지구가 함께 건강해지는 시간</h3>
                  <p className="text-white/80 max-w-md line-clamp-2">GPS 트래킹을 통한 경로 기록, 맞춤형 산책로 추천 및 환경 오염 요소 맵핑.</p>
                </div>
              </motion.div>

              {/* Role Card */}
              <motion.div
                variants={fadeInUp}
                className="rounded-3xl p-8 border border-border/50 bg-card shadow-sm"
              >
                <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">My Role (Backend / DB)</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Server className="text-[var(--teal)] mt-0.5 shrink-0" size={18} />
                    <span className="text-sm text-muted-foreground font-medium">REST API 설계 및 구현</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Map className="text-[var(--teal)] mt-0.5 shrink-0" size={18} />
                    <span className="text-sm text-muted-foreground font-medium">Open API 데이터 수집 및 가공</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Leaf className="text-[var(--teal)] mt-0.5 shrink-0" size={18} />
                    <span className="text-sm text-muted-foreground font-medium">위치·정보 기반 맞춤 필터링 시스템</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Feature Highlights */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mt-4">
              {['React Native', 'Spring Boot', 'FastAPI', 'YOLO V8', 'Kiwi NLP', 'Rank-BM25', 'Oracle'].map(tech => (
                <div key={tech} className="px-4 py-2 rounded-xl bg-muted border border-border text-sm font-semibold text-foreground flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--teal)]" />
                  {tech}
                </div>
              ))}
            </motion.div>

          </motion.div>
        </section>

      </main>

      {/* Footer / Call to Action */}
      <footer className="mt-20 py-12 border-t border-border/40 bg-muted/20 text-center relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold mb-6">함께 멋진 서비스를 만들어갈 준비가 되셨나요?</h3>
        <p className="text-muted-foreground mb-8">아이디어를 현실로 구현하는 여정에 동참하겠습니다.</p>
        <a href="mailto:contact@example.com" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[var(--green-500)] to-[var(--teal)] text-white font-bold hover:shadow-lg hover:shadow-[var(--green-500)]/30 transition-all hover:-translate-y-1">
          연락하기
        </a>
      </footer>
    </div>
  );
}