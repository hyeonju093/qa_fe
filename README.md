# QA FE

할 일을 등록하고 목록에서 완료 상태를 바꾸거나 삭제하는 프론트엔드 애플리케이션이다.

## 주요 기능

- 할 일 등록
- 할 일 목록 조회
- 완료 상태 변경
- 할 일 삭제
- 빈 입력 방지
- 완료한 항목과 미완료 항목을 시각적으로 구분

할 일 데이터는 브라우저 화면 상태에서만 유지된다. 새로고침하면 목록은 초기화된다.

## 기술 스택

- Next.js
- React
- TypeScript

## 디렉터리 구조

```
src/
  app/                         페이지와 전역 스타일
  features/
    todo-list/
      components/              등록 폼, 목록, 항목
      types/                   할 일 타입
```

## 실행 방법

```bash
npm install
npm run dev
```

개발 서버 기본 주소는 `http://localhost:3000`이다.

```bash
npm run format
npm run lint
```

이 기능은 환경변수를 사용하지 않는다. `.env`는 Git에서 제외하고, 예시 값이 필요해지면 `.env.example`만 커밋한다.

## 협업 및 Git 브랜치 전략

- `main`은 배포, `develop`은 통합, 기능은 `feature` 브랜치에서 작업한다.
- 브랜치 이름은 `타입/이슈번호-작업내용`이다. 예: `feature/12-todoList`
- `main`과 `develop`에는 직접 push하지 않고 PR로 병합한다.
