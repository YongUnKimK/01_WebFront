// window.setTimeout()

document.getElementById("btn1").addEventListener("click", () => {

  setTimeout( function() {
    alert("3초 후 출력")
  } , 3000);

}); 

// window.setInterval()

// setInterval을 저장하기 위한 전역 변수
let interval;

// 현재 시간 문자열로 반환
function currentTime() {
  const now = new Date();
  console.log(now);

  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

console.log(hour, min, sec);

// 1의 자리일때 앞에 "0" 붙임
if(hour < 10) hour = "0" + hour;
if(min < 10) hour = "0" + min;
if(sec < 10) hour = "0" + sec;

return hour + " : " + min + " : " + sec;

}

function clockFn() {

  const clock = document.getElementById("clock");
  clock.innerText = currentTime();

  interval = setInterval(function() {
    clock.innerText = currentTime();
  }, 1000);
}
document.getElementById("stop").addEventListener("click", () => {
  clearInterval(interval);
});

clockFn() ;