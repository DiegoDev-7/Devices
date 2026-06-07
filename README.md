![Nexia OS Logo](./Nexia/src/assets/Nexia/NexiaWord.webp)

# 📱 Nexia - Simulador de Ecosistema ATM y Dispositivo Móvil

> Un simulador interactivo que emula un **cajero automático (ATM)** y un **dispositivo móvil** con un ecosistema completo de más de **17 aplicaciones funcionales** e interactivas integradas.

---

## 📋 Tabla de Contenidos

1. [Descripción General](#descripción-general)
2. [Características Principales](#características-principales)
3. [Arquitectura del Proyecto](#arquitectura-del-proyecto)
4. [Tecnologías Utilizadas](#tecnologías-utilizadas)
5. [Instalación y Ejecución](#instalación-y-ejecución)
6. [Estructura del Proyecto](#estructura-del-proyecto)

---

## 🎯 Descripción General

**Nexia** es un simulador avanzado que emula un ecosistema bancario y móvil completo. Permite interactuar con un **cajero automático (ATM)** y un **dispositivo móvil** con más de **17 aplicaciones funcionales e interactivas**, realizando transacciones bancarias, gestión de contactos, transferencias de dinero y mucho más.

---

## ✨ Características Principales

### 🏦 Sistema ATM (Cajero Automático)
- **Autenticación**: Acceso mediante tarjeta bancaria y PIN
- **Gestión de efectivo**: Depósitos y retiros de dinero
- **Consulta de saldo**: Visualización de fondos disponibles
- **Leaderboard avanzado**: 
  - Visualizar usuarios con más dinero
  - Usuarios con más contactos registrados
  - Usuarios que han hecho más transacciones
- **Interfaz realista**: Diseño que emula un cajero automático real

### 📱 Sistema Móvil

#### Interface del Dispositivo
- **Status Bar**: Visualización de hora real en tiempo continuo
- **Pantalla de Desbloqueo**: Interfaz de bloqueo/desbloqueo del dispositivo
- **Botones Físicos Funcionales**: 
  - Botones de volumen (subir/bajar) - integrados con la aplicación de radio
  - Botones de navegación inferior en pantalla táctil para volver atrás
- **Múltiples idiomas**: Español, inglés, japonés y francés

#### 17+ Aplicaciones Funcionales e Interactivas

| Aplicación | Descripción |
|-----------|-----------|
| **💰 Banco** | Ver saldo, hacer transacciones, historial de operaciones |
| **🎁 Recompensas** | Visualizar dinero disponible, reclamar recompensas cada cierto tiempo |
| **💸 Transferencias** | Envío seguro de dinero a otros usuarios |
| **📞 Contactos** | Agregar/actualizar/eliminar contactos con nombre y número de teléfono |
| **📱 Teléfono** | Realizar llamadas a contactos |
| **💬 Mensajes** | Sistema de mensajería entre usuarios |
| **📻 Radio** | Reproductor con 3 estaciones internacionales:
|  |  - 🇨🇴 Colombia
|  |  - 🇺🇸 EEUU
|  |  - 🇯🇵 Japón
|  | Control de volumen integrado con botones físicos |
| **🎬 Los Simpson** | Información de personajes, episodios y locaciones |
| **🏆 Leaderboard** | Rankings globales de usuarios por dinero y transacciones |
| **⚙️ Configuración** | Cambio de fondos de pantalla, tema oscuro/claro, idioma |
| **📸 Galería** | Gestión de imágenes del dispositivo |
| **🔔 Notificaciones** | Sistema de alertas y notificaciones |
| **👤 Perfil** | Información del usuario |
| **🛟 Soporte** | Sistema de ayuda y contacto |
| Y más... | Múltiples aplicaciones interactivas adicionales |

### 🎨 Personalización
- **Cambio de fondos de pantalla**: Múltiples temas visuales
- **Temas**: Modo oscuro y claro
- **Idioma**: Soporte para 4 idiomas principales

---

## 🏗️ Arquitectura del Proyecto

```
┌─────────────────────────────────────┐
│   Presentación (UI/React)           │
│  ┌─────────────────────────────────┐│
│  │ ATM System | Mobile System      ││
│  │ - Screens  | - Apps (17+)       ││
│  │ - Auth     | - Hardware UI      ││
│  └─────────────────────────────────┘│
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│   Lógica (Hooks/Core)               │
│  - Estado Global                    │
│  - Validaciones                     │
│  - Utilidades                       │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│   Servicios (API)                   │
│  - Auth0 | Bank | Transfers         │
│  - User | Contacts | Radio          │
│  - Leaderboard | Support            │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│   Backend API (Servidor)            │
│  - Autenticación                    │
│  - Operaciones Bancarias            │
│  - Sincronización de Datos          │
└─────────────────────────────────────┘
```

---

## 📁 Estructura del Proyecto

```
Nexia/
├── src/
│   ├── Nexia/
│   │   ├── SystemAtm/              # Sistema ATM
│   │   │   ├── screens/            # Pantallas del ATM
│   │   │   ├── core/               # Lógica central
│   │   │   └── hardware/           # Hardware emulado
│   │   │
│   │   ├── PhoneSystem/            # Sistema Móvil
│   │   │   ├── Apps/               # 17+ Aplicaciones
│   │   │   ├── screens/            # Pantallas
│   │   │   ├── hardware/           # Botones y sensores
│   │   │   ├── core/               # Lógica central
│   │   │   └── PhoneSys.tsx        # Componente principal
│   │   │
│   │   ├── services/               # Servicios/APIs
│   │   │   └── external/
│   │   │       ├── auth/           # Autenticación Auth0
│   │   │       ├── bank/           # Operaciones bancarias
│   │   │       ├── transfers/      # Transferencias
│   │   │       ├── user/           # Gestión de usuario
│   │   │       ├── contacts/       # Contactos
│   │   │       ├── radio/          # Radio (3 estaciones)
│   │   │       ├── leaderboard/    # Rankings
│   │   │       └── ...
│   │   │
│   │   ├── auth/                   # Autenticación de usuario
│   │   ├── i18n/                   # Traducciones (es, en, ja, fr)
│   │   ├── styles/                 # Estilos globales
│   │   └── components/             # Componentes reutilizables
│   │
│   ├── api/
│   │   └── axios.client.ts         # Cliente HTTP
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── package.json
├── tsconfig.json
├── vite.config.ts
├── eslint.config.js
└── index.html
```

---

## 🛠️ Tecnologías Utilizadas

| Categoría | Tecnología | Versión |
|-----------|-----------|---------|
| **Framework** | React | ^19.2.3 |
| **Lenguaje** | TypeScript | ~5.9.3 |
| **Bundler** | Vite | 7.2.5 |
| **Enrutamiento** | React Router DOM | ^7.12.0 |
| **Autenticación** | Auth0 React | ^2.15.1 |
| **HTTP Client** | Axios | ^1.13.6 |
| **Física 2D** | Matter.js | ^0.20.0 |
| **Iconos** | Lucide React | ^1.3.0 |
| **Linting** | ESLint | ^9.39.1 |

---

## 📋 Requisitos Previos
- Node.js v18+ 
- npm v9+
- Navegador moderno

---

## 📦 Instalación y Ejecución

### 1. Instalación

```bash
# Clonar repositorio
git clone <URL_DEL_REPOSITORIO>
cd Devices/Nexia

# Instalar dependencias
npm install
```

### 2. Configurar Variables de Entorno

Crea un archivo `.env`:

```env
VITE_AUTH0_DOMAIN=tu_dominio.auth0.com
VITE_AUTH0_CLIENT_ID=tu_client_id
VITE_API_URL=http://localhost:3000
```

### 3. Ejecutar en Desarrollo

```bash
npm run dev
```

Accede a `http://localhost:5173`

### 4. Build para Producción

```bash
npm run build
npm run preview
```

### 5. Linting

```bash
npm run lint
```

---

## 🔗 TypeScript y JavaScript

El proyecto utiliza **TypeScript con React Hooks**:

```typescript
// Ejemplo de servicio tipado
interface ITransfer {
  id: string;
  from: string;
  to: string;
  amount: number;
}

export const transferMoney = async (
  fromUser: string,
  toUser: string,
  amount: number
): Promise<ITransfer> => {
  return apiClient.post('/transfers', { from: fromUser, to: toUser, amount });
};
```

---

## 🔒 Autenticación y Seguridad

- ✅ Auth0 para gestión segura de credenciales
- ✅ JWT tokens para sesiones
- ✅ Login, Logout y Delete Account funcional
- ✅ Validación de entrada en cliente y servidor

---

**Versión**: 1.0.0 | **Estado**: Finalizado