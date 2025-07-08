# Enhanced Collage System - Fullstack Setup Guide

## Overview
This is a fullstack web application that allows users to create beautiful collages with Google OAuth authentication, database storage, and admin panel functionality.

## Features

### User Features
- **Google OAuth Authentication** - Secure login with Google accounts
- **Collage Creation** - Upload 2-6 images and create collages with flexible layouts
- **Save & Manage** - Save collages to your account and manage them from dashboard
- **Download** - Download high-quality collage images
- **Responsive Design** - Works on desktop, tablet, and mobile devices

### Admin Features
- **User Management** - View all users and promote to admin
- **Collage Management** - View, download, and delete all collages
- **Analytics Dashboard** - View statistics and recent activity
- **Data Export** - Download collage data in JSON format

## Setup Instructions

### 1. Google OAuth Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs: `http://localhost:3000/auth/google/callback`
6. Copy Client ID and Client Secret

### 2. Environment Configuration
1. Navigate to `backend` directory
2. Copy `.env.example` to `.env`
3. Update the following variables:
   ```
   GOOGLE_CLIENT_ID=your_actual_google_client_id
   GOOGLE_CLIENT_SECRET=your_actual_google_client_secret
   SESSION_SECRET=your_strong_session_secret
   ```

### 3. Installation
```bash
# Install backend dependencies
cd backend
npm install

# Start the development server
npm run dev
```

### 4. Database Setup
The application uses SQLite database which is created automatically when you first run the server. No manual database setup is required.

### 5. Admin Setup
1. Start the server and visit `http://localhost:3000`
2. Login with Google OAuth
3. Manually update your user role to 'admin' in the database:
   ```sql
   UPDATE users SET role = 'admin' WHERE email = 'your_email@gmail.com';
   ```
4. Restart the server and you'll have admin access

## File Structure
```
collage-system/
├── backend/
│   ├── server.js              # Main server file
│   ├── package.json           # Dependencies
│   ├── .env                   # Environment variables
│   ├── routes/
│   │   ├── auth.js           # Authentication routes
│   │   ├── collages.js       # Collage CRUD operations
│   │   └── admin.js          # Admin-only routes
│   ├── middleware/
│   │   └── auth.js           # Authentication middleware
│   ├── models/
│   │   └── database.js       # Database models and queries
│   └── config/
│       └── passport.js       # Passport.js configuration
├── frontend/
│   ├── index.html            # Main collage creation page
│   ├── login.html            # Login page
│   ├── dashboard.html        # User dashboard
│   ├── admin.html            # Admin panel
│   ├── script.js             # Collage system JavaScript
│   └── styles.css            # Styling
├── database.db               # SQLite database (auto-created)
└── README.md                 # This file
```

## Usage

### For Users
1. Visit `http://localhost:3000`
2. Click "Login with Google" to authenticate
3. Upload 2-6 images
4. Choose a layout and customize options
5. Create your collage
6. Save with title and description
7. Download or access from dashboard

### For Admins
1. Login and access admin panel
2. View all users and collages
3. Promote users to admin
4. Download collage data
5. Delete content if needed
6. Monitor system statistics

## API Endpoints

### Authentication
- `GET /auth/google` - Initiate Google OAuth
- `GET /auth/google/callback` - OAuth callback
- `GET /auth/logout` - Logout user
- `GET /auth/status` - Check authentication status

### Collages
- `GET /api/collages/user/:userId` - Get user's collages
- `GET /api/collages/:id` - Get specific collage
- `POST /api/collages` - Create new collage
- `PUT /api/collages/:id` - Update collage
- `DELETE /api/collages/:id` - Delete collage

### Admin
- `GET /api/admin/users` - Get all users
- `GET /api/admin/collages` - Get all collages
- `GET /api/admin/stats` - Get dashboard statistics
- `PUT /api/admin/users/:id/role` - Update user role
- `DELETE /api/admin/collages/:id` - Delete collage

## Database Schema

### Users Table
- `id` (INTEGER PRIMARY KEY)
- `google_id` (TEXT UNIQUE)
- `email` (TEXT UNIQUE)
- `name` (TEXT)
- `role` (TEXT, default: 'user')
- `created_at` (DATETIME)

### Collages Table
- `id` (INTEGER PRIMARY KEY)
- `user_id` (INTEGER, FOREIGN KEY)
- `title` (TEXT)
- `description` (TEXT)
- `image_data` (TEXT, JSON)
- `layout_config` (TEXT, JSON)
- `canvas_size` (TEXT)
- `options` (TEXT, JSON)
- `created_at` (DATETIME)

## Security Features
- Google OAuth authentication
- Session-based authentication
- Role-based access control
- CSRF protection
- Input validation
- Secure cookie settings

## Development Notes
- Frontend serves static files from the root directory
- Backend provides API endpoints and authentication
- Database is created automatically on first run
- Environment variables are required for OAuth to work

## Production Deployment
For production deployment:
1. Set `NODE_ENV=production`
2. Use secure session secrets
3. Configure proper HTTPS
4. Set up proper database (PostgreSQL recommended)
5. Configure production OAuth redirect URLs
6. Set up proper logging and monitoring

## Troubleshooting
- **OAuth not working**: Check Google Cloud Console credentials
- **Database errors**: Ensure write permissions in directory
- **Session issues**: Verify session secret is set
- **Port conflicts**: Change PORT in .env file
- **CORS issues**: Update FRONTEND_URL in .env file

## License
This project is licensed under MIT License.