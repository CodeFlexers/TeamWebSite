"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
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
  ArrowRight,
  RotateCcw,
} from "lucide-react";

const projects: Project[] = [
  {
    id: "project-1",
    tab: "RAG 프로젝트",
    title: "LLM 챗봇 사용자 정신감정 분석 멘탈케어 플랫폼",
    description:
      "사용자와의 일상 대화를 기반으로 감정 상태를 분석하고, 전문적인 정신 건강 상담이 가능한 하루 감정 기록과 요약을 제공하는 AI 멘탈케어 플랫폼입니다.",
    role: "아키텍쳐 설계, 백앤드 개발 (팀장)",
    architecture: [
      "Next.js: 사용자 인터페이스 및 감정 캘린더 화면",
      "FastAPI: AI 챗봇 응답, 요약, 감정 분석 처리",
      "MongoDB: 사용자 대화 기록 저장, 벡터 검색",
      "MariaDB: 사용자 정보 및 분석 결과 저장",
      "LangChain: RAG 및 LLM 처리 흐름 구성",
      "Raspberry Pi: 서비스 배포 환경",
    ],
    features: [
      //주요 기능
      "AI 챗봇 실시간 대화",
      "이전 대화 기록 기반 RAG 응답",
      "전문지식 필요시 RAG 응답",
      "대화 기반 감정 분석",
      "하루 단위 대화 요약 및 일기 생성",
      "감정 캘린더 시각화",
      "사용자 인증 및 대화방 관리",
      "스트리밍 응답 처리",
    ],
    contribution: [
      //담당 역할
      "프로젝트 전체 기획 및 기능 명세 작성",
      "데이터 수집, 전처리",
      "RAG 검색 품질 개선 연구",
      "프론트엔드, 백엔드, AI 서버 간 API 연동 구조 설계",
      "FastAPI 기반 AI 분석 서버 구현",
      "OpenAI API 및 LangChain 기반 대화 분석 흐름 설계",
      "MongoDB 대화 기록 저장 구조 설계",
      "MongoDB 사용자 대화 벡터 검색 구현",
      "금일 사용자 대화 기반 감정 분석 후 날씨로 표현",
      "MariaDB 기반 사용자 및 분석 결과 데이터 관리",
      "Raspberry Pi 서버 배포 및 CI/CD 자동화 구성",
      "사용자 카카오 로그인, 회원 가입 쿠키 기반 인증 처리",
    ],
    details: `
## 프로젝트 소개

사용자가 AI 챗봇과 대화하면 대화 내용을 기반으로 감정 상태를 분석하고, 하루 단위의 감정 요약과 일기 형태의 기록을 생성하는 **AI 멘탈케어 플랫폼**을 개발했습니다.

프론트엔드는 **Next.js** 기반으로 구현했으며, 사용자가 챗봇과 자연스럽게 대화할 수 있는 인터페이스와 감정 캘린더 화면을 구성했습니다. 사용자의 하루 감정은 날씨 아이콘 형태로 시각화하여 직관적으로 확인할 수 있도록 설계했습니다.

백엔드는 사용자 인증, 대화방, 메시지 저장, 감정 분석 결과 저장 기능을 분리하여 구성했습니다. AI 분석 서버는 **Python FastAPI**로 구현했으며, OpenAI API와 LangChain을 활용해 사용자 대화를 요약하고 감정 상태를 추론하도록 처리했습니다.

또한 **Streaming 응답 방식**을 적용해 AI 답변이 실시간으로 출력되는 사용자 경험을 구현했습니다. MongoDB에 저장된 이전 대화 기록을 기반으로 RAG 구조를 적용하여, 사용자의 과거 대화 맥락을 반영할 수 있는 챗봇 흐름을 설계했습니다.

팀장으로서 전체 기능 기획, 서비스 구조 설계, API 연동 방식 결정, AI 서버 구현, 배포 자동화 구성을 담당했습니다.

---

## RAG 검색 품질 개선 연구

### 1. 연구 배경 및 목표

기존에는 나무위키에서 정신질환 관련 문단을 수동으로 수집한 데이터를 RAG 지식베이스로 사용했습니다.

그러나 데이터의 출처와 구조가 일관되지 않고, 검색 결과의 관련성도 만족스럽지 못해 데이터셋과 검색 파이프라인을 전면적으로 개선했습니다.

특히 **Raspberry Pi CPU 환경에서 실시간으로 운영할 수 있도록 검색 정확도와 추론 속도 사이의 균형**을 중요하게 고려했습니다.

### 2. 정신건강 전문 데이터셋 구축

[국가정신건강정보포털](https://mentalhealth.go.kr/)에서 **50개 정신질환 관련 정보**를 크롤링하고, 총 **559개 문서**를 구축했습니다.

원본 데이터는 질환별로 다음 항목으로 구성되어 있습니다.

- **개요:** 정신질환의 정의 및 특징
- **진단:** 주요 증상과 진단 기준
- **치료:** 약물치료 및 비약물치료 방법
- **스스로 돕는 법:** 일상생활에서 실천할 수 있는 자기관리 방법

각 문서를 JSONL 형식으로 구조화하고, 질환명, 분류, 세부 항목, 출처 URL 등의 메타데이터를 부여했습니다.

또한 검색 품질을 높이기 위해 질환명과 분류 정보를 포함한 \`search_text\` 필드를 별도로 구성했습니다.

**데이터 처리 과정**

1. 국가정신건강정보포털에서 데이터 크롤링
2. 질환, 탭, 세부 항목 기준으로 문서 구조화
3. 원본 문서의 의미적 구분을 유지하고 불필요한 추가 청킹 제외
4. OpenAI \`text-embedding-3-small\` 모델로 1,536차원 벡터 임베딩
5. MongoDB Atlas에 문서 원문, 메타데이터 및 임베딩 벡터 저장
6. Atlas Vector Search 인덱스를 구축하여 의미 기반 검색 구현

### 3. Reranker 도입 및 초기 검증

초기에는 다국어 Reranker인 **BAAI/bge-reranker-v2-m3** 모델을 사용했습니다.

그러나 i7-12700KF CPU 환경에서 다음과 같은 추론 시간이 발생했습니다.

| 후보 문서 | 최대 입력 길이 | 추론 시간 |
|---|---|---|
| 20개 | 1024토큰 | 약 12초 |
| 10개 | 512토큰 | 약 4초 |
| 5개 | 1024토큰 | 약 6초 |
| 5개 | 512토큰 | 약 3초 |

실시간 챗봇에 적용하기에는 지연 시간이 길어 경량 모델인 **cross-encoder/mmarco-mMiniLMv2-L12-H384-v1**을 도입했습니다.

MiniLM은 초기 테스트에서 후보 문서 10개, 최대 256토큰 기준 약 **0.3초**의 추론 시간을 기록했습니다.

이후 4개 질문으로 Vector Search와 Reranking 결과를 비교했습니다.

**초기 정성 평가 결과**

- **성격장애 정의:** 정의 문서 2위 → 1위
- **공황장애 증상:** 증상이 유사한 공황장애 사례 2위 → 1위
- **우울증 비약물치료:** 비약물치료 문서 4위 → 1위
- **성인 ADHD 자기관리:** 집중력 및 시간 관리 관련 치료 문서 6위 → 1위

질문 의도에 맞는 문서가 상위로 이동하는 것을 확인했으며, 이후 객관적인 성능 검증을 위해 정량 평가를 진행했습니다.

### 4. RAG 검색 성능 평가 체계 구축

검색 성능을 수치로 비교하기 위해 직접 평가 데이터셋과 벤치마크 코드를 구축했습니다.

MongoDB에 저장된 실제 문서를 확인하여 질문별 정답 문서를 지정하고, 관련성 점수를 **0(무관), 1(부분 관련), 2(직접적인 정답)**로 구분했습니다.

다음 세 가지 평가지표를 사용했습니다.

- **Recall@30:** 검색된 후보 30개에 정답 문서가 포함된 비율
- **MRR@5:** 상위 5개에서 첫 번째 핵심 정답 문서의 순위
- **nDCG@5:** 상위 5개 문서의 관련성 및 순위 품질

초기에는 정신질환의 정의, 증상, 치료, 자기관리 등을 포함한 **10개 질문**으로 평가를 시작했습니다.

### 5. Vector Search와 Hybrid Search 비교

MongoDB Atlas 8.0 환경에서 **Vector Search와 Hybrid Search**의 검색 성능을 비교했습니다.

Hybrid Search는 의미 기반 벡터 검색과 키워드 검색을 결합했으며, 한국어 형태소 분석을 위해 \`lucene.nori\`, 검색 결과의 순위 결합을 위해 \`$rankFusion\`을 사용했습니다.

**초기 10개 질문 평가 결과**

| 검색 방식 | Recall@30 | MRR@5 | nDCG@5 |
|---|---:|---:|---:|
| Vector Search | **0.843** | 0.317 | 0.373 |
| **Vector + MiniLM** | **0.843** | **0.670** | **0.607** |
| Hybrid Search | 0.810 | 0.553 | 0.560 |
| Hybrid + MiniLM | 0.810 | 0.645 | 0.590 |

**주요 결과**

- Vector Search에 MiniLM을 적용하자 **MRR@5 약 111.6%, nDCG@5 약 62.6% 향상**
- Hybrid Search는 일부 정답 문서가 최종 후보에서 제외되면서 Recall@30이 0.843에서 0.810으로 하락
- Hybrid Search 단독의 순위 성능은 높았지만, Reranking 적용 후에는 Vector Search + MiniLM보다 낮은 결과 기록

따라서 현재 데이터셋에서는 **Vector Search + Reranking 구조가 가장 적합**하다고 판단하여 Hybrid Search를 운영 구성에서 제외했습니다.

### 6. Reranker 모델별 정확도 및 속도 비교

다양한 다국어 Reranker를 동일한 평가 기준으로 비교했습니다.

검색 후보는 30개, 최대 입력 길이는 256토큰으로 설정하고 CPU 추론 시간을 측정했습니다.

**10개 질문 기준 벤치마크 결과**

| Reranker | MRR@5 | nDCG@5 | CPU 추론 시간 |
|---|---:|---:|---:|
| **MiniLM** | 0.670 | 0.607 | **0.724초** |
| Horizon-Small | 0.653 | 0.592 | 1.504초 |
| KURE-Nano | 0.717 | 0.637 | 3.427초 |
| BCE | 0.700 | 0.670 | 2.524초 |
| BGE v2-m3 | **0.850** | **0.744** | 8.547초 |

추가로 Alibaba-NLP의 GTE 모델도 검토했으나, 설치 환경과 모델 구현 간 호환성 문제로 정상적인 성능 측정이 불가능하여 제외했습니다.

**모델 선정 결과**

- **BGE v2-m3:** 가장 높은 정확도를 기록했지만 MiniLM보다 약 11.8배 느림
- **BCE / KURE-Nano:** 일부 정확도 개선이 있었으나 CPU 추론 시간이 크게 증가
- **Horizon-Small:** MiniLM보다 느리고 정확도도 낮음
- **MiniLM:** 가장 빠른 추론 속도와 실시간 서비스에 적합한 성능 확보

정확도만 고려하면 BGE가 우수했지만, Raspberry Pi 기반 CPU 서비스의 응답 지연을 고려하여 **MiniLM을 최종 선정**했습니다.

### 7. 입력 토큰 길이 최적화

MiniLM의 입력 길이를 **256, 384, 512토큰**으로 변경하여 검색 정확도와 추론 시간을 비교했습니다.

**초기 10개 질문 평가 결과**

| 최대 입력 길이 | MRR@5 | nDCG@5 | 추론 시간 |
|---|---:|---:|---:|
| **256토큰** | 0.670 | **0.607** | **0.724초** |
| 384토큰 | 0.653 | 0.589 | 1.021초 |
| 512토큰 | **0.675** | 0.585 | 1.398초 |

입력 길이를 늘려도 전체 문서 순위 품질은 개선되지 않았으며, CPU 추론 시간만 증가했습니다.

따라서 **max_length=256**을 최종 설정으로 결정했습니다.

### 8. 평가 데이터셋 확장 및 최종 검증

초기 10개 질문은 실제 사용자 대화의 다양한 상황을 충분히 반영하지 못한다고 판단했습니다.

이에 따라 질환명을 직접 언급하지 않는 질문, 일상적인 고민, 스트레스와 불면이 결합된 복합 질문 등을 추가하여 **총 30개 평가 질문**으로 확장했습니다.

신규 질문에 대해서도 검색 후보와 실제 문서 내용을 검토해 관련성 점수를 부여했습니다.

**30개 질문 최종 평가 결과**

| 평가지표 | MiniLM 256토큰 | MiniLM 512토큰 |
|---|---:|---:|
| MRR@5 | **0.6117** | 0.5806 |
| nDCG@5 | **0.5539** | 0.5251 |
| 평균 CPU 추론 시간 | **0.738초** | 1.332초 |

30개 질문에서도 256토큰 설정이 정확도와 속도 모두 우수했습니다.

평가 과정에서는 다음과 같은 문제도 발견했습니다.

- **Retrieval 실패:** 정답 문서가 Vector Search 후보 30개에 포함되지 않는 문제
- **Reranking 실패:** 정답 문서가 후보에 존재하지만 관련성이 낮은 문서보다 뒤에 배치되는 문제
- **복합 질문 처리 한계:** 사용자의 실제 대처 방법보다 상황이 유사한 진단 사례가 상위에 배치되는 문제

이를 통해 Reranker뿐 아니라 초기 검색 단계의 Recall도 최종 답변 품질에 중요한 영향을 준다는 점을 확인했습니다.

### 9. 최종 RAG 검색 파이프라인

실험 결과를 바탕으로 다음 구조를 선정했습니다.

**검색 및 응답 흐름**

1. **사용자 질문 입력**
2. **OpenAI text-embedding-3-small:** 질문을 벡터로 변환
3. **MongoDB Atlas Vector Search:** 200개 탐색 후보 중 상위 30개 문서 반환
4. **MiniLM CrossEncoder:** 최대 256토큰으로 관련성 점수 재계산
5. **Top 5 문서 선정:** 관련성이 가장 높은 전문 문서 선택
6. **GPT-5-nano:** 검색된 전문 정보를 근거로 최종 답변 생성

**최종 설정**

| 구성 요소 | 채택 기술 |
|---|---|
| 데이터셋 | 정신질환 50개, 559개 문서 |
| 임베딩 모델 | text-embedding-3-small |
| 벡터 DB | MongoDB Atlas |
| 검색 방식 | Vector Search |
| numCandidates | 200 |
| 검색 후보 | 30개 |
| Reranker | mmarco-mMiniLMv2-L12-H384-v1 |
| 최대 입력 길이 | 256토큰 |
| 최종 문서 수 | 5개 |
| 답변 생성 모델 | GPT-5-nano |

### 10. 연구 성과 및 기술적 의사결정

이번 연구에서는 단순히 RAG 기능을 구현하는 것을 넘어 **검색 결과를 직접 평가하고 측정 결과를 바탕으로 기술을 선정**했습니다.

**주요 성과**

- 나무위키 기반 비정형 데이터를 정신건강 전문 자료로 대체
- **50개 정신질환, 559개 문서**를 구조화하여 검색용 지식베이스 구축
- Recall@30, MRR@5, nDCG@5 기반 정량 평가 코드 구현
- Vector Search + MiniLM을 통해 초기 평가에서 **nDCG@5 약 62.6% 향상**
- Hybrid Search의 검색 후보 누락 문제를 확인하고 불필요한 시스템 복잡도 제거
- 5개 Reranker의 정확도와 CPU 추론 속도를 비교하여 경량 모델 선정
- 입력 토큰 길이 최적화를 통해 추론 지연 최소화
- 평가셋을 30개 질문으로 확장하고 실제 사용자 질문에 대한 검색 한계 분석

**최종적으로 검색 정확도, CPU 추론 시간, 배포 환경을 종합적으로 고려한 RAG 파이프라인을 선정했습니다.**

현재까지 Retrieval 및 Reranking 평가를 완료했으며, 향후 GPT-5-nano의 최종 답변 품질과 Raspberry Pi 환경에서의 실제 추론 성능을 추가 검증할 계획입니다.

※ 성능 수치는 자체 구축한 평가 데이터셋과 테스트 PC의 CPU 환경에서 측정한 결과입니다.
    `,
    github: "https://github.com/Seopia/capstone-backend-fast-api",
    deploy: "https://refill.seopia.co.kr",
    notion:
      "https://app.notion.com/p/Refill-2952bf804d258009a025cce5786d3d83?source=copy_link",
    gallery: [
      {
        image: "/jung-jiseop/refill-emotion-log-page2.png",
        title: "감정 캘린더 화면",
        description:
          "AI가 분석한 사용자의 금일 또는 지난 감정 상태를 시각적으로 표현한 캘린더. 날씨 아이콘으로 감정을 직관적으로 확인할 수 있습니다.\n\nHugging Face에서 **Seonghaa/korean-emotion-classifier-roberta모델**을 사용하여 분노, 불안, 슬픔, 평온, 당황, 기쁨 감정 5가지를 \n구분 가능한 Text Classfication 모델을 사용했습니다.\n사용자의 오늘 하루 모든 대화내용에서 어떤 감정이 몇%를 차지하는지 예측할 수 있는 모델입니다.",
      },
      {
        image: "/jung-jiseop/refill-main-page.png",
        title: "챗봇 대화 인터페이스",
        description:
          "사용자와 AI가 실시간으로 대화할 수 있는 채팅 인터페이스입니다.\n채팅 방식은 아래의 순서로 이루어집니다.\n1. 사용자의 채팅 내역 최신 10개를 가져옵니다.\n2. LangChain의 Tool 기능을 활용해 LLM이 이전 대화내역이 더 필요하다고 판단되면 MongoDB Atlas의 벡터 유사도 검색을하여 관련 채팅 내역을 가져갑니다. (RAG)\n3. 정신의학적인 지식이 필요하다고 판단되면 위와 같이 Tool기능을 활용해 유사도 검색을 수행해 관련 전문지식을 가져갑니다.(RAG)\n4. 위 결과를 모두 합쳐 payload를 만들어낸 후 최종 응답 LLM에게 제출합니다\n5. 최종 응답 LLM이 유저에게 Streaming 방식으로 응답합니다.\n\n위 방식으로 불필요한 RAG검색을 줄이고, API비용을 최소화하였습니다.",
      },
      {
        image: "/jung-jiseop/refill-profile-page.png",
        title: "프로필 페이지",
        description:
          "간략한 통계나, 유저의 정보를 조회 이름, 소개를 편집할 수 있는 페이지입니다.",
      },
      {
        image: "/jung-jiseop/refill-emotion-log-create-diary.png",
        title: "일기 생성 기능",
        description:
          "오늘의 대화 내용을 기반으로 AI가 자동으로 생성한 일기. 사용자의 감정을 담아낸 감성적인 일기 형식으로 기록됩니다.",
      },
      {
        image: "/jung-jiseop/refill-community-page.png",
        title: "일기 공유 커뮤니티",
        description:
          "생성한 일기를 공유하면 추가적인 첨언과 함께 오늘의 일기를 사람들과 공유할 수 있습니다.",
      },
      {
        image: "/jung-jiseop/refill-community-detail.png",
        title: "일기 공유 커뮤니티 상세",
        description:
          "일기를 공유한 글에서 댓글을 작성하여 사람들과 소통할 수 있습니다.",
      },
    ],
  },

  {
    id: "project-2",
    tab: "파일 클라우드 프로젝트",
    title: "파일 공유 웹사이트 Seopia Cloud",
    description:
      "개인 클라우드, 공용 클라우드, 그룹 클라우드, 관리자 페이지를 제공하며 사용자 권한에 따라 파일 업로드, 공유, 관리 기능을 분리한 웹 기반 클라우드 스토리지 서비스입니다. 프론트앤드는 AI를 적극 활용했습니다.",
    role: "개인 프로젝트",
    architecture: [
      "React: 개인·공용·그룹 클라우드 및 관리자 페이지 UI 구현",
      "Spring Boot: 사용자 인증, 파일 관리, 그룹 관리, 관리자 기능 API 처리",
      "Spring Security: JWT 기반 인증 및 역할별 접근 제어",
      "MariaDB: 사용자, 파일 메타데이터, 그룹, 권한, 공유 정보 저장",
      "Server File System: 실제 업로드 파일 저장 및 디렉터리 관리",
      "Nginx: 프론트엔드 정적 파일 서빙 및 백엔드 API 프록시",
      "Raspberry Pi: 파일 저장소 및 서비스 배포 환경 구성",
    ],
    features: [
      "사용자 회원가입 및 로그인",
      "JWT 기반 사용자 인증",
      "개인 클라우드 파일 업로드 및 관리",
      "공용 클라우드 파일 업로드 및 조회",
      "그룹 클라우드 생성 및 그룹별 파일 관리",
      "그룹원 초대 및 그룹 권한 관리",
      "파일 업로드, 다운로드, 삭제 기능",
      "파일 메타데이터 조회 및 관리",
      "사용자별 파일 접근 권한 검증",
      "관리자 페이지를 통한 사용자 관리",
      "관리자 권한 기반 공용 파일 관리",
      "폴더 구조로 유형별 파일 분리 관리",
    ],
    contribution: [
      "클라우드 스토리지 서비스 전체 기획 및 기능 명세 작성",
      "개인·공용·그룹 클라우드 구조 설계",
      "React 기반 클라우드 파일 관리 화면 구현",
      "개인 클라우드, 공용 클라우드, 그룹 클라우드 UI 분리 구현",
      "관리자 페이지 화면 및 관리 기능 구현",
      "Spring Boot 기반 파일 업로드, 다운로드, 삭제 API 구현",
      "Spring Security와 JWT 기반 사용자 인증 구조 구현",
      "사용자 역할과 그룹 권한에 따른 API 접근 제어 구현",
      "MultipartFile 기반 파일 업로드 처리 및 서버 저장 구조 설계",
      "MariaDB 기반 사용자, 파일, 그룹, 권한 데이터 모델 설계",
      "파일 실제 저장 경로와 DB 메타데이터를 분리한 구조 구현",
      "그룹 생성, 그룹원 관리, 그룹 파일 접근 로직 구현",
      "관리자 권한 기반 사용자 및 파일 관리 기능 구현",
      "Nginx와 Linux 서버 기반 서비스 배포 환경 구성",
    ],
    details: `
개인 클라우드, 공용 클라우드, 그룹 클라우드, 관리자 페이지를 제공하는 웹 기반 클라우드 파일 관리 플랫폼을 개발했습니다.

이 서비스는 저장소 유형과 사용자 권한에 따라 파일 접근 범위를 분리한 구조로 설계했습니다. 사용자는 개인 클라우드에서 본인 파일을 관리하고, 공용 클라우드에서는 여러 사용자가 공유 파일을 조회할 수 있으며, 그룹 클라우드에서는 특정 그룹에 속한 사용자만 파일을 업로드·다운로드할 수 있도록 구현했습니다.

프론트엔드는 React 기반으로 구현했으며, 개인·공용·그룹 클라우드와 관리자 페이지를 각각 분리된 화면으로 구성했습니다. 사용자는 파일 목록 조회, 업로드, 다운로드, 삭제 기능을 사용할 수 있고, 그룹 클라우드에서는 그룹 목록, 그룹 상세, 그룹원 관리 기능을 함께 제공했습니다.

백엔드는 Spring Boot 기반 REST API로 구성했습니다. 실제 파일은 서버 파일 시스템에 저장하고, 파일명, 저장 경로, 파일 크기, 확장자, 업로드 사용자, 저장소 유형, 그룹 코드 등의 메타데이터는 MariaDB에 저장했습니다. 이를 통해 파일 데이터와 관리 데이터를 분리하고, 파일 조회 및 권한 검증을 효율적으로 처리했습니다.

대용량 파일 업로드를 위해 파일을 일정 크기의 조각으로 나누어 전송하는 청킹 업로드 방식을 적용했습니다. 프론트엔드에서 파일을 chunk 단위로 분할해 순차 전송하고, 백엔드에서는 각 chunk를 임시 저장한 뒤 모든 조각이 업로드되면 하나의 파일로 병합하도록 구현했습니다. 이를 통해 대용량 파일 업로드 중 네트워크 부담을 줄이고, 일반적인 단일 업로드 방식보다 안정적인 파일 전송 구조를 구성했습니다.

인증 및 권한 처리는 Spring Security와 JWT를 기반으로 구현했습니다. 개인 클라우드 파일은 소유자만 접근할 수 있도록 제한했고, 그룹 클라우드 파일은 그룹 소속 여부를 검증한 뒤 접근을 허용했습니다. 관리자 페이지는 관리자 권한을 가진 사용자만 접근할 수 있도록 분리했습니다.
    `,
    github: "https://github.com/Seopia/MyFileServer",
    deploy: "https://cloud.seopia.co.kr",
    gallery: [
      {
        image: "/jung-jiseop/cloud-private-page.png",
        title: "개인 클라우드",
        description:
          "사용자 본인만 접근할 수 있는 개인 저장소 화면입니다. 파일 업로드, 다운로드, 삭제 기능을 제공하며,\n **폴더 구조로 파일을 저장 가능합니다.** \nJWT 인증 정보를 기반으로 사용자별 파일 목록을 분리하여 조회하도록 구현했습니다.",
      },
      {
        image: "/jung-jiseop/cloud-chunking.png",
        title: "개인 클라우드 (파일 업로드)",
        description:
          "용량이 작은 파일은 일반 multipart 업로드 방식으로 즉시 전송하고, 대용량 파일은 일정 크기의 chunk로 분할하여 순차 업로드하도록 구현했습니다.\n백엔드에서는 업로드된 chunk를 임시 저장한 뒤 모든 조각이 전송되면 하나의 파일로 병합하여, 대용량 파일 업로드의 안정성을 높였습니다.",
      },
      {
        image: "/jung-jiseop/cloud-private-file-detail.png",
        title: "개인 클라우드 (파일 상세보기)",
        description:
          "파일 유형에 따라 미리보기가 가능한 파일은 브라우저 내에서 바로 확인할 수 있도록 구현했습니다.\n사용자는 파일 다운로드와 삭제를 수행할 수 있으며,\n**공유하기 기능을 통해 UUID 기반 고유 URL을 생성하고 해당 링크로 파일을 공유할 수 있도록 설계했습니다.**",
      },
      {
        image: "/jung-jiseop/cloud-public.png",
        title: "공용 클라우드",
        description:
          "여러 사용자가 함께 접근할 수 있는 공용 파일 저장소 화면입니다. 공용으로 등록된 파일을 조회하고 다운로드할 수 있으며, 권한에 따라 파일 등록 및 관리 기능을 분리할 수 있도록 설계했습니다.",
      },
      {
        image: "/jung-jiseop/cloud-group.png",
        title: "그룹 클라우드",
        description:
          "특정 그룹에 소속된 사용자들만 접근할 수 있는 그룹 파일 저장소 화면입니다. 그룹 생성, 그룹원 관리, 그룹별 파일 업로드 및 다운로드 기능을 제공하며, 그룹 소속 여부를 기준으로 파일 접근 권한을 검증했습니다.",
      },
      {
        image: "/jung-jiseop/cloud-admin-page.png",
        title: "관리자 페이지",
        description:
          "관리자 권한을 가진 사용자가 서비스 내 사용자, 파일, 공용 클라우드 데이터를 관리할 수 있는 화면입니다. 일반 사용자 기능과 관리자 기능을 분리하여 운영 관리가 가능하도록 구현했습니다.",
      },
      {
        image: "/jung-jiseop/cloud-profile.png",
        title: "마이 페이지",
        description: "간단한 정보를 조회하고 수정할 수 있는 페이지입니다.",
      },
    ],
  },
];

