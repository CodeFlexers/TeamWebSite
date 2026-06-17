
'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from '@/components/ui/dialog'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { Project } from '@/types/project'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from '@/components/ui/carousel'
import { Target, Building2, Sparkles, Briefcase, FileText, Image as ImageIcon, CheckCircle2, Github, ExternalLink } from 'lucide-react'

const projects: Project[] = [
    {
        id: 'project-1',
        tab: 'AI 정신감정 챗봇',
        title: 'AI 챗봇 사용자 정신감정 분석 멘탈케어 플랫폼',
        description: '사용자와의 일상 대화를 기반으로 감정 상태를 분석하고, 하루 감정 기록과 요약을 제공하는 AI 멘탈케어 플랫폼입니다.',
        role: '팀장',
        architecture: [
            'Next.js: 사용자 인터페이스 및 감정 캘린더 화면',
            'FastAPI: AI 챗봇 응답, 요약, 감정 분석 처리',
            'MongoDB: 사용자 대화 기록 저장, 벡터 검색',
            'MariaDB: 사용자 정보 및 분석 결과 저장',
            'LangChain: RAG 및 LLM 처리 흐름 구성',
            'Raspberry Pi: 서비스 배포 환경',
        ],
        features: [ //주요 기능
            'AI 챗봇 실시간 대화',
            '대화 기반 감정 분석',
            '하루 단위 대화 요약 및 일기 생성',
            '감정 캘린더 시각화',
            '이전 대화 기록 기반 RAG 응답',
            '사용자 인증 및 대화방 관리',
            '스트리밍 응답 처리',
        ],
        contribution: [ //담당 역할
            '프로젝트 전체 기획 및 기능 명세 작성',
            '프론트엔드, 백엔드, AI 서버 간 API 연동 구조 설계',
            'FastAPI 기반 AI 분석 서버 구현',
            'OpenAI API 및 LangChain 기반 대화 분석 흐름 설계',
            'MongoDB 대화 기록 저장 구조 설계',
            'MongoDB 사용자 대화 벡터 검색 구현',
            '금일 사용자 대화 기반 감정 분석 후 날씨로 표현',
            'MariaDB 기반 사용자 및 분석 결과 데이터 관리',
            'Raspberry Pi 서버 배포 및 CI/CD 자동화 구성',
            '사용자 카카오 로그인, 회원 가입 쿠키 기반 인증 처리',
        ],
        details: `
            사용자가 AI 챗봇과 대화하면 대화 내용을 기반으로 감정 상태를 분석하고, 하루 단위의 감정 요약과 일기 형태의 기록을 생성하는 멘탈케어 플랫폼을 개발했습니다.

            프론트엔드는 Next.js 기반으로 구현했으며, 사용자가 챗봇과 자연스럽게 대화할 수 있는 인터페이스와 감정 캘린더 화면을 구성했습니다. 사용자의 하루 감정은 날씨 아이콘 형태로 시각화하여 직관적으로 확인할 수 있도록 설계했습니다.

            백엔드는 사용자 인증, 대화방, 메시지 저장, 감정 분석 결과 저장 기능을 분리하여 구성했습니다. AI 분석 서버는 Python 기반 FastAPI로 구현했으며, OpenAI API와 LangChain을 활용해 사용자 대화를 요약하고 감정 상태를 추론하도록 처리했습니다.

            또한 스트리밍 응답 방식을 적용해 AI 답변이 실시간으로 출력되는 사용자 경험을 구현했습니다. MongoDB에 저장된 이전 대화 기록을 기반으로 RAG 구조를 적용하여, 사용자의 과거 대화 맥락을 반영할 수 있는 챗봇 흐름을 설계했습니다.

            팀장으로서 전체 기능 기획, 서비스 구조 설계, API 연동 방식 결정, AI 서버 구현, 배포 자동화 구성을 담당했습니다.
        `,
        github: 'https://github.com/Seopia/capstone-backend-fast-api',
        deploy: 'https://example.com',
        gallery: [
            {
                image: '/jung-jiseop/refill-emotion-log-page.png',
                title: '감정 캘린더 화면',
                description: 'AI가 분석한 사용자의 금일 또는 지난 감정 상태를 시각적으로 표현한 캘린더. 날씨 아이콘으로 감정을 직관적으로 확인할 수 있습니다.\n\nHugging Face에서 **Seonghaa/korean-emotion-classifier-roberta모델**을 사용하여 분노, 불안, 슬픔, 평온, 당황, 기쁨 감정 5가지를 \n구분 가능한 Text Classfication 모델을 사용했습니다.\n사용자의 오늘 하루 모든 대화내용에서 어떤 감정이 몇%를 차지하는지 예측할 수 있는 모델입니다.'
            },
            {
                image: '/jung-jiseop/refill-main-page.png',
                title: '챗봇 대화 인터페이스',
                description: '사용자와 AI가 실시간으로 대화할 수 있는 채팅 인터페이스입니다.\n채팅 방식은 아래의 순서로 이루어집니다.\n1. 사용자의 채팅 내역 최신 10개를 가져옵니다.\n2. LangChain의 Tool 기능을 활용해 LLM이 이전 대화내역이 더 필요하다고 판단되면 MongoDB Atlas의 벡터 유사도 검색을하여 관련 채팅 내역을 가져갑니다. (RAG)\n3. 정신의학적인 지식이 필요하다고 판단되면 위와 같이 Tool기능을 활용해 유사도 검색을 수행해 관련 전문지식을 가져갑니다.(RAG)\n4. 위 결과를 모두 합쳐 payload를 만들어낸 후 최종 응답 LLM에게 제출합니다\n5. 최종 응답 LLM이 유저에게 Streaming 방식으로 응답합니다.\n\n위 방식으로 불필요한 RAG검색을 줄이고, API비용을 최소화하였습니다.'
            },
            {
                image: '/jung-jiseop/gallery-3.jpg',
                title: '감정 분석 결과',
                description: '하루 대화를 기반으로 분석된 감정 통계와 요약. 감정의 변화 추이를 그래프로 시각화하여 자신의 감정 패턴을 파악할 수 있습니다.'
            },
            {
                image: '/jung-jiseop/gallery-4.jpg',
                title: '일기 생성 기능',
                description: '대화 내용을 기반으로 AI가 자동으로 생성한 일기. 사용자의 감정을 담아낸 감성적인 일기 형식으로 기록됩니다.'
            }
        ]
    },
        {
        id: 'project-2',
        tab: 'AI 챗봇',
        title: 'AI 챗봇 사용자 정신감정 분석 멘탈케어 플랫폼',
        description: '사용자와의 일상 대화를 기반으로 감정 상태를 분석하고, 하루 감정 기록과 요약을 제공하는 AI 멘탈케어 플랫폼입니다.',
        role: '팀원',
        architecture: [
            'Next.js: 사용자 인터페이스 및 감정 캘린더 화면',
            'FastAPI: AI 챗봇 응답, 요약, 감정 분석 처리',
            'MongoDB: 사용자 대화 기록 저장, 벡터 검색',
            'MariaDB: 사용자 정보 및 분석 결과 저장',
            'LangChain: RAG 및 LLM 처리 흐름 구성',
            'Raspberry Pi: 서비스 배포 환경',
        ],
        features: [ //주요 기능
            'AI 챗봇 실시간 대화',
            '대화 기반 감정 분석',
            '하루 단위 대화 요약 및 일기 생성',
            '감정 캘린더 시각화',
            '이전 대화 기록 기반 RAG 응답',
            '사용자 인증 및 대화방 관리',
            '스트리밍 응답 처리',
        ],
        contribution: [ //담당 역할
            '프로젝트 전체 기획 및 기능 명세 작성',
            '프론트엔드, 백엔드, AI 서버 간 API 연동 구조 설계',
            'FastAPI 기반 AI 분석 서버 구현',
            'OpenAI API 및 LangChain 기반 대화 분석 흐름 설계',
            'MongoDB 대화 기록 저장 구조 설계',
            'MongoDB 사용자 대화 벡터 검색 구현',
            '금일 사용자 대화 기반 감정 분석 후 날씨로 표현',
            'MariaDB 기반 사용자 및 분석 결과 데이터 관리',
            'Raspberry Pi 서버 배포 및 CI/CD 자동화 구성',
            '사용자 카카오 로그인, 회원 가입 쿠키 기반 인증 처리',
        ],
        details: `
            사용자가 AI 챗봇과 대화하면 대화 내용을 기반으로 감정 상태를 분석하고, 하루 단위의 감정 요약과 일기 형태의 기록을 생성하는 멘탈케어 플랫폼을 개발했습니다.

            프론트엔드는 Next.js 기반으로 구현했으며, 사용자가 챗봇과 자연스럽게 대화할 수 있는 인터페이스와 감정 캘린더 화면을 구성했습니다. 사용자의 하루 감정은 날씨 아이콘 형태로 시각화하여 직관적으로 확인할 수 있도록 설계했습니다.

            백엔드는 사용자 인증, 대화방, 메시지 저장, 감정 분석 결과 저장 기능을 분리하여 구성했습니다. AI 분석 서버는 Python 기반 FastAPI로 구현했으며, OpenAI API와 LangChain을 활용해 사용자 대화를 요약하고 감정 상태를 추론하도록 처리했습니다.

            또한 스트리밍 응답 방식을 적용해 AI 답변이 실시간으로 출력되는 사용자 경험을 구현했습니다. MongoDB에 저장된 이전 대화 기록을 기반으로 RAG 구조를 적용하여, 사용자의 과거 대화 맥락을 반영할 수 있는 챗봇 흐름을 설계했습니다.

            팀장으로서 전체 기능 기획, 서비스 구조 설계, API 연동 방식 결정, AI 서버 구현, 배포 자동화 구성을 담당했습니다.
        `,
        github: 'https://github.com',
        deploy: 'https://example.com',
        gallery: [
            {
                image: '/jung-jiseop/gallery-1.jpg',
                title: '감정 캘린더 화면',
                description: 'AI가 분석한 사용자의 일일 감정 상태를 시각적으로 표현한 캘린더. 날씨 아이콘으로 감정을 직관적으로 확인할 수 있습니다.'
            },
            {
                image: '/jung-jiseop/gallery-2.jpg',
                title: '챗봇 대화 인터페이스',
                description: '사용자와 AI가 실시간으로 대화할 수 있는 채팅 인터페이스. 자연스러운 대화 흐름으로 감정을 표현할 수 있습니다.'
            },
            {
                image: '/jung-jiseop/gallery-3.jpg',
                title: '감정 분석 결과',
                description: '하루 대화를 기반으로 분석된 감정 통계와 요약. 감정의 변화 추이를 그래프로 시각화하여 자신의 감정 패턴을 파악할 수 있습니다.'
            },
            {
                image: '/jung-jiseop/gallery-4.jpg',
                title: '일기 생성 기능',
                description: '대화 내용을 기반으로 AI가 자동으로 생성한 일기. 사용자의 감정을 담아낸 감성적인 일기 형식으로 기록됩니다.'
            }
        ]
    }
]

