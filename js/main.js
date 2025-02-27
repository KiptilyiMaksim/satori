// Header Scroll
window.addEventListener('scroll', () => {
	document.querySelector('.header').classList.toggle('scrolled', window.scrollY > 50);
});
// Burger Menu
let menuBtn = document.querySelector('.burger-menu__icon');
let menu = document.querySelector('.header__menu');

menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});
// Animated
const elements = document.querySelectorAll('.animated__block');
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
// Video
const video = document.querySelector('.promo-test__video');
const playButton = document.querySelector('.promo-test__play-btn');

playButton.addEventListener('click', () => {
	video.play();
	playButton.classList.add('hidden');
});

video.addEventListener('click', () => {
	if (video.paused) {
		video.play();
	} else {
		video.pause();
	}
});