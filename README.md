# Real-Time Chat Application

## Overview

This Real-Time Chat Application is a web-based chat platform that allows users to communicate in real-time. Built using Angular for the frontend and Node.js with Socket.io for the backend, this application provides a seamless chat experience with features such as private messaging, user registration, and real-time message broadcasting.

## Features

- **Real-Time Messaging**: Users can send and receive messages instantly using WebSocket technology.
- **Private Messaging**: Users can send messages to specific users or broadcast messages to all users.
- **User Registration and Authentication**: Users can log in to the application to access chat features.
- **Responsive Design**: The application is designed to be mobile-friendly and responsive.

## Technologies Used

- **Frontend**: 
  - Angular
  - HTML/CSS
  - TypeScript
- **Backend**: 
  - Node.js
  - Express
  - Socket.io
  - MongoDB (for user data storage)
- **Deployment**: 
  - Railway (for hosting the backend)
  - GitHub Pages or similar for the frontend

## Installation

### Prerequisites

- Node.js (v14 or higher)
- Angular CLI
- MongoDB (for local development)

### Clone the Repository

```bash
git clone https://github.com/taboubi-oussema/Real-Time-Chat-Application-API.git
cd Real-Time-Chat-Application-API
```

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd server
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root of the server directory and add your environment variables:

   ```plaintext
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   ```

4. Start the server:

   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd chat
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the Angular application:

   ```bash
   ng serve
   ```

4. Open your browser and navigate to `http://localhost:4200`.

## Usage

1. **Register/Login**: Users can register or log in to access the chat features.
2. **Send Messages**: Users can type messages in the input field and send them to either a specific user or to all users.
3. **Copy Socket ID**: Users can copy their Socket ID for debugging or other purposes.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please fork the repository and submit a pull request.


## Acknowledgments

- Thanks to the contributors and the open-source community for their support and resources.
- Special thanks to the developers of Angular, Node.js, and Socket.io for their amazing frameworks and libraries.

## Contact

For any inquiries or feedback, please reach out to [taboubioussema78@gmail.com](mailto:taboubioussema78@gmail.com).
