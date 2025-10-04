import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { submitFeedback } from '../services/api'; // <-- New import

const FeedbackForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // Get the selected platform from the previous page's state
  const platform = location.state?.platform || 'Direct'; 
  const [feedbackText, setFeedbackText] = useState('');

  // NOTE: In a full app, you'd get firstName, email, etc., from a Context/Redux store. 
  // For this example, we use mock details.
  const userDetails = { 
    firstName: 'Test', 
    lastName: 'User', 
    email: 'test@example.com' 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!feedbackText.trim()) {
      alert("Please enter your feedback.");
      return;
    }

    try {
        // 1. Send feedback to the Backend API
        await submitFeedback(feedbackText, platform, userDetails);
        
        // 2. Redirect to Thank You page
        navigate('/thank-you');
        
    } catch (error) {
        alert("There was an error submitting your feedback. Please try again.");
    }
  };

  return (
    <div className="page-container">
      <div className="feedback-form-box">
        <h1 className="title">Share Your Feedback</h1>
        <p className="subtitle">
          Thank you for choosing to provide feedback via <strong className="platform-name">{platform}</strong>.
        </p>

        {platform === 'Notion' && (
          <p className="platform-tip">Your feedback will be automatically logged into our Notion database.</p>
        )}
        {/* ... add specific instructions for Slack/Email ... */}

        <form onSubmit={handleSubmit} className="feedback-form">
          <textarea
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
            placeholder="Tell us about your experience (product issues, payment problems, good service, etc.)."
            rows="10"
            required
          ></textarea>
          
          <button type="submit" className="submit-feedback-btn">
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
