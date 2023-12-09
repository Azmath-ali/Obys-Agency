
function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

function cursorAnimation(){
    Shery.mouseFollower({
        //Parameters are optional.
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      })
}

function loaderAnimation(){
    var tl= gsap.timeline()

tl 
    .from(".line h1",{
        y:150,
        stagger:0.2,
        duration:.6,
        delay:.5

    })


    .from("#line1",{
        opacity:0,
        onStart:function(){
            var h4= document.querySelector("#line1 h4")
            var count=0
            setInterval(function(){
                if(count<100){
                    h4.innerHTML=count++
                }
                else{
                    h4.innerHTML=count
                }
            },28)
        }

    })


    .to(".line h2",{
        animationName: 'anime',
        opacity:1,
    })

  
    .to("#loader",{
        y:-1000,
        duration:1,
        delay:2.6
    })   


    .from("#page1",{
        y:1600,
        delay: .1,
        opacity:0, 
        duration:.5,
        ease:Power4
    })


    .to("#loader",{
        display:"none"
    })

    .from("#nav",{
        opacity:0
    })


    .from("#center1 h1,#center2 h1,#center3 h2,#center4 h1",{
        y:150,
        stagger:.2,
        duration:.5
    })

    .from("#center1,#page2",{
        opacity:0
    },"-=1.2")



    // .to(".straight",{
    //     width:"90%",
    //     scrollTrigger:{
    //         trigger:".straight",
    //         scroller:"#main",
    //         start:"top 180%",
    //         // end:"top bottom",
    //         // markers:true,
    //         scrub:true
    //     }
    // })

    // .to(".straight-line",{
    //     width:"90%",
    //     scrollTrigger:{
    //         trigger:".straight-line",
    //         scroller:"#main",
    //         start:"top 250%",
    //         // markers:true,
    //         scrub:true
    //     }
    // })



}

Shery.makeMagnet("#nav-bar h4")



function sheryAnimation(){
    Shery.imageEffect(".image-div",{
        style:3,
        config:{"uFrequencyX":{"value":12,"range":[0,100]},"uFrequencyY":{"value":12,"range":[0,100]},"uFrequencyZ":{"value":10,"range":[0,100]},"geoVertex":{"range":[1,64],"value":23.12},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7499958479347627},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.27,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":1.6,"range":[0,10]},"metaball":{"value":0.52,"range":[0,2]},"discard_threshold":{"value":0.46,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.29,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
        gooey:true
    })
}


function footerAnimation(){
    var clutter=""
    var clutter2=""


    document.querySelector("#footer-div h1").textContent.split("").forEach(function(val){
        clutter+=`<span>${val}</span>`
    })

    document.querySelector("#footer-div h1").innerHTML=clutter

    document.querySelector("#footer-div").addEventListener("mouseenter",function(){
        gsap.to("#footer h1 span",{
            opacity:0,
            stagger:.1
        })
    })



    document.querySelector("#footer-div").addEventListener("mouseleave",function(){
        gsap.to("#footer h1 span",{
            opacity:1,
            stagger:.05
        })
    })



    document.querySelector("#footer-div h2").textContent.split("").forEach(function(val){
        clutter2+=`<span>${val}</span>`
    })

    document.querySelector("#footer-div h2").innerHTML=clutter2


    document.querySelector("#footer div").addEventListener("mouseenter",function(){
        gsap.to("#footer h2 span",{
            opacity:1,
            delay: .35,
            stagger:.1
        })
    })



    document.querySelector("#footer-div").addEventListener("mouseleave",function(){
        gsap.to("#footer h2 span",{
            opacity:0,
            stagger:.05
        })
    })
}



locomotiveAnimation();
cursorAnimation();
loaderAnimation();
sheryAnimation();
footerAnimation();




var videoContainer= document.querySelector("#video-container")

videoContainer.addEventListener("mouseenter",function(){
    videoContainer.addEventListener("mousemove",function(val){
        gsap.to("#video-cursor",{
            left:val.x,
            top:val.y-100,
        })

        gsap.to(".mousefollower",{
            opacity:0
        })
        
    })
})


videoContainer.addEventListener("mouseleave",function(){
    gsap.to("#video-cursor",{
        top:"-10%",
        left:"70%"
    })

    gsap.to(".mousefollower",{
        opacity:1
    })
})






var flag=0;
var video= document.querySelector("#video-container video")

videoContainer.addEventListener("click",function(){
    if(flag==0){
        video.play()
        video.style.opacity=1;
        document.querySelector("#video-cursor").innerHTML=`<i class="ri-pause-line"></i>`
        flag=1
        gsap.to("#video-cursor",{
            scale:.5
        })
    }

    else{
        video.pause()
        video.style.opacity=0;
        document.querySelector("#video-cursor").innerHTML=`<i class="ri-play-fill"></i>`
        flag=0
        gsap.to("#video-cursor",{
            scale:1
        })
    }
  
})






document.querySelector("#center3").addEventListener("mouseenter",function(){
    document.querySelector("#center3").addEventListener("mousemove",function(val){
        gsap.to("#flag",{
            left:val.x,
            top:val.y,
            opacity:1
        })
    })
})
 



document.querySelector("#center3").addEventListener("mouseleave",function(){
    gsap.to("#flag",{
        opacity:0
    })
})






