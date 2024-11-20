const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://f1-motorsport-data.p.rapidapi.com/schedule?year=2024');
xhr.setRequestHeader('x-rapidapi-key', '4af36d482fmshbeb403eefe984abp11731ejsnade543db6b29');
xhr.setRequestHeader('x-rapidapi-host', 'f1-motorsport-data.p.rapidapi.com');

xhr.send(data);