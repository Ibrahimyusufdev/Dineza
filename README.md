# DinezaApp

A cashback dining platform that connects diners with restaurants. Diners earn cashback on their dining experiences, while restaurants gain visibility and customer engagement.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Architecture](#architecture)
- [Development Guidelines](#development-guidelines)
- [Scripts](#scripts)

---

## Overview

DinezaApp is a multi-user platform with three distinct user types:

| User Type | Description |
|-----------|-------------|
| **Diner** | Books reservations, earns cashback, refers friends |
| **Restaurant** | Manages reservations, creates offers, views analytics |
| **Admin** | Approves restaurants, manages users, configures platform |

### Key Features

**For Diners:**
- Browse and search restaurants
- Book reservations
- Report dining spend and earn cashback (25%)
- Request payouts
- Refer friends for bonus earnings

**For Restaurants:**
- Receive and manage reservations
- Create special offers
- View analytics and insights
- Manage payments and invoices

**For Admins:**
- Approve restaurant registrations
- Manage users and restaurants
- Configure platform settings

---

## Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 18 + TypeScript |
| **Build Tool** | Vite |
| **Routing** | React Router v6 |
| **Styling** | Tailwind CSS |
| **Forms** | React Hook Form + Zod |
| **Data Fetching** | TanStack Query (React Query) |
| **State Management** | Zustand |
| **Icons** | Lucide React |

---

## Project Structure

\`\`\`
src/
├── app/                    # App configuration
│   ├── router.tsx          # Route definitions
│   ├── providers.tsx       # Context providers wrapper
│   └── routes/             # Route guards and splits
│
├── components/             # Shared UI components
│   ├── ui/                 # Primitives (Button, Input, Card)
│   └── layout/             # App shells (Navbar, Sidebar)
│
├── features/               # Shared business features
│   ├── auth/               # Authentication
│   ├── reservations/       # Core reservation logic
│   ├── restaurants/        # Restaurant data
│   ├── messaging/          # Chat system
│   ├── notifications/      # Alerts
│   └── reviews/            # Ratings
│
├── domains/                # User-specific features
│   ├── diner/              # Diner-only features
│   │   ├── dashboard/
│   │   ├── earnings/       # Cashback system
│   │   ├── referrals/      # Referral program
│   │   └── ...
│   │
│   ├── restaurant/         # Restaurant-only features
│   │   ├── dashboard/
│   │   ├── offers/         # Special offers
│   │   ├── analytics/      # Business insights
│   │   ├── payments/       # Platform payments
│   │   └── ...
│   │
│   └── admin/              # Admin-only features
│       ├── dashboard/
│       ├── users/
│       ├── approvals/
│       └── ...
│
├── pages/                  # Public/static pages
│   ├── landing/
│   ├── static/
│   └── error/
│
├── stores/                 # Zustand stores
│   ├── auth-store.ts       # Authentication state
│   ├── ui-store.ts         # UI state (modals, sidebar)
│   └── index.ts            # Store exports
│
├── lib/                    # Utilities
│   ├── utils.ts            # Helper functions
│   ├── constants.ts        # App constants
│   ├── api-client.ts       # API wrapper
│   ├── query-client.ts     # TanStack Query client
│   └── helpers/            # Date, currency formatters
│
├── hooks/                  # Shared hooks
│
└── types/                  # Global TypeScript types
\`\`\`

### Architecture Layers

\`\`\`
┌─────────────────────────────────────────┐
│              DOMAINS                    │  User-specific features
│    (diner/, restaurant/, admin/)        │  Can import from features/
└─────────────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────┐
│              FEATURES                   │  Shared business logic
│  (auth/, reservations/, restaurants/)   │  Can import from components/
└─────────────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────┐
│         COMPONENTS + LIB                │  Foundation layer
│     (No business logic here)            │  Pure UI and utilities
└─────────────────────────────────────────┘
\`\`\`

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

\`\`\`bash
# Clone the repository
git clone https://github.com/ibrahimyusufdev/dineza-app.git
cd dineza-app

# Install dependencies
npm install

# Start development server
npm run dev
\`\`\`

### Environment Variables

Create a `.env` file in the root directory:

\`\`\`env
VITE_API_BASE_URL=http://localhost:3001/api
VITE_APP_NAME=DinezaApp
\`\`\`

---