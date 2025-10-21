# WebEvac - Sistema de Gestión de Tomografías Veterinarias

<div align="center">

[![Estado del Proyecto](https://img.shields.io/badge/Estado-En%20Desarrollo-yellow)](https://github.com/AgusAmor/WebEvac)
[![Versión](https://img.shields.io/badge/Versión-1.0.0-blue)](https://github.com/AgusAmor/WebEvac)
[![Licencia](https://img.shields.io/badge/Licencia-Privada-red)](LICENSE.md)

</div>

## 🐾 Acerca del Proyecto

WebEvac es una plataforma innovadora diseñada para revolucionar el acceso a servicios de tomografía veterinaria. Surgimos como una solución a la necesidad de optimizar la gestión de turnos para estudios tomográficos en clínicas veterinarias, ofreciendo una interfaz intuitiva tanto para profesionales veterinarios como para dueños de mascotas.

### 💡 Motivación

El proyecto nace de identificar una oportunidad única en el mercado veterinario: la necesidad de gestionar eficientemente los servicios de tomografía, un recurso valioso pero subutilizado en muchas clínicas veterinarias. Nuestra plataforma busca maximizar el uso de estos equipos mientras simplifica el proceso de reserva para los clientes.

## � Roadmap

### Fase 1 - MVP (Actual)

- [x] Landing page informativa
- [x] Sistema básico de solicitud de turnos
- [x] Panel de administración básico
- [x] Sistema de notificaciones por SMS/Email

### Fase 2 - 2026

- [ ] App móvil para seguimiento de turnos
- [ ] - [ ] Portal específico para veterinarias asociadas

## 🔐 Seguridad

- Autenticación segura mediante Firebase Auth
- Datos encriptados en tránsito y en reposo
- Backups automáticos de la base de datos
- Cumplimiento con estándares de protección de datos

## � Equipo

- **Frontend**:

  - React + Vite
  - TailwindCSS
  - Flowbite React Components

- **Backend & Base de Datos**:

  - Firebase Services
  - Arquitectura modular (routes/controllers)
  - Gestión segura de autenticación

- **Herramientas de Desarrollo**:
  - ESLint para calidad de código
  - PostCSS para procesamiento de CSS
  - Configuración optimizada de Vite

## 📁 Estructura del Proyecto

````bash
web-evac/
├── src/
│   ├── assets/         # Recursos estáticos
│   ├── components/     # Componentes React reutilizables
│   ├── routes/         # Configuración de rutas
│   ├── controllers/    # Lógica de negocio
│   ├── services/       # Servicios de Firebase
│   └── utils/          # Utilidades y helpers
├── public/            # Archivos públicos
└── config/           # Configuraciones (gitignored)

## 🚀 Instalación y Uso

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/AgusAmor/WebEvac.git
   cd WebEvac
````

2. **Instalar dependencias**

   ```bash
   pnpm install
   ```

3. **Configurar variables de entorno**

   - Crear archivo `.env` en la raíz del proyecto
   - Configurar las variables necesarias (contactar al equipo de desarrollo)

4. **Iniciar el servidor de desarrollo**

   ```bash
   pnpm dev
   ```

5. **Construir para producción**
   ```bash
   pnpm build
   ```

> **Nota**: Para el correcto funcionamiento del proyecto, se requieren credenciales y configuraciones específicas que no están incluidas en el repositorio por razones de seguridad.

## 👥 Equipo

- **Desarrollo Full Stack**: [AgusAmor](https://github.com/AgusAmor)
  - Frontend: React + Vite, TailwindCSS, Flowbite
  - Backend: Firebase (Firestore, Authentication)

## 📄 Derechos de Autor

© 2025 Agustín Amor - WebEvac. Todos los derechos reservados.

Este software está protegido por derechos de autor. Para más información, consulta el archivo [LICENSE.md](LICENSE.md).

## 📞 Contacto

Para más información sobre el proyecto o consultas comerciales, no dudes en contactarnos:

- 📧 Email: [Por definir]
- 🌐 Web: [Por definir]
- 📱 LinkedIn: [Por definir]
