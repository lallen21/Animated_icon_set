document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin();

    function toggleAnimation(element, animationFunction) {
        if (element.classList.contains("animating")) {
            gsap.killTweensOf(element); // Stop current animation
            gsap.set(element, { clearProps: "all" }); // Reset styles
            element.classList.remove("animating");
        } else {
            element.classList.add("animating");
            animationFunction();
        }
    }

    // FLAME - EXPLOSIVE BURSTS 🔥
    document.querySelector(".flame").addEventListener("click", function () {
        toggleAnimation(this, () => {
            gsap.fromTo(
                this,
                { scale: 1, rotation: 0, fill: "orange", filter: "blur(0px)" },
                {
                    scale: 5,
                    rotation: 360,
                    fill: "red",
                    filter: "blur(10px) brightness(2)",
                    duration: 3,
                    yoyo: true,
                    repeat: 3
                }
            );
        });
    });

    // WIND - HURRICANE LEVEL SPINNING 💨
    document.querySelector(".wind").addEventListener("click", function () {
        toggleAnimation(this, () => {
            gsap.fromTo(
                this,
                { scale: 1, rotation: 0, x: "0vw", filter: "blur(2px)" },
                {
                    scale: 3,
                    rotation: 1000,
                    x: "100vw",
                    yoyo: true,
                    repeat: 1,
                    duration: 2,
                    ease: "power4.out"
                }
            );
        });
    });

    // LIGHTNING - SHOCKING CHAOS ⚡
    document.querySelector(".lightning").addEventListener("click", function () {
        toggleAnimation(this, () => {
            gsap.fromTo(
                this,
                { scale: 1, x: "0px", y: "0px", filter: "drop-shadow(0 0 10px yellow)" },
                {
                    scale: 4,
                    x: "-10px",
                    y: "-10px",
                    filter: "drop-shadow(0 0 50px yellow)",
                    repeat: 10,
                    duration: 0.1,
                    yoyo: true
                }
            );
        });
    });

    // RAINBOW - FULL-ON TRIPPY MODE 
    document.querySelector(".rainbow").addEventListener("click", function () {
        toggleAnimation(this, () => {
            gsap.fromTo(
                this,
                { scale: 1, rotation: 0, stroke: "white", filter: "drop-shadow(0 0 20px pink)" },
                {
                    scale: 6,
                    rotation: 1440,
                    stroke: "url(#rainbowGradient)",
                    filter: "drop-shadow(0 0 100px pink) brightness(2)",
                    duration: 3,
                    repeat: 1,
                    yoyo: true
                }
            );
        });
    });
});
