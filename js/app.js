const parallax_el=document.querySelectorAll('.parallax');

let x=0,y=0;
window.addEventListener('mousemove', (e) => {
    
    x = e.clientX - window.innerWidth/2;
    y = e.clientY - window.innerHeight/2;

    parallax_el.forEach((el) => {
        
        let speedx=el.dataset.sppedx;
        let speedy=el.dataset.sppedy;
        
        el.style.transform = `translateX(calc(-50% + ${-x*speedx}px)) translateY(calc(-50% + ${y*speedy}px)) `;
});
});


//gsap animatons

parallax_el.forEach((el) => {
    let timeline = gsap.timeline();

    timeline.from(
        el,
    {
        top:`${el.offsetHeight/2 + +el.dataset.distance}px`,
        duration: 2.5,
        ease:"power3.out",
    }
,
"1");
 
})

document.addEventListener("DOMContentLoaded", function() {
    let timeline = gsap.timeline();
    let h1Element = document.querySelector(".text h1");

    // if (!h1Element) {
    //     console.error("Error: Unable to find the '.text h1' element.");
    //     return;
    // }

    let topPosition = window.innerHeight - h1Element.getBoundingClientRect().top + 100;

    timeline.from(".text h1", {
        y: topPosition,
        duration: 1.5,
    }, "2.5")
   
})

document.addEventListener("DOMContentLoaded", function() {
    let timeline = gsap.timeline();

    timeline.from(".text h2",  {
        y: -130,
        opacity: 0,
        duration: 1,
    }, "3")

    timeline.from("header ul li", {
        opacity: 0,
        duration: 1,

    },
    "3")

    timeline.from("logo", {
        opacity: 0,
        duration: 1,

    },
    "3")


})