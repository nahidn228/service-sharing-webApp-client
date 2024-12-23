# Service Sharing Web Application

A web application that allows users to share, book, and manage services with ease. The platform focuses on providing a seamless user experience for service providers and service seekers alike.

## 🌐 Live Site
[Visit the Live Website](https://fullstackservice1.web.app)

---

## 🚀 Features

1. **Dynamic User System**:
   - Registration and Login using Email/Password or Google Sign-In.
   - Conditional rendering of navigation menus based on user login status.

2. **Service Management**:
   - Add, update, and delete services.
   - View detailed information about services and book services.

3. **Dashboard Functionality**:
   - Manage added services with edit and delete options.
   - Track booked services and their statuses.
   - Update the statuses of booked services (e.g., Pending, Working, Completed).

4. **Dynamic Pages**:
   - Responsive and dynamic pages with smooth navigation and animations.
   - Search functionality on the "All Services" page to filter services based on keywords.
   - Pagination to display a limited number of services per page.

5. **Interactive Booking System**:
   - Users can book services with predefined and editable fields for specific instructions.
   - Booking status updates for service providers and seekers.

6. **JWT Authentication**:
   - Secure token-based authentication for private routes.
   - Persistent login session after page reloads.

7. **Theme Customization**:
   - Toggle between light and dark themes for better accessibility and user preference.

8. **Error Handling**:
   - Custom 404 Error Page with navigation back to the homepage.
   - Meaningful error and success messages for user interactions.

9. **Extra Features**:
   - Attractive animations using AOS and Framer Motion.
   - Dynamic titles for every route to enhance SEO and navigation clarity.


---

## 📋 Pages and Routes

### Public Routes
- **Home**: Landing page with a banner, popular services section, and additional unique sections.
- **All Services**: Displays all services added by users and admins.
- **Login**: Email/Password and Google-based login system.
- **Registration**: Allows users to create accounts.

### Private Routes
- **Add Service**: Add a new service with details like image, name, price, area, and description.
- **Manage Services**: Manage all services added by the logged-in user.
- **Booked Services**: Track the services booked by the user.
- **Service To Do**: Shows services booked by others from the current user with status updates.

### Miscellaneous
- **Single Service Details**: Detailed information about a specific service, including the "Book Now" feature.
- **404 Error Page**: Custom page for invalid routes.

---

## Technologies Used

### Frontend:
- **React**: A JavaScript library for building user interfaces.
- **Swiper**: For interactive and dynamic slideshows.
- **AOS**: Animate on scroll for beautiful animations.
- **Firebase**: For user authentication and hosting.
- **Framer Motion**: For advanced animations.
- **React Hook Form**: For efficient form validation and handling.
- **React Icons**: For customizable icons.

### Backend:
- **Express.js**: Web framework for building the server-side API.
- **MongoDB**: NoSQL database for handling and storing data.
- **JWT**: Secure token-based authentication.

---


