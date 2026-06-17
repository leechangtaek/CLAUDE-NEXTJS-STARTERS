# CLAUDE.md

이 파일은 Claude Code(claude.ai/code)가 이 저장소에서 작업할 때 참고할 지침을 제공합니다.

## 언어 및 커뮤니케이션 규칙

- **응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성 (중요)
- **변수명/함수명**: 영어 유지 (코드 표준)

## 코딩 스타일

- **들여쓰기**: 2칸
- **선호 프레임워크**: React, Next.js
- **스타일링**: Tailwind CSS
- **타입**: TypeScript 필수
- **반응형**: 필수 (모든 UI는 모바일부터 데스크톱까지)
- **주석**: 복잡한 로직이나 비명시적 부분만 간단히 설명

## 개발 환경 설정

### 필수 요구사항
- Node.js 18+ 및 npm

### 자주 사용하는 명령어

```bash
# 개발 서버 실행 (http://localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# 코드 린팅
npm run lint
```

### 빠른 테스트
- UI 변경 후 반드시 `npm run dev`로 개발 서버를 시작하여 브라우저에서 동작을 확인한 후 작업을 완료해야 합니다.

## 아키텍처 개요

### 프로젝트 구조
```
app/                      # Next.js App Router
  page.tsx               # 홈 페이지 (진입점)
  layout.tsx             # 루트 레이아웃
  globals.css            # 전역 스타일
  favicon.ico

components/
  ui/                    # shadcn/ui 기본 컴포넌트
    button.tsx           # 버튼
    card.tsx, badge.tsx, input.tsx 등 (폼/UI 기초)
    sonner.tsx           # 토스트 알림 제공자
    sheet.tsx            # 드로어/모달 컴포넌트
    
  layout/                # 페이지 레이아웃 컴포넌트
    header.tsx           # 네비게이션 헤더
    footer.tsx           # 페이지 푸터
    page-container.tsx   # 페이지 컨텐츠 래퍼
    
  sections/              # 페이지 섹션 컴포넌트
    hero.tsx             # 히어로 섹션
    features.tsx         # 기능 섹션
    stats.tsx            # 통계 섹션
    cta.tsx              # 행동 유도 섹션
    
  examples/              # 예제/데모 컴포넌트
    contact-form.tsx     # 예제 폼 (react-hook-form + zod)

lib/
  utils.ts               # 유틸리티 함수 (tailwind merge, className 헬퍼)
```

### 기술 스택

| 계층 | 기술 |
|------|------|
| 프레임워크 | Next.js 16.2.9 (App Router, 주의: breaking changes 있음) |
| 런타임 | React 19.2.4, TypeScript 5 |
| 스타일링 | Tailwind CSS 4 + @tailwindcss/postcss |
| UI 컴포넌트 | shadcn/ui (Radix UI 기반) |
| 폼 | react-hook-form 7.79.0 + zod 4.4.3 |
| 테마 | next-themes 0.4.6 |
| 알림 | sonner 2.0.7 (토스트 라이브러리) |
| 아이콘 | lucide-react 1.20.0 |
| 린팅 | ESLint 9 (Next.js 설정) |

### 주요 패턴

**컴포넌트 구조**: TypeScript 함수형 컴포넌트. 위치 기반 구성 (ui/는 기초 컴포넌트, sections/는 합성된 섹션, layout/는 구조적 컴포넌트).

**스타일링**: Tailwind CSS 클래스를 `lib/utils.ts`의 `cn()` 유틸리티로 합성 (clsx + tailwind-merge 사용). CSS 모듈이나 styled-components 불필요.

**폼**: react-hook-form으로 상태 관리 + zod로 스키마 유효성 검사. 예제: `components/examples/contact-form.tsx`.

**테마 전환**: next-themes 제공자가 다크/라이트 모드 지속성 처리. 컴포넌트에서 `useTheme()` 훅 사용 가능.

**알림**: Sonner 토스트를 레이아웃의 `<Sonner />` 제공자로 활용. `toast.success()` / `toast.error()` 등으로 트리거.

**UI 컴포넌트**: `components/ui/`에서 shadcn 컴포넌트 임포트. 새로운 컴포넌트는 `npx shadcn-ui@latest add <component>`로 추가.

## 핵심 원칙

### 라이브러리 우선 사용 — "바퀴를 재발명하지 말 것"
**커스텀 유틸리티를 직접 구현하지 말 것.** 이 프로젝트는 일반적인 기능을 위한 검증된 라이브러리가 설정되어 있습니다. 항상 직접 사용하세요:

| 필요 기능 | 라이브러리 | 예시 |
|---------|---------|------|
| 다크 모드 / 테마 전환 | `next-themes` | `useTheme()` 훅, `<ThemeProvider>` |
| 폼 유효성 검사 | `react-hook-form` + `zod` | 스키마 기반 폼 상태 & 유효성 검사 |
| 토스트 알림 | `sonner` | `toast.success()`, `<Sonner />` 제공자 |
| 날짜 처리 | `date-fns` | 날짜 유틸리티 (필요시 추가) |
| 클라이언트 상태 | `zustand` | 가벼운 상태 관리 (필요시 추가) |
| 서버 상태 | `@tanstack/react-query` | API 캐싱 & 동기화 (필요시 추가) |

**라이브러리 API를 단순히 감싸는 커스텀 훅은 피할 것** (예: next-themes를 감싸는 `use-theme.ts` 불가). 라이브러리 API를 직접 사용하거나 명확한 가치가 있을 때만 최소한의 래핑만 허용.

## 중요 참고사항

### Next.js 16 Breaking Changes
Next.js 16.2.9는 이전 버전에서 breaking changes가 있습니다. Next.js API를 사용한 새로운 코드를 작성하기 전에:
1. `node_modules/next/dist/docs/`의 관련 가이드 읽기 (특히 App Router, 라우팅, 메타데이터 등)
2. 에러 메시지에서 deprecation 주의
3. 확실하지 않으면 공식 Next.js 16 문서 참고

안정적인 코드를 위해 중요합니다 — 학습 데이터는 더 이전의 Next.js 패턴을 참고할 수 있습니다.

### 경로 별칭
프로젝트는 저장소 루트를 가리키는 `@/*` 별칭을 사용합니다. 컴포넌트와 유틸리티를 임포트할 때:
```typescript
import Component from '@/components/ui/button';
import { cn } from '@/lib/utils';
```

### React 19 & 컴파일러
이 프로젝트는 React 19를 대상으로 합니다. React Server Components와 React Compiler 같은 새로운 기능이 사용 가능합니다 — 고급 패턴을 사용할 때는 문서 확인.

### 설정
- TypeScript strict 모드 활성화
- ESLint는 Core Web Vitals + TypeScript용으로 설정
- Tailwind PostCSS 통합 (TailwindCSS 4)
- Tailwind 설정 파일 없음 (Tailwind 4 기본값 + PostCSS 플러그인 사용)
