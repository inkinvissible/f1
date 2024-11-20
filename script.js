fetch('https://f1-inkinvissibles-projects.vercel.app/api/proxy')
            .then(response => response.json())
            .then(data => {
                const constructors = data.constructors.standings.entries;
                const drivers = data.drivers.standings.entries;

                // Ocultar loaders y mostrar tablas
                document.getElementById('constructorsLoader').style.display = 'none';
                document.getElementById('driversLoader').style.display = 'none';
                document.getElementById('constructorsTable').style.display = 'table';
                document.getElementById('driversTable').style.display = 'table';

                // Llenar tabla de constructores
                constructors.forEach((entry, index) => {
                    const row = document.getElementById('constructorsTable').insertRow();
                    row.style.animationDelay = `${index * 0.1}s`;
                    const points = entry.stats.find(stat => stat.name === "points");
                    row.innerHTML = `
                        <td>${entry.team.name}</td>
                        <td>${entry.stats[0].value}</td>
                        <td>${points ? points.displayValue : '0'}</td>
                    `;
                });

                // Llenar tabla de pilotos
                drivers.forEach((entry, index) => {
                    const row = document.getElementById('driversTable').insertRow();
                    row.style.animationDelay = `${index * 0.1}s`;
                    const championshipPoints = entry.stats.find(stat => stat.name === "championshipPts");
                    row.innerHTML = `
                        <td>${entry.athlete.displayName}</td>
                        <td>${entry.stats[0].value}</td>
                        <td>${championshipPoints ? championshipPoints.displayValue : '0'}</td>
                    `;
                });
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById('constructorsLoader').innerHTML = 'Error loading data';
                document.getElementById('driversLoader').innerHTML = 'Error loading data';
            });