// Header Scroll
window.addEventListener('scroll', () => {
	const header = document.querySelector('.header');
	if (header) {
		header.classList.toggle('scrolled', window.scrollY > 50);
	}
});

// Burger Menu
let menuBtn = document.querySelector('.burger-menu__icon');
let menu = document.querySelector('.header__menu');

if (menuBtn && menu) {
	menuBtn.addEventListener('click', function () {
		menuBtn.classList.toggle('active');
		menu.classList.toggle('active');
	});
}

// Animated
const elements = document.querySelectorAll('.animated__block');
if (elements.length > 0) {
	const options = {
		root: null,
		rootMargin: '0px',
		threshold: .4
	}
	const callbacks = (entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('animated');
			}
		});
	}
	let observer = new IntersectionObserver(callbacks, options);
	elements.forEach(element => {
		observer.observe(element);
	});
}

// Video - добавлена проверка на существование элементов
const promo = document.querySelector('.promo-about');
if (promo) {
	const video = promo.querySelector('.promo-about__video');
	const videoControls = promo.querySelector('.promo-about__controls');
	const playButton = promo.querySelector('.promo-about__play-btn');
	const pauseButton = promo.querySelector('.promo-about__pause-btn');

	if (video && playButton && pauseButton) {
		promo.addEventListener('click', () => {
			if (video.paused) {
				video.play();
				playButton.classList.add('hidden');
				pauseButton.classList.remove('hidden');
			} else {
				video.pause();
				pauseButton.classList.add('hidden');
				playButton.classList.remove('hidden');
			}
		});
	}
}

// FACILITIES SWIPER - добавлена проверка на существование
const facilitiesSwiperEl = document.querySelector('.facilities__swiper');
if (facilitiesSwiperEl) {
	const swiperFacilities = new Swiper('.facilities__swiper', {
		direction: 'vertical',
		grabCursor: true,
		loop: true,
		speed: 600,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		autoHeight: true,
		spaceBetween: 20,
		breakpoints: {
			0: {
				direction: 'horizontal',
				autoHeight: false,
			},
			1024: {
				direction: 'vertical',
			}
		}
	});
}

// GALLERY SWIPERs - добавлены проверки на существование
function initGallerySwiper(selector) {
	const el = document.querySelector(selector);
	if (el) {
		return new Swiper(selector, {
			direction: 'horizontal',
			grabCursor: true,
			speed: 600,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
	}
	return null;
}

const swiperGallery1 = initGallerySwiper('.swiper-gallery-1');
const swiperGallery2 = initGallerySwiper('.swiper-gallery-2');
const swiperGallery3 = initGallerySwiper('.swiper-gallery-3');
const swiperGallery4 = initGallerySwiper('.swiper-gallery-4');
















// Header Scroll
// window.addEventListener('scroll', () => {
// 	document.querySelector('.header').classList.toggle('scrolled', window.scrollY > 50);
// });


// Burger Menu
// let menuBtn = document.querySelector('.burger-menu__icon');
// let menu = document.querySelector('.header__menu');

// menuBtn.addEventListener('click', function () {
// 	menuBtn.classList.toggle('active');
// 	menu.classList.toggle('active');
// });


// Animated
// const elements = document.querySelectorAll('.animated__block');
// const options = {
// 	root: null,
// 	rootMargin: '0px',
// 	threshold: .4
// }
// const callbacks = (entries) => {
// 	entries.forEach(entry => {
// 		if (entry.isIntersecting) {
// 			entry.target.classList.add('animated');
// 		}
// 	});
// }
// let observer = new IntersectionObserver(callbacks, options);
// elements.forEach(element => {
// 	observer.observe(element);
// });


// Video
// const promo = document.querySelector('.promo-about');
// if (promo) {
// 	const video = promo.querySelector('.promo-about__video');
// 	const videoControls = promo.querySelector('.promo-about__controls');
// 	const playButton = promo.querySelector('.promo-about__play-btn');
// 	const pauseButton = promo.querySelector('.promo-about__pause-btn');

// 	if (video && playButton && pauseButton) {
// 		promo.addEventListener('click', () => {
// 			if (video.paused) {
// 				video.play();
// 				playButton.classList.add('hidden');
// 				pauseButton.classList.remove('hidden');
// 			} else {
// 				video.pause();
// 				pauseButton.classList.add('hidden');
// 				playButton.classList.remove('hidden');
// 			}
// 		});
// 	}
// }


// FACILITIES SWIPER
// const swiperFacilities = new Swiper('.facilities__swiper', {
// 	direction: 'vertical',
// 	grabCursor: true,
// 	loop: true,
// 	speed: 600,
// 	pagination: {
// 		el: '.swiper-pagination',
// 		type: 'bullets',
// 		clickable: true,
// renderBullet: function (index, className) {
// return `<div class="bullet-container"><span class="slide-number">${0}${index + 1}</span><span class="${className}"></span></div>`;
// return '<span class="' + className + '">' + (index + 1) + '</span>';
// }
// 	},
// 	autoHeight: true,
// 	spaceBetween: 20,
// 	breakpoints: {
// 		0: {
// 			direction: 'horizontal',
// 			autoHeight: false,
// 		},
// 		1024: {
// 			direction: 'vertical',
// 		}
// 	}
// });


// GALLERY SWIPERs
// const swiperGallery1 = new Swiper('.swiper-gallery-1', {
// 	direction: 'horizontal',
// 	grabCursor: true,
// 	speed: 600,
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	},
// });
// const swiperGallery2 = new Swiper('.swiper-gallery-2', {
// 	direction: 'horizontal',
// 	grabCursor: true,
// 	speed: 600,
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	},
// });
// const swiperGallery3 = new Swiper('.swiper-gallery-3', {
// 	direction: 'horizontal',
// 	grabCursor: true,
// 	speed: 600,
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	},
// });
// const swiperGallery4 = new Swiper('.swiper-gallery-4', {
// 	direction: 'horizontal',
// 	grabCursor: true,
// 	speed: 600,
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	},
// });