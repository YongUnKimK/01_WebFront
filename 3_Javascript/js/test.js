const width1 = document.querySelector(".width1");
const height1 = document.querySelector(".height1");
const fontSize1 = document.querySelector(".fontSize1");
const bold1 = document.getElementsByName("bold");
const color1 = document.querySelector(".color1");
const backColor1 = document.querySelector(".backColor1");
const garo1 = document.querySelector(".set1");
const sero1 = document.querySelector(".up2");
const input1 = document.querySelector(".input1");
const test01 = document.querySelector(".test01");

document.getElementsByClassName("apply1").addEventListener("click", function () {
  test01.style.display = "flex";
  test01.style.marginLeft = "50%";
  test01.style.width = width1, px.value;
  test01.style.height1 = height1, px.value;
  test01.style.backgroundColor = backColor1.value;
  test01.style.color = color1.value;
  test01.style.fontSize = fontSize1.value;


  if(document.getElementById("bold1") === true){
    test01.style.border = "3px solid black ";
  } else { test01.style.border = "1px solid black";}
  


} )

