# Chatbot con Django y Gemini

Este proyecto es un chatbot desarrollado con Django y un modelo de Gemini para responder preguntas específicas sobre inventario. La API está protegida con autenticación JWT y permite a los usuarios interactuar con el chatbot mediante solicitudes HTTP.

---

## Características Principales

- **Autenticación JWT**: Protege los endpoints de la API.
- **Chatbot con Gemini**: Responde preguntas sobre inventario usando un modelo de IA.
- **API RESTful**: Fácil de integrar con frontends o aplicaciones móviles.
- **Documentación Completa**: Incluye guías de instalación, uso y contribución.

---

## Requisitos

- Python 3.9+
- PostgreSQL
- Node.js

---

## Instalación

Sigue estos pasos para instalar y configurar el proyecto:

1. Clona el repositorio:

       git clone https://github.com/tu-usuario/mi-proyecto.git
       cd mi-proyecto

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

6. Instala las dependencias del frontend:

       cd frontend
       npm install

7. Inicia el servidor de desarrollo:

       python manage.py runserver

---

## Uso

### Autenticación

1. Obtén un token de acceso:

       POST /api/token/
       Content-Type: application/json

       {
           "username": "usuario_ejemplo",
           "password": "contraseña_ejemplo"
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

Para más detalles del backend, consulta la [documentación completa del backend](backend/docs/index.md).

---

## Estructura del Proyecto
mi_proyecto/
├── backend/ # Backend en Django
│ ├── docs/ # Documentación del backend
│ │ ├── index.md
│ │ ├── installation.md
│ │ ├── usage.md
│ │ └── api.md
│ ├── manage.py
│ ├── requirements.txt
│ └── ...
├── frontend/ # Frontend en React
│ ├── docs/ # Documentación del frontend
│ │ ├── installation.md
│ │ └── usage.md
│ ├── package.json
│ ├── public/
│ ├── src/
│ └── ...
├── README.md # Documentación básica del proyecto
└── .gitignore # Archivos ignorados por Git