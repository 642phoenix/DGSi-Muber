Project will follow this structure if need change must be approved by product owner

--This setup will give us the following:

components/: For reusable UI components.
pages/: For pages that represent different screens/views.
App.js: Our main component where routes and navigation will be configured.

src/
├── App.js                       // Main app component with routing
├── App.css                      // Global app styling
├── index.js                     // Entry point
├── components/
│   ├── layout/
│   │   ├── Header.js            // Header with navigation links
│   │   ├── Footer.js
│   │   └── PageLayout.js        
│   ├── rides/
│   │   ├── RideRequestForm.js   
│   │   ├── RideOfferForm.js     
│   │   └── RideList.js          
│   ├── ProtectedRoute.js        // Protect routes for authenticated users
│   └── SignOutButton.js         // Sign-out button component
├── pages/
│   ├── HomePage.js              
│   ├── RequestRidePage.js       
│   ├── OfferRidePage.js         
│   ├── SignUpPage.js            
│   ├── LoginPage.js             // Login page for user authentication
│   ├── ProfilePage.js           // User profile page
└── utils/
    └── api.js                   // API utility for user actions (login, registration, profile fetch)
