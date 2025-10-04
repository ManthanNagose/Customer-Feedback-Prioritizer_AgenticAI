import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import FeedbackPlatform from './pages/FeedbackPlatform';
import FeedbackForm from './pages/FeedbackForm';
import ThankYouPage from './pages/ThankYouPage';
import EmployeeDashboard from './pages/EmployeeDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/feedback/platform" element={<FeedbackPlatform />} />
        <Route path="/feedback/write" element={<FeedbackForm />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/dashboard" element={<EmployeeDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