const ProjectImageSlider = ({ project }: { project: Project }) => {
  // const hash = window.location.hash;
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

type GalleryItem = NonNullable<Project["gallery"]>[number];

const GalleryItemModal = ({
  item,
  projectTitle,
}: {
  item: GalleryItem;
  projectTitle: string;
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button type="button" className="group w-full text-left">
          <div className="rounded-lg border border-border/50 bg-muted/40 shadow-md transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-primary/50 group-hover:shadow-xl">
            {!hasError ? (
              <img
                src={item.image}
                alt={item.title || `${projectTitle} 갤러리 이미지`}
                className="h-auto w-full max-w-full rounded-lg object-contain"
                draggable={false}
                onError={() => setHasError(true)}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <div className="flex min-h-80 w-full flex-col items-center justify-center gap-3 rounded-lg bg-muted/70 text-muted-foreground">
                <ImageIcon size={48} className="opacity-70" />
                <p className="text-base font-medium">
                  이미지를 불러올 수 없습니다.
                </p>
                <p className="text-sm text-muted-foreground/80">
                  플레이스홀더가 표시됩니다.
                </p>
              </div>
            )}
          </div>
        </button>
      </DialogTrigger>
      <div className="mt-4">
        <h4 className="font-semibold text-xl text-foreground mb-2">
          {item.title}
        </h4>
        <div className="text-base text-muted-foreground leading-relaxed whitespace-pre-wrap">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              p: ({ children }) => (
                <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-wrap">
                  {children}
                </p>
              ),
              li: ({ children }) => (
                <li className="ml-4 list-disc text-base text-muted-foreground leading-relaxed">
                  {children}
                </li>
              ),
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
              <p className="text-lg font-semibold">
                이미지를 불러올 수 없습니다.
              </p>
              <p className="text-base text-muted-foreground/80">
                네트워크 오류 또는 경로 문제일 수 있습니다.
              </p>
            </div>
          )}
        </div>
        <div className="p-6">
          <DialogTitle className="text-2xl font-semibold">
            {item.title}
          </DialogTitle>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const JungJiseop = () => {
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const index = Number(hash);

    if (Number.isInteger(index) && index >= 0 && index < projects.length) {
      setActiveProjectId(projects[index].id);
    }
  }, []);
  const handleNextProjectClick = (currentIndex: number) => {
    const nextProject = projects[(currentIndex + 1) % projects.length];

    setActiveProjectId(nextProject.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
            <span className="text-base font-semibold text-primary uppercase tracking-wider">
              포트폴리오
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4">
            정지섭의 프로젝트
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            여러 프로젝트의 경험과 역량을 소개합니다
          </p>
        </div>

        {/* Tabs Section */}
        <Tabs
          value={activeProjectId}
          onValueChange={setActiveProjectId}
          className="w-full"
        >
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
                        {project.notion?.trim() && (
                          <a
                            href={project.notion}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground rounded-lg transition-all duration-200 font-semibold text-base shadow-md hover:shadow-lg hover:scale-105"
                          >
                            <svg
                              width={18}
                              height={18}
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" />
                            </svg>
                            Notion
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
                          <Target
                            size={18}
                            style={{ color: "var(--icon-primary)" }}
                          />
                          <h3 className="text-sm font-bold text-primary uppercase tracking-widest">
                            역할
                          </h3>
                        </div>
                        <p className="text-lg font-semibold text-foreground">
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
                        <h3 className="text-xl font-bold">아키텍처</h3>
                      </div>
                      <div className="space-y-3">
                        {project.architecture.map((arch, idx) => {
                          const [key, value] = arch
                            .split(":")
                            .map((s) => s.trim());
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
                                <p className="text-base text-muted-foreground leading-relaxed flex-1 pt-1">
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
                        <Briefcase
                          size={20}
                          style={{ color: "var(--icon-accent-secondary)" }}
                        />
                        <h3 className="text-xl font-bold">
                          {project.id === "project-4" ? "요약" : "담당 역할"}
                        </h3>
                      </div>
                      <div className="space-y-2">
                        {project.contribution.map((contrib, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg transition-colors"
                          >
                            <CheckCircle2
                              size={18}
                              style={{ color: "var(--icon-accent-secondary)" }}
                              className="mt-0.5 shrink-0"
                            />
                            <span className="text-base text-muted-foreground leading-relaxed">
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
                        <h3 className="text-xl font-bold">프로젝트 상세</h3>
                      </div>
                      <div
                        className="space-y-4 text-base leading-relaxed text-muted-foreground
                          [&_h1]:text-2xl [&_h2]:text-xl [&_h3]:text-lg
                          [&_:is(h1,h2,h3,h4,h5,h6,strong)]:font-semibold
                          [&_:is(h1,h2,h3,h4,h5,h6,strong)]:text-foreground
                          [&_ul]:list-disc [&_ol]:list-decimal [&_:is(ul,ol)]:pl-6
                          [&_a]:text-primary [&_a]:underline
                          [&_blockquote]:border-l-2 [&_blockquote]:border-border [&_blockquote]:pl-4
                          [&_code]:rounded [&_code]:bg-muted [&_code]:px-1
                          [&_pre]:overflow-x-auto [&_pre]:rounded-md [&_pre]:bg-muted [&_pre]:p-3
                          [&_pre_code]:p-0
                          [&_table]:w-full [&_th]:bg-muted
                          [&_:is(th,td)]:border [&_:is(th,td)]:border-border
                          [&_:is(th,td)]:px-3 [&_:is(th,td)]:py-2"
                      >
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          components={{
                            table: ({ node: _node, ...props }) => (
                              <div className="overflow-x-auto">
                                <table {...props} />
                              </div>
                            ),
                          }}
                        >
                          {project.details}
                        </ReactMarkdown>
                      </div>
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
                          <ImageIcon
                            size={20}
                            style={{ color: "var(--icon-secondary)" }}
                          />
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
                      <div
                        className={`grid gap-3 ${project.deploy ? "md:grid-cols-[1fr_1.25fr]" : ""}`}
                      >
                        {project.deploy && (
                          <a
                            href={project.deploy}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-lg border border-foreground/15 bg-foreground px-6 py-3 text-base font-bold text-background shadow-md shadow-foreground/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-foreground/90 hover:shadow-xl"
                          >
                            <ExternalLink
                              size={19}
                              strokeWidth={2.5}
                              className="transition-transform group-hover:scale-110"
                            />
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
                              <RotateCcw
                                size={19}
                                strokeWidth={2.5}
                                className="transition-transform group-hover:-rotate-45"
                              />
                              처음 프로젝트로 돌아가기
                            </>
                          ) : (
                            <>
                              다음 프로젝트 보러가기
                              <ArrowRight
                                size={20}
                                strokeWidth={2.5}
                                className="transition-transform group-hover:translate-x-1"
                              />
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
            총{" "}
            <span className="text-primary font-bold text-lg">
              {projects.length}
            </span>
            개의 프로젝트
          </p>
        </div>
      </div>
    </div>
  );
};

export default JungJiseop;
