document.addEventListener('DOMContentLoaded', () => {
	const tags = new Splide('.discover__tags', {
		drag: 'free',
		pagination: false,
		arrows: false,
		autoWidth: true,
		gap: '0.25rem',
	})

	tags.mount()

	const photoSliders = document.querySelectorAll('.product__photos')

	photoSliders.forEach(function (splideElement) {
		new Splide(splideElement, {
			drag: 'free',
			pagination: false,
			arrows: false,
			autoWidth: true,
			gap: '0.5rem',
		}).mount()
	})

	const products = document.querySelectorAll('.product--js')

	products.forEach((product) => {
		const likeButton = product.querySelector('.actions-like')
		const dislikeButton = product.querySelector('.actions-dislike')

		// Обработчик клика для кнопки лайка
		likeButton.addEventListener('click', () => {
			if (!likeButton.classList.contains('active')) {
				likeButton.classList.add('active') // Установить класс активного лайка
				dislikeButton.classList.remove('active') // Удалить класс активного дизлайка
			}
		})

		// Обработчик клика для кнопки дизлайка
		dislikeButton.addEventListener('click', () => {
			if (!dislikeButton.classList.contains('active')) {
				dislikeButton.classList.add('active') // Установить класс активного дизлайка
				likeButton.classList.remove('active') // Удалить класс активного лайка
			}
		})
	})
})
