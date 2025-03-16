# Documentación de la API

Esta es la documentación de la API para el chatbot. La API permite autenticación mediante JWT y proporciona un endpoint para interactuar con el chatbot.

---

## Autenticación

### Obtener Token

**Endpoint:** `POST /api/token/`

**Descripción:** Obtén un token de acceso y un token de refresco.

**Ejemplo de solicitud:**

    POST /api/token/
    Content-Type: application/json

    {
        "username": "usuario@mail.com",
        "password": "Password123#",
    }

**Ejemplo de respuesta:**

    {
        "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
        "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }

### Refrescar Token

**Endpoint:** `POST /api/token/refresh/`

**Descripción:** Obtén un nuevo token de acceso usando el token de refresco.

**Ejemplo de solicitud:**

    POST /api/token/refresh/
    Content-Type: application/json

    {
        "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }

**Ejemplo de respuesta:**

    {
        "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }

---

## Chatbot

### Enviar Mensaje al Chatbot

**Endpoint:** `POST /api/chat/`

**Descripción:** Envía un mensaje al chatbot y recibe una respuesta generada por el modelo de Gemini.

**Ejemplo de solicitud:**

    POST /api/chat/
    Content-Type: application/json
    Authorization: Bearer <token_de_acceso>

    {
        "message": "¿Cuántos productos hay en el inventario?"
    }

**Ejemplo de respuesta:**

    {
        "message": "Actualmente hay 150 productos en el inventario."
    }

---

## Códigos de Estado HTTP

| Código | Descripción                     |
|--------|---------------------------------|
| 200    | OK - Solicitud exitosa.         |
| 400    | Bad Request - Datos inválidos.  |
| 401    | Unauthorized - No autenticado.  |
| 403    | Forbidden - Acceso denegado.    |
| 500    | Internal Server Error - Error del servidor. |