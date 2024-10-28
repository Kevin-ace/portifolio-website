const initAnimations = () => {
    // Hero animations
    gsap.to(".hero-content h1", {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5
    });
    
    gsap.to(".hero-content p", {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.8
    });

    // Scroll animations
    gsap.registerPlugin(ScrollTrigger);

    // About section
    gsap.from(".about-content", {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
            trigger: ".about",
            start: "top center",
            end: "bottom center",
        }
    });

    // Projects section
    gsap.from(".project-card", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".projects",
            start: "top center",
        }
    });

    // Skills section
    gsap.from(".skill-tag", {
        opacity: 0,
        scale: 0.8,
        duration: 0.4,
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".skills",
            start: "top center",
        }
    });
};