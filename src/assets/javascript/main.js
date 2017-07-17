// Header Effect
$(window).bind('scroll', function () {
  if ($(window).scrollTop() > 10) {
    $('#header-container').addClass('header-bg');
  } else {
    $('#header-container').removeClass('header-bg');
  }
});

// Slick
$('.carrousel').slick({
	arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  prevArrow:"<button type='button' class='slick-prev'> < </button>",
  nextArrow:"<button type='button' class='slick-next'> > </button>"
});

// Validator


$("#cadastro").validate();