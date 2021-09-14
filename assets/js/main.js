const changesClass = (el, method, className) => {
	Array.isArray(className)
		? el.classList[method](...className)
		: el.classList[method](className)
}

const showNavbar = (toggleID, navID, bodyID, headerID) => {
	const toggle = document.getElementById(toggleID)
	const nav = document.getElementById(navID)
	const body = document.getElementById(bodyID)
	const header = document.getElementById(headerID)

	if (toggle && nav && body && header) {
		toggle.addEventListener('click', () => {
			changesClass(nav, 'toggle', 'show-navbar')
			changesClass(toggle, 'toggle', 'bx-x')
			changesClass(body, 'toggle', 'body-pd')
			changesClass(header, 'toggle', 'body-pd')
		})
	}
}

showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')

const windowInnerWidth = window.innerWidth

if (windowInnerWidth >= 768) {
	changesClass(document.getElementById('nav-bar'), 'remove', [
		'tooltip',
		'tooltip-t',
	])
}

const linkColor = document.querySelectorAll('.nav__link')

function colorLink(event) {
	if (linkColor) {
		event.preventDefault()
		linkColor.forEach(l => changesClass(l, 'remove', 'active-link'))
		changesClass(this, 'add', 'active-link')
	}
}

linkColor.forEach(l => l.addEventListener('click', colorLink))
