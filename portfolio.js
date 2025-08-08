var button=document.getElementById("totop");
var gymvideo=document.getElementById("gymvideo")
show1gym=document.getElementsByClassName("show1")
window.onscroll=function(){
    'use strict'
    if (window.pageYOffset>= 1000){
        button.style.display="flex"
    }
    else{
         button.style.display="none"
    }
}
function standard(){
    window.scrollTo(0,0)

}
function handleAOSOnMobile() {
  if (window.innerWidth <= 480) {
    AOS.init({ disable: true }); // Disable AOS on mobile
  } else {
    AOS.init({ disable: false }); // Enable AOS on larger screens
  }
}

// Run on load and resize
window.addEventListener('load', handleAOSOnMobile);
window.addEventListener('resize', handleAOSOnMobile);