const ProjectImageSlider = ({ project }: { project: Project }) => {
    const [api, setApi] = useState<CarouselApi>()
    const [selectedIndex, setSelectedIndex] = useState(0)
    const gallery = project.gallery ?? []

    useEffect(() => {
        if (!api) return

        const updateSelectedIndex = () => {
            setSelectedIndex(api.selectedScrollSnap())
        }

        updateSelectedIndex()
        api.on('select', updateSelectedIndex)
        api.on('reInit', updateSelectedIndex)

        return () => {
            api.off('select', updateSelectedIndex)
            api.off('reInit', updateSelectedIndex)
        }
    }, [api])

    if (gallery.length === 0) return null

    return (
        <Carousel
            setApi={setApi}
            opts={{
                align: 'start',
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
                                            ? 'w-7 bg-primary'
                                            : 'w-2.5 bg-foreground/30 hover:bg-foreground/50'
                                    }`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </Carousel>
    )
}

type GalleryItem = NonNullable<Project['gallery']>[number]

const GalleryItemModal = ({ item, projectTitle }: { item: GalleryItem; projectTitle: string }) => {
    const [hasError, setHasError] = useState(false)

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button
                    type="button"
                    className="group w-full text-left"
                >
                    <div className="relative h-96 rounded-lg overflow-hidden border border-border/50 shadow-md hover:shadow-lg transition-all duration-300 bg-muted/10">
                        {!hasError ? (
                            <Image
                                src={item.image}
                                alt={item.title || `${projectTitle} 갤러리 이미지`}
                                fill
                                sizes="(min-width: 1024px) 1024px, 100vw"
                                className="object-cover"
                                draggable={false}
                                onError={() => setHasError(true)}
                                style={{ cursor: 'pointer' }}
                            />
                        ) : (
                            <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-muted/70 text-muted-foreground">
                                <ImageIcon size={48} className="opacity-70" />
                                <p className="text-sm font-medium">이미지를 불러올 수 없습니다.</p>
                                <p className="text-xs text-muted-foreground/80">플레이스홀더가 표시됩니다.</p>
                            </div>
                        )}
                    </div>
                </button>
            </DialogTrigger>
            <div className="mt-4">
                <h4 className="font-semibold text-lg text-foreground mb-2">{item.title}</h4>
                <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            p: ({ children }) => <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">{children}</p>,
                            li: ({ children }) => <li className="ml-4 list-disc text-sm text-muted-foreground leading-relaxed">{children}</li>,
                        }}
                    >
                        {item.description}
                    </ReactMarkdown>
                </div>
            </div>
            <DialogContent className="grid h-[95vh] w-[95vw] max-w-[95vw] grid-rows-[1fr_auto] gap-0 overflow-hidden p-0 sm:max-w-[95vw]">
                <div className="relative min-h-0 bg-background/90">
                    {!hasError ? (
                        <Image
                            src={item.image}
                            alt={item.title || `${projectTitle} 갤러리 이미지`}
                            fill
                            sizes="95vw"
                            className="object-contain"
                            draggable={false}
                            onError={() => setHasError(true)}
                        />
                    ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-muted/70 text-muted-foreground">
                            <ImageIcon size={72} className="opacity-70" />
                            <p className="text-lg font-semibold">이미지를 불러올 수 없습니다.</p>
                            <p className="text-sm text-muted-foreground/80">네트워크 오류 또는 경로 문제일 수 있습니다.</p>
                        </div>
                    )}
                </div>
                <div className="p-6">
                    <DialogTitle className="text-2xl font-semibold">{item.title}</DialogTitle>
                </div>
            </DialogContent>
        </Dialog>
    )
}

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
                        <div className="h-1 w-8 bg-linear-to-r from-primary to-accent rounded-full"></div>
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">포트폴리오</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4">
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
                                                    <Target size={18} style={{ color: 'var(--icon-primary)' }} />
                                                    <h3 className="text-xs font-bold text-primary uppercase tracking-widest">역할</h3>
                                                </div>
                                                <p className="text-base font-semibold text-foreground">{project.role}</p>
                                            </div>
                                        </div>

                                        {/* Architecture Section */}
                                        <div>
                                            <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-primary/30">
                                                <Building2 size={20} style={{ color: 'var(--icon-secondary)' }} />
                                                <h3 className="text-lg font-bold">아키텍처</h3>
                                            </div>
                                            <div className="space-y-3">
                                                {project.architecture.map((arch, idx) => {
                                                    const [key, value] = arch.split(':').map(s => s.trim());
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
                                                                <p className="text-sm text-muted-foreground leading-relaxed flex-1 pt-1">{value}</p>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        {/* Features Section */}
                                        <div>
                                            <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-primary/30">
                                                <Sparkles size={20} style={{ color: 'var(--icon-accent)' }} />
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
                                                <Briefcase size={20} style={{ color: 'var(--icon-accent-secondary)' }} />
                                                <h3 className="text-lg font-bold">담당 역할</h3>
                                            </div>
                                            <div className="space-y-2">
                                                {project.contribution.map((contrib, idx) => (
                                                    <div key={idx} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                                                        <CheckCircle2 size={18} style={{ color: 'var(--icon-accent-secondary)' }} className="mt-0.5 shrink-0" />
                                                        <span className="text-sm text-muted-foreground leading-relaxed">{contrib}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Project Details Section */}
                                        <div className="p-6 bg-linear-to-r from-primary/5 via-accent/5 to-primary/5 rounded-xl border border-border/50">
                                            <div className="flex items-center gap-2 mb-4">
                                                <FileText size={20} style={{ color: 'var(--icon-secondary)' }} />
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
                                                    <ImageIcon size={20} style={{ color: 'var(--icon-secondary)' }} />
                                                    <h3 className="text-lg font-bold">프로젝트 갤러리</h3>
                                                </div>
                                                <div className="space-y-8">
                                                    {project.gallery.map((item, idx) => (
                                                        <GalleryItemModal
                                                            key={idx}
                                                            item={item}
                                                            projectTitle={project.title}
                                                        />
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
                        총 <span className="text-primary font-bold text-base">{projects.length}</span>개의 프로젝트
                    </p>
                </div>
            </div>
        </div>
    )
}

export default JungJiseop
