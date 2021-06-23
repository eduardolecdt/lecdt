(function (){

  const body = document.querySelector('body')
  const sectionLoading = document.querySelector('section[name="loading"]')
  
  function ativarLoading () {
    window.addEventListener('load', () => {
      setTimeout(() => {
        body.classList.remove('bloquear')
        sectionLoading.classList.add('ocultar')
      }, 500)
    })
  }

  // ATIVAR TUDO

  ativarLoading()

}())