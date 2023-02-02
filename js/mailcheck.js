var domains = ['gmail.com', 'aol.com', 'outlook.com', 'alura.com.br'];
var secondLevelDomains = ['hotmail'];
var topLevelDomains = ["com", "net", "org", "br"];

var email = document.querySelector('#e-mail');

var email_suggestion = document.querySelector('#suggestion');
var span1 = document.querySelector('#span1');
var suggestion_link = document.querySelector('#suggestion-link');
var span2 = document.querySelector('#span2');

email.addEventListener('blur', function () {
    Mailcheck.run({
        email: email.value,
        domains: domains,                       // optional
        topLevelDomains: topLevelDomains,       // optional
        secondLevelDomains: secondLevelDomains, // optional
        suggested: function (suggestion) {
            email_suggestion.style.display = 'inline-block';

            span1.textContent = 'Você quis dizer: ';
            suggestion_link.textContent = suggestion.full;
            span2.textContent = '?';
            
            suggestion_link.style.cursor = 'pointer';
            email_suggestion.parentNode.classList.add('contact-field--error');
            email.classList.add('contact-field--validError');
            email_suggestion.setAttribute('tabindex', '0');
            email_suggestion.setAttribute('role', 'alert');

            suggestion_link.onclick = function() {
                email.value = suggestion_link.textContent;
                email_suggestion.style.display = 'none';

                email_suggestion.parentNode.classList.remove('contact-field--error');
                email.classList.remove('contact-field--validError');

                email_suggestion.parentNode.classList.add('contact-field--success');
                email.classList.add('contact-field--valid');
            }
        }
    });

    email_suggestion.parentNode.classList.add('contact-field--success');
    email.classList.add('contact-field--valid');
});