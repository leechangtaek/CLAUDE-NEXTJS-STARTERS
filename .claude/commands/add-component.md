---
description: '컴포넌트 이름을 받아서 TypeScript + Tailwind CSS 템플릿으로 새 React 컴포넌트 파일 생성'
argument-hint: '<component-name>'
allowed-tools:
  [
    'Write',
    'Read',
    'Glob',
  ]
---

# 컴포넌트 생성

React 함수형 컴포넌트를 `components/` 폴더에 생성합니다.

## 사용법

```
/add-component button-group
/add-component card-header
/add-component user-profile
```

## 동작 방식

1. 첫 번째 인자 `$1`로 컴포넌트 이름을 받음 (케밥-케이스)
2. `components/` 폴더에 새 파일 생성: `{ComponentName}.tsx`
3. TypeScript 함수형 컴포넌트 기본 템플릿 추가:
   - 함수형 컴포넌트 선언
   - TypeScript interface로 Props 정의
   - Tailwind CSS 클래스 (반응형 + 다크모드 지원)
   - 간단한 JSX 구조
4. 함수명은 파스칼케이스로 변환

## 생성 예시

**입력:**
```bash
/add-component card-header
```

**생성 파일:** `components/CardHeader.tsx`

```typescript
import React from 'react';

interface CardHeaderProps {
  // Props 정의
  children?: React.ReactNode;
}

export default function CardHeader({ children }: CardHeaderProps) {
  return (
    <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-800">
      {children}
    </div>
  );
}
```

## 주의사항

- 파일명은 파스칼케이스로 자동 변환됨 (button-group → ButtonGroup.tsx)
- 이미 존재하는 파일명이면 확인 후 진행
- 생성 후 프로젝트 구조에 맞게 Props 인터페이스 수정 필요
- Tailwind CSS 클래스는 프로젝트의 globals.css 스타일을 따름
