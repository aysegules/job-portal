<div>
<h3 align="center">Job Portal</h3>
    <div align="center">
        <img src="https://img.shields.io/badge/React Redux-001219?style=for-the-badge&logo=redux&logoColor=white" alt="Node.js" />
        <img src="https://img.shields.io/badge/Tanstack Query-005f73?style=for-the-badge&logo=tanstack&logoColor=white" alt="Tanstack Query" />
        <img src="https://img.shields.io/badge/-Javascript-0a9396?style=for-the-badge&logo=javascript&logoColor=white" alt="Javascript" />
        <img src="https://img.shields.io/badge/-Vite-94d2bd?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
        <img src="https://img.shields.io/badge/-Axios-e9d8a6?style=for-the-badge&logo=axios&logoColor=white" alt="Axios" />
        <img src="https://img.shields.io/badge/-TailwindCss-ca6702?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TailwindCss" />
        <img src="https://img.shields.io/badge/-React Router Dom-bb3e03?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router Dom" />
    </div>
</div>

# Introduction

A React project for managing job applications, built with Node.js, Tanstack Query, React Redux and Axios.

The app provides login/register and logout funcitonality for users and companies, seperately. It lists available jobs for users with filters option and shows user applications. For companies, it contains add a new job, manage jobs and view applicants sections.

[Visit the application](https://job-portal-client-eta-one.vercel.app/).

# Tech Stack

- **React** – Core library
- **React Router Dom** – Declarative routing
- **TanStack Query** – Data fetching and caching
- **Axios** - Promise based HTTP client
- **Vite** – Fast build tool
- **TailwindCSS** – Styling and utilities
- **GitHub & Vercel** – Deployment

The project follows a layered architecture with separate pages, components, services, hooks, and config, providing a maintainable and scalable structure.

## Quick Start

**Cloning the Repository**

```bash
git clone https://github.com/aysegules/job-portal.git
cd client
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
VITE_BASE_URL="http://localhost:5000/api/v1"
```

**Start the App**

```bash
npm run dev
```

## Screenshots

#### User Login and Register

![User Login](screenshots/user-login.png)

![User Register](screenshots/user-register.png)

![User Register](screenshots/user-register-2.png)

#### Home

![Hero](screenshots/hero.png)

![List Jobs](screenshots/list-jobs.png)

![Download App](screenshots/download-app.png)

#### Apply Job

![Apply Job](screenshots/apply-for-job.png)

![Apply Job](screenshots/apply-for-job-2.png)

#### Applied Jobs

![Applied Jobs](screenshots/applied-jobs.png)

#### Company Login and Register

![Company Login](screenshots/company-login.png)

![Company Register](screenshots/company-register.png)

#### View Applications

![View Applications](screenshots/view-applications.png)

#### Add Job

![Add Job](screenshots/add-job.png)

#### Manage Jobs

![Manage Jobs](screenshots/manage-jobs.png)
