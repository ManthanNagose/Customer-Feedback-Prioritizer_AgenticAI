import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FeedbackPlatform = () => {
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const navigate = useNavigate();

  const handleProceed = () => {
    // Navigate to the form, passing the selected platform to customize the next page
    navigate(`/feedback/write`, { state: { platform: selectedPlatform } });
  };

  return (
    <div className="page-container">
      <div className="feedback-prioritizer-box">
        <h1 className="title">Customer Feedback Prioritizer</h1>
        <p className="instructions">
          Please select your preferred platform, or write your feedback directly below.
        </p>

        <div className="platform-selection-grid">
          {['Notion', 'Slack', 'Email'].map(platform => (
            <button
              key={platform}
              className={`platform-button ${selectedPlatform === platform ? 'active' : ''}`}
              onClick={() => setSelectedPlatform(platform)}
              type="button"
            >
              <i className={`fab fa-${platform.toLowerCase()}`}></i> {platform}
            </button>
          ))}
        </div>

        <div className="direct-feedback-section">
          <h2>Or, write your feedback directly here:</h2>
          <button onClick={() => setSelectedPlatform('Direct')} className={`direct-write-btn ${selectedPlatform === 'Direct' ? 'active' : ''}`} type="button">
             Proceed to Direct Form
          </button>
        </div>

        {selectedPlatform && (
            <button className="next-btn" onClick={handleProceed} type="button">
                Proceed with {selectedPlatform}
            </button>
        )}
      </div>
    </div>
  );
};

export default FeedbackPlatform;
