function q1() {
  let a = 5;
  let b = 10;
  if (a > b) {
    alert("a가 더 큽니다")
  }
  else if (a < b) {
    alert("b가 더 큽니다")
  }
  else {
    alert("두 숫자가 같습니다")
  }
};

function q2() {
  let n = 7;
  if (n % 2 == 0) {
    alert("짝수입니다")
  }
  else {
    alert("홀수입니다")
  };
}

function q3() {
  let x = 1;
  let y = 22;
  let z = 9;

  // 최대값을 저장해둘 변수 (max)
  let max = x;

  if(y > max) { 
    max = y;}
  if(z > max) {
    max = z;
  }
  console.log(`가장 큰 숫자는 ${max} 입니다`)
  // if (x > y && x > z) {
  //   alert("x가 가장 큽니다")
  // }
  // else if (y > x && y > z) {
  //   alert("y가 가장 큽니다")
  // }
  // else if (x == y && y == z) {
  //   alert("세 숫자가 모두 같습니다")
  // }
  // else {
  //   alert("z가 가장 큽니다")
  // }
};



const q04 = document.getElementById("q4");

function q4() {
  const value = q04.value;
  if (value == "apple") {
    alert("사과입니다")
  }
  else if (value == "banana") {
    alert("바나나입니다")
  }
  else {
    alert("기타 식물입니다")
  }

};

const q05 = document.getElementById("q05");

function q5() {
  const value = q05.value;
  if (value < 60) {
    alert("F")
  } else if (value < 70) {
    alert("D")
  }
  else if (value < 80) {
    alert("C")
  }
  else if (value < 90) {
    alert("B")
  }
  else {
    alert("A")
  }
};


const inputAge06 = document.getElementById("inputAge06");
const inputHeight06 = document.getElementById("inputHeight06");


function q6() {
  const age06 = inputAge06.value
  const height06 = inputHeight06.value

  if (age06 < 0 || age06 > 100) {
    alert("잘못 입력 하셨습니다")
  }
  else if (age06 < 12) {
    alert("적정 나이가 아닙니다")
  }
  else if (height06 < 140.0) {
    alert("적정 키가 아닙니다")
  }
  else { alert("탑승 가능") }
};

function test7() {

  const month = Number(inputMonth.value);

  let season; // 계절이 뭔지 결과값 저장할 변수
  let temperature; // 몇도 인지 저장할 변수

  // 입력된 달에 따른 계절 판단
  if(month >= 3 && month <= 5) {
    // ( month == 3 || month == 4 || month == 5) 도 가능
    season = "봄";

  } else if(month >= 6 && month <= 8) {
    season = "여름";

    temperature = Number(inputTemperature.value);

    if(temperature >= 30) {
      season = `${season} [온도 : ${temperature}도, 폭염!!!]`;
    }

  } else if(month == 9 || month == 10 || month == 11) {
    season = "가을";

  } else if(month == 12 || month == 1 || month == 2) {
    season = "겨울";

    temperature = Number(inputTemperature.value);

    if(temperature <= 0) {
      season = `${season} [온도 : ${temperature}도, 한파!!!]`;
    }

  } else {
    season = "잘못된 달을 입력하셨어요!";

  }


  alert(season);



}


// const input07 = document.getElementById("input07");
// const result7 = document.getElementById("result7");
// const hot7 = document.getElementById("hot7")
// function q7() {
//   const hot = hot7.value;
//   const value = input07.value;
//   let result07 = result7.value;
//   if (value <= 5 && value >= 3) {
//     result07 = "봄"
//   }
//   else if (value <= 8 && value >= 6) 
//    {    
//     if(prompt(Number(hot))<30) 
//       {
//       result07 = "여름"
//       }
//     else { result07 = "폭염"}  
//    }

//     // {    if (hot > 30) {
//     //   result07 = "폭염"
//     // }
//     // else { result07 = "여름" }  }
//   else if (value <= 11 && value >= 9) {
//     result07 = "가을"
//   }
//   else {
//     if(prompt(hot)<0) {
//       result07 = "한파"
//     }
//     else { result07 = "겨울"}
//     // if (hot < 0) {
//     //   result07 = "한파"
//     // } else {
//     //   result07 = "겨울"
//     // }
//   }
//   result7.innerText = result07;
// }
