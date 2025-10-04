// src/services/api.js
// API service file for communicating with the backend server.

const API_BASE_URL = 'http://localhost:3001/api';

/**
 * Submits customer feedback to the backend for Gemini analysis.
 */
export const submitFeedback = async (feedbackText, platform, userDetails) => {
    try {
        const response = await fetch(`${API_BASE_URL}/feedback`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                feedbackText, 
                platform, 
                ...userDetails // Include user details from login
            })
        });
        if (!response.ok) {
            throw new Error('Failed to submit feedback to backend.');
        }
        return response.json();
    } catch (error) {
        console.error('Error submitting feedback:', error);
        throw error;
    }
};

/**
 * Fetches the prioritized feedback data for the employee dashboard.
 */
export const fetchDashboardData = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/dashboard`);
        if (!response.ok) {
            throw new Error('Failed to fetch dashboard data.');
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching dashboard data:', error);
        return null; 
    }
};
