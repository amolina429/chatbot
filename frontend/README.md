# Proyecto React con Vite

Este proyecto ha sido creado utilizando React y Vite. A continuación, encontrarás instrucciones para instalarlo y ejecutarlo localmente.

## Requisitos Previos

Asegúrate de tener instalado Node.js y npm (o yarn) en tu sistema.

* **Node.js:** [https://nodejs.org/](https://nodejs.org/) (versión 14 o superior)
* **npm:** Se instala automáticamente con Node.js.
* **yarn:** (opcional) [https://yarnpkg.com/](https://yarnpkg.com/)

## Instalación

1.  Clona el repositorio:

    ```bash
    git clone [https://github.com/amolina429/chatbot.git](https://github.com/amolina429/chatbot.git)
    cd [nombre del repositorio]
    ```

2.  Instala las dependencias:

    * Usando npm:

        ```bash
        npm install
        ```

    * Usando yarn:

        ```bash
        yarn install
        ```

## Ejecución

Para ejecutar la aplicación en modo de desarrollo, sigue estos pasos:

* Usando npm:

    ```bash
    npm run dev
    ```

* Usando yarn:

    ```bash
    yarn dev
    ```

Esto iniciará el servidor de desarrollo de Vite y abrirá la aplicación en tu navegador predeterminado.

## Construcción para Producción

Para construir la aplicación para producción, utiliza el siguiente comando:

* Usando npm:

    ```bash
    npm run build
    ```

* Usando yarn:

    ```bash
    yarn build
    ```

Esto generará una carpeta `dist` con los archivos estáticos optimizados para producción.

## Previsualización de la Construcción

Para previsualizar la construcción de producción localmente, puedes utilizar el siguiente comando:

* Usando npm:

    ```bash
    npm run preview
    ```

* Usando yarn:

    ```bash
    yarn preview
    ```

## Dependencias

* **React:** La biblioteca para construir interfaces de usuario.
* **Vite:** Una herramienta de construcción rápida para aplicaciones web modernas.

## Estructura del Proyecto
frontend/
├── .vscode/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── ChatForm.jsx
│   │   └── ChatMessage.jsx
│   ├── Pages/
│   │   ├── dashboard.css
│   │   ├── Dashboard.jsx
│   │   ├── login.css
│   │   └── Login.jsx
│   ├── routes/
│   │   └── router.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
