function fn1(name) {
  console.log(`1번 : Hello, ${name}!`);
} // 함수의 선언과 정의.

fn1("용운");
//호출

function addNumbers(a, b) {
  return a + b;
}
console.log(addNumbers(3, 4));


const multiply = (a, b) => a * b;
console.log(multiply(2, 5));



function compareNumbers(a,b) {
  if ( a > b ) {
    console.log( "첫번쨰 숫자가 더 큽니다");
  } else {
    console.log( "두 번재 숫자가 더 크거나 같습니다")
  }
}
compareNumbers(5, 3);
compareNumbers(2, 4);

function printLength(str) {
  console.log(str.length);
}
printLength("JavaScript");





function repeatString(str, times) {

  let result = '' ; // 문자열 초기화 공백

  for (let i = 0; i < times; i++) {
    result += str;
  }

  console.log( result )
}

repeatString("Hello", 3);

function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(4));
console.log(isEven(7));

function findMax(a, b, c) {
  
  let max = a;
  if(max < b) {
    max = b;
  } 

  if(max < c) {
    max = c;
  }

  return max; 

  // 내장함수 Math.max() : 전달받은 값 중 가장 큰 수 반환
  //return Math.max(a, b, c);

}

console.log("8번 : " + findMax(1, 5, 3)); // 5



// 9. 배열을 매개변수로 받아 첫 번째 요소를 반환하는 화살표 함수를 선언 및 정의하고 호출하시오
const getFirstElement = (arr) => arr[0];
console.log("9번 : " + getFirstElement([10, 20, 30])); // 10



// 10 .배열을 매개변수로 받아 배열의 모든 숫자의 합과 평균을 객체 형태로 반환하는 함수를 선언 및 정의하고 호출하시오
function sumAndAverage(arr) {
  // let sum = 0;

  // for(let i=0; i<arr.length; i++) {
  //   sum += arr[i];
  // }

  let sum = arr.reduce((acc, curr) => acc + curr);
  // 배열.reduce() : JS 배열의 메서드로, 배열의 모든 요소를 순회하면서 하나의 결과값을 누적하여 반환
  // acc(accumulator) : 누산기 - 결과를 누적
  // curr(currentValue) : 현재값 -  현재 배열 요소 값

  let avg = sum / arr.length;

  return { "합계" : sum, "평균" : avg };
}

console.log(sumAndAverage([1, 2, 3, 4, 5])); // { "합계" : 15, "평균" : 3 }


// 11. 숫자 두 개와 연산을 수행하는 함수를 매개변수로 받아, 두 숫자에 해당 연산을 적용한 결과를 반환하는 함수를 선언 및 정의하고 호출하시오
function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

function multi(x, y) {
  return x * y;
}

console.log("11번 : " + calculate(5, 3, add));       // 8
console.log("11번 : " + calculate(5, 3, multi));  // 15


// 12. 사람의 이름과 인사말을 출력하는 함수를 매개변수로 받아, 해당 이름과 인사말을 사용하여 인사를 출력하는 함수를 선언 및 정의하고 호출하시오

// 인사를 출력하는 함수
function greet(name, callback) {
  // callback 함수 : 다른 함수의 매개변수로 전달되어, 특정 작업이 완료된 후에 호출되는 함수
  // 매개변수로 전달, 지연된 실행, 비동기 작업 등에서 이용
  callback(name);
}

// 기본 인사말을 출력하는 함수
function sayHello(name) {
  console.log("12번 : " +`안녕하시오, ${name}!`);
}

// 다른 인사말을 출력하는 함수
function sayGoodbye(name) {
  console.log("12번 : " +`잘가, ${name}!`);
}

// callback 함수 sayHello와 sayGoodbye
greet('길동', sayHello);  // 안녕하시오, 길동!
greet('미현', sayGoodbye);  // 잘가, 미현!