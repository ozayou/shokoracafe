$(function () {
  $('.hamburger').click(function () {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.globalMenuSp').addClass('active');
    } else {
      $('.globalMenuSp').removeClass('active');
    }
  });
  $('#menu a[href]').on('click', function (event) {
    $('.hamburger').trigger('click');
  });

  $(window).scroll(function () {
    $('.fadein').each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 100) {
        $(this).addClass('scrollin');
      }
    });
  });

});


jQuery(window).on('scroll', function () {
  if (/*jQuery('.header').height()*/750 < jQuery(this).scrollTop()) {
    jQuery('.header').addClass('change-color');
  } else {
    jQuery('.header').removeClass('change-color');
  }
});
