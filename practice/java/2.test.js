// // let numbers = [1,2,3,4,5,6];
// // const result = [];
// // const ulTag = document.getElementById("ulTag");
// // for (i = 0 ; i < numbers.length; i++) {
// //   const li = document.createElement("li");
// //   ulTag.append(li);
// //   li.innerText = result[i] = numbers[i] * 2
  

// } 


const ul = document.getElementById("ulTag"); // ul 태그 

let numbers = [1, 2, 3, 4, 5];

// 배열의 각 요소를 2배로 만들기
for(let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 2;
}

console.log(numbers);

// 결과를 화면에 출력
for(let i = 0; i < numbers.length; i++) {
  const li = document.createElement("li");
  li.innerText = numbers[i];
  // <li>2</li>
  // <li>4</li>
  // <li>6</li>
  // <li>8</li>
  // <li>10</li>

  ul.append(li);
}
