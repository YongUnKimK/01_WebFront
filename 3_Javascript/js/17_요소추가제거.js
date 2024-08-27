const addBtn = document.querySelector("#add");
const calcBtn = document.querySelector("#calc");

const container = document.querySelector(".container")
//  최종적으로 만들어진 요소를 붙여야 하는 요소
addBtn.addEventListener("click", () => {
  
  const row = document.createElement("div"); // <div></div>
    
  row.classList.add("row"); //<div class=row ></div>
  
  
  

  const input = document.createElement("input"); // <input></input>
  input.classList.add("input-number"); // <input class = "input-number">
  
  // input.type = "number";  
  input.setAttribute("type", "number"); // 속성을 변환

  container.append(row); //container의 마지막 자식으로 div요소 추가
  
  
  const span = document.createElement("span");
  span.classList.add("remove-row");
  span.innerHTML = "&times;";
  row.append(input,span);

  // ---------------------------------------

  //클릭된 x버튼의 부모 요소(div.row) 제거
  span.addEventListener("click", (e) => {
    // 현재 이벤트가 발생한 요소(클릭된 x버튼)의 
    // 부모 요소를 선택
    const parent = e.target.parentElement; // == div.row

    // 부모 요소 제거
    parent.remove();
  })


})

calcBtn.addEventListener("click", () => {
  // 1. 모든 input 태그들을 얻어아야함  
  const numbers = document.querySelectorAll(".input-number");
  
  // 2. for문으로 모든 요소 접근하여
  // 작성된 값 (value)를 얻어와
  // 숫자로 변경 (Number())한 후
  // 합계 저장 변수 sum 누적
  let sum = 0;
  for(let i = 0; i < numbers.length; i++) {
    sum += Number(numbers[i].value);    
  } alert(sum);

})