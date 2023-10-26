console.clear()

gsap.registerPlugin(ScrollTrigger);

let timeline = gsap.timeline({
    scrollTrigger: {
        scroller: ".scroll-section",
        start: "top top",
        end: "12000%",
        scrub: true,
        pin: true
    }
});

timeline.to(".balloon", {scale: 1.5})
