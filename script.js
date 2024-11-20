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
            const points = entry.stats.find(stat => stat.name === "points");
            row.innerHTML = `
                <td>${entry.team.name}</td>
                <td>${entry.stats[0].value}</td>
                <td>${points ? points.displayValue : '0'}</td>
            `;
        });

        // Llenar tabla de pilotos
        drivers.forEach(entry => {
            const row = driversTable.insertRow();
            const championshipPoints = entry.stats.find(stat => stat.name === "championshipPts");
            row.innerHTML = `
                <td>${entry.athlete.displayName}</td>
                <td>${entry.stats[0].value}</td>
                <td>${championshipPoints ? championshipPoints.displayValue : '0'}</td>
            `;
        });
    })
    .catch(error => console.error('Error:', error));
