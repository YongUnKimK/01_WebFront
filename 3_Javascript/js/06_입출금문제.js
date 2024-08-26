function test() {
  // prompt() 사용 연습
  const password = prompt("비밀번호를 입력하세요") ;

  //확인 -> 입력한 문자열
  //취소 -> null
  if(password == null) {
    alert("취소");
  }
  else {
    if(password == '1234'){
      alert("비밀번호 일치");
    } else {
      alert("비밀번호 불일치");
    }
  }
}


//-----------------------------------------

const amount = document.getElementById("amount") ;//금액 작성 input
const output = document.getElementById("output") ;// 잔액 출력 span
let balance1 = 10000;
const password = 1234;
output.innerText = balance1;
function deposit() {

  if(amount.value.length == 0) {
    alert("금액을 입력해주세요")
  }
  else { 
    balance1 += Number(amount.value);
    output.innerText = balance1;
    // 현재 잔액을 다시 span태그 사이에 출력
    amount.value = "";

    // balance1 = balance1 + Number(amount.value); 복합연산자 안쓰면

  }
  // 1. 입금 버튼 클릭 해당 함수 수행
  // 2. input에 (금액을 작성한 input==amount) 입력된 금액 구하기
  // 3. 구한 금액이 잔액에 누적
  // (번외) input에 금액을 작성안하고 입금버튼을 누른경우
}
function withdrawal() {    
    if(amount.value.length == 0) {
      alert("금액을 입력해주세요");
    } else {
       const password_1 = prompt("비밀번호를 입력하세요");
        if(password_1 == null) {
          alert("취소되었습니다"); // prompt 취소 버튼 누른경우
                }      
        else
          { if ((password_1) != 1234) {alert("비밀번호가 틀렸습니다");}

            else { 
              const amount1_1 = Number(amount.value);
              if(balance1 < amount1_1) {
                alert("잔액을 확인하세요");
              }
              else { // 출금할 금액이 현재 잔액과 같거나 적은 경우
                balance1 -= amount1_1;
                output.innerText = balance1;
                amount.value = "";
                alert(`${amount1_1}이 출금되었습니다. 남은 금액은 ${balance1}원 입니다.`);
              }
            }
          }

    }
    // 1. 출금 버튼 해당 함수 수행
    // (번외) : input에 금액을 작성안하고 출금버튼을 누른경우
    // -> 금액을 입력하세요 같은 메세지 띄우기 처리
    // 2. 비밀번호를 입력받기
    // 2-1 취소버튼 눌렀을때 처리
    // 2-2 확인버튼 눌렀을 떄 처리
    // -> 비밀번호 일치하는지 안하는지
    // -> 일치한다면?
    // -> 출금액이 잔액보다 큰 경우  
    // -> 출금할 금액이 작거나 같은경우 (출금처리)
    // -> 잔액 balance에서 내가 작성한 금액 차감

}
