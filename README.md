# 이하늘 202230231

## 3월 13일 강의 내용

---

git 사용 방법 정리

1. 해야할 일을 이슈로 가서 제작
2. (local/origin) git pull upstream/origin master -rebase
3. 이슈 번호로 새로운 브런치 생성
4. 작업
5. (local/no) git commit -am "?" ? = 이슈명("커밋 #3") git add . git commit -m "커밋"
6. git pull upstream/origin master —rebase (새로운 master를 가져오기 위함)
7. conflict 해결 (존재 한다면)
8. git push origin "branch name" \*강제 push 는 -f 붙이기 (push -f origin)
9. github 들어가서 PR 올리기
10. Upstream에 murge 된 후에 Branch 삭제하기. \*모든 작업이 끝나기 전엔 Branch 지우지않기.

VIM
q : 나가기
wq : 저장 후 나가기
i = insert : 입력 모드
esc : 입력모드 종료

Branch
git switch name name은 (바꾸려는 브런치 명)
git switch -c name name은 (브런치 생성과 변경)
git branch (브런치 목록 확인)
git branch -d name (브런치 삭제) \* D를 사용 시 강제 삭제...

Rebase
git rebase -i HEAD~4 4은 (보여줄 커밋의 숫자를 의미함 더 많이 더 적게도 됌.)
git rebase --abort : Rebase 취소
git rebase --continue : Rebase 계속 (충돌)

충돌 발생 시 반복
충돌 하나 수정 -> git add . ->git rebase --continue

합칠 때 둘 중 아래(최신)있는 커밋을 pick -> s (squash)로 바꾸고 저장.

기타
git stash : 마지막 커밋 이후에 모든 변경사항 숨겨짐.
git stash pop : 마지막 나타나게 함.
git commit --amend 가장 최근의 커밋을 수정할 수 있음. \* 주로 커밋이름 바꿀 때 씀.

---

var = 중복 선언 가능 재할당 가능
Let = 중복 선언 불가능 재할당 가능
Const = 중복 선언 불가능 재할당 불가능
Array type = 배열
Object type

Ecma 스크립트

화살표 함수의 객체 부분을 잘 이해하자.

### GitHub 사용법
