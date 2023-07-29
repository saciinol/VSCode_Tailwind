const toggle = document.querySelector('.toggle-menu')
const headNav = document.querySelector('.header__nav')

toggle.addEventListener('click', () => {
	headNav.classList.toggle('open')
})

const chevronDown = document.querySelector('.toggle-chevron')
const download = document.querySelector('.chevron__down')

chevronDown.addEventListener('click', () => {
	download.classList.toggle('open')
})

var slider = tns({
	container: '.reviews__slider',
	items: 1,
	slideBy: 'page',
	autoplay: false,
	controlsText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
	nav: false,
})

const header = document.querySelector('.header')
window.addEventListener('scroll', () => {
	console.log(window.scrollY)
	if (window.scrollY >= 20) {
		header.classList.add('active')
	} else {
		header.classList.remove('active')
	}
})
