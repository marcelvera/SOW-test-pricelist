import os
import sys
import django
import random

# 1. IDENTIFICAR DIRECTORIOS
# Ruta del archivo seed.py
CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))
# Ruta de la carpeta 'backend' (un nivel arriba de 'app')
BASE_DIR = os.path.dirname(CURRENT_DIR)

if BASE_DIR not in sys.path:
    sys.path.append(BASE_DIR)

# 2. ENCONTRAR EL MÓDULO DE SETTINGS DINÁMICAMENTE
# Buscamos qué carpeta contiene el archivo settings.py
settings_module = None
for root, dirs, files in os.walk(BASE_DIR):
    if 'settings.py' in files:
        # Obtenemos el nombre de la carpeta (ej. 'config' o 'backend_api')
        folder_name = os.path.basename(root)
        settings_module = f"{folder_name}.settings"
        break

if not settings_module:
    print("❌ No se encontró el archivo settings.py en el proyecto.")
    sys.exit(1)

# 3. CONFIGURAR DJANGO
os.environ.setdefault('DJANGO_SETTINGS_MODULE', settings_module)
print(f"⚙️ Usando: {settings_module}")

try:
    django.setup()
    from app.models import Product
    from django_seed import Seed
    print("✅ Django inicializado y Modelo 'Product' cargado.")
except Exception as e:
    print(f"❌ Error al inicializar Django: {e}")
    sys.exit(1)

def run_seed():
    seeder = Seed.seeder()

    seeder.add_entity(Product, 19, {
        'code_product': lambda x: seeder.faker.numerify('########'),
        'name_product': lambda x: seeder.faker.catch_phrase(),
        'price_unit_product': lambda x: round(random.uniform(10.50, 500.00), 2),
        'price_product': lambda x: round(random.uniform(600.00, 2500.00), 2),
        'unit_product': lambda x: random.choice(['unidades', 'kilogramos', 'litros', 'cajas']),
        'stock_product': lambda x: random.randint(5, 1000),
        'desc_product': lambda x: seeder.faker.sentence(nb_words=8),
    })

    pks = seeder.execute()
    print(f"🚀 Éxito: {len(pks)} productos insertados en la base de datos.")

if __name__ == '__main__':
    run_seed()