var creditCardAttempts = 0;
const creditCard = document.getElementById('creditCard');
function validateForm() {

    clearError();

    let isValid = true;
    
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const organization = document.getElementById('organization').value.trim();
    const card = creditCard.value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!firstName) {
        showError('firstNameError', "Введіть ім'я.");
        isValid = false;
    }

    if (!lastName) {
        showError('lastNameError', "Введіть прізвище.");
        isValid = false;
    }

    if (!organization) {
        showError('organizationError', "Введіть найменування організації.");
        isValid = false;
    }

    if (!card || !cardValidation(creditCard)) {
        creditCardAttempts++;
        if (creditCardAttempts >= 3) {
            alert("Ви тричі ввели невірний номер кредитної картки!");
            document.getElementById('creditCard').disabled = true;
            return false;
        }
        showError('creditCardError', "Введіть правильний номер кредитної картки.");
        isValid = false;
    }

    if (!phone || !phoneValidation(phone)) {
        showError('phoneError', "Введіть правильний номер телефону.");
        isValid = false;
    }

    if (!email || !emailValidation(email)) {
        showError('emailError', "Введіть правильну адресу електронної пошти.");
        isValid = false;
    }

    return isValid;
}

function cardValidation(cardNumber) {
    const regex = /^[0-9]{16}$/;
    return regex.test(cardNumber);
}

function phoneValidation(phoneNumber) {
    const regex = /^\+380\d{8}$/;
    return regex.test(phoneNumber);
}

function emailValidation(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function clearError() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => element.textContent = '');
}
 
function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function clearForm() {
    clearError();
    document.getElementById('registrationForm').reset();
    creditCardAttempts = 0;
    document.getElementById('creditCard').disabled = false;
}

function replaceQuery() {
    const input = document.getElementById("inputRegex");
    input.value = input.value.replace(/aaa$/, "!");
}