# git repo 운영 가이드라인

## 탑 레포지토리

요약 : codecamp 레포(원본)
frontend : https://github.com/code-bootcamp/f6b2-team1-client
backend : https://github.com/code-bootcamp/f6b2-team1-server
admin : 범기
maintain : 태영, 영택

## 미드 레포지토리

요약 : 깃 관리자 레포(git 관리자용)
frontend : https://github.com/code-bootcamp/f6b2-team1-client-mid
backend : https://github.com/code-bootcamp/f6b2-team1-server-mid
admin : 태영, 영택
read : 범기, 재형, 한솔, 태영, 영택
upstream : 탑 레포지토리
origin : 미드 레포지토리

## 바텀 레포지토리

요약 : 작업용 레포 (팀원당 하나씩)
예시 : https://github.com/code-bootcamp/f6b2-team1-server-leo(자신영어이름)
upstream : 탑 레포지토리
origin : 바텀 레포지토리

# git bottom checklist

## bottom 레포지토리 사용법

1. 미드 레포지토리 fork
2. git clone <githuburl>
3. cd <해당폴더>
4. git remote -v
   1. upstream이 없을겁니다
   2. git remote add upstream <탑 레포지토리>
   3. git remote -v 해서 확인
5. git branch 해서 develop이 있는지 확인
   1. git checkout -b feat-<작업내용(영어만 됩니다)>
   2. 작업과 커밋 시작
6. 작업완료시
   1. git push origin feat-<작업내용(영어만 됩니다)>
7. github page로 들어가 new pull request 로 들어갑니다.(compare&pull request 아닙니다)
   1. base repository (왼쪽) : 미드 레포지토리 , base : develop
   2. head repository (오른쪽) : 바텀 레포지토리 , base : feat-<작업내용(영어만 됩니다)>

# git mid checklist

## 포크 및 브랜치 설정

1. 탑 레포지토리 fork
2. git clone <github url>
3. cd <해당폴더>
4. git remote -v
   1. origin, upstream 확인
5. git checkout master
   1. git checkout -b develop
6. git checkout develop

- 환경 구축 후 master에 커밋

1. 핫픽스 브랜치 만들기
   1. git checkout master
   2. git checkout -b hotfix
2. 릴리즈 브랜치 만들기
   1. git checkout develop
   2. git checkout -b release

✨ :sparkles: 새 기능 생성 Introduce new features.

🎨 :art: 코드/파일 수정 Improve structure / format of the code.

🔥 :fire: 코드/파일 삭제 Remove code or files.

🐛 :bug: 버그 수정 Fix a bug.

🚑 :ambulance: 긴급 수정 Critical hotfix.

📝 :memo: 문서 추가/수정 Add or update documentation.

🎉 :tada: 프로젝트 시작 Begin a project.

✅ :white_check_mark: 테스트 추가/수정 Add or update tests.

<!-- 배포단계 -->

🔖 :bookmark: 릴리즈/버전 태그 Release / Version tags.
💚 :green_heart: CI 빌드 수정 Fix CI Build.
👷 :construction_worker: CI 빌드 시스템 추가/수정 Add or update CI build system.

<!-- 프로젝트 완료 후 -->

♻️ :recycle: 코드 리팩토링 Refactor code.

<!-- 기타 깃모지 -->

💄 :lipstick: UI/스타일 파일 추가/수정 Add or update the UI and style files.

💩 :poop: 똥싼 코드 Write bad code that needs to be improved.

👽 :alien: 외부 API 변화로 인한 수정 Update code due to external API changes.

💡 :bulb: 주석 추가/수정 Add or update comments in source code.

🍻 :beers: 술 취해서 쓴 코드 Write code drunkenly.

🙈 :see_no_evil: .gitignore 추가/수정 Add or update a .gitignore file.

출처: https://inpa.tistory.com/entry/GIT-⚡️-Gitmoji-사용법-Gitmoji-cli [👨‍💻 Dev Scroll]
