Project will follow this structure if need change must be approved by product owner

--This setup will give us the following:

components/: For reusable UI components.
pages/: For pages that represent different screens/views.
App.js: Our main component where routes and navigation will be configured.

src/
├── components/
│   ├── layout/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── PageLayout.js        // Layout wrapper with header/footer
│   └── rides/
│       ├── RideRequestForm.js   // Form for requesting a ride
│       ├── RideOfferForm.js     // Form for offering a ride
│       └── RideList.js          // Display list of available rides
├── pages/
│   ├── HomePage.js              // Main page with options to request/offer a ride
│   ├── RequestRidePage.js       // Page for requesting a ride
│   └── OfferRidePage.js         // Page for offering a ride
├── utils/
│   └── api.js                   // Placeholder for API requests
├── App.js                       // Main app component with routing
└── index.js                     // Entry point
