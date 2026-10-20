<div>
<h3 align="center">Job Portal Server</h3>
    <div align="center">
        <img src="https://img.shields.io/badge/node.js-582f0e?style=for-the-badge&logo=Node.js&logoColor=white" alt="Node.js" />
        <img src="https://img.shields.io/badge/express.js-7f4f24?style=for-the-badge&logo=express&logoColor=white" alt="express.js" />
        <img src="https://img.shields.io/badge/-Postgresql-936639?style=for-the-badge&logo=postgresql&logoColor=white" alt="postgresql" />
        <img src="https://img.shields.io/badge/-Prisma-a68a64?style=for-the-badge&logo=prisma&logoColor=white" alt="prisma" />
        <img src="https://img.shields.io/badge/-Cloudinary-b6ad90?style=for-the-badge&logo=cloudinary&logoColor=white" alt="Cloudinary" />
        <img src="https://img.shields.io/badge/-Multer-a4ac86?style=for-the-badge&logo=javascript&logoColor=white" alt="Multer" />
    </div>
</div>

# Introduction

A RESTful API for managing job applications, built with Node.js, Express.js, PostgreSQL, and Prisma ORM.

The system provides user authentication and authorization, using BcryptJS for secure password hashing and JSON Web Tokens (JWT) for token-based authentication.

# Key Features

- User registration and authentication
- JWT-based authentication and authorization
- Role-based access control for users and companies
- CRUD operations for users, companies, jobs, and applications
- Job application management
- Input validation with Zod
- Relational database management with Prisma ORM and PostgreSQL

# Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- Zod
- BcryptJS
- JSON Web Token (JWT)
- Multer
- Cloudinary

The project follows a layered backend architecture with separate routes, controllers, services, validators, and middleware, providing a maintainable and scalable API structure.

## Quick Start

**Cloning the Repository**

```bash
git clone https://github.com/aysegules/job-portal.git
cd server
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
PORT = 5000
VERSION = "/api/v1"
NODE_ENV = "development/production"
DATABASE_URL="postgresql://username:password@localhost:5432/DB_name?schema=public"
JWT_SECRET="secret"

CLOUDINARY_URL="cloudinary://cloud_url"
CLOUDINARY_CLOUD_NAME="cloud_name"
CLOUDINARY_API_KEY="cloud_api_key"
CLOUDINARY_API_SECRET="cloud_api_secre"

CORS_ORIGIN = "http://localhost:5173,..."
```

For the JWT secret variable you can run following command in terminal in your VS Code editor:

```bash
openssl rand -base64 32
```

This command will give you a secret key that generated randomly.

**Set Up The Database**

```bash
#create a prisma postgres db
npx create-db@latest

npx prisma migrate dev --name init

npx prisma generate

npm run seed:users

npm run seed:companies

npm run seed:jobs

npm run seed:applications
```

**Start the Development Server**

```bash
npm run dev
```

Open http://localhost:5000/api/v1 in your browser or any tool like Postman to test your API.

---

## API Endpoints

### Authentication Routes

- `POST /auth/register`
- `POST /auth/login`
- `POST /auth/logout`

### User Routes

- `GET /users/me`
- `GET /users/applications`
- `POST /users/apply/:jobId`
- `PATCH /users/profile`
- `DELETE /users/profile`

### Job Routes

- `GET /jobs`
- `GET /jobs/:id`

### Company Routes

- `GET /companies/company`
- `GET /companies/applicants`
- `GET /companies/list-jobs`
- `POST /companies/register`
- `POST /companies/login`
- `POST /companies/job`
- `POST /companies/change-visibility/:id`
- `PATCH /companies/change-status/:id`
