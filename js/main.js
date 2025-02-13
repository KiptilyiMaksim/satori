let menuBtn = document.querySelector('.menu-icon');
let menu = document.querySelector('.header-menu');

menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})