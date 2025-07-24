const phoneDetails = document.querySelector('.person-form__details');
const phoneSummary = document.querySelector('.person-form__summary');
const phoneOptions = document.querySelectorAll('.person-form__item');

// Устанавливаем первый элемент как значение по умолчанию
const defaultOption = phoneOptions[0];
const defaultFlag = defaultOption.querySelector('.person-form__flag').cloneNode(true);
const defaultNumber = defaultOption.querySelector('.person-form__number').textContent;

// Очищаем summary и добавляем контент
phoneSummary.innerHTML = '';
phoneSummary.appendChild(defaultFlag);
phoneSummary.appendChild(document.createTextNode(defaultNumber));

// Добавляем кастомный маркер
const customMarker = document.createElement('span');
customMarker.className = 'person-form__custom-marker';
phoneSummary.appendChild(customMarker);

// Обработчик выбора варианта номера
phoneOptions.forEach(option => {
	option.addEventListener('click', (e) => {
		e.stopPropagation();

		// Получаем флаг и номер выбранного варианта
		const selectedFlag = option.querySelector('.person-form__flag').cloneNode(true);
		const selectedNumber = option.querySelector('.person-form__number').textContent;

		// Обновляем содержимое summary
		phoneSummary.innerHTML = '';
		phoneSummary.appendChild(selectedFlag);
		phoneSummary.appendChild(document.createTextNode(selectedNumber));
		phoneSummary.appendChild(customMarker); // Сохраняем наш маркер

		phoneDetails.open = false;
		customMarker.classList.remove('open');
	});
});

// Клик по summary
phoneSummary.addEventListener('click', (e) => {
	e.preventDefault();
	phoneDetails.open = !phoneDetails.open;
	customMarker.classList.toggle('open', phoneDetails.open);
});

// Закрытие при клике вне области
document.addEventListener('click', (e) => {
	if (!phoneDetails.contains(e.target)) {
		phoneDetails.open = false;
		customMarker.classList.remove('open');
	}
});

document.addEventListener('DOMContentLoaded', function () {
	const paymentOptions = document.querySelectorAll('.payment-form__label');
	const methodInfos = document.querySelectorAll('.payment-method-info');

	paymentOptions.forEach(option => {
		option.addEventListener('click', function () {
			// Remove selected class from all options
			paymentOptions.forEach(opt => opt.classList.remove('payment-selected'));

			// Add selected class to clicked option
			this.classList.add('payment-selected');

			// Hide all method info
			methodInfos.forEach(info => info.style.display = 'none');

			// Show selected method info
			const method = this.getAttribute('data-method');
			document.getElementById(`${method}-info`).style.display = 'block';
		});
	});

	// Select first option by default
	if (paymentOptions.length > 0) {
		paymentOptions[0].click();
	}
});