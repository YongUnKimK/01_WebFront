const tag = document.querySelector("#tagName");
const content = document.querySelector("#tagInnerText");
const color = document.querySelector("#colorName");
const result = document.querySelector("#result");



        // JavaScript 코드
        document.getElementById("btn").addEventListener("click", function () {
          // 사용자 입력 값 가져오기
          const tagName = document.getElementById("tagName").value;
          const tagInnerText = document.getElementById("tagInnerText").value;
          const colorName = document.getElementById("colorName").value;

          // 새로운 태그 생성
          const newElement = document.createElement(tagName);
          newElement.innerText = tagInnerText;
          newElement.style.color = colorName;

          // 결과 섹션에 추가
          const resultSection = document.getElementById("result");
          resultSection.appendChild(newElement);
      });