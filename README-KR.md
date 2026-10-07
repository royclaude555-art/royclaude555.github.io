# 가평에서 살아볼까 — 독립형 정적 홈페이지

## 서버 업로드
`index.html`, `styles.css`, `script.js`, `assets/`를 서버 웹루트에 업로드합니다.
`index.html`과 `assets` 폴더는 반드시 같은 위치에 있어야 합니다.

## 로컬 확인
```bash
python3 -m http.server 8080
```
브라우저에서 `http://localhost:8080` 접속.

## 신청서 이메일
서버가 없어도 신청 내용은 클립보드로 복사됩니다. 제출자가 운영자 이메일을 입력하면 기본 메일 앱을 엽니다. 고정 이메일로 연결하려면 `script.js`의 submit 처리 부분에 운영자 이메일을 지정하면 됩니다.
