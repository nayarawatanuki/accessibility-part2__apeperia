// Variáveis
var btnOpenDialog = document.querySelector('#openDialog');
var dialog = document.querySelector('.dialogNewsletter');
var dialogBody = document.querySelector('.dialogNewsletter__body');
var dialogOverlay = document.querySelector('.dialogNewsletter-overlay');


// Quando abrir a dialog...
btnOpenDialog.addEventListener('click', function() {
  dialog.classList.add('dialogNewsletter--opened');
});

function closingDialog() {
  document.activeElement.blur();
  dialog.classList.remove('dialogNewsletter--opened');     
}

// Listeners
document.querySelector('.dialogNewsletter-form__close').addEventListener('click', closingDialog);