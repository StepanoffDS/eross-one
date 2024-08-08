document.addEventListener('DOMContentLoaded', function () {
	var main = new Splide('#main-slider', {
		type: 'fade',
		rewind: true,
		pagination: false,
		arrows: false,
	})

	var thumbnails = new Splide('#thumbnail-slider', {
		autoWidth: true,
		gap: '1rem',
		rewind: true,
		pagination: false,
		cover: true,
		isNavigation: true,
		arrows: false,
		mediaQuery: 'min',
		classes: {
			arrows: 'splide__arrows',
			arrow: 'splide__arrow',
			prev: 'splide__arrow--prev',
			next: 'splide__arrow--next',
		},
		breakpoints: {
			768: {
				arrows: true,
			},
		},
	})

	main.sync(thumbnails)
	main.mount()
	thumbnails.mount()

	// Открытие галереи
	lightGallery(document.getElementById('main-slider'), {
		selector: '.splide__slide a',
		thumbnail: true,
		animateThumb: false,
		showThumbByDefault: false,
	})
})
