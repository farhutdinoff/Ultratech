$('#menuToggle').click( function(){
    $('.header-nav').toggleClass("active");
    $('body').toggleClass("overflow-hidden");
  });

  $('.product-box__btns button').click( function(){
    $(this).toggleClass("active");
  });