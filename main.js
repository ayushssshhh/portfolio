const open = $(".container");
const close = $(".close");
const body = $("body");
const cardCtn = $(".cardCtn");
const pH = $(".phead");

var t1 = gsap.timeline({ defaults: { duration: 1, ease: "expo.inOut" } });

open.click(() => {
    body.addClass("hidden");
    if (t1.reversed()) {
        t1.play()
    } else {
        t1.to('nav', { width: '100vw' })
            .to('nav', { height: '100vh' }, '-=.01')
            .to('nav ul li a', { opacity: 1, PointerEvents: 'all', stagger: .1 }, "-=.01")
            .to('.close', { opacity: 1, PointerEvent: "all" }, "-=.08")
            .to('nav h2', { opacity: 1 }, '-=01')
    }
});

close.click(() => {
    body.removeClass("hidden");
    t1.reverse();
})

setInterval(() => {
    
    let h = cardCtn.height();
    pH.height(h + 300);
    // console.log(h);
}, 1000)


// cursor animation
var cursor = document.querySelector('.cursor'),
    cursorScale = document.querySelectorAll('.cursor-scale'),
    mouseX = 0,
    mouseY = 0,
    color = document.querySelectorAll(".color");

gsap.to({}, 0.016, {
    repeat: -1,

    onRepeat: function () {
        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        })
    }
});

window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY
});

cursorScale.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
        cursor.classList.remove('grow-small');
    });
    link.addEventListener('mousemove', () => {
        cursor.classList.add('grow');
        if(link.classList.contains('small')){
            cursor.classList.remove('grow');
            cursor.classList.add('grow-small');
        }
    });
});


color.forEach(link => {

  link.addEventListener('mousemove', () => {
    if(link.classList.contains('white')){
      cursor.style.borderColor = "white"
    }
    
    if(link.classList.contains('black')){
      cursor.style.borderColor = "black"
    }
  })
  
})

var text2 = document.querySelector(".text2");

var text3 = document.querySelector(".text3");

var text4 = document.querySelector(".text4");

var bioImg = document.querySelector(".bio");

// window.addEventListener("load" , ()=>{
//     setTimeout(()=>{
//         bioImg.classList.remove("hidden");
//     } ,"200")
//     setTimeout(()=>{
//         text2.classList.remove("hidden");
//     } ,"500")

//     setTimeout(()=>{
//         text3.classList.remove("hidden");
//     } ,"900")

//     setTimeout(()=>{
//         text4.classList.remove("hidden");
//     } ,"1300")
// })

var text2H1 = document.querySelector(".text2 h1")
var text2Scroll = 0;

var text3H1 = document.querySelector(".text3 h1")
var text3Scroll = -200;
text3H1.style.left = text3Scroll + "%";

var text4H1 = document.querySelector(".text4 h1")
var text4Scroll = -50;
text4H1.style.left = text4Scroll + "%";

window.addEventListener("scroll" , ()=>{
    window.onscroll = function(e) {
        // print "false" if direction is down and "true" if up
        var scrollScale = this.oldScroll - this.scrollY;
        if(isNaN(scrollScale)){
            scrollScale = 0;
        }
        // console.log(scrollScale);
        if(scrollScale >= 0){

            // horzontal animation
            text2Scroll+=scrollScale*0.025;
            text2H1.style.left = text2Scroll + "%";

            text3Scroll-=scrollScale*0.05;
            text3H1.style.left = text3Scroll + "%";

            text4Scroll+=scrollScale*0.025;
            text4H1.style.left = text4Scroll + "%";
        } else{

            text2Scroll+=0.025*scrollScale;
            text2H1.style.left = text2Scroll + "%";

            text3Scroll-=0.05*scrollScale;
            text3H1.style.left = text3Scroll + "%";

            text4Scroll+=scrollScale*0.025;
            text4H1.style.left = text4Scroll + "%";
        }
        this.oldScroll = this.scrollY;
      }
})
