export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Permite solicitudes desde cualquier origen
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

	const baseUrl = 'https://f1-motorsport-data.p.rapidapi.com';
    const endpoints = [
        '/standings-controllers?year=2024',
        '/standings-drivers?year=2024',
    ];

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '4af36d482fmshbeb403eefe984abp11731ejsnade543db6b29',
            'x-rapidapi-host': 'f1-motorsport-data.p.rapidapi.com'
        }
    };

    try {
        const responses = await Promise.all(
            endpoints.map(endpoint => fetch(`${baseUrl}${endpoint}`, options))
        );

        const [constructors, drivers] = await Promise.all(responses.map(res => res.json()));

        res.status(200).json({ constructors, drivers });
    } catch (error) {
        console.error('Error interno:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
    
}
