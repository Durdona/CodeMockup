// $('.carousel').slick({
// 	// autoplay: true,
// 	// autoplaySpeed: 4000,
// 	arrows: false,
// 	slidesToShow: 4,
// 	slidesToScroll: 2,
// 	cssEase: 'linear',
// 	dots: false,
// 	// arrows: true,

// 	// normal options...
// 	infinite: false,
// 	// the magic
// 	responsive: [
// 		{
// 			breakpoint: 1024,
// 			settings: {
// 				slidesToShow: 3,
// 				infinite: true
// 				// autoplay: true,
// 				// autoplaySpeed: 4000,
// 			}
// 		},
// 		{
// 			breakpoint: 600,
// 			settings: {
// 				slidesToShow: 2

// 				// dots: true
// 			}
// 		},
// 		{
// 			breakpoint: 300,
// 			settings: 'unslick' // destroys slick
// 		}
// 	]
// });

// Initialize Swiper
var swiper = new Swiper('.swiper-container', {
	slidesPerView: 4,
	spaceBetween: 30,
	mousewheel: true,
	keyboard: {
		enabled: true
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
	breakpoints: {
		640: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 40
		},
		1024: {
			slidesPerView: 4,
			spaceBetween: 30
		}
	}
});
