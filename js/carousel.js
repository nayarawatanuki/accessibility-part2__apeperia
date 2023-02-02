
var btns = document.querySelectorAll('.articles-slider__item');

var notices = document.querySelectorAll('.articles__item');
var new0 = document.querySelector('#new0');
var new1 = document.querySelector('#new1');
var new2 = document.querySelector('#new2');

new0.style.display = 'block';

// Indicador de slide atual
var currentSlideIndicator = document.createElement('span');
currentSlideIndicator.classList.add('hidden');
currentSlideIndicator.textContent = ' (slide atual)';

// Percorre todos os botoes controladores
btns.forEach(function (btn) {
    btn.addEventListener('click', function () {

        /*if(this.getAttribute('data-sliderItem') === '0') {
          new0.style.display = 'block';
          new1.style.display = 'none';
          new2.style.display = 'none';
        } else if(this.getAttribute('data-sliderItem') === '1') {
          new0.style.display = 'none';
          new1.style.display = 'block';
          new2.style.display = 'none';
        } else {
          new0.style.display = 'none';
          new1.style.display = 'none';
          new2.style.display = 'block';
        }*/

        notices.forEach(function (notice) {
            notice.style.display = 'none';

            if (this.getAttribute('data-sliderItem') === notice.getAttribute('data-notice')) {
                notice.style.display = 'block';

            }
        }.bind(this));


        document.querySelector('.articles-slider__item .hidden').remove();
        this.append(currentSlideIndicator);

        // Remove classe 'ativo' dos outros botoes
        btns.forEach(function (btnRemoveClass) {
            btnRemoveClass.classList.remove('articles-slider__item--active')
        })

        this.classList.add('articles-slider__item--active')
    })
})