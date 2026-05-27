
'use client'

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  details: string
}

const projects: Project[] = [
  {
    id: 'project-1',
    title: 'AI 챗봇 플랫폼',
    description: '실시간 AI 기반 챗봇 서비스 구축',
    technologies: ['Next.js', 'Python', 'WebSocket', 'OpenAI'],
    details: `AI 챗봇 플랫폼은 실시간 대화형 인공지능 서비스를 제공합니다. 
    사용자와의 상호작용을 통해 자연어 처리 기술을 활용하여 지능형 응답을 생성합니다. 
    WebSocket을 통한 실시간 양방향 통신으로 매끄러운 사용자 경험을 제공하며, 
    확장 가능한 아키텍처로 설계되어 있습니다...`,
  },
  {
    id: 'project-2',
    title: 'E-커머스 대시보드',
    description: '실시간 판매 분석 및 재고 관리 시스템',
    technologies: ['React', 'TypeScript', 'Redux', 'Chart.js'],
    details: `E-커머스 플랫폼을 위한 종합 관리 대시보드로, 
    실시간 판매 데이터, 재고 현황, 고객 분석 등을 한눈에 파악할 수 있습니다. 
    차트와 그래프를 통한 직관적인 데이터 시각화와 필터링 기능으로 
    효율적인 비즈니스 의사결정을 지원합니다...`,
  },
  {
    id: 'project-3',
    title: '모바일 피트니스 앱',
    description: '운동 기록 및 영양 관리 모바일 앱',
    technologies: ['React Native', 'Firebase', 'HealthKit API'],
    details: `운동 관리 및 건강 추적 애플리케이션으로 사용자의 일일 활동량, 
    칼로리 소모, 운동 기록을 체계적으로 관리합니다. 
    Firebase를 통한 클라우드 동기화로 여러 기기에서 데이터를 공유하며, 
    개인 맞춤형 운동 계획 제안 기능을 제공합니다...`,
  },
  {
    id: 'project-4',
    title: '소셜 미디어 플랫폼',
    description: '실시간 피드 및 소셜 네트워크 서비스',
    technologies: ['Node.js', 'MongoDB', 'Redis', 'Socket.io'],
    details: `사용자 간의 실시간 상호작용을 기반으로 하는 소셜 플랫폼입니다. 
    피드 시스템, 실시간 알림, 메시지 기능을 포함하며, 
    Redis 캐싱을 통해 고성능을 보장합니다. 
    사용자 관계도(그래프) 기반의 추천 알고리즘으로 개인화된 경험을 제공합니다...`,
  },
]

const JungJiseop = () => {
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
            <div className="h-1 w-8 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">포트폴리오</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4">
            정지섭의 프로젝트
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
                  className="bg-muted hover:bg-muted/80 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-primary-foreground text-foreground rounded-lg px-4 py-2.5 transition-all duration-200 border-0 text-sm font-medium"
                >
                  {project.title}
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
                    <div className="relative h-64 md:h-96 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 rounded-xl overflow-hidden shadow-md border border-border/50">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-6xl mb-3 opacity-80">📷</div>
                          <p className="text-muted-foreground text-sm font-medium">프로젝트 이미지</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col gap-6">
                    <div>
                      <h2 className="text-3xl font-bold mb-2">
                        {project.title}
                      </h2>
                      <p className="text-accent font-medium text-sm mb-6">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h3 className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                          기술 스택
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              className="bg-gradient-to-r from-primary/20 to-accent/20 text-primary hover:from-primary/30 hover:to-accent/30 border border-primary/30 transition-all"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="bg-muted/50 rounded-lg p-6 border border-border">
                        <h3 className="text-sm font-semibold mb-3">프로젝트 개요</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">
                          {project.details}
                        </p>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="flex gap-3 pt-4 border-t border-border/50">
                      <button className="px-6 py-2.5 border border-border bg-background hover:bg-muted text-foreground rounded-lg transition-all duration-200 font-medium text-sm hover:border-primary/50">
                        GitHub
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Projects Count */}
        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-sm">
            총 <span className="text-primary font-bold text-base">{projects.length}</span>개의 프로젝트
          </p>
        </div>
      </div>
    </div>
  )
}

export default JungJiseop