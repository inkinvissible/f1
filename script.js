fetch('https://f1-inkinvissibles-projects.vercel.app/api/proxy')
    .then(response => response.json())
    .then(data => {
        const constructors = data.constructors.standings.entries;
        const drivers = data.drivers.standings.entries;

        // Crear tablas
        const constructorsTable = document.getElementById('constructorsTable');
        const driversTable = document.getElementById('driversTable');

        // Llenar tabla de constructores
        constructors.forEach(entry => {
            const row = constructorsTable.insertRow();
            row.innerHTML = `
                <td>${entry.team.displayName}</td>
                <td>${entry.stats.find(stat => stat.name === 'rank').displayValue}</td>
                <td>${entry.stats.find(stat => stat.name === 'points').displayValue}</td>
            `;
        });

        // Llenar tabla de pilotos
        drivers.forEach(entry => {
            const row = driversTable.insertRow();
            row.innerHTML = `
                <td>${entry.athlete.displayName}</td>
                <td>${entry.stats.find(stat => stat.name === 'rank').displayValue}</td>
                <td>${entry.stats.find(stat => stat.name === 'championshipPts').displayValue}</td>
            `;
        });
    })
    .catch(error => console.error('Error:', error));
