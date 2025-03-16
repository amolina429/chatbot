# Uso del Proyecto

A continuación, se describe cómo usar el proyecto en diferentes entornos.

---

## Desarrollo

1. Inicia el servidor de Django:

        python manage.py runserver

2. Accede a la API en `http://localhost:8000/api/`.

3. Usa herramientas como **Postman** o **Insomnia** para probar los endpoints.

---

## Producción

1. Configura un servidor web como **Nginx** o **Apache**.
2. Usa **Gunicorn** para servir la aplicación Django:

        gunicorn backend.wsgi:application

3. Configura el frontend para que se sirva desde el mismo dominio o un subdominio.

---

## Ejemplos de Uso

### Obtener Token

    POST /api/token/
    Content-Type: application/json

    {
        "username": "usuario@mail.com",
        "password": "Password123#"
    }

### Enviar Mensaje al Chatbot

    POST /api/chat/
    Content-Type: application/json
    Authorization: Bearer <token_de_acceso>

    {
        "message": "¿Cuántos productos hay en el inventario?"
    }