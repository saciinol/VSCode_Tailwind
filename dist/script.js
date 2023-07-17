const toggle = document.querySelector('.toggle-menu')
const headNav = document.querySelector('.header__nav')

toggle.addEventListener('click', () => {
	headNav.classList.toggle('open')
})

var slider = tns({
	container: '.reviews__slider',
	items: 1,
	slideBy: 'page',
	autoplay: false,
	controlsText: [
		'<i class="fa-solid fa-chevron-left">', 
		'<i class="fa-solid fa-chevron-right">',
	],
})
