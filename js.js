const text = document.querySelector('#text');
const checkbox = document.querySelector('#checkbox');
const lengthBtn = document.querySelector('#lengthBtn');
const findBtn = document.querySelector('#findBtn');
const result = document.querySelector('#result');

const api = 'https://cors-anywhere.herokuapp.com/www.mrsoft.by/data.json';

const resultApi = fetch(api)
	.then((el) => {
		return el.json();
	})
	.then((res) => {
		return res.data;
	});

const rrr = resultApi.then((el) => {
	const item = el;

	lengthBtn.addEventListener('click', () => {
		if (typeof +text.value == 'number') {
			const itog = item.filter((elem) => {
				return elem.length > text.value;
			});
			result.innerHTML = itog;
		}
	});

	findBtn.addEventListener('click', () => {
		const itog = item.filter((elem) => {
			if (!checkbox.checked) {
				if (elem.toLowerCase().indexOf(text.value.toLowerCase()) != -1) {
					return elem;
				}
			}
			if (elem.indexOf(text.value) != -1) {
				return elem;
			}
		});
		result.innerHTML = itog;
	});
});
