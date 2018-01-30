$(document).ready(function() {
  $.cookieBar({
    fixed: true,
    bottom: true,
    zindex: 10,
    message:'Este sitio web utiliza cookies, tanto propias como de terceros para recopilar información estadística sobre su navegación y mostrarle publicidad relacionada con sus preferencias, generada a partir de sus pautas de navegación. Si continua navegando, consideramos que acepta su uso.',
    acceptText: 'Acepto',
    policyButton: true,
    policyText: 'Más info sobre política de privacidad',
    policyURL: 'pages/privacy-policy.html',
    declineText: 'No estoy de acuerdo',
    declineButton: true
  });
  $('#fullpage').fullpage({});
  $('.testimonios').slick({
    autoplay: true,
    autoplaySpeed: 4500
  });
  $('.recetas-foto').slick({
    autoplay: true,
    autoplaySpeed: 3100,
    fade: true,
    cssEase: 'linear'
  });
});
