//Form validation

const namePattern = new RegExp('^(?=.*[a-zA-Z]{2})[a-zA-Z\\s]{2,100}$')
const emailPattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
const form = document.getElementById('form')
const formSubscribe = document.getElementById('subscribe')
const formSubscribeEmail = document.getElementById('emailSubscribe')
const formName = document.getElementById("name")
const formEmail = document.getElementById("email")
const checkBox = document.getElementById("checkbox")
const textName = document.getElementById("textAlert")
const textEmail = document.getElementById("emailAlert")
const textCheckbox = document.getElementById("checkboxAlert")
const url = 'https://jsonplaceholder.typicode.com/posts'
let checkBoxChecked = false

formName.addEventListener("change", () => {
    namePattern.test(formName.value) ? (formName.classList.add("form-border-color"), textName.classList.add('none')) : (formName.classList.remove("form-border-color"), formName.classList.add('red'))
})
formEmail.addEventListener("change", () => {
    emailPattern.test(formEmail.value) ? (formEmail.classList.add("form-border-color"), textEmail.classList.add('none')) : (formEmail.classList.remove("form-border-color"), formEmail.classList.add('red'))
})
checkBox.addEventListener("change", () => {
    checkBox.checked ? (checkBoxChecked = true, textCheckbox.classList.add('none')) : checkBoxChecked = false
})
const api = (urlApi, jsonApi) => {
    fetch(urlApi, {
        method: 'POST',
        body: JSON.stringify(jsonApi),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => {
            if (response.ok){
                return response.json().then((json) => {
                    console.log('Form data: ', json)       
                    form.reset()
                    alert("Form submitted successfully!")
                })
            }
            else{
                throw new Error("Error on network response")
            }
        })
        .catch((error) => {
            console.log('Error: '+error)
        })
}
form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (!namePattern.test(formName.value)) {
        formName.classList.add('red')
        textName.classList.remove('none')
    }
    if (!emailPattern.test(formEmail.value)) {
        formEmail.classList.add('red')
        textEmail.classList.remove('none')
    }
    if (!checkBoxChecked) {
        formName.classList.add('red')
        textCheckbox.classList.remove('none')
    }
    if (namePattern.test(formName.value) && emailPattern.test(formEmail.value) && checkBoxChecked) {
        // API Testing

        const formJson = {
            title: 'form',
            name: formName.value,
            email: formEmail.value,
            userId: 1,
        }
        api(url, formJson)
    }
})

// Popup validation
formSubscribe.addEventListener("submit", (e) => {
    e.preventDefault()
    if (!emailPattern.test(formSubscribeEmail.value)) {
        formSubscribeEmail.classList.add('red')
    }
    else{
        formSubscribeEmail.classList.remove('red')
    }
    if (emailPattern.test(formSubscribeEmail.value)){
        const formJson = {
            title: 'form subscribe',
            email: formSubscribeEmail.value,
            userId: 2,
        }
        api(url, formJson)
    }

})