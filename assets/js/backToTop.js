const backToTop = document.querySelector('.btn-backtotop')

window.addEventListener('scroll', () => {
    if (window.scrollY > 1) {
        backToTop.classList.add('btn-visible');
    }
    else {
        backToTop.classList.remove('btn-visible');
    }
})

backToTop.addEventListener('click', () => {
    window.scrollTo(0, 0);
})