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

## 3월 20일 강의 내용

creat-react-app 생성 방법

1. Node.js 설치 (맥의 경우 brew install node 윈도우의 경우 사이트가서 설치)
2. npm 설치 (npm install -g npm \*brew로 설치시 npm 자동 설치)
3. npm 버전 확인 npm -v
4. npx 설치 (터미널 -> npm install npx -g)
5. npx 버전 확인 npx -v
6. create-react-app 설치 (터미널 -> npx -> npx create-react-app 본인 디렉토리 이름)
7. test.app 생성하기

8. 리액트의 장점 - 빠른 업데이트와 렌더링 속도 (렌더링이란, 화면에 띄워주는게 빠르다.)
   ㄴ> 이것을 가능하게 하는 것이 바로 Virtual DOM 입니다.
   DOM(Document Object Model)은 HTML 문서를 객체로 만들어 놓은 것입니다.
   Virtual DOM은 DOM 조작이 비효율적인 이유로 속도가 느리기 때문에 고안된 방법입니다.
   DOM은 동기식, Virtual DOM은 비동기식 방법으로 렌더링합니다.

9. 컴포넌트 기반구조
   리액트의 모든 페이지는 컴포넌트로 구성됩니다.
   하나의 컴포넌트는 다른 여러 개의 컴포넌ㄴ트의 조합으로 구성할 수 있습니다.
   그래서 리액트로 개발을 하다 보면 레고 블록을 조립나는 것처럼 컴포넌트를 조합해서 웹사이트를 개발하게 됩니다.
   아래 그림은 에어비앤비 사이트 화면의 컴퐅넌트 구조 입니다. 재사용성이 뛰어납니다.

10. 재사용성
    반복적인 작업을 줄여주기 때문에 생산성을 높여 줍니다.
    또한 유지보수가 용이합니다.
    재사용이 가능하려면 해당 모듈의 의존성이 없어야 합니다.

11. 든든한 지원군
    메타(facebook)에서 오픈소스 프로젝트로 관리하고 있어 계속 발전하고 있습니다.

12. 활발한 지식 공유 & 커뮤니티

13. 모바일 앱 개발가능
    리액트 네이티브 라는 모바일 환경 UI프레임워크를 사용하면 크로스 플랫폼(cross-platform)모바일 앱을 개발할 수 있습니다.

1-3 리액트의 단점

1. 방대한 학습량 - 자바스크립트를 공부한 경우 빠르게 학습할 수 있습니다.
2. 높은 상태 관리 복잡도 - state, component life cycle 등의 개념이 있지만 그리 어렵지 않습니다.

gitignore -> 제외할 파일 목록을 지정하는 파일이다.
git으로 프로젝트를 관리할 때, 그 프로젝트 안의 특정파일들은 Git으로 관리할 필요가 없는 경우가 있다.

## 3월 27일 강의 내용

# JSX 란?

JSX는 내부적으로 xml/html 코드를 자바스크립트로 변환합니다.
React가 createElement 함수를 사용하여 자동으로 자바스크립트로 변환해줍니다.
만일 JS 작업할 경우 직접 createElement 함수를 사용해야합니다.
앞으로 설명하는 코드를 보면 알 수 있지만 결국 JSX는 가독성을 높여주는 역할을 합니다.

장점

1. 코드가 간결해 집니다.
2. 가독성이 향상 됩니다.
3. injection attack 이라 불리는 해킹 방법을 방어함으로써 보안에 강합니다.
4. 모든 자바 스크립트 문법을 지원합니다.
5. 자바스크립트 문법에 xml 과 html을 섞어서 사용합니다.
   아래 코드의 2번 라인처럼 섞어서 사용하는 것입니다.
   만일 html이나 xml에 자바스크립트 코드를 사용하고 싶으면 { } 괄호를 사용합니다.

만일 태그의 속성값을 넣고 싶을 때는 다음과 같이 합니다.

const element = <div tabIndex="0"></div>;
const element = <img src={user.avatarUrl}></img>;

# 엘리먼트 정의

엘리먼트는 리액트 앱을 구성하는 요소를 의미합니다.
공식페이지에는 "엘리먼트는 리액트 앱의 가장 작은 빌딩 블록들" 이라고 설명하고 있습니다.
웹사이트의 경우는 dom 엘리먼트이며 html요소를 의미합니다.

리액트 엘리먼트와 dom 엘리먼트의 차이는 ?

리액트 엘리먼트는 virtual dom의 형태를 취하고 있습니다.
dom 엘리먼트는 페이지의 모든 정보를 갖고 있어 무겁습니다.
반면 리액트 엘리먼트는 변화한 부분만 갖고 있어 가볍습니다.

업데이트 속도 : dom 은 느리고, virtual dom 빠릅니다.
element 업데이트 방식은 : dom전체 업데이트, 변화 부분을 가상 dom 으로 만든 후 dom과 비교하여 다른 부분만 업데이트.
메모리 : dom 낭비가 심함, virtual dom 효율적이다.

역시 자바스크립트 객체입니다.

내부적으로 자바스크립트 객체를 만드는 역할을 하는 함수가 createElement()입니다.
첫 번째 매개변수가 type 입니다. 이 곳에 태그가 들어가면 그대로 표현하고,
만일 리액트 컴포넌트가 들어가면 이것을 분해해 결국 태그로 만들게 됩니다.

엘리먼트의 생김새 -> 리액트 엘리먼트는 자바스크립트 객체의 형태로 존재합니다.

# 특징

가장 큰 특징은 불변성입니다.
즉, 한 번 생성된 엘리먼트의 children 이나 속성을 바꿀 수 없습니다.

만일 내용이 바뀌면 어떻게 해야 할까요 ?
이 때는 컴포넌트를 통해 새로운 엘리먼트를 생성하면 됩니다.
그 다음 이전 엘리먼트와 교체를 하는 방법으로 내용을 바꾸는 것입니다.
이렇게 교체하는 작업을 하기 위해 virtualdom을 사용합니다.

root dom node = 최상위
다음 html 코드는 id 값이 root인 div 태그로 단순하지만 리액트에 필수로 들어가는 아주 중용한 코드입니다.
이 div 태그 안에 리액트 엘리먼트가 렌더링 되며, 이것을 root dom node 라고 합니다.

<div id = "root"></div>

엘리먼트를 렌더링하기 위해서는 다음과 같은 코드가 필요합니다.

const element = <h1>안녕, 리액트!</h1>
ReactDOM.render(element, document.getElementById('root'));

이때 render()함수를 사용하게 됩니다.
이 함수의 첫 번째 파라메터 출력할 리액트 엘리먼트이고, 두번째 파라메터는 출력할 타겟을 나타냅니다.
즉 리액트 렌터링의 과정은 virtyal dom 에서 실제dom으로 이동하는 과정이라고 할 수 있습니다.
