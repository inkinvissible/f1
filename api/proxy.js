export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Permite solicitudes desde cualquier origen
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

	const baseUrl = 'http://api.jolpi.ca/ergast/f1/2025';
    const endpoints = [
        '/constructorstandings.json',
        '/driverstandings.json',
    ];

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
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
