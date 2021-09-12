window.addEventListener('DOMContentLoaded', function() {
	const swiper = new Swiper('.swiper', {
		speed: 2000,
		autoplay: {
			delay: 3000,
		},
		effect: 'fade',
  	fadeEffect: {
    	crossFade: true
  	},
	});

	const swiper2 = new Swiper('.partners-wrap', {
		speed: 1000,
		autoplay: {
			delay: 1000,
		},
		slidesPerView: 6,
		loop: true,
		slidesPerGroup: 2
	});

  const swiper3 = new Swiper('.slider', {
		speed: 1000,
		autoplay: {
			delay: 3000,
		},
		slidesPerView: 1,
		loop: true,
    spaceBetween: 100
	});
})