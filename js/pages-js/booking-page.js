document.addEventListener('DOMContentLoaded', () => {
	const MAX_VALUE = 10;

	// Закрытие всех открытых dropdown при клике вне их области
	document.addEventListener('click', (e) => {
		// Закрываем custom-select
		const select = document.querySelector('.custom-select');
		if (!select.contains(e.target)) {
			select.setAttribute('aria-expanded', 'false');
		}

		// Закрываем meal plan dropdown
		const isDropdownClick = e.target.closest('.dropdown');
		if (!isDropdownClick) {
			document.querySelectorAll('.dropdown[open]').forEach(dropdown => {
				dropdown.removeAttribute('open');
			});
		}
	});

	// Custom select логика
	const select = document.querySelector('.custom-select');
	const header = select.querySelector('.select-header');
	const headerText = select.querySelector('.header-text');
	const dropdown = select.querySelector('.select-dropdown');

	const updateHeader = () => {
		const items = Array.from(dropdown.querySelectorAll('.select-item'));
		const allValues = items.map(item => {
			const name = item.querySelector('.item-name').textContent;
			const counter = item.querySelector('.item-counter').textContent;
			return `${counter} ${name}`;
		});
		headerText.textContent = allValues.join(', ') || '0 room, 0 guests, 0 children';
	};

	header.addEventListener('click', (e) => {
		e.stopPropagation();
		const isOpen = select.getAttribute('aria-expanded') === 'true';
		select.setAttribute('aria-expanded', !isOpen);

		// Закрываем meal plan dropdown при открытии этого
		document.querySelectorAll('.dropdown[open]').forEach(dropdown => {
			dropdown.removeAttribute('open');
		});
	});

	dropdown.addEventListener('click', (e) => {
		const btn = e.target.closest('.counter-btn');
		if (!btn) return;

		e.preventDefault();

		const item = btn.closest('.select-item');
		const counter = item.querySelector('.item-counter');
		let value = parseInt(counter.textContent);

		if (btn.dataset.action === 'increase' && value < MAX_VALUE) {
			value++;
		} else if (btn.dataset.action === 'decrease' && value > 0) {
			value--;
		}

		counter.textContent = value;
		updateHeader();
	});

	// Meal plan dropdown логика
	document.querySelectorAll('.dropdown li button').forEach(button => {
		button.addEventListener('click', (e) => {
			e.preventDefault();
			const dropdown = button.closest('.dropdown');
			dropdown.querySelector('summary').textContent = button.textContent;
			dropdown.removeAttribute('open');
		});
	});

	document.querySelectorAll('.dropdown').forEach(dropdown => {
		dropdown.addEventListener('click', (e) => {
			e.stopPropagation();

			// Закрываем custom-select при открытии этого dropdown
			document.querySelector('.custom-select').setAttribute('aria-expanded', 'false');
		});
	});

	updateHeader();
});