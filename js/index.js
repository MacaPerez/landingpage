$(document).ready(function() {
  $('#fullpage').fullpage({});
  $('.testimonios').slick({
    autoplay: true,
    autoplaySpeed: 4500
  });
  $('.recetas-foto').slick({
    autoplay: true,
    autoplaySpeed: 4500,
    fade: true,
    cssEase: 'linear'
  });
});
