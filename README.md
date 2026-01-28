# ⚙️ AI Chat Interface – Backend

Backend desarrollado con **Node.js** y **Express**, encargado de actuar como **intermediario seguro** entre el frontend y la **API de OpenRouter**, evitando la exposición de la API Key en el cliente y manejando correctamente CORS, configuración y 
despliegue.

Este backend es un repositorio independiente, diseñado específicamente para su **despliegue en Render**.

---

## 🌐 Backend en producción

🚀 **URL del backend desplegado:**  
👉 https://ai-chat-interface-backend-1civ.onrender.com

🔗 **Repositorio del frontend:**  
👉 https://github.com/Yumawis/ai-chat-interface-frontend

🔗 **Aplicación en producción:**  
👉 https://yumawis.github.io/ai-chat-interface-frontend/

---

## 🔄 Flujo de la aplicación


Frontend - React (GitHub Pages)

↓   HTTP Request (fetch)

Backend - Node.js + Express (Render)

↓

OpenRouter API

↓

Modelos de IA (LLMs)

---

## 🧠 ¿Por qué un backend separado?

Separar el backend en un repositorio independiente permite:

- 🔐 **Proteger la API Key** de OpenRouter
- 🌍 Manejar **CORS** correctamente entre dominios
- 🔄 Centralizar la lógica de comunicación con la IA
- 🚀 Facilitar el despliegue en plataformas server-side
- 🧱 Mantener una arquitectura limpia y escalable

El frontend se mantiene completamente estático, mientras que el backend gestiona las solicitudes dinámicas.

---

## ☁️ ¿Por qué Render?

**Render** fue elegido como plataforma de despliegue porque:

- ✅ Soporta **Node.js + Express** sin configuración compleja
- 🔄 Despliegue automático desde GitHub
- 🔐 Manejo seguro de **variables de entorno**
- 🆓 Plan gratuito suficiente para proyectos de práctica
- 🌍 Permite exponer un backend público con HTTPS

---

## ⚙️ Tecnologías utilizadas

- 🟢 Node.js
- 🚂 Express.js
- 🔐 dotenv
- 🌍 cors
- 🔑 OpenRouter API
- 📦 pnpm

---

## 🔐 Variables de entorno

Crea un archivo `.env` (solo en local):

```env
OPENROUTER_API_KEY=tu_api_key_aqui
``` 

En Render, estas variables se configuran desde el panel del servicio en el apartado de environments

---


## 🚀 Instalación y ejecución local

### 1️⃣ Clona el repositorio
```bash
git clone https://github.com/Yumawis/ai-chat-interface-backend.git
cd ia-chat-interface-backend
```

### 2️⃣ Instala las dependencias
```bash
cd backend
pnpm install
```

### 3️⃣ Ejecuta el backend
```bash
pnpm dev
```
Esto levantará el servidor Express en el puerto configurado (por defecto 5000)

---

## 🧩 Rol del backend en la arquitectura

Este backend:

1. 🔄 Reenvía mensajes a OpenRouter.
2. 🔐 Oculta credenciales sensibles.
3. 🧱 Centraliza la lógica de comunicación con la IA.
4. 🌍 Controla el acceso por dominio (CORS).
5. 🚀 Permite escalar o cambiar el frontend sin afectar la API

---

## 🧑‍💻 Autor

**Yury Martinez**  
Fullstack & UI Designer  
📍 Colombia  
💼 [GitHub](https://github.com/Yumawis)
