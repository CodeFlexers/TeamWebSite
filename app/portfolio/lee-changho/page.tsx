"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/project";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Target,
  Building2,
  Sparkles,
  Briefcase,
  FileText,
  Image as ImageIcon,
  CheckCircle2,
  Github,
  ExternalLink,
} from "lucide-react";

const projects: Project[] = [
  {
    id: "project-1",
    tab: "Golla",
    title: "점심 메뉴를 랜덤으로 추천해주는 룰렛 애플리케이션",
    description:
      "DB에 저장된 다양한 식당 이름을 기반으로, 사용자가 룰렛을 돌려 오늘의 점심 메뉴를 랜덤으로 추천받는 애플리케이션입니다.",
    role: "팀장",
    architecture: [
      "Android Studio: 안드로이드 애플리케이션 개발",
      "Firebase Realtime Database: 메뉴 데이터 저장 및 실시간 동기화",
    ],
    features: [
      //주요 기능
      "식당 룰렛",
      "기존 이력 조회",
    ],
    contribution: [
      //담당 역할
      "안드로이드 애플리케이션 개발",
      "Firebase Realtime Database 연동",
      "UI/UX 디자인",
      "프로젝트 관리 및 팀 리딩",
    ],
    details: `
            점심 메뉴를 결정하기 어려운 상황에서, 사용자가 간편하게 오늘의 점심 메뉴를 추천받을 수 있는 애플리케이션을 개발했습니다.
            안드로이드 스튜디오를 사용하여 애플리케이션을 개발했으며, Firebase Realtime Database를 활용해 다양한 식당 이름을 저장하고 실시간으로 동기화하는 구조로 설계했습니다.
            사용자는 앱을 실행한 후, 저장된 식당 이름이 표시된 룰렛을 돌려 오늘의 점심 메뉴를 랜덤으로 추천받을 수 있습니다. 또한, 이전에 추천받은 메뉴 이력을 조회할 수 있는 기능도 구현했습니다.

            팀장으로서 전체 프로젝트 관리를 담당했으며, 안드로이드 애플리케이션 개발과 Firebase 연동, UI/UX 디자인에도 적극적으로 참여했습니다.
        `,
    github: "https://github.com/ch02111/android_golla",
    gallery: [
      {
        image: "/jung-jiseop/gallery-1.jpg",
        title: "룰렛 화면",
        description:
          "저장된 식당 이름이 표시된 룰렛 화면. 사용자가 룰렛을 돌려 오늘의 점심 메뉴를 랜덤으로 추천받을 수 있습니다.",
      },
      {
        image: "/jung-jiseop/gallery-2.jpg",
        title: "기록 화면",
        description:
          "이전에 추천받은 메뉴 이력을 조회할 수 있는 화면. 날짜별로 추천받은 메뉴와 감정 상태를 확인할 수 있습니다.",
      },
      {
        image: "/jung-jiseop/gallery-3.jpg",
        title: "지도 화면",
        description:
          "사용자의 위치를 기반으로 데이터베이스에 등록되어 있는 주변 식당을 지도에 표시하는 화면.",
      },
    ],
  },
  {
    id: "project-2",
    tab: "AniPia",
    title: "애니메이션 리뷰 플랫폼 AniPia",
    description:
      "사용자가 애니메이션에 대한 리뷰를 작성하고 공유할 수 있는 플랫폼입니다.",
    role: "팀원",
    architecture: [
      "Spring Boot: 백엔드 API 서버",
      "React: 프론트엔드 UI",
      "MyBatis: 데이터베이스 연동",
      "MariaDB: 사용자 정보 및 분석 결과 저장",
    ],
    features: [
      //주요 기능
      "애니메이션 리뷰 작성 및 공유",
      "사용자 리뷰 및 평점, 북마크 기능",
      "애니메이션 정보 검색 및 조회",
      "사용자 프로필 및 관심사 관리",
    ],
    contribution: [
      //담당 역할
      "프로젝트 기획 및 기능 명세 작성",
      "프론트엔드, 백엔드 간 API 연동 구조 설계",
      "Spring Boot 기반 백엔드 API 서버 구현",
      "React 기반 프론트엔드 UI 개발",
      "MariaDB 기반 데이터베이스 설계 및 구현",
    ],
    details: `
            AniPia는 애니메이션 리뷰 플랫폼으로, 사용자가 애니메이션에 대한 리뷰를 작성하고 공유할 수 있는 웹 애플리케이션입니다.
            Spring Boot를 사용하여 백엔드 API 서버를 구축하였고, React를 활용하여 사용자 친화적인 프론트엔드 UI를 개발했습니다.
            MyBatis를 통해 데이터베이스와 연동하여 사용자 정보 및 리뷰 데이터를 효율적으로 관리할 수 있도록 설계했습니다.
            주요 기능으로는 애니메이션 리뷰 작성 및 공유, 사용자 리뷰 및 평점, 북마크 기능, 애니메이션 정보 검색 및 조회, 사용자 프로필 및 관심사 관리 등이 있습니다.
            프로젝트 초기 단계에서 기획 및 기능 명세 작성에 참여하였고, 프론트엔드와 백엔드 간 API 연동 구조를 설계하였습니다.
            이후 Spring Boot 기반 백엔드 API 서버 구현과 React 기반 프론트엔드 UI 개발, MariaDB 기반 데이터베이스 설계 및 구현에도 적극적으로 참여했습니다.
            일본 사용자를 주 타겟으로 하여, 일본어를 지원하고 있습니다.
        `,
    github: "https://github.com/ch02111/globalin-anipia-backend",

    gallery: [
      {
        image: "/jung-jiseop/gallery-1.jpg",
        title: "메인 화면",
        description:
          "AniPia의 메인 화면. 인기 애니메이션과 최신 리뷰가 표시되며, 사용자는 여기서 애니메이션을 검색하거나 최신 리뷰를 확인할 수 있습니다.",
      },
      {
        image: "/jung-jiseop/gallery-3.jpg",
        title: "로그인 화면",
        description:
          "사용자 로그인 화면. 사용자는 이메일과 비밀번호를 입력하여 계정에 로그인할 수 있습니다.",
      },
      {
        image: "/jung-jiseop/gallery-3.jpg",
        title: "회원가입 화면",
        description:
          "사용자 회원가입 화면. 사용자는 이메일과 비밀번호를 입력하여 새로운 계정을 생성할 수 있습니다.",
      },
      {
        image: "/jung-jiseop/gallery-2.jpg",
        title: "전체 애니메이션 목록",
        description:
          "애니메이션을 검색할 수 있는 화면. 사용자는 원하는 애니메이션을 쉽게 찾을 수 있습니다.",
      },
      {
        image: "/jung-jiseop/gallery-3.jpg",
        title: "검색 결과 화면",
        description:
          "검색어에 해당하는 애니메이션 목록이 표시되는 화면. 사용자는 검색 결과를 클릭하여 상세 정보를 확인할 수 있습니다.",
      },
      {
        image: "/jung-jiseop/gallery-3.jpg",
        title: "애니메이션 정보 화면",
        description:
          "애니메이션의 상세 정보가 표시되는 화면. 사용자는 애니메이션의 줄거리, 캐릭터, 평점 등을 확인할 수 있으며, 리뷰를 작성하거나 북마크할 수 있습니다.",
      },
      {
        image: "/jung-jiseop/gallery-3.jpg",
        title: "검색 결과 화면",
        description:
          "검색어에 해당하는 애니메이션 목록이 표시되는 화면. 사용자는 검색 결과를 클릭하여 상세 정보를 확인할 수 있습니다.",
      },
      {
        image: "/jung-jiseop/gallery-3.jpg",
        title: "작성리뷰 관리 화면",
        description:
          "사용자가 작성한 리뷰를 관리할 수 있는 화면. 사용자는 자신의 리뷰를 수정하거나 삭제할 수 있습니다.",
      },
      {
        image: "/jung-jiseop/gallery-3.jpg",
        title: "좋아요 한 리뷰 관리 화면",
        description: "사용자가 좋아요를 누른 리뷰를 확인할 수 있는 화면.",
      },
      {
        image: "/jung-jiseop/gallery-3.jpg",
        title: "북마크 관리 화면",
        description: "사용자가 북마크한 애니메이션 목록을 관리할 수 있는 화면.",
      },
      {
        image: "/jung-jiseop/gallery-3.jpg",
        title: "정보 수정 화면",
        description:
          "사용자의 정보를 수정할 수 있는 화면. 사용자는 자신의 프로필 정보를 업데이트할 수 있습니다.",
      },
      {
        image: "/jung-jiseop/gallery-3.jpg",
        title: "회원 탈퇴 화면",
        description:
          "회원 탈퇴를 진행할 수 있는 화면. 사용자는 계정을 삭제하고 관련 데이터를 영구적으로 제거할 수 있습니다.",
      },
    ],
  },
];

