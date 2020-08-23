// ====================== Initialize Swiper ======================
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
		375: {
			slidesPerView: 2,
			spaceBetween: 15
		},
		640: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 20
		},
		1024: {
			slidesPerView: 4,
			spaceBetween: 30
		}
	}
});

// ====================== Making Tab working ======================

const tabs = document.querySelectorAll('[data-tab-target');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach((tab) => {
	tab.addEventListener('click', () => {
		const target = document.querySelector(tab.dataset.tabTarget);

		tabContents.forEach((tabContent) => {
			tabContent.classList.remove('active');
		});

		tabs.forEach((tab) => {
			tab.classList.remove('active');
		});
		tab.classList.add('active');
		target.classList.add('active');
	});
});

// ====================== Hamburger Menu ======================
const hamburger = document.querySelector('.hamburger');
const ulMenu = document.querySelector('.ul-menu');
const links = document.querySelector('.ul-menu li');

hamburger.addEventListener('click', () => {
	ulMenu.classList.toggle('open');
});
