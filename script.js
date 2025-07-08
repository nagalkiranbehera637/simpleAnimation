
  gsap.to("#page2 h1", {
    transform:"translateX(-58%)",
    scrollTrigger: {
      trigger: "#page2",
      scroller: "body",
      scrub: 5,
    //   markers: true,
      start: "top 0%",
      end: "top -100%",
      pin: true
    }
  });
var menu=document.querySelector("nav i")
var cross=document.querySelector(".feature i")
var feature=document.querySelector(".feature")
var cursor=document.querySelector(".cursor")
var h4=document.querySelector(".feature h4")
var main=document.querySelector(".main")

var page2=document.querySelector("#page2")
page2.addEventListener("mouseenter",()=>{
    gsap.to(cursor,{
        scale:3,
        backgroundColor:"#fffffff"
    })
})
page2.addEventListener("mouseleave",()=>{
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"#fff"
    })
})

window.addEventListener("mousemove",(e)=>{
    gsap.to(cursor,{
        x:e.x,
        y:e.y,
        duration:1
    })
})

feature.addEventListener("mouseenter",()=>{
    gsap.to(cursor,{
        scale:3,
        backgroundColor:"#ffffffd8"
    })
})
feature.addEventListener("mouseleave",()=>{
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"#fff"
    })
})


const tl = gsap.timeline();

tl.to(".feature", {
  right:0,
  duration: 0.8,

});
tl.from(".feature h4",{
    x:100,
    duration:1,
    opacity:0,
    stagger:0.3
})
tl.from(".feature i",{
  
    opacity:0,
   
})
tl.pause()
menu.addEventListener("click",()=>{
    tl.play()
})
cross.addEventListener("click",()=>{
    tl.reverse()
})
