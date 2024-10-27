//button and list management
const openDropdown = document.getElementById('openDropdown')
const closeDropdown = document.getElementById('closeDropdown')
const list = document.getElementById('list')

openDropdown.addEventListener('click', () => {
    list.classList.toggle('flex')
    openDropdown.classList.toggle('hidden')
    closeDropdown.classList.toggle('hidden')
})
closeDropdown.addEventListener('click', () => {
    list.classList.toggle('flex')
    openDropdown.classList.toggle('hidden')
    closeDropdown.classList.toggle('hidden')
});
