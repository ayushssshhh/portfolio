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
