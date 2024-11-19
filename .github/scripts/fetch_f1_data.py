import requests
import json
import os
from datetime import datetime

# Crear directorio de datos si no existe
os.makedirs('data', exist_ok=True)

# Base URL de la API de Jolpica
BASE_URL = 'http://api.jolpi.ca/ergast/f1'

def fetch_and_save(endpoint, filename):
    try:
        response = requests.get(f"{BASE_URL}/{endpoint}")
        response.raise_for_status()
        data = response.json()
        
        # Agregar timestamp de actualización
        data['lastUpdate'] = datetime.utcnow().isoformat()
        
        with open(f'data/{filename}', 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        print(f"Successfully updated {filename}")
        
    except Exception as e:
        print(f"Error fetching {endpoint}: {str(e)}")

# Obtener datos de pilotos
fetch_and_save('current/driverStandings', 'drivers.json')

# Obtener datos de constructores
fetch_and_save('current/constructorStandings', 'constructors.json')

# Obtener último resultado de carrera
fetch_and_save('current/last/results', 'last_race.json')

# Obtener calendario de la temporada
fetch_and_save('current', 'calendar.json')