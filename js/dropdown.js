//button and list management
const openDropdown = document.getElementById('openDropdown')
const closeDropdown = document.getElementById('closeDropdown')
const list = document.getElementById('list')

openDropdown.addEventListener('click', () => {
    closeDropdown.style.display = 'block'
    openDropdown.style.display = 'none'
    list.style.display = 'block'
})
closeDropdown.addEventListener('click', () => {
    closeDropdown.style.display = 'none'
    openDropdown.style.display = 'block'
    list.style.display = 'none'
})

//adapt screen change
const checkChangeScreen = () =>{
    if (window.matchMedia("(min-width: 1000px)").matches) {
        closeDropdown.style.display = 'none'
        openDropdown.style.display = 'none'
        list.style.display = 'flex'
    }
    else{
        openDropdown.style.display = 'block'
        closeDropdown.style.display = 'none'
        list.style.display = 'none'
    }
}
window.addEventListener('resize', () => {
    checkChangeScreen()
})