// Header Effect
$(window).bind('scroll', function () {
  if ($(window).scrollTop() > 100) {
    $('#header-container').addClass('header-bg');
  } else {
    $('#header-container').removeClass('header-bg');
  }
});

// Slick
$('.carrousel').slick();
