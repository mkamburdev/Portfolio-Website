---
title: 'Fellow Program'
description: The DCI Fellow Program is a comprehensive web application designed to manage and facilitate the activities of the Digital Career Institute. This project leverages a modern tech stack, including a React frontend with Vite and Tailwind CSS, and an Express backend with MongoDB. The application supports user authentication, user management, ticket management, and provides a responsive design suitable for various devices.
publishDate: 'Feb 16 2025'
seo:
  image:
    src: '/img/fellow/Fellow.avif'
    alt: DCI Fellow Program
---

<div align="center">

![DCI Fellow Program Banner](/img/fellow/Fellow.avif)

</div>

<div id="readme">
<p align="center">
    <a href="https://fellow.digitalcareerinstitute.org/">View Demo</a>
    |
    <a href="https://www.figma.com/design/Xw3g55ngvVHJpwWP0i2klk/">Figma Design</a>
    |
    <a href="https://pagespeed.web.dev/analysis/https-fellow-digitalcareerinstitute-org/qws35zweam?form_factor=desktop">PageSpeed Score</a>
  </p>
</div>

## Overview

The DCI Fellow Program is a comprehensive web application designed to manage and facilitate the activities of the Digital Career Institute. This project leverages a modern tech stack, including a React frontend with Vite and Tailwind CSS, and an Express backend with MongoDB. The application supports user authentication, user management, ticket management, and provides a responsive design suitable for various devices.

![DCI Fellow Program Banner](/img/fellow/performance.avif)

## Screenshots

<img src="/img/fellow/desktop.avif" alt="Screenshot 1" width="800"/><br>
<img src="/img/fellow/fellow.gif" alt="Screenshot 1" width="800"/><br>

## Features

### User Management

- **Registration and Login**: Users can register and log in to the application.
- **Profile Management**: Users can view and edit their profiles.
- **User Search and Filter**: Users can search and filter other users by email.

### Ticket Management

- **Create Tickets**: Users can create new tickets specifying the title, language, course, and description.
- **View Tickets**: Users can view details of individual tickets.
- **Filter and Search Tickets**: Users can filter tickets by language, course, and position, and search by keywords.
- **Delete Tickets**: Administrators can delete single or multiple tickets.

### Internationalization (i18n)

- **Language Support**: The application supports multiple languages and the user interface can be translated into different languages.

### Routing

- **React Router**: Enables navigation between different pages.

### State Management

- **Context API**: Manages global states such as user information.

### Announcements

- **Create and Update Announcements**: Administrators can create and update announcements.
- **View Announcements**: Users can view announcements.

### Responsive Design

- **Mobile-Friendly**: The application is designed to be responsive and works well on mobile devices.
- **Dynamic Layouts**: Layouts adjust based on screen size to provide an optimal user experience.

### Admin Dashboard

- **Overview**: Administrators can get an overview of tickets and user activities.
- **Sort and Filter**: Tickets can be sorted by date and filtered by various criteria.

## Technologies Used

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that provides a fast development environment.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **React Router**: For handling routing in the application.
- **Redux**: For state management.
- **React Icons**: For including icons in the application.

### Backend

- **Express**: A web application framework for Node.js.
- **MongoDB**: A NoSQL database for storing application data.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **JWT**: For secure authentication.

### Other Tools and Technologies

- **i18next**: A library for internationalization (i18n).
- **PM2**: A process manager for managing and monitoring Node.js applications.
- **GitHub Webhooks**: Used to trigger automatic updates.
- **Hetzner VPS**: A virtual private server used for application deployment.
