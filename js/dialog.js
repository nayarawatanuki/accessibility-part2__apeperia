// Variáveis
var btnOpenDialog = document.querySelector('#openDialog');
var dialog = document.querySelector('.dialogNewsletter');
var dialogBody = document.querySelector('.dialogNewsletter__body');
var dialogOverlay = document.querySelector('.dialogNewsletter-overlay');

var contentOutsideDialog = document.querySelector('#content-outside-dialog');
var video = document.querySelector('video');

btnOpenDialog.style.display = 'block';

// Quando abrir a dialog...
btnOpenDialog.addEventListener('click', function() {
  dialog.classList.add('dialogNewsletter--opened');
  document.querySelector('.dialogNewsletter-form__label').focus();
  contentOutsideDialog.inert = true;

  video.removeAttribute('controls');
});

function closingDialog() {
  document.activeElement.blur();
  dialog.classList.remove('dialogNewsletter--opened');
  contentOutsideDialog.inert = false;
  btnOpenDialog.focus();

  video.setAttribute('controls', true);
}

// Listeners
document.querySelector('.dialogNewsletter-form__close').addEventListener('click', closingDialog);
dialogOverlay.addEventListener('click', closingDialog);

document.addEventListener('keyup', (event) => { 
  if (event.key === 'Escape') { 
    closingDialog(); 
  } 
})