$('.tab-button').on('click', function () {
    // Remover a class .tab-active da tab ativa
    $('.tab-active').removeClass('tab-active')
  
    // Usar o valor do href para adicionar a class .tab-active à tab com o respetivo id
    var id = $(this).attr('href')
    $(id).addClass('tab-active')
  
    // Alterar visiblidade do botão ativo
    // Remover todas as classes .active
    $('.tab-button').removeClass('active')
    // Adicionar novamente a class apenas no elemento clicado
    $(this).addClass('active')
  })

  $('.menu-button').on('click', function() {
    $('.menu-nav').toggleClass('menu-active')
  })
  