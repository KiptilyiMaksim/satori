document.addEventListener('DOMContentLoaded', () => {
	const MAX_VALUE = 10;
	const allDetails = document.querySelectorAll('details');

	// Инициализация гостевого выбора
	const guestsSelect = document.querySelector('.selecting__guests');
	const guestsSummary = guestsSelect.querySelector('.selecting-guests__box');
	const guestsText = guestsSelect.querySelector('.selecting-guests__text');
	const guestsDropdown = guestsSelect.querySelector('.selecting-guests__dropdown');
	const counters = guestsSelect.querySelectorAll('.selecting-counter__item');

	// Инициализация dropdown с meal plan
	const mealDropdown = document.querySelector('.selecting-plan');
	const mealSummary = mealDropdown.querySelector('summary');
	const mealOptions = mealDropdown.querySelectorAll('.selecting-plan__item');

	// Функция закрытия других details
	const closeOtherDetails = (currentDetails) => {
		allDetails.forEach(details => {
			if (details !== currentDetails && details.open) {
				details.open = false;
			}
		});
	};

	// Обновление текста в summary гостевого выбора
	const updateGuestsText = () => {
		const values = Array.from(counters).map(counter => {
			const name = counter.closest('.selecting-guests__item').querySelector('.selecting-guests__name').textContent;
			return `${counter.textContent} ${name}`;
		});
		guestsText.textContent = values.join(', ') || '0 room, 0 guests, 0 children';
	};

	// Обработчик для кнопок +/-
	guestsDropdown.addEventListener('click', (e) => {
		const btn = e.target.closest('.selecting-counter__btn');
		if (!btn) return;
		e.preventDefault();
		e.stopPropagation();

		const counter = btn.closest('.selecting-guests__item').querySelector('.selecting-counter__item');
		let value = parseInt(counter.textContent);
		if (btn.dataset.action === 'increase' && value < MAX_VALUE) {
			value++;
		} else if (btn.dataset.action === 'decrease' && value > 0) {
			value--;
		}

		counter.textContent = value;
		updateGuestsText();
	});

	// Обработчик выбора meal plan
	mealOptions.forEach(option => {
		option.addEventListener('click', (e) => {
			e.stopPropagation();
			mealSummary.textContent = e.target.textContent;
			mealDropdown.open = false;
		});
	});

	// Обработчик для всех details
	allDetails.forEach(details => {
		details.addEventListener('toggle', function () {
			if (this.open) {
				closeOtherDetails(this);
			}
		});

		// Клик по summary
		const summary = details.querySelector('summary');
		summary.addEventListener('click', (e) => {
			e.preventDefault();
			details.open = !details.open;
		});
	});

	// Закрытие при клике вне области
	document.addEventListener('click', (e) => {
		const clickedInsideAnyDetails = Array.from(allDetails).some(details =>
			details.contains(e.target) || e.target === details
		);

		if (!clickedInsideAnyDetails) {
			allDetails.forEach(details => {
				details.open = false;
			});
		}
	});

	// Инициализация
	updateGuestsText();
});