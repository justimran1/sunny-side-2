const manu =document.querySelector(".menu");
// console.log(manu);
const toggle = document.querySelector(".menu-svg")
// console.log(toggle);
toggle.addEventListener("click", function() {
   manu.classList.toggle("active") 
});


const underlineRed =  document.querySelector(".underline-1");
const underlineGold = documnet.querySelector(".underline-2");
const svgImg =document.querySelectorAll(".svy");

//add event listners to underline  the paragraphs
underlineRed.addEventListener("click" , function(){
    underlineRed.classList.toggle("red-underline");
 });
 
 underlineGold.addEventListener("click" ,() => {
    underlineGold.classList.toggle()("red-underline");
 });
 svgImg.addEventListener("mouseenter", function(){
     svgImg.querySelector("path").setAttribute("fill", "white");
 });