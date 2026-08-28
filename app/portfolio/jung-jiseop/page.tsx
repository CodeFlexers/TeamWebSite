
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
import { Target, Building2, Sparkles, Briefcase, FileText, Image as ImageIcon, CheckCircle2, Github, ExternalLink, ArrowRight, RotateCcw } from 'lucide-react'

const projects: Project[] = [
    {
        id: 'project-4',
        tab: '코딩 에이전트 프로젝트',
        title: 'Codex를 이용하여 만든 게시판 Posty',
        description: '코딩 에이전트 활용 능력을 올리기 위해 프로젝트 설계부터 완성까지 Codex와 함께 개발한 React 19와 FastAPI 기반 풀스택 커뮤니티 게시판 프로젝트입니다.',
        role: '설계, 작업지시, 검토',

        architecture: [
            'React + TS + Vite: 사용자 인터페이스',
            'FastAPI: 인증, 인가, CRUD',
            'MariaDB: 사용자 정보 및 관련 데이터 저장',
            'Raspberry Pi: 서비스 배포 환경',
        ],

        features: [
            "JWT HttpOnly 쿠키, Refresh Token 회전, CSRF 검증 기반 인증 구성",
            "리치 텍스트 게시글 작성과 서버 HTML 정제",
            "게시글 본문 이미지와 일반 첨부파일 업로드·삭제 처리",
            "카테고리, 제목 검색, 작성자 필터, 정렬, 페이지네이션 제공",
            "댓글, 1단계 대댓글, 좋아요와 작성자·관리자 권한 제어",
            'MySQL heartbeat 기반 전체 온라인 사용자 표시와 숨김 설정',
   '친구 요청·수락·거절·취소와 친구 관계 상태 관리',
   '친구 간 받은·보낸 쪽지함, 읽음 상태와 미확인 쪽지 표시',
   '차단 시 친구 관계 종료, 양방향 쪽지 제한과 차단 알림 전송',
   '사용자·쪽지 신고와 증거 스냅샷 보존 기능',
   '신고 처리, 계정 정지·해제, 카테고리 관리를 통합한 관리자 대시보드',
            'FastAPI router-service-repository 계층과 SQLAlchemy async 구성',
            'Alembic 마이그레이션, 재실행 가능한 schema.sql·seed.sql 관리',
            'React 반응형 UI, 접근 가능한 Modal과 역할 기반 라우팅 구성',
            'pytest, Vitest, ESLint, TypeScript와 MySQL 실DB 기반 검증 자동화',
        ],

        contribution: [
            'AGENTS.md에 기술 스택, 문서 동기화, DB 안전 수칙과 검증 기준을 정의',
            'SKILL.md를 생성하여 백엔드, GitHub 전문 스킬을 작업 성격에 맞게 적용',
            "UI/UX 디자인 전용 스킬 impeccable 적용",
            "하위 폴더 AGENTS.md에 frontend, backend 별 코딩 규칙 정의",
            '기능 요구사항을 에이전트와 반복적으로 구체화하고 제안서를 받은 후 사용자 승인 후에만 구현하는 설계·컨펌 구조 운영',
            '에이전트가 ./docs 폴더내에 문서를 생성하여 API문서, 요구사항 명세 등 계약을 철처히 하여 설계 문서를 바탕으로 그대로 구현',
            'API 테스트 자동화 구현 모든 기능 구현마다 테스트 자동화',
            'OpenAPI 경로, 문서 상대 링크, Git diff, ESLint, TypeScript 빌드와 테스트 결과로 에이전트 검증',
        ],

        details: `
이 프로젝트는 코딩 에이전트 활용 역량을 높이기 위해 기획과 설계부터 구현, 검증, 장애 분석까지 Codex와 협업하여 개발한 풀스택 커뮤니티 게시판입니다. 단순히 코드를 생성하는 방식이 아니라, 사용자가 제품 방향과 요구사항을 결정하고 에이전트가 설계안·영향 범위·검증 결과를 보고하면 이를 검토하고 승인하는 구조로 진행했습니다.

1. 에이전트 중심 개발 프로세스

저장소의 AGENTS.md에 기술 스택, 계층별 책임, 문서 동기화 규칙, 데이터베이스 안전 수칙과 완료 기준을 정의했습니다. 이를 통해 에이전트가 매 작업마다 동일한 개발 원칙을 따르고, 기존 코드나 사용자의 작업 내용을 임의로 훼손하지 않도록 통제했습니다.

백엔드와 UI·UX처럼 전문적인 판단이 필요한 작업에는 목적에 맞는 SKILL.md를 적용했습니다. 기능을 바로 구현하도록 지시하지 않고 요구사항 분석, 설계 제안서 작성, 사용자 검토와 승인, 구현, 자동 검증 순서로 작업을 분리했습니다.

2. 문서 기반 설계와 구현

backend/docs를 구현 계약으로 사용하여 REST API, 데이터베이스 테이블과 인덱스, 인증·보안 정책, 트랜잭션 범위와 운영 기준을 문서화했습니다. API가 변경되면 관련 문서와 OpenAPI, SQLAlchemy 모델, Alembic 마이그레이션, schema.sql과 seed.sql이 함께 변경되도록 에이전트의 작업 범위를 지정했습니다.

백엔드는 FastAPI의 router-service-repository 구조로 구성했습니다. Router는 HTTP 입출력, Service는 권한과 유스케이스 및 트랜잭션, Repository는 SQLAlchemy 비동기 데이터 접근을 담당하도록 역할을 분리했습니다. 프론트엔드는 React 19와 TypeScript를 기반으로 페이지, 도메인 기능, API 클라이언트, 공통 UI를 분리했습니다.

3. 주요 기능

JWT HttpOnly 쿠키와 회전식 Refresh Token, CSRF 검증을 적용해 브라우저 인증을 구현했습니다. 게시글은 리치 텍스트 편집을 지원하지만 서버에서 허용 목록 기반으로 HTML을 정제한 결과만 저장하고 출력하도록 구성했습니다. 본문 이미지와 일반 첨부파일은 별도의 API와 저장 정책으로 관리했습니다.

게시글 검색·필터·정렬·페이지네이션, 댓글과 1단계 대댓글, 좋아요, 작성자·관리자 권한 제어를 구현했습니다.

3. 에이전트를 활용한 품질 검증

기능 구현 후 에이전트가 pytest와 Vitest 테스트, ESLint, TypeScript 검사와 Vite 프로덕션 빌드를 실행하도록 했습니다. OpenAPI 경로와 설계 문서의 일치 여부, Markdown 상대 링크, Git diff 오류도 함께 검사했습니다.

데이터베이스 변경은 테스트 코드만 통과하는 것으로 끝내지 않았습니다. 별도의 빈 MySQL 스키마를 생성해 Alembic 전체 마이그레이션을 처음부터 적용하고, schema.sql 실행과 seed.sql 반복 실행 결과까지 확인했습니다. 검증에 사용한 임시 데이터베이스는 대상 이름을 명확히 확인한 후 제거하도록 해 실제 개발 데이터를 보호했습니다.


이 프로젝트를 통해 코딩 에이전트의 결과 품질은 프롬프트의 길이보다 명확한 작업 규칙, 문서화된 계약, 단계별 승인, 자동화된 완료 기준과 사용자의 지속적인 검토에 의해 결정된다는 점을 학습했습니다. 사용자는 제품 결정과 작업 지시 및 최종 검토를 담당하고, Codex는 설계 대안 제시, 구현, 테스트와 반복 검증을 수행하는 협업 구조를 구축했습니다.
`,

        github: 'https://github.com/Seopia/Board',
        deploy: 'https://board.seopia.co.kr',

        gallery: [
            {
                image: '/jung-jiseop/board-confirm.png',
                title: '설계-> 검토-> 컨펌-> 작업',
                description: '직접 만든 스킬을 사용하여 설계 후에 문서로 남긴 후 개발자에게 컨펌을 받은 후에 작업하는 방식으로 개발했습니다.'
            },
                        {
                image: '/jung-jiseop/board-commit.png',
                title: '각 상황에 맞는 스킬 제작',
                description: '이 프로젝트를 진행하며 사용할 스킬을 제작하여 각 상황에 맞을 때 적용하게 하였습니다.'
            },
        ]
    },
    {
        id: 'project-1',
        tab: 'RAG 프로젝트',
        title: 'LLM 챗봇 사용자 정신감정 분석 멘탈케어 플랫폼',
        description: '사용자와의 일상 대화를 기반으로 감정 상태를 분석하고, 하루 감정 기록과 요약을 제공하는 AI 멘탈케어 플랫폼입니다.',
        role: '아키텍쳐 설계, 백앤드 개발 (팀장)',
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
            '이전 대화 기록 기반 RAG 응답',
            '전문지식 필요시 RAG 응답',
            '대화 기반 감정 분석',
            '하루 단위 대화 요약 및 일기 생성',
            '감정 캘린더 시각화',
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
        deploy: 'https://refill.seopia.co.kr',
        gallery: [
            {
                image: '/jung-jiseop/refill-emotion-log-page2.png',
                title: '감정 캘린더 화면',
                description: 'AI가 분석한 사용자의 금일 또는 지난 감정 상태를 시각적으로 표현한 캘린더. 날씨 아이콘으로 감정을 직관적으로 확인할 수 있습니다.\n\nHugging Face에서 **Seonghaa/korean-emotion-classifier-roberta모델**을 사용하여 분노, 불안, 슬픔, 평온, 당황, 기쁨 감정 5가지를 \n구분 가능한 Text Classfication 모델을 사용했습니다.\n사용자의 오늘 하루 모든 대화내용에서 어떤 감정이 몇%를 차지하는지 예측할 수 있는 모델입니다.'
            },
            {
                image: '/jung-jiseop/refill-main-page.png',
                title: '챗봇 대화 인터페이스',
                description: '사용자와 AI가 실시간으로 대화할 수 있는 채팅 인터페이스입니다.\n채팅 방식은 아래의 순서로 이루어집니다.\n1. 사용자의 채팅 내역 최신 10개를 가져옵니다.\n2. LangChain의 Tool 기능을 활용해 LLM이 이전 대화내역이 더 필요하다고 판단되면 MongoDB Atlas의 벡터 유사도 검색을하여 관련 채팅 내역을 가져갑니다. (RAG)\n3. 정신의학적인 지식이 필요하다고 판단되면 위와 같이 Tool기능을 활용해 유사도 검색을 수행해 관련 전문지식을 가져갑니다.(RAG)\n4. 위 결과를 모두 합쳐 payload를 만들어낸 후 최종 응답 LLM에게 제출합니다\n5. 최종 응답 LLM이 유저에게 Streaming 방식으로 응답합니다.\n\n위 방식으로 불필요한 RAG검색을 줄이고, API비용을 최소화하였습니다.'
            },
            {
                image: '/jung-jiseop/refill-profile-page.png',
                title: '프로필 페이지',
                description: '간략한 통계나, 유저의 정보를 조회 이름, 소개를 편집할 수 있는 페이지입니다.'
            },
            {
                image: '/jung-jiseop/refill-emotion-log-create-diary.png',
                title: '일기 생성 기능',
                description: '오늘의 대화 내용을 기반으로 AI가 자동으로 생성한 일기. 사용자의 감정을 담아낸 감성적인 일기 형식으로 기록됩니다.'
            },
            {
                image: '/jung-jiseop/refill-community-page.png',
                title: '일기 공유 커뮤니티',
                description: '생성한 일기를 공유하면 추가적인 첨언과 함께 오늘의 일기를 사람들과 공유할 수 있습니다.'
            },
            {
                image: '/jung-jiseop/refill-community-detail.png',
                title: '일기 공유 커뮤니티 상세',
                description: '일기를 공유한 글에서 댓글을 작성하여 사람들과 소통할 수 있습니다.'
            }
        ]
    },
    {
        id: 'project-2',
        tab: '파일 클라우드 프로젝트',
        title: '파일 공유 웹사이트 Seopia Cloud',
        description: '개인 클라우드, 공용 클라우드, 그룹 클라우드, 관리자 페이지를 제공하며 사용자 권한에 따라 파일 업로드, 공유, 관리 기능을 분리한 웹 기반 클라우드 스토리지 서비스입니다. 프론트앤드는 AI를 적극 활용했습니다.',
        role: '개인 프로젝트',
        architecture: [
            'React: 개인·공용·그룹 클라우드 및 관리자 페이지 UI 구현',
            'Spring Boot: 사용자 인증, 파일 관리, 그룹 관리, 관리자 기능 API 처리',
            'Spring Security: JWT 기반 인증 및 역할별 접근 제어',
            'MariaDB: 사용자, 파일 메타데이터, 그룹, 권한, 공유 정보 저장',
            'Server File System: 실제 업로드 파일 저장 및 디렉터리 관리',
            'Nginx: 프론트엔드 정적 파일 서빙 및 백엔드 API 프록시',
            'Raspberry Pi: 파일 저장소 및 서비스 배포 환경 구성',
        ],
        features: [
            '사용자 회원가입 및 로그인',
            'JWT 기반 사용자 인증',
            '개인 클라우드 파일 업로드 및 관리',
            '공용 클라우드 파일 업로드 및 조회',
            '그룹 클라우드 생성 및 그룹별 파일 관리',
            '그룹원 초대 및 그룹 권한 관리',
            '파일 업로드, 다운로드, 삭제 기능',
            '파일 메타데이터 조회 및 관리',
            '사용자별 파일 접근 권한 검증',
            '관리자 페이지를 통한 사용자 관리',
            '관리자 권한 기반 공용 파일 관리',
            '폴더 구조로 유형별 파일 분리 관리',
        ],
        contribution: [
            '클라우드 스토리지 서비스 전체 기획 및 기능 명세 작성',
            '개인·공용·그룹 클라우드 구조 설계',
            'React 기반 클라우드 파일 관리 화면 구현',
            '개인 클라우드, 공용 클라우드, 그룹 클라우드 UI 분리 구현',
            '관리자 페이지 화면 및 관리 기능 구현',
            'Spring Boot 기반 파일 업로드, 다운로드, 삭제 API 구현',
            'Spring Security와 JWT 기반 사용자 인증 구조 구현',
            '사용자 역할과 그룹 권한에 따른 API 접근 제어 구현',
            'MultipartFile 기반 파일 업로드 처리 및 서버 저장 구조 설계',
            'MariaDB 기반 사용자, 파일, 그룹, 권한 데이터 모델 설계',
            '파일 실제 저장 경로와 DB 메타데이터를 분리한 구조 구현',
            '그룹 생성, 그룹원 관리, 그룹 파일 접근 로직 구현',
            '관리자 권한 기반 사용자 및 파일 관리 기능 구현',
            'Nginx와 Linux 서버 기반 서비스 배포 환경 구성',
        ],
        details: `
개인 클라우드, 공용 클라우드, 그룹 클라우드, 관리자 페이지를 제공하는 웹 기반 클라우드 파일 관리 플랫폼을 개발했습니다.

이 서비스는 저장소 유형과 사용자 권한에 따라 파일 접근 범위를 분리한 구조로 설계했습니다. 사용자는 개인 클라우드에서 본인 파일을 관리하고, 공용 클라우드에서는 여러 사용자가 공유 파일을 조회할 수 있으며, 그룹 클라우드에서는 특정 그룹에 속한 사용자만 파일을 업로드·다운로드할 수 있도록 구현했습니다.

프론트엔드는 React 기반으로 구현했으며, 개인·공용·그룹 클라우드와 관리자 페이지를 각각 분리된 화면으로 구성했습니다. 사용자는 파일 목록 조회, 업로드, 다운로드, 삭제 기능을 사용할 수 있고, 그룹 클라우드에서는 그룹 목록, 그룹 상세, 그룹원 관리 기능을 함께 제공했습니다.

백엔드는 Spring Boot 기반 REST API로 구성했습니다. 실제 파일은 서버 파일 시스템에 저장하고, 파일명, 저장 경로, 파일 크기, 확장자, 업로드 사용자, 저장소 유형, 그룹 코드 등의 메타데이터는 MariaDB에 저장했습니다. 이를 통해 파일 데이터와 관리 데이터를 분리하고, 파일 조회 및 권한 검증을 효율적으로 처리했습니다.

대용량 파일 업로드를 위해 파일을 일정 크기의 조각으로 나누어 전송하는 청킹 업로드 방식을 적용했습니다. 프론트엔드에서 파일을 chunk 단위로 분할해 순차 전송하고, 백엔드에서는 각 chunk를 임시 저장한 뒤 모든 조각이 업로드되면 하나의 파일로 병합하도록 구현했습니다. 이를 통해 대용량 파일 업로드 중 네트워크 부담을 줄이고, 일반적인 단일 업로드 방식보다 안정적인 파일 전송 구조를 구성했습니다.

인증 및 권한 처리는 Spring Security와 JWT를 기반으로 구현했습니다. 개인 클라우드 파일은 소유자만 접근할 수 있도록 제한했고, 그룹 클라우드 파일은 그룹 소속 여부를 검증한 뒤 접근을 허용했습니다. 관리자 페이지는 관리자 권한을 가진 사용자만 접근할 수 있도록 분리했습니다.
    `,
        github: 'https://github.com/Seopia/MyFileServer',
        deploy: 'https://cloud.seopia.co.kr',
        gallery: [
            {
                image: '/jung-jiseop/cloud-private-page.png',
                title: '개인 클라우드',
                description: '사용자 본인만 접근할 수 있는 개인 저장소 화면입니다. 파일 업로드, 다운로드, 삭제 기능을 제공하며,\n **폴더 구조로 파일을 저장 가능합니다.** \nJWT 인증 정보를 기반으로 사용자별 파일 목록을 분리하여 조회하도록 구현했습니다.'
            },
            {
                image: '/jung-jiseop/cloud-chunking.png',
                title: '개인 클라우드 (파일 업로드)',
                description: '용량이 작은 파일은 일반 multipart 업로드 방식으로 즉시 전송하고, 대용량 파일은 일정 크기의 chunk로 분할하여 순차 업로드하도록 구현했습니다.\n백엔드에서는 업로드된 chunk를 임시 저장한 뒤 모든 조각이 전송되면 하나의 파일로 병합하여, 대용량 파일 업로드의 안정성을 높였습니다.',
            },
            {
                image: '/jung-jiseop/cloud-private-file-detail.png',
                title: '개인 클라우드 (파일 상세보기)',
                description: '파일 유형에 따라 미리보기가 가능한 파일은 브라우저 내에서 바로 확인할 수 있도록 구현했습니다.\n사용자는 파일 다운로드와 삭제를 수행할 수 있으며,\n**공유하기 기능을 통해 UUID 기반 고유 URL을 생성하고 해당 링크로 파일을 공유할 수 있도록 설계했습니다.**',
            },
            {
                image: '/jung-jiseop/cloud-public.png',
                title: '공용 클라우드',
                description: '여러 사용자가 함께 접근할 수 있는 공용 파일 저장소 화면입니다. 공용으로 등록된 파일을 조회하고 다운로드할 수 있으며, 권한에 따라 파일 등록 및 관리 기능을 분리할 수 있도록 설계했습니다.'
            },
            {
                image: '/jung-jiseop/cloud-group.png',
                title: '그룹 클라우드',
                description: '특정 그룹에 소속된 사용자들만 접근할 수 있는 그룹 파일 저장소 화면입니다. 그룹 생성, 그룹원 관리, 그룹별 파일 업로드 및 다운로드 기능을 제공하며, 그룹 소속 여부를 기준으로 파일 접근 권한을 검증했습니다.'
            },
            {
                image: '/jung-jiseop/cloud-admin-page.png',
                title: '관리자 페이지',
                description: '관리자 권한을 가진 사용자가 서비스 내 사용자, 파일, 공용 클라우드 데이터를 관리할 수 있는 화면입니다. 일반 사용자 기능과 관리자 기능을 분리하여 운영 관리가 가능하도록 구현했습니다.'
            },
            {
                image: '/jung-jiseop/cloud-profile.png',
                title: '마이 페이지',
                description: '간단한 정보를 조회하고 수정할 수 있는 페이지입니다.'
            }
        ]
    },
    {
        id: 'project-3',
        tab: 'YOLO HailoSDK 최적화',
        title: 'YOLO 기반 재활용품 분류 모델',
        description: 'AI Hub 재활용품 분류 및 선별 데이터를 YOLO 학습 형식으로 변환하고, 금속캔·페트병·플라스틱·스티로폼 4개 클래스를 탐지하는 객체 탐지 모델을 학습한 프로젝트입니다. 학습 결과를 MLflow로 관리하고, ONNX 변환 및 Hailo-8 NPU용 HEF 컴파일 스크립트를 구성해 엣지 디바이스에 배포하였습니다.',
        role: 'AI 모델 학습·데이터 전처리·모델 변환',

        architecture: [
            'Python: 데이터 전처리, 학습, 추론, 변환 스크립트 구현',
            'Ultralytics YOLO: 재활용품 객체 탐지 모델 학습 및 추론',
            'PyTorch: YOLO 학습 환경 및 GPU 사용 여부 확인',
            'AI Hub Dataset: 재활용품 분류 및 선별 데이터 활용',
            'Custom Dataset Converter: JSON 어노테이션을 YOLO 라벨 형식으로 변환',
            'MLflow: 학습 파라미터와 모델 artifact 관리',
            'ONNX: 학습된 YOLO 모델 내보내기',
            'Hailo SDK: ONNX 모델을 Hailo-8용 HEF로 변환하기 위한 최적화·컴파일 스크립트 구성',
        ],

        features: [
            '금속캔, 페트병, 플라스틱, 스티로폼 4개 클래스 객체 탐지',
            'AI Hub JSON 어노테이션 데이터 파싱',
            'IMAGE_INFO 기반 이미지 크기 정보 추출',
            'ANNOTATION_INFO 기반 객체 클래스 및 좌표 정보 추출',
            'BOX, RECT, BBOX, POLYGON 형식의 어노테이션 처리',
            'Polygon 좌표를 Bounding Box로 변환',
            'YOLO 형식의 class, x_center, y_center, width, height 라벨 생성',
            '이미지 너비와 높이를 기준으로 Bounding Box 좌표 정규화',
            '잘못된 클래스, 좌표, shape 데이터 스킵 통계 관리',
            '학습·검증 데이터셋 자동 분할',
            'data.yaml 기반 클래스 정보 관리',
            'YOLO 학습 결과 저장 및 best.pt, last.pt 관리',
            'MLflow 기반 학습 파라미터 및 모델 artifact 기록',
            '이미지 또는 폴더 단위 객체 탐지 추론',
            '클래스별 탐지 개수 요약 출력',
            '학습된 모델의 ONNX 변환',
            'Calibration 이미지 기반 Hailo 최적화 스크립트 구성',
        ],

        contribution: [
            '재활용품 객체 탐지를 위한 YOLO 학습 파이프라인 구성',
            'AI Hub 재활용품 데이터셋의 JSON 라벨 구조 분석',
            '금속캔, 페트병, 플라스틱, 스티로폼 4개 클래스 매핑 정의',
            'IMAGE_INFO의 IMAGE_WIDTH, IMAGE_HEIGHT를 사용한 좌표 정규화 로직 구현',
            'ANNOTATION_INFO의 CLASS, SHAPE_TYPE, POINTS 정보를 활용한 객체 좌표 추출',
            'BOX 계열 어노테이션과 POLYGON 어노테이션을 YOLO Bounding Box 형식으로 변환',
            '변환 과정에서 unknown class, unsupported shape, bad points, bad bbox 통계를 기록하도록 구성',
            '대량 JSON 파일을 일괄 변환하는 YoloLabelConverter 구현',
            '학습 이미지와 라벨을 train/valid 데이터셋으로 자동 분리하는 전처리 스크립트 구현',
            'datasets/data.yaml에 YOLO 학습용 클래스 정보 구성',
            'configs/base_config.yaml을 통한 학습 설정 중앙 관리',
            'YOLOTrainer 클래스로 모델 로드, GPU 확인, 학습 실행, MLflow 기록을 모듈화',
            'YOLOPredictor 클래스로 모델 로드, 추론 실행, 탐지 결과 요약 기능 구현',
            '학습 결과로 best.pt, last.pt 및 best.onnx 산출물 생성',
            'ONNX 내보내기 스크립트와 Hailo-8 HEF 컴파일용 스크립트 구성',
            'Calibration 데이터 생성을 위한 이미지 전처리 스크립트 작성',
        ],

        details: `
AI Hub의 재활용품 분류 및 선별 데이터를 YOLO 객체 탐지 모델 학습에 사용할 수 있도록 전처리하고, 재활용품 4개 클래스를 탐지하는 모델을 학습한 프로젝트입니다.

데이터셋은 이미지와 JSON 어노테이션으로 구성되어 있으며, JSON 내부의 IMAGE_INFO와 ANNOTATION_INFO를 읽어 YOLO 라벨 형식으로 변환했습니다. IMAGE_INFO에서는 이미지의 너비와 높이를 가져오고, ANNOTATION_INFO에서는 객체의 CLASS, SHAPE_TYPE, POINTS 정보를 추출했습니다.

어노테이션 shape은 BOX, RECT, BBOX, POLYGON 형식을 처리하도록 구현했습니다. BOX 계열 데이터는 POINTS의 x, y, width, height 값을 그대로 사용하고, POLYGON 데이터는 모든 좌표의 최소·최대 x/y 값을 계산해 Bounding Box로 변환했습니다. 이후 이미지 크기를 기준으로 x_center, y_center, width, height 값을 0~1 범위로 정규화해 YOLO 라벨 파일을 생성했습니다.

전처리 과정에서는 금속캔, 페트병, 플라스틱, 스티로폼 4개 클래스만 학습 대상으로 사용했습니다. 알 수 없는 클래스, 지원하지 않는 shape, 잘못된 좌표, 유효하지 않은 bbox는 스킵하고 통계를 출력하도록 구성해 변환 결과를 검수할 수 있게 했습니다.

학습 데이터는 datasets/data.yaml에서 관리하며, train/images, train/labels, valid/images, valid/labels 구조로 구성했습니다. preprocess_data.py는 JSON 라벨 변환과 train/valid 분할을 한 번에 수행할 수 있고, split_validation.py는 별도 검증 데이터 분할용으로 구성되어 있습니다.

모델 학습은 Ultralytics YOLO 기반으로 진행했습니다. train_refactored.py는 configs/base_config.yaml을 로드한 뒤 YOLOTrainer를 통해 yolo11n.pt 모델을 학습합니다. 학습 설정은 이미지 크기 640, batch size 10, patience 10, GPU device 0 기준으로 구성되어 있으며, MLflow를 통해 학습 파라미터와 best 모델 artifact를 기록하도록 구현했습니다.

추론은 test_refactored.py와 YOLOPredictor 클래스를 통해 수행됩니다. 모델 경로, 입력 이미지 또는 폴더, 이미지 크기, confidence threshold, IoU threshold, device를 CLI 인자로 지정할 수 있으며, 탐지 결과를 저장하고 클래스별 탐지 개수를 요약해 출력합니다.

엣지 배포를 위해 학습된 best.pt 모델을 ONNX로 변환하는 스크립트를 구성했고, Hailo SDK의 ClientRunner를 사용해 ONNX 모델을 Hailo-8용 HEF로 컴파일하기 위한 스크립트도 작성했습니다. 이 과정에서 calibration_data.py로 640x640 크기의 calibration numpy 데이터를 생성하고, onnx_to_hef.py에서 translate_onnx_model, optimize, compile 단계를 수행하도록 구성했습니다.
  `,

        github: '',

        gallery: [
            {
                image: '/jung-jiseop/yolo-dataset.png',
                title: '재활용품 데이터셋',
                description: 'AI Hub 재활용품 분류 및 선별 데이터의 이미지와 JSON 어노테이션을 YOLO 학습 데이터로 사용했습니다.'
            },
            {
                image: '/jung-jiseop/yolo-dataset2.png',
                title: 'JSON to YOLO 라벨 변환',
                description: 'IMAGE_INFO와 ANNOTATION_INFO를 파싱해 객체 클래스와 좌표를 추출하고 YOLO 라벨 형식으로 변환했습니다.'
            },
            {
                image: '/jung-jiseop/yolo-boundingbox.png',
                title: 'Bounding Box 변환',
                description: 'BOX 계열 어노테이션과 POLYGON 어노테이션을 Bounding Box로 변환하고 이미지 크기 기준으로 정규화했습니다.'
            },
            {
                image: '/jung-jiseop/yolo-training.png',
                title: 'YOLO 모델 학습',
                description: 'Ultralytics YOLO를 사용해 금속캔, 페트병, 플라스틱, 스티로폼 4개 클래스를 탐지하는 모델을 학습했습니다.'
            },
            {
                image: '/jung-jiseop/yolo-mlflow.png',
                title: 'MLflow 실험 관리',
                description: '학습 파라미터와 모델 artifact를 MLflow에 기록해 실험 결과와 모델 파일을 관리했습니다.'
            },
            {
                image: '/jung-jiseop/yolo-result.png',
                title: '객체 탐지 결과',
                description: '학습된 모델로 이미지 또는 폴더 입력을 추론하고, 탐지 결과 저장 및 클래스별 탐지 개수 요약을 수행했습니다.'
            },
            {
                image: '/jung-jiseop/yolo-onnx.png',
                title: 'ONNX 모델 변환',
                description: '학습된 YOLO 모델을 ONNX 형식으로 내보내 엣지 배포를 위한 중간 모델 파일을 생성했습니다.'
            },
            {
                image: '/jung-jiseop/yolo-hailo.png',
                title: 'Hailo-8 변환 스크립트',
                description: 'Calibration 데이터를 사용해 ONNX 모델을 Hailo SDK에서 최적화하고 HEF로 컴파일하기 위한 스크립트를 구성했습니다.'
            }
        ]
    },
        

]

