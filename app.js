const topBtn = document.querySelector('.top-btn')

function addGlobalEvent(element, event, execFunc) {
    element.addEventListener(event, execFunc)
}

addGlobalEvent(window, 'scroll', showScrollBtn)
addGlobalEvent(topBtn, 'click', goToTop)

function showScrollBtn() {
    if (window.scrollY > 1000) {
        topBtn.classList.add('show-btn');
    } else {
        topBtn.classList.remove('show-btn')
    }
}

function goToTop() {
    window.scrollTo(0, 0);
}