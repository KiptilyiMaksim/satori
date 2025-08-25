let dpMin = new AirDatepicker('#air-datepicker-1', {
	locale: {
		days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
		months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	},
	isMobile: window.innerWidth < 1024,
	onShow: (isFinished) => {
		if (!isFinished) {
			dpMin.update({
				isMobile: window.innerWidth < 1024
			});
		}
	},
	onSelect({ date }) {
		dpMax.update({
			minDate: date
		});
	},
	navTitles: {
		days: 'MMMM <i>yyyy</i>'
	},
	dateFormat: 'dd/MM/yyyy',
	keyboardNav: true,
	disableNavWhenOutOfRange: true,
	autoClose: true
});
let dpMax = new AirDatepicker('#air-datepicker-2', {
	locale: {
		days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
		months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	},
	isMobile: window.innerWidth < 1024,
	onShow: (isFinished) => {
		if (!isFinished) {
			dpMax.update({
				isMobile: window.innerWidth < 1024
			});
		}
	},
	onSelect({ date }) {
		dpMin.update({
			maxDate: date
		});
	},
	navTitles: {
		days: 'MMMM <i>yyyy</i>'
	},
	dateFormat: 'dd/MM/yyyy',
	keyboardNav: true,
	disableNavWhenOutOfRange: true,
	autoClose: true,
});
window.addEventListener('resize', function () {
	const isMobile = window.innerWidth < 1024;
	dpMin.update({ isMobile });
	dpMax.update({ isMobile });
});