window.addEventListener("scroll", revealSection);

function revealSection() {
    const sections = document.querySelectorAll(".section-animate");

    for (let i = 0; i < sections.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = sections[i].getBoundingClientRect().top;
        const revealPoint = 150;

        console.log(revealTop);

        if (revealTop <= windowHeight - revealPoint) {
            sections[i].classList.add("section-active");
        } else {
            sections[i].classList.remove("section-active");
        }
    }
}