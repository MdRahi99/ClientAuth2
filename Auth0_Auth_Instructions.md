### Firebase Implementation Steps:

Brief description or overview of the feature.

## Installation
- npm install @auth0/auth0-react

## Component Setup

Step-1: Then in main.tsx i wrap the whole app using Auth0Provider which by default provide by auth0.

Step-2: Implement signIn and signOut functionality and also track user state by the auth0 provider.

Step-5: Then i call auth0 default sign in method in pages/Authentication/SignIn. This will redirect to sign in and sign up form.

Step-6: I also create a Private Route to protect unauthorized access in routes/PrivateRoute component. and call these Private Route in every path element in 'App.tsx'. So without login no one can access the content of the app.

Step-7: Similarly check authorization in components/Header/index.tsx, components/Header/DropdownUser.tsx and components/Sidebar/index.tsx to restricted this components from unauthorized access.

Step-8: In Header section dropdown, i add signOut functionality
