var btns = document.querySelectorAll('.articles-slider__item');

// Percorre todos os botoes controladores
btns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    

    // Remove classe 'ativo' dos outros botoes
    btns.forEach(function(btnRemoveClass) {
      btnRemoveClass.classList.remove('articles-slider__item--active')
    })

    this.classList.add('articles-slider__item--active')
  })
})