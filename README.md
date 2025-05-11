# NextStep Scholarships

NextStep Scholarships is a web application designed to manage scholarships, providing a platform for users to explore and apply for various scholarship opportunities.

### Admin Credentials for Checking

email: cucu@cubarsi.com || password: Asdfghj

## Screenshots

Here are some screenshots of the NextStep Scholarships application:

**Home Page**

![Home Page](https://i.ibb.co.com/QvLg38RD/home-page.png)

**Admin Dashboard**

![Admin Dashboard](https://i.ibb.co.com/pvzcWZ0C/admin-dashboard.png)

## Features

**Admin Dashboard**

- Scholarship Management: Add, update, and delete scholarships.
- Application Tracking: Monitor applications and review status.
- User Management: Manage user accounts and roles.
- Insights: View daily applictions and earnings reports.

**User Features**

- Browse available scholarships.
- Apply for scholarships directly via the platform.
- Track application status in real-time.

**Technologies Used**

- Front-end:React.js, Tailwind CSS.
- Back-end:NodeJs,ExpressJs.
- Database: MongoDB
- Authentication: Firebase Authentication.
- Payment Integration: Stripe

## NPM Packages Used

- `@stripe/react-stripe-js` for payment processing
- `@stripe/stripe-js` for payment processing
- `@tanstack/react-query` for data fetching and caching
- `react-router-dom` for client-side routing
- `react-toastify` for toast notifications
- `react-icons` for icons
- `react-helmet-async` for dynamic title
- `axios` for API requests
- `react-router-dom` for client-side routing
- `react-hook-form` for form management

## Dependencies

- `@stripe/react-stripe-js`: ^3.1.1
- `@stripe/stripe-js`: ^5.5.0
- `@tanstack/react-query`: ^5.64.1
- `animate.css`: ^4.1.1
- `axios`: ^1.7.9
- `firebase`: ^11.1.0
- `react`: ^18.3.1
- `react-dom`: ^18.3.1
- `react-helmet-async`: ^2.0.5
- `react-hook-form`: ^7.54.2
- `react-icons`: ^5.4.0
- `react-rating`: ^2.0.5
- `react-router-dom`: ^7.1.1
- `react-toastify`: ^11.0.3
- `recharts`: ^2.15.0
- `sweetalert2`: ^11.15.10
- `swiper`: ^11.2.1

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/jubayerahmmad/NextStep-Scholarships-Client.git
   cd NextStep-Scholarships-Client
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory and add the necessary environment variables.

4. **Example `.env.local` file:**

   ```env
   VITE_apiKey= your_firebase_api_key_here
   VITE_authDomain= your_firebase_auth_domain_here
   VITE_projectId= your_firebase_project_id_here
   VITE_storageBucket= your_firebase_storage_bucket_here
   VITE_messagingSenderId= your_firebase_messaging_sender_id_here
   VITE_appId= your_firebase_app_id_here
   VITE_API_URL= your_api_url_here
   VITE_STRIPE_PUBLISHABLE_KEY= your_stripe_publishable_key_here
   ```

5. **Start the development server:**

   ```bash
   npm run dev
   ```

6. **Build for production:**

   ```bash
   npm run build
   ```

Now, you should be able to access the application at `http://localhost:5173`.

## URLs

[[Live Demo](https://nextstep-scholarships.web.app/)]
[[Server Side Repo](https://github.com/jubayerahmmad/NextStep-Scholarships-Server)]
