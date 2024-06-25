# Booking-App

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Running the App](#running-the-app)

## Features

- Booking and reservation management
- Responsive design with Tailwind CSS
- Data persistence with PostgreSQL
- Dockerized setup for easy deployment

## Tech Stack

- **Frontend:** Next.js, TypeScript, Tailwind CSS
- **Backend:** Next.js API routes, Prisma ORM
- **Database:** PostgreSQL
- **Containerization:** Docker

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later)
- Docker
- PostgreSQL

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/booking-app.git
    cd booking-app
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the root of your project and add the following:

    ```env
    DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
    ```

4. Run database migrations:

    ```bash
    cd prisma
    npx prisma migrate dev
    cd ..
    ```

5. Seed the Data Base
    ```bash
    cd prisma
    tsc seed.ts
    node seed.js
    

## Running the App

1. Start the development server:

    ```bash
    npm run dev
    ```

    The app will be available at `http://localhost:3000`.


