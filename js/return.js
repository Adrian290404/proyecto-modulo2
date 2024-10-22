const button = document.getElementById('topButton');
button.addEventListener('click', () => {
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior:'smooth' });
    }, 200)
})
window.addEventListener('scroll', () => {
    const scrollHeight = document.body.scrollHeight
    const scrollTop = window.scrollY
    const clientHeight = window.innerHeight
    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100
    if (scrollPercentage > 60){
        button.style.display = 'block'
    }
    else{
        button.style.display = 'none'
    }
});