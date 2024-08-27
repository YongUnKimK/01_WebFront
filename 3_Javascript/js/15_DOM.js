// Node 확인하기    **\n : enter의 대행문자?

document.querySelector("#btn1").addEventListener("click", () => {

  const test = document.querySelector("#test"); // ul

  console.log(test);

  const list = test.childNodes;
  console.log(list);

  // 자식 노드 중 첫번쨰 li 요소
  const li1 = list[3];
  console.log(li1);

  // 1. 부모 노드 찾기 (요소.parentNode)
  // -> li1 부모 노드 배경색 변경

  li1.parentNode.style.backgroundColor = "skyblue";

  // 2. 첫 번쨰 자식 노드 찾기(요소.firstChild)
  // -> #test(ul)의 첫 번째 자식 노드 찾기
  console.log(test.firstChild);

  // 3. 마지막 자식 노드 찾기(요소.lastChild)
  // -> #test(ul)의 마지막 자식 노드 찾기
  console.log(test.lastChild);

  // 4. 원하는 위치에 존재하는 자식 노드 찾기
  // (요소.childNodes[index])
  // -> #test의 자식 노드 중
  // 3번쨰 li 태그를 찾아서 배경색 지정

  test.childNodes[9].style.backgroundColor = "hotpink";

  // 5. 이전/다음 형제 노드 찾기
  // (이전 형제 노드 : 요소.previousSibling)
  // (다음 형제 노드 : 요소.nextSibling)

  //test.childNodes[9]의 다음 다음 형제 노드 선택
  // == test.childNodes[11]
  console.log(test.childNodes[9].nextSibling.nextSibling);

  // #test의 마지막 자식 노드의 이전 형제 노드 선택
  console.log(test.lastChild.previousSibling);

  // 탐색용 코드는 연달아서 작성 가능!

  // 노드 추가

  // 1. 마지막 자식 노드로 추가 ( appendChild(노드) )

  // -> list[11]의 마지막 자식으로 "ZZZ"라는 textNode 추가

  list[11].appendChild(document.createTextNode("ZZZ"));

  // 2. 마지막 자식으로 추가(append("내용" 또는 노드 또는 요소 * n))

  list[11].append("12345", "ABCDE", "가나다라");

  // 3. 첫 번쨰 자식으로 추가 (prepend("내용" 또는 노드 또는 요소 * n))

  list[11].prepend("13579", "제육볶음", "맛있다");

  // 4. 이전/ 다음 형제로 추가 ( before/after("내용" 또는 노드 또는 요소 * n))
  // #test 전/후에 내용 추가

  test.before("이전 입니다");
  test.after("이후 입니다");
});
// ---------------------------------------------------------------

const btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", () => {
  // #test2 얻어오기(ul)

  const test2 = document.querySelector("#test2");

  console.log(test.children);

  // #test2의 첫 번째 자식 요소 찾기
  console.log(test2.firstElementChild);
  console.log(test2.lastElementChild);

  //#test2 부모 요소
  console.log(test2.parentElement);
  //#test2 이전 형제 요소
  console.log(test2.previousElementSibling);
  //#test2 다음 형제 요소
  console.log(test2.nextElementSibling);
});
