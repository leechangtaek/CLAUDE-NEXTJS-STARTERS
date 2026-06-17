# 📦 Next.js Starter Kit

## 프로젝트 설명

포트폴리오, 랜딩페이지, 프로젝트를 빠르게 시작하기 위한 Next.js 스타터 키트입니다. 현대적인 웹 개발 도구와 UI 컴포넌트가 미리 설정되어 있어 즉시 개발을 시작할 수 있습니다.

---

## 기술 스택

| 계층 | 기술 |
|------|------|
| 프레임워크 | Next.js 16.2.9 (App Router) |
| 런타임 | React 19.2.4 + TypeScript 5 |
| 스타일링 | Tailwind CSS 4 |
| UI 컴포넌트 | shadcn/ui (Radix UI 기반) |
| 폼 관리 | react-hook-form 7.79.0 + Zod 4.4.3 |
| 테마 | next-themes 0.4.6 (다크/라이트 모드) |
| 알림 | Sonner 2.0.7 |
| 아이콘 | Lucide React 1.20.0 |

---

## 주요 기능

✅ **기본 레이아웃**
- 반응형 헤더, 푸터 컴포넌트
- 페이지 컨텐츠 래퍼 (page-container)

✅ **다크 모드**
- next-themes로 다크/라이트 모드 자동 전환
- 사용자 선택 저장 및 지속성

✅ **UI 컴포넌트 라이브러리**
- shadcn/ui 기본 컴포넌트 (Button, Card, Input, Badge 등)
- 토스트 알림 (Sonner) 제공자

✅ **폼 예제**
- react-hook-form + Zod을 사용한 검증된 폼
- contact-form.tsx 예제 포함

✅ **섹션 컴포넌트**
- Hero, Features, Stats, CTA 섹션
- 바로 사용 가능한 랜딩페이지 템플릿

---

## 빠른 시작

### 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run dev
```
브라우저에서 [http://localhost:3000](http://localhost:3000) 열기

### 프로덕션 빌드
```bash
npm run build
npm start
```

### 린팅
```bash
npm run lint
```

---

## 프로젝트 구조

```
app/
  ├── page.tsx               # 홈 페이지 (진입점)
  ├── layout.tsx             # 루트 레이아웃
  ├── globals.css            # 전역 스타일
  └── favicon.ico

components/
  ├── ui/                    # shadcn/ui 기본 컴포넌트
  │   ├── button.tsx
  │   ├── card.tsx
  │   ├── input.tsx
  │   ├── badge.tsx
  │   ├── sheet.tsx          # 드로어/모달
  │   └── sonner.tsx         # 토스트 제공자
  │
  ├── layout/                # 페이지 구조
  │   ├── header.tsx
  │   ├── footer.tsx
  │   └── page-container.tsx
  │
  ├── sections/              # 랜딩페이지 섹션
  │   ├── hero.tsx
  │   ├── features.tsx
  │   ├── stats.tsx
  │   └── cta.tsx
  │
  └── examples/              # 예제/데모
      └── contact-form.tsx   # 폼 예제

lib/
  └── utils.ts               # 유틸리티 (cn, classname 헬퍼)
```

---

## 핵심 원칙

### 라이브러리 우선 사용
검증된 라이브러리를 직접 사용하세요:
- **테마**: `next-themes`의 `useTheme()` 훅
- **폼**: `react-hook-form` + `zod`
- **알림**: `sonner`의 `toast.success()` / `toast.error()`
- **UI**: `shadcn/ui` 컴포넌트

### 스타일링
- Tailwind CSS 클래스를 `lib/utils.ts`의 `cn()` 유틸리티로 합성
- CSS 모듈이나 styled-components 불필요

---

## 추천 다음 단계

1. **홈페이지 커스터마이징**
   - `app/page.tsx` 수정
   - 섹션 컴포넌트 재구성

2. **폼 추가**
   - `components/examples/contact-form.tsx` 참고
   - react-hook-form + zod으로 검증된 폼 작성

3. **새 페이지 추가**
   - `app/` 디렉토리에 폴더 생성 (예: `app/about`)
   - `page.tsx` 작성

4. **UI 컴포넌트 추가**
   ```bash
   npx shadcn-ui@latest add <component-name>
   ```

---

## 유용한 리소스

- [Next.js 공식 문서](https://nextjs.org/docs)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [shadcn/ui 컴포넌트](https://ui.shadcn.com)
- [React Hook Form](https://react-hook-form.com)

---

## 라이센스

MIT
