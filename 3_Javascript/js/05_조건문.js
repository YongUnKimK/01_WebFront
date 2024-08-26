// if - 양수인지 검사

const input1 = document.getElementById("input1");

function check1() {
  // 버튼이 클릭되었을 떄 수행할 내용
  const value = Number(input1.value); // 입력받은 값
  // 문자열 -> 숫자형태로 형변환 [Number()]
  
  if(value > 0) { 
    // value가 0보다 커서 true인 경우
    alert("양수입니다.");
  };
  // value가 0과 같거나 작아서 true인 경우
  // -> value가 양수가 아닌 경우
  if(value <= 0) {
    alert("양수가 아닙니다.")
  };
};

// if- else 홀짝 판별하기
function check2() {
  // 난수 발생 : Math.random()
  // 범위 : 0 <= Math.rondom() < 1
  // Math.floor() : 소수점을 내림하여 정수로 만든다
  // ex) Math.floor(50.5) -> 50 

  // 0~100 사이 난수
  const randomNumber = Math.floor(Math.random() * 101);
  if(randomNumber % 2 == 0 ) {
    
    alert(`${randomNumber} 은/는 짝수입니다 `);
  } else {
    alert(`${randomNumber} 은/는 홀수입니다 `);
  }
}

// -3 ~ 3 사이 난수 발생시켜 양수, 음수, 0 판별
function check3() {
  const randomNumber = Math.floor(Math.random() * 7) -3;

  let message = randomNumber + "은/는";

  if (randomNumber ==0) {
    message += "0입니다"
  }
  else if(randomNumber > 0) {  //양수인 경우
    message += "양수입니다"
  } else {    //음수인 경우
    message += "음수입니다"
  }

  alert(message);
}


const inputAge = document.getElementById("inputAge");

function check4() {
  const age = Number(inputAge.value);

  console.log(inputAge.value.length);
  // "문자열".length : 문자열의 길이
  
  // 입력된 나이의 길이가 0인경우 == 미입력 (입력 안할 경우)


  if(inputAge.value.length == 0) {
    alert("값을 입력해주세요");
  }
  else {
    //입력한 경우 -> 이 때 어린이, 청소년, 성인 검사
    //중첩 if문
    if(age < 0 || age > 150 ) {
      alert("잘못 입력하셨습니다");
    } else if(age <= 13) { //어린이 0세 이상 13세 이하
      alert("어린이")
    } else if(age <= 19) { // 0~13세까지는 위에서 걸러짐
      alert("청소년")
    } else {
      alert("성인")
    };
  }
}
const number1 = document.getElementById("number1"); 
const number2 = document.getElementById("number2");
const calcResult = document.getElementById("calcResult"); 

function calc(op) {
  // 매개 변수 (Parameter) 
  // - 함수 호출 시 전달받은 값을 저장하는 변수
  // - 매개 변수명은 자유
  
  // ex) calc('+')
  // '+' 값이 op 변수에 저장됨
  const v1 = Number(number1.value);
  const v2 = Number(number2.value);
  // switch(식)에서 "식"은 다양한 값이 나타날 수 있는 변수 또는 계산식
  
  let result; // 계산 결과 저장 변수
   switch(op) {
     case '+' : resert = v1 + v2; break; 
     case '-' : resert = v1 - v2; break;
     case '*' : resert = v1 * v2; break;
     case '/' : resert = v1 / v2; break;
     case '%' : resert = v1 % v2; break
     //맞는 case가 없을 경우에 적용할 기본값 (else)
     default : result = "잘못된 연산자"; break; //필수요소는아님
   
   calcResult.innerText = result;
 }   
}


// //if문 버전
// function calc(op) {
//   const v1 = Number(number1.value);
//   const v2 = Number(number2.value);
//   let resert = calcResult
//   if(op == '+') {
//     resert = v1 + v2 ;
//   } 
//   else if(op == '-') {
//     resert = v1 - v2 ;
//   }
//   else if(op == '*') {
//     resert = v1 * v2 ;
//   }
//   else if(op == '/') {
//     resert = v1 / v2 ;
//   }
//   else if(op == '%') {
//     resert = v1 % v2 ;
//   }
//   else {
//     resert = "잘못된 연산자";
//   }
  
//   calcResult.innerText = result;
// }