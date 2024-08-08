const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')
const errorClass = 'auth__form-error'
const inputErrorClass = 'auth__form-input--error'

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
let hasError = false

function displayError(inputElement, errorMessage) {
	const errorElement = document.createElement('p')
	errorElement.className = 'auth__form-error'
	errorElement.textContent = errorMessage
	inputElement.classList.add(inputErrorClass)
	inputElement.insertAdjacentElement('afterend', errorElement)
}

function removeErrors() {
	const existingErrors = document.querySelectorAll(`.${errorClass}`)
	const existingInputErrors = document.querySelectorAll(`.${inputErrorClass}`)
	existingErrors.forEach((error) => error.remove())
	existingInputErrors.forEach((element) => {
		element.classList.remove(inputErrorClass)
	})
}

function emailValidation() {
	if (!email.value) {
		displayError(email, 'Email не может быть пустым.')
		hasError = true
	} else if (!emailPattern.test(email.value)) {
		displayError(email, 'Неверный формат email.')
		hasError = true
	}
}

function passwordValidation() {
	if (!password.value) {
		displayError(password, 'Пароль не может быть пустым.')
		hasError = true
	} else if (password.value.length < 6) {
		displayError(password, 'Пароль должен содержать не менее 6 символов.')
		hasError = true
	}
}

function confirmPasswordValidation() {
	if (password.value !== confirmPassword.value) {
		displayError(confirmPassword, 'Пароли не совпадают.')
		hasError = true
	}
}

function usernameValidation() {
	if (!username.value) {
		displayError(username, 'Имя не может быть пустым.')
		hasError = true
	} else if (username.value.length < 2) {
		displayError(username, 'Имя должно содержать не менее 2 символов.')
		hasError = true
	}
}

if (document.querySelector('#register')) {
	const submit = document.getElementById('registerSubmit')

	submit.addEventListener('click', (e) => {
		e.preventDefault()
		removeErrors()

		emailValidation()
		usernameValidation()
		passwordValidation()
		confirmPasswordValidation()

		if (!hasError) {
			this.submit()
		}
	})
}

if (document.querySelector('#login')) {
	const submit = document.getElementById('loginSubmit')

	submit.addEventListener('click', (e) => {
		e.preventDefault()
		removeErrors()

		emailValidation()
		passwordValidation()

		if (!hasError) {
			this.submit()
		}
	})
}
