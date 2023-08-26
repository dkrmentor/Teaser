import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./utils";
import { Login } from "./auths";


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Login />} />
          {/* Use the AuthorizedRoute for protected routes */}
          <AuthorizedRoute path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;


// mkdir src
// mkdir src/auths
// mkdir src/pages
// mkdir src/auths/authContext
// mkdir src/auths/login
// mkdir src/pages/dashboard
// $null > src/auths/login/login.auth.js
// $null > src/pages/dashboard/dashboard.page.js
// $null > src/auths/authContext/authContext.auth.js
// $null > src/auths/login/login.auth.css
// $null > src/pages/dashboard/dashboard.page.css
// $null > src/auths/authContext/authContext.auth.css

