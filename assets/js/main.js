$(document).ready(function(){
  $('.hero-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    speed: 3000,
    dots: false
  });
  
  $('.partners-slide').slick({
    slidesToShow: 6,
    slidesToScroll: 2,
    dots: false,
    autoplay: true,
    speed: 3000,
    arrows: false,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }
    ]
  });
  
  $('.slider-wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    speed: 3000,
    autoplay: true,
    arrows: false,
    adaptiveHeight: true
  });
})