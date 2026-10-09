# 테스트 공간 · GitHub Pages

주소창에는 GitHub Pages 주소를 유지하면서 기존 3D 공간을 표시합니다.
실시간 채팅, 아카이브 존, 파일과 캐릭터 저장은 기존 ChatGPT 사이트에서 계속 처리합니다.
별도의 Vercel 사이트에는 연결하거나 변경하지 않습니다.

## 게시

1. GitHub 저장소에 이 폴더의 파일을 올립니다.
2. 저장소 **Settings → Pages**에서 **Deploy from a branch**를 선택합니다.
3. 게시할 브랜치를 **main**, 폴더를 **/(root)**로 지정합니다.
4. GitHub가 표시하는 게시 URL에서 공간이 열리는지 확인합니다.

새 저장소를 사용하면 이전 홈페이지나 설정을 덮어쓰지 않습니다.
별도의 사용자 도메인 설정이나 CNAME 파일은 필요하지 않습니다.

## 주소와 기능

- 기본 접속은 요청한 방 `0a9dd060-d76a-4a6b-88fc-a4579b31a9b1`의 화이트 큐브입니다.
- `?world=library`로 아카이브 존을 요청할 수 있습니다. 입장과 포털 상태는 기존 사이트에서 처리합니다.
- `?room=방ID` 또는 `?space=공간ID`도 전달합니다.
- 방문자 주소창에는 GitHub 주소가 보입니다. 기존 서버 주소 자체를 비공개로 만들거나 삭제하는 방식은 아닙니다.
- 공간 내부의 기존 초대 링크와 파일 링크에는 기존 서버 주소가 사용됩니다.
- GitHub 게시 시 저장소 이름과 계정명은 실제 계정 연결 후 결정해야 합니다.

GitHub Pages 안내: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
