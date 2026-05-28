"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MoveRight, Code2, Server, Database, Globe, Network, MapPin, Zap, CheckCircle2 } from "lucide-react";

export default function ChaYunhaPortfolio() {
  // Track 1: Hero Section (Travel Shoot & Jupging)
  const heroTrackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroTrackRef,
    // 요소의 top이 뷰포트 top에 닿을 때 0, 요소의 bottom이 뷰포트 bottom에 닿을 때 1
    offset: ["start start", "end end"],
  });

  // Track 2: Horizontal Scroll Section
  const horizontalTrackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: horizontalProgress } = useScroll({
    target: horizontalTrackRef,
    offset: ["start start", "end end"],
  });

  /*
    ===== Hero Track 모션 설정 =====
    heroProgress: 0.0 ~ 1.0
  */
  // Hero 1 (Travel Shoot)
  // 0~0.3 유지, 0.3~0.45 사라짐 (이후 완전 투명 및 display: none)
  const hero1Opacity = useTransform(heroProgress, [0, 0.3, 0.45], [1, 1, 0]);
  const hero1Y = useTransform(heroProgress, [0.3, 0.45], ["0%", "-10%"]); // 위로 사라짐
  const hero1Pointer = useTransform(heroProgress, (v) => v < 0.4 ? "auto" : "none");
  const hero1Display = useTransform(heroProgress, (v) => v < 0.45 ? "flex" : "none");
  const pathLength1 = useTransform(heroProgress, [0, 0.3], [0, 1]);

  // Hero 2 (Jupging)
  // 0.45~0.6 등장, 0.6~0.9 유지
  const hero2Opacity = useTransform(heroProgress, [0.45, 0.6, 0.9], [0, 1, 1]);
  const hero2Y = useTransform(heroProgress, [0.45, 0.6], ["10%", "0%"]); // 아래에서 올라옴
  const hero2Pointer = useTransform(heroProgress, (v) => v > 0.45 ? "auto" : "none");
  const hero2Display = useTransform(heroProgress, (v) => v >= 0.45 ? "flex" : "none");
  const pathLength2 = useTransform(heroProgress, [0.45, 0.6], [0, 1]);
  
  // Background Map
  const mapScale = useTransform(heroProgress, [0, 1], [1, 1.15]);
  const mapY = useTransform(heroProgress, [0, 1], ["0%", "5%"]);

  /*
    ===== Horizontal Track 모션 설정 =====
    horizontalProgress: 0.0 ~ 1.0
  */
  // 가로 스크롤 이동
  const xTranslation = useTransform(horizontalProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div className="bg-background text-foreground transition-colors duration-300">
      
      {/* 
        =========================================
        TRACK 1: HERO MAP AREA (Section 1 & 2)
        =========================================
      */}
      <div ref={heroTrackRef} className="h-[250vh] relative z-10">
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-zinc-50 dark:bg-zinc-950 flex flex-col justify-center shadow-2xl">
          
          {/* Background Map & Grid Vector */}
          <motion.div 
            className="absolute inset-0 z-0 flex items-center justify-center opacity-30 dark:opacity-20 pointer-events-none"
            style={{ scale: mapScale, y: mapY }}
          >
            <svg viewBox="0 0 1200 600" className="w-full h-full object-cover">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" className="stroke-slate-300 dark:stroke-slate-700" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="1200" height="600" fill="url(#grid)" />
              <path d="M 150 100 C 200 80, 250 120, 260 150 C 270 180, 230 220, 260 250 C 280 270, 310 320, 300 380 C 290 420, 250 480, 240 500 C 220 480, 230 420, 240 380 C 230 350, 180 300, 170 280 C 150 240, 140 220, 120 180 C 100 120, 120 100, 150 100 Z" className="fill-slate-200 stroke-slate-400 dark:fill-slate-800 dark:stroke-slate-600" strokeWidth="2" />
              <path d="M 550 80 C 700 50, 850 60, 950 100 C 1000 130, 980 180, 950 200 C 930 230, 950 280, 920 300 C 900 320, 850 350, 820 320 C 800 290, 780 260, 750 280 C 730 320, 750 380, 720 450 C 700 480, 650 500, 640 450 C 620 380, 600 350, 580 320 C 530 280, 510 250, 500 200 C 480 150, 500 100, 550 80 Z" className="fill-slate-200 stroke-slate-400 dark:fill-slate-800 dark:stroke-slate-600" strokeWidth="2" />
              <path d="M 980 400 C 1050 380, 1100 420, 1080 460 C 1060 480, 980 490, 960 450 C 940 420, 950 400, 980 400 Z" className="fill-slate-200 stroke-slate-400 dark:fill-slate-800 dark:stroke-slate-600" strokeWidth="2" />
            </svg>
          </motion.div>

          {/* === HERO 1: Travel Shoot === */}
          <motion.div 
            style={{ opacity: hero1Opacity, y: hero1Y, pointerEvents: hero1Pointer as any, display: hero1Display as any }}
            className="absolute top-0 left-0 w-full h-full flex-col justify-center items-center z-10"
          >
            <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none">
              <svg viewBox="0 0 1200 600" className="w-full h-full object-cover">
                <motion.path d="M 900 180 Q 750 50 600 120 T 450 150 Q 300 80 200 160" fill="none" className="stroke-blue-500 dark:stroke-blue-400" strokeWidth="4" strokeLinecap="round" strokeDasharray="1 10" style={{ pathLength: pathLength1 }} />
                <circle cx="900" cy="180" r="8" className="fill-blue-600 dark:fill-blue-400" />
                <circle cx="900" cy="180" r="16" className="fill-blue-500/30 dark:fill-blue-400/30 animate-ping" />
                <text x="920" y="185" className="text-sm fill-slate-700 dark:fill-slate-300 font-bold">SEOUL (HQ)</text>
                <circle cx="600" cy="120" r="6" className="fill-blue-600 dark:fill-blue-400" />
                <text x="615" y="115" className="text-xs fill-slate-600 dark:fill-slate-400">PARIS</text>
                <circle cx="200" cy="160" r="8" className="fill-blue-600 dark:fill-blue-400" />
                <circle cx="200" cy="160" r="16" className="fill-blue-500/30 dark:fill-blue-400/30 animate-ping" />
                <text x="140" y="165" className="text-xs fill-slate-600 dark:fill-slate-400">NEW YORK</text>
              </svg>
            </div>
            <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-12 mt-32 md:mt-0 pointer-events-auto">
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-300 text-sm font-medium">
                  <Globe className="w-4 h-4" /> Global Reach
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white">Travel Shoot</h1>
                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                  끊김 없는 여행을 위한 AI 기반 원스톱 숙박 예약 및 플래닝 서비스. 전 세계를 하나로 연결하는 글로벌 네트워크 아키텍처.
                </p>
                <div className="flex items-center gap-8 pt-8">
                  <div>
                    <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">95%</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">AI Recommendation Match</p>
                  </div>
                  <div className="w-px h-12 bg-slate-300 dark:bg-slate-700"></div>
                  <div>
                    <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">13w</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Development Sprints</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full max-w-md bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                      <Server className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Backend Architecture</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Spring Boot & Cloud Native</p>
                    </div>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                      <p className="text-sm text-slate-600 dark:text-slate-300">Swagger API 표준화 및 예외 처리 고도화</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                      <p className="text-sm text-slate-600 dark:text-slate-300">필터링 API 조건부 인덱싱을 통한 성능 40% 향상</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                      <p className="text-sm text-slate-600 dark:text-slate-300">GitHub Actions CI/CD 자동화 파이프라인 구축</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* === HERO 2: Jupging === */}
          <motion.div 
            style={{ opacity: hero2Opacity, y: hero2Y, pointerEvents: hero2Pointer as any, display: hero2Display as any }}
            className="absolute top-0 left-0 w-full h-full flex-col justify-center items-center z-10"
          >
            <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none">
              <svg viewBox="0 0 1200 600" className="w-full h-full object-cover">
                <motion.path d="M 400 450 L 450 400 L 430 350 L 500 300 C 550 250, 600 350, 650 300 L 700 250 L 750 280 L 800 200" fill="none" className="stroke-green-500 dark:stroke-green-400" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ pathLength: pathLength2 }} />
                <circle cx="400" cy="450" r="6" className="fill-green-600 dark:fill-green-400" />
                <text x="360" y="470" className="text-xs fill-slate-600 dark:fill-slate-400 font-medium">Start: Han River</text>
                <rect x="495" y="295" width="10" height="10" rx="2" className="fill-emerald-500 dark:fill-emerald-400" />
                <rect x="645" y="295" width="10" height="10" rx="2" className="fill-emerald-500 dark:fill-emerald-400" />
                <circle cx="800" cy="200" r="8" className="fill-green-600 dark:fill-green-400" />
                <circle cx="800" cy="200" r="16" className="fill-green-500/30 dark:fill-green-400/30 animate-ping" />
                <text x="820" y="205" className="text-sm fill-slate-700 dark:fill-slate-300 font-bold">Eco Node (Goal)</text>
              </svg>
            </div>
            <div className="max-w-7xl mx-auto px-6 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 mt-32 md:mt-0 pointer-events-auto">
              <div className="flex-1 w-full max-w-md bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
                    <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                      <Database className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Data Infrastructure</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">YOLOv5 & Oracle DB</p>
                    </div>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <p className="text-sm text-slate-600 dark:text-slate-300">YOLOv5 모델 훈련 최적화 (mAP50 0.95 달성)</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <p className="text-sm text-slate-600 dark:text-slate-300">MyBatis 기반 Oracle 데이터베이스 설계 및 쿼리 튜닝</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <p className="text-sm text-slate-600 dark:text-slate-300">실시간 GPS 좌표와 쓰레기 인식 로그 동기화 처리</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1 space-y-6 md:text-right">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 dark:bg-green-900/40 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-300 text-sm font-medium md:ml-auto">
                  <MapPin className="w-4 h-4" /> Eco-tracking
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white">Jupging</h1>
                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed md:ml-auto">
                  건강과 지구를 동시에 지키는 플로깅 트래커. 인공지능 영상 인식으로 쓰레기 수거를 자동 기록합니다.
                </p>
                <div className="flex items-center gap-8 pt-8 md:justify-end">
                  <div className="text-right">
                    <p className="text-4xl font-bold text-green-600 dark:text-green-400">YOLO</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Vision Detection AI</p>
                  </div>
                  <div className="w-px h-12 bg-slate-300 dark:bg-slate-700"></div>
                  <div className="text-right">
                    <p className="text-4xl font-bold text-green-600 dark:text-green-400">Spring</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Legacy to Modern API</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 
        =========================================
        TRACK 2: SECTION 3 (Horizontal Scroll)
        =========================================
      */}
      <div ref={horizontalTrackRef} className="h-[200vh] relative z-20 bg-background">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
          <motion.div 
            style={{ x: xTranslation }} 
            className="flex w-[200vw] h-full items-center shrink-0"
          >
            {/* SLIDE 1 */}
            <div className="w-screen h-full flex-shrink-0 flex items-center justify-center p-6 md:p-24 relative">
              <div className="absolute inset-0 bg-blue-50/50 dark:bg-blue-950/20 -z-10"></div>
              <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">API Gateway & Scalability</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                      Travel Shoot의 급격한 트래픽 증가에 대비하여, 프론트엔드와 여러 백엔드 마이크로서비스 간의 통신을 
                      효율적으로 조율하기 위한 탄탄한 기반을 다졌습니다. Swagger를 통한 문서화로 프론트엔드 팀과의 
                      협업 소요 시간을 대폭 줄였습니다.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                      <Zap className="w-8 h-8 text-blue-500 mb-4" />
                      <h4 className="font-semibold text-slate-900 dark:text-white">API 최적화</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">응답 속도 40% 개선 (조건부 인덱싱)</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                      <Network className="w-8 h-8 text-blue-500 mb-4" />
                      <h4 className="font-semibold text-slate-900 dark:text-white">CI/CD 파이프라인</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">무중단 배포 및 자동화된 테스트 환경 구축</p>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <pre className="text-sm text-blue-300 font-mono overflow-x-auto">
                    <code>
{`@RestController
@RequestMapping("/api/v1/accommodations")
public class AccommodationController {
    
    @Operation(summary = "숙박 시설 다중 필터 검색")
    @GetMapping("/search")
    public ResponseEntity<List<AccDto>> search(
        @Valid SearchFilter filter
    ) {
        // Condition-based indexing applied
        return ResponseEntity.ok(
            accommodationService.findOptimized(filter)
        );
    }
}`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>

            {/* SLIDE 2 */}
            <div className="w-screen h-full flex-shrink-0 flex items-center justify-center p-6 md:p-24 relative">
              <div className="absolute inset-0 bg-green-50/50 dark:bg-green-950/20 -z-10"></div>
              <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-100 dark:border-slate-800">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <Code2 className="text-slate-400" />
                        <span className="font-medium text-slate-700 dark:text-slate-300">YOLOv5 Engine</span>
                      </div>
                      <span className="text-xs bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-2 py-1 rounded-full">Python</span>
                    </div>
                    <div className="flex justify-center">
                      <MoveRight className="text-slate-300 dark:text-slate-600 rotate-90 lg:rotate-0" />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <Server className="text-blue-400" />
                        <span className="font-medium text-slate-700 dark:text-slate-300">Spring Boot API</span>
                      </div>
                      <span className="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full">Java</span>
                    </div>
                    <div className="flex justify-center">
                      <MoveRight className="text-slate-300 dark:text-slate-600 rotate-90 lg:rotate-0" />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <Database className="text-red-400" />
                        <span className="font-medium text-slate-700 dark:text-slate-300">Oracle Database</span>
                      </div>
                      <span className="text-xs bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 px-2 py-1 rounded-full">SQL</span>
                    </div>
                  </div>
                </div>

                <div className="order-1 lg:order-2 space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">AI Integration & Data Pipeline</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                      모바일 기기에서 촬영된 영상 프레임에서 쓰레기 객체를 식별하고, 해당 GPS 좌표를 매핑하여 
                      서버로 실시간 전송하는 데이터 파이프라인을 구축했습니다. AI 모델이 도출한 메타데이터를 
                      관계형 DB(Oracle)에 안정적으로 적재하도록 구조를 설계했습니다.
                    </p>
                  </div>
                  <div className="inline-flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm">#YOLOv5</span>
                    <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm">#ComputerVision</span>
                    <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm">#OracleDB</span>
                    <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm">#MyBatis</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
    </div>
  );
}
