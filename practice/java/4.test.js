document.getElementById("btn").addEventListener("click", function () {
  const number = parseInt(document.getElementById("numberInput").value);

  // 짝수 홀수 판별 후 3초 후에 alert창 출력
  setTimeout(function () {
      if (number % 2 === 0) {
          alert("짝수입니다.");
      } else {
          alert("홀수입니다.");
      }
  }, 3000); // 3000밀리초 = 3초
});