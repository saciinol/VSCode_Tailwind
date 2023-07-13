const toggle = document.querySelector('.toggle-menu');
const headNav = document.querySelector('.header__nav');

toggle.addEventListener('click', () => {
	headNav.classList.toggle('open');
});