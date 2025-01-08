# Service Sharing Web Application

A seamless platform for users to share, book, and manage services. Designed for both service providers and seekers, this web application ensures an efficient and user-friendly experience.

## 🌐 Live Site
[Visit the Live Website](https://fullstackservice1.web.app)

---

## 🚀 Features

1. **Dynamic User System**:
   - Registration and Login via Email/Password or Google Sign-In.
   - Conditional rendering of navigation menus based on the user's login status.

2. **Service Management**:
   - Add, update, and delete services with ease.
   - View detailed service information and proceed with bookings.

3. **Dashboard Functionality**:
   - Manage added services with editing and deletion options.
   - Track booked services and their statuses.
   - Update the statuses of booked services (e.g., Pending, Working, Completed).

4. **Dynamic Pages**:
   - Responsive and dynamic user interface with smooth navigation and engaging animations.
   - Search functionality on the "All Services" page to filter services by keywords.
   - Pagination to limit the number of services displayed per page for better performance.

5. **Interactive Booking System**:
   - Users can book services with customizable instructions.
   - Real-time status updates on service bookings for both service providers and seekers.

6. **JWT Authentication**:
   - Secure token-based authentication for protected routes.
   - Persistent login session even after page reloads.

7. **Theme Customization**:
   - Toggle between light and dark modes to enhance user accessibility and experience.

8. **Error Handling**:
   - A custom 404 Error Page that redirects to the homepage.
   - Informative error and success messages for user interactions.

9. **Extra Features**:
   - Engaging animations using AOS and Framer Motion to make the platform interactive.
   - Dynamic page titles for improved SEO and navigation clarity.

---

## 📋 Pages and Routes

### Public Routes
- **Home**: Landing page with a banner, popular services section, and unique features.
- **All Services**: Display all services available for booking.
- **Login**: User login page with Email/Password and Google authentication options.
- **Registration**: Allows new users to sign up and create accounts.

### Private Routes (Authenticated)
- **Add Service**: Add new services with details like image, name, price, area, and description.
- **Manage Services**: View, edit, or delete services that the user has added.
- **Booked Services**: Track and manage the services that the user has booked.
- **Service To Do**: A list of services booked by others that the current user must work on, with status updates.

### Miscellaneous
- **Single Service Details**: View detailed information about a specific service, including the option to "Book Now".
- **404 Error Page**: A custom error page displayed for invalid routes.

---

## Technologies Used

### Frontend:
- **React**: JavaScript library for building user interfaces.
- **Swiper**: Interactive and dynamic slideshows for better UI experience.
- **AOS**: Animate On Scroll for smooth page animations.
- **Firebase**: Used for user authentication and hosting.
- **Framer Motion**: For smooth and advanced animations.
- **React Hook Form**: To simplify form handling and validation.
- **React Icons**: Customizable icons for UI elements.

### Backend:
- **Express.js**: Server-side framework for building the API.
- **MongoDB**: NoSQL database used for storing service and user data.
- **JWT**: Secure token-based authentication for private routes.
- **dotenv**: Loads environment variables for configuration.
- **cors**: Middleware to handle cross-origin requests.
- **cookie-parser**: Middleware to parse cookies for session management.

---

## 🛠 Dependencies

Here are the dependencies for this project:

    "aos": "^2.3.4",
    "axios": "^1.7.9",
    "firebase": "^11.1.0",
    "framer-motion": "^11.15.0",
    "lottie-react": "^2.4.0",
    "react": "^18.2.0",
    "react-datepicker": "^6.9.0",
    "react-dom": "^18.2.0",
    "react-helmet": "^6.1.0",
    "react-helmet-async": "^2.0.5",
    "react-hook-form": "^7.54.2",
    "react-hot-toast": "^2.4.1",
    "react-icons": "^5.4.0",
    "react-loader-spinner": "^6.1.6",
    "react-paginate": "^8.2.0",
    "react-router-dom": "^6.23.0",
    "react-simple-typewriter": "^5.0.1",
    "react-tabs": "^6.0.2",
    "sweetalert2": "^11.15.3",
    "swiper": "^11.1.1"

## 🛠 devDependencies

Here are the devDependencies for this project:

    "@types/react": "^18.2.66",
    "@types/react-dom": "^18.2.22",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.19",
    "daisyui": "^4.10.5",
    "eslint": "^8.57.0",
    "eslint-plugin-react": "^7.34.1",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.6",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.3",
    "vite": "^5.2.0"

## 📋 Installation Instructions

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/nahidn228/service-sharing-webApp-client.git
    ```

2. Navigate to the project directory:

    ```bash
    cd service-sharing-webApp-client
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file and add your Firebase credentials:

    ```env
    VITE_APP_FIREBASE_API_KEY=your-api-key
    VITE_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
    VITE_APP_FIREBASE_PROJECT_ID=your-project-id
    VITE_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
    VITE_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
    VITE_APP_FIREBASE_APP_ID=your-app-id
    ```

5. Run the application:

    ```bash
    npm start
    ```

---

## 🤝 Contributing

We welcome contributions! Feel free to fork the repository, create a branch, and submit a pull request with your improvements or bug fixes.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
