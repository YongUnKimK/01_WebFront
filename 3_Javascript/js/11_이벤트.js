// 인라인 이벤트 모델 확인 
function check1(btn) { 
  
  // 매개변수 btn == 클릭한 버튼(this)
  console.log(btn) ;

  // 버튼의 배경색을 얻어와 저장
  const bgColor = btn.style.backgroundColor;

  console.log(bgColor);
  
  // 버튼이 클릭될 때 마다 pink < - > yellow 변경

  if(bgColor == "yellow") {
    btn.style.backgroundColor = "pink";
  } else { btn.style.backgroundColor = "yellow" ;}
}



//  고전 이벤트 모델 확인하기

// 아이디가 test1-1인 요소를 얻어와 test1a 변수에 저장

const test1a = document.querySelector("#test1-1");

// 고전 이벤트 모델 작성법
// 요소.이벤트리스너 = 이벤트핸들러
test1a.onclick = function() {
  alert("고전 이벤트 모델 확인 버튼")
};

// 고전 이벤트 모델 제거

// #test1-2 버튼 클릭시
// #test1-1 onclick 이벤트 리스너의 이벤트 핸들러 제거
document.querySelector("#test1-2").onclick = function() {
  // test1-1 기존 onclick 이벤트 핸들러를
  // null 로 덮어씌움(이벤트 제거)
  test1a.onclick = null;
  alert("이벤트 제거되었습니다.")
}

//고전 이벤트 모델 단점

// #test1-3 요소를 얻어와 test1c 변수에 저장

const test1c = document.querySelector("#test1-3");

// test1c 요소가 클릭되었을 때 배경색을 red로 변경
test1c.onclick = function() {
  test1c.style.backgroundColor = "red" ; 
}

// .... A few moments later ......

// test1c 요소가 클릭되었을 때 글자색을 "white"로 변경
test1c.onclick = function() {
  test1c.style.color = "white" ;
}

// -> onclick에 저장된 값이 덮어씌워지면서 
// 이전코드가 사라지는 문제가 발생합니다.

//-----------------------------------------------------------

// 표준 이벤트 모델 확인

const test2 = document.querySelector("#test2")

// 표준 이벤트 모델 작성법
// 요소.addEventListener("이벤트종류", 이벤트 핸들러(함수)

test2.addEventListener("click", function() {
  
  // 현재 test2의 투명도 확인하기
  // opacity : 투명도  1 (불투명) -> 0 (투명) 0.1씩 감소
  let curr = test2.style.opacity;
  // console.log(curr);
  
  // 맨처음에는 투명도 " "  -> 1대입 
  if(curr == '') {
    test2.style.opacity = 1;
    curr = 1;
    
  }

  // 투명도 0.1 감소
  test2.style.opacity = curr - 0.1;

  if(test2.style.opacity == 0) {
    test2.style.opacity = 1; // 다시 불투명
  }


});

// test2 요소를 클릭하면 클릭 횟수 카운트

let count = 0;

test2.addEventListener("click", function() {

  count++; // 카운트 1증가

  // 표준 이벤트 모델의 핸들러(함수) 안에서
  // this == 이벤트가 발생한 요소 자체
  
  this.innerText = count;

})

// input태그요소에 이벤트를 추가한다
// -무슨이벤트? input3에서 키보드가 올라왔을떄
// -(이벤트핸들러)함수안에 작성한 내용을 수행하겠다!
const input3 = document.getElementById("input3")
const box3 = document.getElementById("box3")

// e : 이벤트 객체 (발생한 이벤트에 대한 정보를 담은 객체)
// console.log(e);

// 조건? 이벤트로서 감지된 키가 Enter
input3.addEventListener( "keyup" , function(e) {
  if ((e.key == "Enter")){
  box3.style.backgroundColor = input3.value;
  } 
})
// box3를 클릭하면
// box3가 가지고있는 배경색을 alert 출력
box3.addEventListener("click", function(e){
  // alert(`현재 컬러는 ${input3.value}입니다`)
  // e.tartget : 이벤트가 발생한 대상 요소
  alert(`배경색 : ${e.target.style.backgroundColor}`);
  
})


// 문자열.toLowerCase() 영어를 모두 소문자로 변경(A -> a)
// 문자열.toUpperCase() 영어를 모두 대문자로 변경(a -> A)

// 화면에 존재하는 key 모두 얻어오기
const keys = document.querySelectorAll(".keyboard");
// console.log(keys);

// 문서(화면 전체) 에서 키가 눌러지는걸 감지했을떄

document.addEventListener("keydown" , function(e){
  
  // e.key.toLowerCase() -> q ,w, e, r;
  
  let idx; //인덱스 값을 저장할 변수

  switch(e.key.toLowerCase()) {
    case "q" : idx =0; break;
    case "w" : idx =1; break;
    case "e" : idx =2; break;
    case "r" : idx =3; break;
    default : return; //함수 종료
    }
  // idx번호와 일치하는 keys 배열의 요소와 배경색을 변경
  keys[idx].style.backgroundColor = "deeppink";
})
document.addEventListener("keyup" , function(e){
  switch(e.key.toLowerCase()) {
    case "q" : idx=0;  break;
    case "w" : idx=1;  break;
    case "e" : idx=2; break;
    case "r" : idx=3;  break;
    default : return;
    }
    keys[idx].style.backgroundColor = "white";
})

