const url = 'https://f1-motorsport-data.p.rapidapi.com/schedule?year=2024';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '4af36d482fmshbeb403eefe984abp11731ejsnade543db6b29',
		'x-rapidapi-host': 'f1-motorsport-data.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}