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
import { projects } from "./project_information";

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
            송민규의 프로젝트
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