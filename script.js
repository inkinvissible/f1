fetch('https://f1-inkinvissibles-projects.vercel.app/api/proxy')
    .then(response => response.json())
    .then(data => {
        const constructors = data.constructors.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
        const drivers = data.drivers.MRData.StandingsTable.StandingsLists[0].DriverStandings;

        console.log("Contructors ", constructors)
        console.log("Drivers ", drivers)
        
        // Ocultar loaders y mostrar tablas
        document.getElementById('constructorsLoader').style.display = 'none';
        document.getElementById('driversLoader').style.display = 'none';
        document.getElementById('constructorsTable').style.display = 'table';
        document.getElementById('driversTable').style.display = 'table';

        // Llenar tabla de constructores
        constructors.forEach((entry, index) => {
            const row = document.getElementById('constructorsTable').insertRow();
            row.style.animationDelay = `${index * 0.1}s`;
            row.innerHTML = `
                <td>${entry.Constructor.name}</td>
                <td>${entry.position}</td>
                <td>${entry.points}</td>
            `;
        });

        // Llenar tabla de pilotos
        drivers.forEach((entry, index) => {
            const row = document.getElementById('driversTable').insertRow();
            row.style.animationDelay = `${index * 0.1}s`;
            row.innerHTML = `
                <td>${entry.Driver.givenName} ${entry.Driver.familyName}</td>
                <td>${entry.position}</td>
                <td>${entry.points}</td>
            `;
        });
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('constructorsLoader').innerHTML = 'Error loading data';
        document.getElementById('driversLoader').innerHTML = 'Error loading data';
    });
