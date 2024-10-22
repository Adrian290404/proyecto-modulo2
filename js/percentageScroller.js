const percentageScroller = document.getElementById('percentageScroller');

window.addEventListener('scroll', () => {
    const scrollHeight = document.body.scrollHeight
    const scrollTop = window.scrollY
    const clientHeight = window.innerHeight
    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100
    percentageScroller.style.width = `${scrollPercentage}%`
});