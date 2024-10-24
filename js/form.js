//Form validation

const namePattern = new RegExp('^(?=.*[a-zA-Z]{2})[a-zA-Z\\s]{2,100}$')
const emailPattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
const formName = document.getElementById("name")
const formEmail = document.getElementById("email")
const checkBox = document.getElementById("checkbox")
let checkBoxChecked = false

formName.addEventListener("change", () => {
    namePattern.test(formName.value) || formName.value === "" ? formName.style.borderColor = "#95989A" : formName.style.borderColor = "red"
})
formEmail.addEventListener("change", () => {
    emailPattern.test(formEmail.value) || formEmail.value === "" ? formEmail.style.borderColor = "#95989A" : formEmail.style.borderColor = "red"
})
checkBox.addEventListener("change", () => {
    checkBox.checked ? checkBoxChecked = true : checkBoxChecked = false
})