const ProjectImageSlider = ({ project }: { project: Project }) => {
    // const hash = window.location.hash;
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
                <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/10 via-background to-accent/10" />
                <div className="pointer-events-none absolute inset-0 opacity-45 [background-image:linear-gradient(135deg,rgba(255,255,255,0.12)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.12)_50%,rgba(255,255,255,0.12)_75%,transparent_75%,transparent)] [background-size:22px_22px] dark:opacity-20" />
                <div className="pointer-events-none absolute inset-x-6 top-6 h-20 rounded-full bg-primary/10 blur-3xl" />
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
                                    className="object-contain drop-shadow-2xl"
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
                                    className={`h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${selectedIndex === idx
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
                    <div className="rounded-lg border border-border/50 bg-muted/40 shadow-md transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-primary/50 group-hover:shadow-xl">
                        {!hasError ? (
                            <img
                                src={item.image}
                                alt={item.title || `${projectTitle} 갤러리 이미지`}
                                className="h-auto w-full max-w-full rounded-lg object-contain"
                                draggable={false}
                                onError={() => setHasError(true)}
                                style={{ cursor: 'pointer' }}
                            />
                        ) : (
                            <div className="flex min-h-80 w-full flex-col items-center justify-center gap-3 rounded-lg bg-muted/70 text-muted-foreground">
                                <ImageIcon size={48} className="opacity-70" />
                                <p className="text-base font-medium">이미지를 불러올 수 없습니다.</p>
                                <p className="text-sm text-muted-foreground/80">플레이스홀더가 표시됩니다.</p>
                            </div>
                        )}
                    </div>
                </button>
            </DialogTrigger>
            <div className="mt-4">
                <h4 className="font-semibold text-xl text-foreground mb-2">{item.title}</h4>
                <div className="text-base text-muted-foreground leading-relaxed whitespace-pre-wrap">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            p: ({ children }) => <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-wrap">{children}</p>,
                            li: ({ children }) => <li className="ml-4 list-disc text-base text-muted-foreground leading-relaxed">{children}</li>,
                        }}
                    >
                        {item.description}
                    </ReactMarkdown>
                </div>
            </div>
            <DialogContent className="flex max-h-[94vh] w-fit max-w-[94vw] flex-col overflow-hidden p-0 sm:max-w-[94vw]">
                <div className="flex min-h-0 max-h-[calc(94vh-5rem)] max-w-[94vw] items-center justify-center bg-background/90">
                    {!hasError ? (
                        <img
                            src={item.image}
                            alt={item.title || `${projectTitle} 갤러리 이미지`}
                            className="h-auto max-h-[calc(94vh-5rem)] w-auto max-w-[94vw] object-contain"
                            draggable={false}
                            onError={() => setHasError(true)}
                        />
                    ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-muted/70 text-muted-foreground">
                            <ImageIcon size={72} className="opacity-70" />
                            <p className="text-lg font-semibold">이미지를 불러올 수 없습니다.</p>
                            <p className="text-base text-muted-foreground/80">네트워크 오류 또는 경로 문제일 수 있습니다.</p>
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
    const [activeProjectId, setActiveProjectId] = useState(projects[0].id)
    useEffect(() => {
        const hash = window.location.hash.replace('#', '')
        const index = Number(hash)

        if (
            Number.isInteger(index) &&
            index >= 0 &&
            index < projects.length
        ) {
            setActiveProjectId(projects[index].id)
        }
    }, [])
    const handleNextProjectClick = (currentIndex: number) => {
        const nextProject = projects[(currentIndex + 1) % projects.length]

        setActiveProjectId(nextProject.id)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

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
                        <span className="text-base font-semibold text-primary uppercase tracking-wider">포트폴리오</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4">
                        정지섭의 프로젝트
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        여러 프로젝트의 경험과 역량을 소개합니다
                    </p>
                </div>

                {/* Tabs Section */}
                <Tabs value={activeProjectId} onValueChange={setActiveProjectId} className="w-full">
                    {/* Tabs List - Top Position */}
                    <div className="mb-8 overflow-x-auto">
                        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 bg-transparent h-auto p-0">
                            {projects.map((project) => (
                                <TabsTrigger
                                    key={project.id}
                                    value={project.id}
                                    className="bg-muted hover:bg-muted/80 data-[state=active]:bg-linear-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-primary-foreground text-foreground rounded-lg px-4 py-2.5 transition-all duration-200 border-0 text-base font-medium"
                                >
                                    {project.tab}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>

                    {/* Tabs Content */}
                    {projects.map((project, projectIndex) => (
                        <TabsContent key={project.id} value={project.id} className="mt-0">
                            <Card className="border-border/50 overflow-hidden transition-all duration-300 backdrop-blur-sm bg-card/50">
                                <div className="flex flex-col gap-8 p-8 md:p-10">
                                    {/* Image Section */}
                                    <div className="w-full">
                                        <ProjectImageSlider project={project} />
                                    </div>

                                    {/* Content Section */}
                                    <div className="flex flex-col gap-8">
                                        {/* Title & Description */}
                                        <div className="border-b border-border/50 pb-6">
                                            <h2 className="text-4xl md:text-5xl font-bold mb-3">
                                                {project.title}
                                            </h2>
                                            <p className="text-accent font-medium text-lg leading-relaxed mb-4">
                                                {project.description}
                                            </p>

                                            {/* Links */}
                                            <div className="flex flex-wrap gap-3 pt-2">
                                                {project.github && (
                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground rounded-lg transition-all duration-200 font-semibold text-base shadow-md hover:shadow-lg hover:scale-105"
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
                                                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground rounded-lg transition-all duration-200 font-semibold text-base shadow-md hover:shadow-lg hover:scale-105"
                                                    >
                                                        <ExternalLink size={18} strokeWidth={2.5} />
                                                        포트폴리오 배포 링크
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
                                                    <h3 className="text-sm font-bold text-primary uppercase tracking-widest">역할</h3>
                                                </div>
                                                <p className="text-lg font-semibold text-foreground">{project.role}</p>
                                            </div>
                                        </div>

                                        {/* Architecture Section */}
                                        <div>
                                            <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-primary/30">
                                                <Building2 size={20} style={{ color: 'var(--icon-secondary)' }} />
                                                <h3 className="text-xl font-bold">아키텍처</h3>
                                            </div>
                                            <div className="space-y-3">
                                                {project.architecture.map((arch, idx) => {
                                                    const [key, value] = arch.split(':').map(s => s.trim());
                                                    return (
                                                        <div
                                                            key={idx}
                                                            className="p-4 bg-muted/40 border border-border/50 rounded-lg transition-all"
                                                        >
                                                            <div className="flex items-start gap-4">
                                                                <div className="shrink-0">
                                                                    <span className="inline-block px-3 py-1 bg-linear-to-r from-primary/30 to-accent/30 text-primary font-bold text-base rounded-md border border-primary/30">
                                                                        {key}
                                                                    </span>
                                                                </div>
                                                                <p className="text-base text-muted-foreground leading-relaxed flex-1 pt-1">{value}</p>
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
                                                <h3 className="text-xl font-bold">주요 기능</h3>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {project.features.map((feature, idx) => (
                                                    <Badge
                                                        key={idx}
                                                        className="bg-gradient-to-r from-primary/25 to-accent/25 text-primary border border-primary/40 transition-all text-sm font-medium px-3 py-1"
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
                                                <h3 className="text-xl font-bold">{project.id==="project-4" ? "요약" : "담당 역할"}</h3>
                                            </div>
                                            <div className="space-y-2">
                                                {project.contribution.map((contrib, idx) => (
                                                    <div key={idx} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg transition-colors">
                                                        <CheckCircle2 size={18} style={{ color: 'var(--icon-accent-secondary)' }} className="mt-0.5 shrink-0" />
                                                        <span className="text-base text-muted-foreground leading-relaxed">{contrib}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Project Details Section */}
                                        <div className="p-6 bg-linear-to-r from-primary/5 via-accent/5 to-primary/5 rounded-xl border border-border/50">
                                            <div className="flex items-center gap-2 mb-4">
                                                <FileText size={20} style={{ color: 'var(--icon-secondary)' }} />
                                                <h3 className="text-xl font-bold">프로젝트 상세</h3>
                                            </div>
                                            <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-wrap">
                                                {project.details}
                                            </p>
                                        </div>

                                        {/* Gallery Section */}
                                        {project.deploy && (
                                            <a
                                                href={project.deploy}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground rounded-lg transition-all duration-200 font-semibold text-base shadow-md hover:shadow-lg hover:scale-105"
                                            >
                                                <ExternalLink size={18} strokeWidth={2.5} />
                                                포트폴리오 배포 웹사이트 접속해보기
                                            </a>
                                        )}
                                        {project.gallery && project.gallery.length > 0 && (
                                            <div>
                                                <div className="flex items-center gap-2 mb-6 pb-4 border-b-2 border-primary/30">
                                                    <ImageIcon size={20} style={{ color: 'var(--icon-secondary)' }} />
                                                    <h3 className="text-xl font-bold">프로젝트 갤러리</h3>
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
                                        <div className="rounded-xl border border-primary/20 bg-linear-to-r from-primary/10 via-background to-accent/10 p-4 shadow-lg shadow-primary/10">
                                            <div className={`grid gap-3 ${project.deploy ? 'md:grid-cols-[1fr_1.25fr]' : ''}`}>
                                                {project.deploy && (
                                                    <a
                                                        href={project.deploy}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-lg border border-foreground/15 bg-foreground px-6 py-3 text-base font-bold text-background shadow-md shadow-foreground/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-foreground/90 hover:shadow-xl"
                                                    >
                                                        <ExternalLink size={19} strokeWidth={2.5} className="transition-transform group-hover:scale-110" />
                                                        포트폴리오 웹사이트 들어가보기
                                                    </a>
                                                )}
                                                <button
                                                    type="button"
                                                    onClick={() => handleNextProjectClick(projectIndex)}
                                                    className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-linear-to-r from-primary via-accent to-primary px-6 py-3 text-base font-bold text-primary-foreground shadow-lg shadow-primary/30 ring-2 ring-primary/25 transition-all duration-200 hover:-translate-y-0.5 hover:from-primary/90 hover:via-accent/90 hover:to-primary/90 hover:shadow-xl hover:shadow-primary/40"
                                                >
                                                    {projectIndex === projects.length - 1 ? (
                                                        <>
                                                            <RotateCcw size={19} strokeWidth={2.5} className="transition-transform group-hover:-rotate-45" />
                                                            처음 프로젝트로 돌아가기
                                                        </>
                                                    ) : (
                                                        <>
                                                            다음 프로젝트 보러가기
                                                            <ArrowRight size={20} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </TabsContent>
                    ))}
                </Tabs>


                {/* Projects Count */}

                <div className="mt-12 pt-8 border-t border-border/50 text-center">
                    <p className="text-muted-foreground text-base">
                        총 <span className="text-primary font-bold text-lg">{projects.length}</span>개의 프로젝트
                    </p>
                </div>
            </div>
        </div>
    )
}

export default JungJiseop
