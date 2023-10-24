console.clear()

gsap.registerPlugin(ScrollTrigger);

let timeline = gsap.timeline({
    scrollTrigger: {
        start: "top top",
        end: "65000%",
        scrub: true,
        pin: true,
        markers: true
    }
});

timeline.to(".balloon", {scale: 1.5})
