import type { Project } from "@/types/project";
export const projects: Project[] = [
    {
        id: 'project-1',
        tab: 'AI 정신감정 챗봇',
        title: 'AI 챗봇 사용자 정신감정 분석 멘탈케어 플랫폼',
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
]