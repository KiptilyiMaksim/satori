document.addEventListener('DOMContentLoaded', () => {
	const select = document.querySelector('.custom-select');
	const header = select.querySelector('.select-header');
	const headerText = select.querySelector('.header-text');
	const dropdown = select.querySelector('.select-dropdown');
	const MAX_VALUE = 10; // Лимит значения

	// Функция обновления заголовка
	const updateHeader = () => {
		const items = Array.from(dropdown.querySelectorAll('.select-item'));
		const allValues = items.map(item => {
			const name = item.querySelector('.item-name').textContent;
			const counter = item.querySelector('.item-counter').textContent;
			return `${counter} ${name}`;
		});

		headerText.textContent = allValues.join(', ') || '0 Не выбрано';
	};

	// Обработчики событий
	header.addEventListener('click', (e) => {
		e.stopPropagation();
		select.classList.toggle('active');
	});

	document.addEventListener('click', (e) => {
		if (!select.contains(e.target)) {
			select.classList.remove('active');
		}
	});

	dropdown.addEventListener('click', (e) => {
		const btn = e.target.closest('.counter-btn');
		if (!btn) return; // Если клик не по кнопке, выходим

		e.preventDefault(); // Отменяем действие по умолчанию
		e.stopPropagation(); // Останавливаем всплытие

		const item = btn.closest('.select-item');
		const counter = item.querySelector('.item-counter');
		let value = parseInt(counter.textContent);

		// Изменение значения с проверкой лимита
		if (btn.dataset.action === 'increase' && value < MAX_VALUE) {
			value++;
		} else if (btn.dataset.action === 'decrease' && value > 0) {
			value--;
		}

		counter.textContent = value;
		updateHeader();
	});

	updateHeader();
});