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
const promo = document.querySelector('.promo');
const video = document.querySelector('.promo__video');
const videoControls = document.querySelector('.promo__controls')
const playButton = document.querySelector('.promo__play-btn');
const pauseButton = document.querySelector('.promo__pause-btn');
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