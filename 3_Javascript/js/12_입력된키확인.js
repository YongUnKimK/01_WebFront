const keys = document.querySelectorAll(".key");
// console.log(keys);

// 문서(화면 전체) 에서 키가 눌러지는걸 감지했을떄

document.addEventListener("keydown" , function(e){
  
  // e.key.toLowerCase() -> q ,w, e, r;
  
  let idx; //인덱스 값을 저장할 변수

  switch(e.key.toLowerCase()) {
    case "q" : idx =0; break;
    case "w" : idx =1; break;
    case "e" : idx =2; break;
    case "r" : idx =3; break;
    default : return; //함수 종료
    }
  // idx번호와 일치하는 keys 배열의 요소와 배경색을 변경
  keys[idx].style.backgroundColor = "deeppink";
})
document.addEventListener("keyup" , function(e){
  switch(e.key.toLowerCase()) {
    case "q" : idx=0;  break;
    case "w" : idx=1;  break;
    case "e" : idx=2; break;
    case "r" : idx=3;  break;
    default : return;
    }
    keys[idx].style.backgroundColor = "white";
})
