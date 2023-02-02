var zipCode = document.querySelector('#zip-code');

zipCode.oninvalid = function() {
    this.setCustomValidity('');

    if(!this.validity.valid) {
        this.setCustomValidity('Ops! Tem algo errado neste campo.');
        this.parentNode.classList.add('contact-field--error');
    }
}