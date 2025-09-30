## 익명 AI 힐링 랜딩페이지

Next.js (App Router) + Tailwind CSS + TypeScript 기반의 익명 AI 힐링 랜딩페이지입니다. 접근성과 모바일 우선 UX를 고려하여 제작되었고, 익명 대화를 외부 챗 엔진으로 연결하기 위한 최소한의 서버리스 엔드포인트를 제공합니다.

### 주요 기능
- Hero, Features, How it works(3단계), CTA(모달로 챗 시작), Footer
- 대화 시작 버튼은 `/api/start` 로 POST 호출(외부 챗 위젯 연동 지점)
- `/api/contact` 서버리스 엔드포인트: Formspree로 전송(Formspree 미지정 시 개발 모드에서 성공 응답)
- 대화 저장은 프론트엔드 체크박스(로컬 임시 저장 동의)로 옵트인
- 접근성 고려(ARIA, 키보드 포커스)
- 모바일 우선 디자인

### 프로젝트 구조
- App Router 사용: `app/`
- 컴포넌트: `components/`
- UI 컴포넌트는 Shadcn/Radix 기반(`components/ui/*`)

### 환경 변수
아래 값을 배포 환경에 설정하세요.

```
# 선택: Formspree로 문의 전송 시 사용
FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxx
```

### 개발 실행
```bash
pnpm install
pnpm dev
```

### 빌드/배포
```bash
pnpm build
pnpm start
```

Vercel 배포를 권장합니다. Vercel 프로젝트 설정에서 환경변수를 추가하고 빌드 커맨드는 기본값을 사용하세요.

### 파일 개요 (핵심)
- `tailwind.config.js`: Tailwind 스캔 경로 및 플러그인 설정
- `app/layout.tsx`: 전역 레이아웃, `styles/globals.css` 적용
- `app/page.tsx`: 랜딩 페이지(섹션 구성 + 모달 트리거)
- `components/Hero.tsx`: Hero 섹션(접근성 고려된 CTA)
- `components/ModalChat.tsx`: 챗 시작 모달(옵트인 체크박스, `/api/start` 호출)
- `app/api/start/route.ts`: 챗 시작 POST 엔드포인트(외부 위젯 연동 위치)
- `app/api/contact/route.ts`: 문의 POST 엔드포인트(Formspree 연동)

### 접근성 노트
- 상호작용 요소에 적절한 `aria-label`, `role`, heading 연결(`aria-labelledby`)을 적용했습니다.
- 키보드 포커스 가능한 컴포넌트(Button, Dialog, Checkbox 등) 사용.

### 외부 챗 엔진 연동 가이드(요점)
1) `/api/start` 에서 외부 엔진 토큰 발급/세션 생성 로직 추가
2) `components/ModalChat.tsx` 의 `startChat()` 이후 위젯 SDK 초기화 및 임베드
3) 필요 시 사용자 동의/옵트인 값을 세션에 반영



