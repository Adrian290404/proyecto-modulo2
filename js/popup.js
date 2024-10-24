const popup = document.getElementById('popup')
const btnClose = document.getElementById('closePopup')
const emailPattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
const popupShowed = () => {
    return localStorage.getItem('popup')
}
const showPopup = () => {
    if (!popupShowed()) {
        popup.style.display = 'block'
        localStorage.setItem('popup', true)
    }
}
window.addEventListener('scroll', () => {
    if (!popupShowed()) {
        const scrollHeight = document.body.scrollHeight
        const scrollTop = window.scrollY
        const clientHeight = window.innerHeight
        const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100
        if (scrollPercentage > 25){
            showPopup()
        }
    }
});
btnClose.addEventListener('click', () => {popup.style.display = 'none'})
window.addEventListener('click', (e) => {
    if (popupShowed() && popup.style.display === 'block' && !popup.contains(e.target)) { 
        popup.style.display = 'none'
    }
})
window.addEventListener('keyup', (e) => {
    if (popupShowed() && popup.style.display === 'block' && e.key === 'Escape') {
        popup.style.display = 'none'
    }
})
setTimeout(showPopup, 5000);