# Chatbot con Django y Gemini

Este proyecto es un chatbot desarrollado con Django y un modelo de Gemini para responder preguntas específicas sobre inventario de la empresa Buy n Large. La API está protegida con autenticación JWT y permite a los usuarios interactuar con el chatbot mediante solicitudes HTTP.

---

## Características

- **Autenticación JWT**: Protege los endpoints de la API.
- **Chatbot con Gemini**: Responde preguntas sobre inventario de la empresa Buy n Large usando un modelo de IA.
- **API RESTful**: Fácil de integrar con frontends o aplicaciones móviles.

---

## Requisitos

- Python 3.9+
- PostgreSQL

---

## Instalación

Sigue estos pasos para instalar y configurar el proyecto:

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

5. Crea y aplica las migraciones:
       python manage.py makemigrations
       python manage.py migrate

7. Inicia el servidor de desarrollo:

       python manage.py runserver

---

## Uso

### Autenticación

1. Obtén un token de acceso:

       POST /api/token/
       Content-Type: application/json

       {
           "username": "usuario@mail.com",
           "password": "Password123#"
       }

2. Usa el token para acceder a los endpoints protegidos.

### Chatbot

Envía un mensaje al chatbot:

    POST /api/chat/
    Content-Type: application/json
    Authorization: Bearer <token_de_acceso>

    {
        "message": "¿Cuántos productos hay en el inventario?"
    }

Respuesta:

    {
        "message": "Actualmente hay 150 productos en el inventario."
    }

---

## Documentación Completa

Para más detalles, consulta la [documentación completa](docs/index.md).