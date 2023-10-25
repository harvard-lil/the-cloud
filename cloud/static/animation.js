console.clear()

gsap.registerPlugin(ScrollTrigger);

let timeline = gsap.timeline({
    scrollTrigger: {
        start: "top top",
        end: "120000%",
        scrub: true,
        pin: true
    }
});

timeline.to(".balloon", {scale: 1.5})
