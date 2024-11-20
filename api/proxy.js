export default async function handler(req, res) {
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
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error interno:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}
