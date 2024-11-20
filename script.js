fetch('https://f1-inkinvissibles-projects.vercel.app/api/proxy')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
