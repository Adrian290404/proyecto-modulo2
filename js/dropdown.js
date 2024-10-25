//button and list management
const openDropdown = document.getElementById('openDropdown')
const closeDropdown = document.getElementById('closeDropdown')
const list = document.getElementById('list')
const classManagement = (class1, class2, class3, class4, class5, class6) => {
    closeDropdown.classList.remove(class1)
    closeDropdown.classList.add(class2)    
    openDropdown.classList.remove(class3)
    openDropdown.classList.add(class4)   
    list.classList.remove(class5)
    list.classList.add(class6)
}
//dar una vuelta
openDropdown.addEventListener('click', () => {
    classManagement('none', 'block', 'block', 'none', 'none-list', 'list')
})
closeDropdown.addEventListener('click', () => {
    classManagement('block', 'none' , 'none', 'block', 'list', 'none-list')
})
// window.addEventListener('resize', () => {
//     window.matchMedia("(min-width: 1000px)").matches ? classManagement('block', 'none', 'block', 'none', 'none', 'list') : classManagement('block', 'none', 'none', 'block', 'list', 'none')
// })
//adapt screen change
// const checkChangeScreen = () =>{
//     if (window.matchMedia("(min-width: 1000px)").matches) {
//         closeDropdown.classList.add('none')
//         openDropdown.classList.add('none')
//         closeDropdown.classList.remove('block')
//         openDropdown.classList.remove('block')
//         list.classList.add('flex')
//         list.classList.remove('none')
//     }
//     else{
//         openDropdown.classList.remove('none')
//         closeDropdown.classList.add('none')
//         list.classList.add('none')
//         openDropdown.classList.add('block')
//         closeDropdown.classList.remove('block')
//         list.classList.remove('flex')
//     }
// }
// window.addEventListener('resize', () => {
//     checkChangeScreen()
// })