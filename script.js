document.querySelector(".flame").addEventListener("mouseenter", () => {
    gsap.to(".flame", { 
        scale: 1.2, 
        rotation: 3, 
        y: -5,
        duration: 0.4, 
        repeat: 3,
        yoyo: true,
        ease: "power1.inOut"
    });

    gsap.to(".flame path", { 
        fill: "orange",
        stroke: "yellow",
        duration: 0.15,
        repeat: 6,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".flame", {
        filter: "drop-shadow(0px 0px 20px red)", 
        duration: 0.3
    });
});

// Remove glow after animation ends
document.querySelector(".flame").addEventListener("mouseleave", () => {
    gsap.to(".flame path", { stroke: "black", fill: "none", duration: 0.2 });
    gsap.to(".flame", { filter: "none", duration: 0.3 });  // Reset glow
});


document.querySelector(".wind").addEventListener("mouseenter", () => {
    gsap.to(".wind", { 
        x: 50, 
        opacity: 0.6, 
        duration: 2.5, 
        ease: "power1.inOut",
        yoyo: true,
        repeat: 1
    });

    gsap.fromTo(".wind path", 
        { strokeDasharray: "20, 40", strokeDashoffset: "40" },
        { 
            strokeDashoffset: "0",
            duration: 2.5, 
            ease: "power1.inOut",
            repeat: 1,
            yoyo: true
        }
    );

    gsap.to(".wind", {
        filter: "drop-shadow(0px 0px 20px blue)", 
        duration: 0.3
    });
});

// Remove glow after animation ends
document.querySelector(".wind").addEventListener("mouseleave", () => {
    gsap.to(".wind", { x: 0, opacity: 1, duration: 0.2 });
    gsap.to(".wind path", { stroke: "black", fill: "none", strokeDasharray: "none", strokeDashoffset: "0", duration: 0.2 });
    gsap.to(".wind", { filter: "none", duration: 0.3 });  // Reset glow
});



document.querySelector(".lightning").addEventListener("mouseenter", () => {
    // Darken the cloud before the lightning strike
    gsap.to(".lightning path:first-child", { 
        stroke: "darkgray",
        duration: 0.1 
    });

    // Lightning Strike Effect
    gsap.fromTo(".lightning path:last-child", 
        { strokeDasharray: "0, 50", opacity: 0.2 }, 
        { 
            strokeDasharray: "50, 0",
            opacity: 1,
            duration: 0.2,
            repeat: 3,
            yoyo: true,
            ease: "power3.inOut"
        }
    );

    // Glow effect during lightning strike
    gsap.to(".lightning path:last-child", {
        stroke: "gold",
        filter: "drop-shadow(0px 0px 20px yellow)", 
        duration: 0.15,
        repeat: 3,
        yoyo: true,
        ease: "power1.inOut"
    });

    // Slight scale-up effect for impact
    gsap.to(".lightning", {
        scale: 1.2,
        duration: 0.2,
        repeat: 3,
        yoyo: true,
        ease: "power2.inOut"
    });
});

// Reset cloud color and remove glow after animation
document.querySelector(".lightning").addEventListener("mouseleave", () => {
    gsap.to(".lightning", { scale: 1, duration: 0.2 }); // Reset scale

    gsap.to(".lightning path:first-child", { 
        stroke: "black",  // Restore cloud to black
        duration: 0.2
    });

    gsap.to(".lightning path:last-child", { 
        stroke: "black",
        filter: "none",
        opacity: 1, 
        strokeDasharray: "none", 
        strokeDashoffset: "0", 
        duration: 0.2 
    });
});
