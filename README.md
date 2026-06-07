![Nexia OS Logo](./Nexia/src/assets/Nexia/NexiaWord.webp)

# Nexia - ATM and Mobile Device Ecosystem Simulator

> An interactive simulator that emulates an **ATM (automated teller machine)** and a **mobile device** with a complete ecosystem of more than **17 functional** and interactive integrated applications.

---

## Table of Contents

1. [Overview](#overview)
2. [Main Features](#main-features)
3. [Project Architecture](#project-architecture)
4. [Technologies Used](#technologies-used)
5. [Installation and Running](#installation-and-running)
6. [Project Structure](#project-structure)

---

## Overview

**Nexia** is an advanced simulator that emulates a full banking and mobile ecosystem. It allows interaction with an **ATM** and a **mobile device** featuring more than **17 functional and interactive applications**, enabling bank transactions, contact management, money transfers, and much more.

---

## Main Features

### 🏦 ATM System
- **Authentication**: Access using bank card and PIN
- **Cash management**: Deposits and withdrawals
- **Balance inquiry**: Display available funds
- **Advanced leaderboard**: 
  - View users with the most money
  - Users with the most registered contacts
  - Users who have made the most transactions
- **Realistic interface**: Design that emulates a real ATM

### Mobile System

#### Device Interface
- **Status Bar**: Displays real-time clock continuously
- **Unlock Screen**: Device lock/unlock interface
- **Functional Physical Buttons**: 
  - Volume buttons (up/down) - integrated with the radio app
  - Bottom navigation buttons on the touchscreen for going back
- **Multiple languages**: Spanish, English, Japanese, and French

#### 17+ Functional and Interactive Applications

| Application | Description |
|-----------|-----------|
| **💰 Bank** | View balance, make transactions, operation history |
| **🎁 Rewards** | View available money, claim rewards periodically |
| **💸 Transfers** | Securely send money to other users |
| **📞 Contacts** | Add/update/delete contacts with name and phone number |
| **📱 Phone** | Make calls to contacts |
| **💬 Messages** | Messaging system between users |
| **📻 Radio** | Player with 3 international stations:
|  |  - 🇨🇴 Colombia
|  |  - 🇺🇸 USA
|  |  - 🇯🇵 Japan
|  | Volume control integrated with physical buttons |
| **🎬 The Simpsons** | Character, episode, and location information |
| **🏆 Leaderboard** | Global user rankings by money and transactions |
| **⚙️ Settings** | Change wallpapers, dark/light theme, language |
| **📸 Gallery** | Device image management |
| **🔔 Notifications** | Alert and notification system |
| **👤 Profile** | User information |
| **🛟 Support** | Help and contact system |
| And more... | Multiple additional interactive applications |

### Personalization
- **Wallpaper change**: Multiple visual themes
- **Themes**: Dark and light mode
- **Language**: Support for 4 main languages

---

## Project Architecture

```
┌─────────────────────────────────────┐
│   Presentation (UI/React)           │
│  ┌─────────────────────────────────┐│
│  │ ATM System | Mobile System      ││
│  │ - Screens  | - Apps (17+)       ││
│  │ - Auth     | - Hardware UI      ││
│  └─────────────────────────────────┘│
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│   Logic (Hooks/Core)                │
│  - Global State                     │
│  - Validations                      │
│  - Utilities                        │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│   Services (API)                    │
│  - Auth0 | Bank | Transfers         │
│  - User | Contacts | Radio          │
│  - Leaderboard | Support            │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│   Backend API (Server)              │
│  - Authentication                   │
│  - Banking Operations               │
│  - Data Synchronization             │
└─────────────────────────────────────┘
```

---

## Project Structure

```
Nexia/
├── package.json                 # Project dependencies and scripts
├── tsconfig.json                # TypeScript configuration
├── vite.config.ts               # Vite build configuration
├── index.html                   # App entry HTML
└── src/
    ├── main.tsx                 # React app entry point
    ├── App.tsx                  # Root application component
    ├── api/
    │   └── axios.client.ts      # HTTP client setup
    ├── assets/                  # Images, icons, wallpapers, fonts
    ├── i18n/                    # Multi-language support and context
    └── Nexia/
        ├── auth/                # Auth UI and flows
        ├── components/          # Shared UI components
        ├── pages/               # Main page screens and layouts
        ├── services/            # External API service modules
        ├── styles/              # Global and feature styles
        ├── SystemAtm/           # ATM system screens and logic
        └── SystemPhone/         # Mobile system screens, apps, and core
```

---

## Technologies Used

| Category | Technology | Version |
|-----------|-----------|---------|
| **Framework** | React | ^19.2.3 |
| **Language** | TypeScript | ~5.9.3 |
| **Bundler** | Vite | 7.2.5 |
| **Routing** | React Router DOM | ^7.12.0 |
| **Authentication** | Auth0 React | ^2.15.1 |
| **HTTP Client** | Axios | ^1.13.6 |
| **Icons** | Lucide React | ^1.3.0 |
| **Linting** | ESLint | ^9.39.1 |

---

## Prerequisites
- Node.js v18+
- npm v9+
- Modern browser

---

## Installation and Running

### 1. Installation

```bash
# Clone repository
git clone <REPOSITORY_URL>
cd Devices/Nexia

# Install dependencies
npm install
```

### 2. Configure Environment Variables

Create a `.env` file:

```env
VITE_AUTH0_DOMAIN=your_domain.auth0.com
VITE_AUTH0_CLIENT_ID=your_client_id
VITE_API_URL=http://localhost:3000
```

### 3. Run in Development

```bash
npm run dev
```

Open `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
npm run preview
```

### 5. Linting

```bash
npm run lint
```

---

## TypeScript and JavaScript

The project uses **TypeScript with React Hooks**:

```typescript
// Typed service example
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

## Authentication and Security

- ✅ Auth0 for secure credential management
- ✅ JWT tokens for sessions
- ✅ Login, Logout, and Delete Account functional
- ✅ Input validation on client and server

---

**Version**: 1.0.0 | **Status**: Completed