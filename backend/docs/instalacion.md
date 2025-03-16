# Instalación

Sigue estos pasos para instalar y configurar el proyecto.

---

## Requisitos

- Python 3.9+
- PostgreSQL

---

## Pasos

1. Clona el repositorio:

        git clone https://github.com/amolina429/chatbot.git
        cd backend

2. Crea un entorno virtual:

        python -m venv venv
        source venv/bin/activate  # En Windows: venv\Scripts\activate

3. Instala las dependencias del backend:

        pip install -r requirements.txt

4. Configura la base de datos:
   - Crea una base de datos en PostgreSQL.
   - Configura las variables de entorno en `.env`:

         DB_NAME=nombre_bd
         DB_USER=usuario_bd
         DB_PASSWORD=contraseña_bd
         DB_HOST=localhost
         DB_PORT=5432

5. Aplica las migraciones:

        python manage.py migrate

7. Inicia el servidor de desarrollo:

        python manage.py runserver

---

## Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

    DEBUG=True
    SECRET_KEY=tu_clave_secreta
    ALLOWED_HOSTS=localhost,127.0.0.1

    DB_NAME=nombre_bd
    DB_USER=usuario_bd
    DB_PASSWORD=contraseña_bd
    DB_HOST=localhost
    DB_PORT=5432

    API_KEY='AIzaSyCHOtBYCktqSIHowAv5GRE2yYEUTYASrps'