const ProjectImageSlider = ({ project }: { project: Project }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const gallery = project.gallery ?? [];

  useEffect(() => {
    if (!api) return;

    const updateSelectedIndex = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    updateSelectedIndex();
    api.on("select", updateSelectedIndex);
    api.on("reInit", updateSelectedIndex);

    return () => {
      api.off("select", updateSelectedIndex);
      api.off("reInit", updateSelectedIndex);
    };
  }, [api]);

  if (gallery.length === 0) return null;

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: gallery.length > 1,
      }}
      tabIndex={0}
      aria-label={`${project.title} 이미지 슬라이더`}
      className="group relative w-full outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xl"
    >
      <div className="relative h-64 md:h-96 overflow-hidden rounded-xl border border-border/50 bg-muted/40 shadow-md">
        <CarouselContent className="ml-0 h-full">
          {gallery.map((item, idx) => (
            <CarouselItem key={item.image} className="h-full pl-0">
              <div className="relative h-64 md:h-96 w-full select-none">
                <Image
                  src={item.image}
                  alt={item.title || `${project.title} 이미지 ${idx + 1}`}
                  fill
                  priority={idx === 0}
                  draggable={false}
                  sizes="(min-width: 768px) 1024px, 100vw"
                  className="object-contain"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {gallery.length > 1 && (
          <>
            <CarouselPrevious
              aria-label="이전 이미지"
              className="left-3 size-11 border-white/70 bg-background/85 text-foreground shadow-lg backdrop-blur hover:bg-background focus-visible:ring-primary md:left-4"
            />
            <CarouselNext
              aria-label="다음 이미지"
              className="right-3 size-11 border-white/70 bg-background/85 text-foreground shadow-lg backdrop-blur hover:bg-background focus-visible:ring-primary md:right-4"
            />
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-background/85 px-2.5 py-2 shadow-md backdrop-blur">
              {gallery.map((item, idx) => (
                <button
                  key={`${item.image}-dot`}
                  type="button"
                  aria-label={`${idx + 1}번째 이미지 보기`}
                  aria-current={selectedIndex === idx}
                  onClick={() => api?.scrollTo(idx)}
                  className={`h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    selectedIndex === idx
                      ? "w-7 bg-primary"
                      : "w-2.5 bg-foreground/30 hover:bg-foreground/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </Carousel>
  );
};

const LeeChangho = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Decorative background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-1 w-8 bg-linear-to-r from-primary to-accent rounded-full"></div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              포트폴리오
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4">
            이창호의 프로젝트
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            여러 프로젝트의 경험과 역량을 소개합니다
          </p>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="project-1" className="w-full">
          {/* Tabs List - Top Position */}
          <div className="mb-8 overflow-x-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 bg-transparent h-auto p-0">
              {projects.map((project) => (
                <TabsTrigger
                  key={project.id}
                  value={project.id}
                  className="bg-muted hover:bg-muted/80 data-[state=active]:bg-linear-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-primary-foreground text-foreground rounded-lg px-4 py-2.5 transition-all duration-200 border-0 text-sm font-medium"
                >
                  {project.tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Tabs Content */}
          {projects.map((project) => (
            <TabsContent key={project.id} value={project.id} className="mt-0">
              <Card className="border-border/50 overflow-hidden hover:shadow-lg transition-all duration-300 backdrop-blur-sm bg-card/50">
                <div className="flex flex-col gap-8 p-8 md:p-10">
                  {/* Image Section */}
                  <div className="w-full">
                    <ProjectImageSlider project={project} />
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col gap-8">
                    {/* Title & Description */}
                    <div className="border-b border-border/50 pb-6">
                      <h2 className="text-4xl font-bold mb-3">
                        {project.title}
                      </h2>
                      <p className="text-accent font-medium text-base leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Links */}
                      <div className="flex flex-wrap gap-3 pt-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground rounded-lg transition-all duration-200 font-semibold text-sm shadow-md hover:shadow-lg hover:scale-105"
                          >
                            <Github size={18} strokeWidth={2.5} />
                            GitHub
                          </a>
                        )}
                        {project.deploy && (
                          <a
                            href={project.deploy}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground rounded-lg transition-all duration-200 font-semibold text-sm shadow-md hover:shadow-lg hover:scale-105"
                          >
                            <ExternalLink size={18} strokeWidth={2.5} />
                            배포 사이트
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Role & Overview Grid */}
                    <div>
                      {/* Role Card */}
                      <div className="p-4 bg-linear-to-br from-primary/15 to-primary/5 border border-primary/30 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Target
                            size={18}
                            style={{ color: "var(--icon-primary)" }}
                          />
                          <h3 className="text-xs font-bold text-primary uppercase tracking-widest">
                            역할
                          </h3>
                        </div>
                        <p className="text-base font-semibold text-foreground">
                          {project.role}
                        </p>
                      </div>
                    </div>

                    {/* Architecture Section */}
                    <div>
                      <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-primary/30">
                        <Building2
                          size={20}
                          style={{ color: "var(--icon-secondary)" }}
                        />
                        <h3 className="text-lg font-bold">아키텍처</h3>
                      </div>
                      <div className="space-y-3">
                        {project.architecture.map((arch, idx) => {
                          const [key, value] = arch
                            .split(":")
                            .map((s) => s.trim());
                          return (
                            <div
                              key={idx}
                              className="p-4 bg-muted/40 border border-border/50 rounded-lg hover:border-primary/50 transition-all hover:bg-muted/60"
                            >
                              <div className="flex items-start gap-4">
                                <div className="shrink-0">
                                  <span className="inline-block px-3 py-1 bg-linear-to-r from-primary/30 to-accent/30 text-primary font-bold text-sm rounded-md border border-primary/30">
                                    {key}
                                  </span>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed flex-1 pt-1">
                                  {value}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Features Section */}
                    <div>
                      <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-primary/30">
                        <Sparkles
                          size={20}
                          style={{ color: "var(--icon-accent)" }}
                        />
                        <h3 className="text-lg font-bold">주요 기능</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, idx) => (
                          <Badge
                            key={idx}
                            className="bg-gradient-to-r from-primary/25 to-accent/25 text-primary hover:from-primary/40 hover:to-accent/40 border border-primary/40 transition-all text-xs font-medium px-3 py-1"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Contribution Section */}
                    <div>
                      <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-accent/30">
                        <Briefcase
                          size={20}
                          style={{ color: "var(--icon-accent-secondary)" }}
                        />
                        <h3 className="text-lg font-bold">담당 역할</h3>
                      </div>
                      <div className="space-y-2">
                        {project.contribution.map((contrib, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                          >
                            <CheckCircle2
                              size={18}
                              style={{ color: "var(--icon-accent-secondary)" }}
                              className="mt-0.5 shrink-0"
                            />
                            <span className="text-sm text-muted-foreground leading-relaxed">
                              {contrib}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Project Details Section */}
                    <div className="p-6 bg-linear-to-r from-primary/5 via-accent/5 to-primary/5 rounded-xl border border-border/50">
                      <div className="flex items-center gap-2 mb-4">
                        <FileText
                          size={20}
                          style={{ color: "var(--icon-secondary)" }}
                        />
                        <h3 className="text-lg font-bold">프로젝트 상세</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">
                        {project.details}
                      </p>
                    </div>

                    {/* Gallery Section */}
                    {project.gallery && project.gallery.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-6 pb-4 border-b-2 border-primary/30">
                          <ImageIcon
                            size={20}
                            style={{ color: "var(--icon-secondary)" }}
                          />
                          <h3 className="text-lg font-bold">프로젝트 갤러리</h3>
                        </div>
                        <div className="space-y-8">
                          {project.gallery.map((item, idx) => (
                            <div key={idx} className="group cursor-pointer">
                              <div className="relative h-96 bg-linear-to-br from-primary/10 via-accent/10 to-primary/5 rounded-lg overflow-hidden border border-border/50 shadow-md hover:shadow-lg transition-all duration-300">
                                <div className="absolute inset-0 flex items-center justify-center bg-muted/40 group-hover:bg-muted/30 transition-colors">
                                  <div className="text-center">
                                    <ImageIcon
                                      size={64}
                                      className="mx-auto mb-2 opacity-60"
                                      style={{ color: "var(--icon-secondary)" }}
                                      strokeWidth={1.5}
                                    />
                                    <p className="text-muted-foreground text-sm font-medium">
                                      이미지
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-4">
                                <h4 className="font-semibold text-lg text-foreground mb-2">
                                  {item.title}
                                </h4>
                                <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Projects Count */}
        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-sm">
            총{" "}
            <span className="text-primary font-bold text-base">
              {projects.length}
            </span>
            개의 프로젝트
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeeChangho;
