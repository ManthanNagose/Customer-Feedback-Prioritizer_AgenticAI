import React, { useEffect, useState } from 'react';
import { fetchDashboardData } from '../services/api'; // <-- New import

const EmployeeDashboard = () => {
  const [data, setData] = useState({
    good: { High: {}, Medium: {}, Low: {} },
    bad: { High: {}, Medium: {}, Low: {} },
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
        setLoading(true);
        const fetchedData = await fetchDashboardData();
        if (fetchedData) {
            setData(fetchedData);
        }
        setLoading(false);
    };
    loadData();
  }, []);

  const renderFeedbackBlocks = (type, categoryData) => {
    const priorityOrder = ['High', 'Medium', 'Low'];
    return (
      <div className={`feedback-section ${type}`}>
        <h2>{type.toUpperCase()} Reviews</h2>
        <div className="priority-grid">
          {priorityOrder.map(priority => (
            <div key={priority} className={`priority-block ${priority.toLowerCase()}`}>
              <h3>{priority} Priority</h3>
              <ul className="issue-list">
                {Object.entries(categoryData[priority]).map(([issue, count]) => (
                  <li key={issue}>
                    <span className="issue-name">{issue}</span> 
                    <span className="issue-count">{count}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };

  if (loading) return <div className="loading">Loading Prioritized Feedback...</div>;

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Prioritized Customer Feedback Analysis</h1>
      
      <div className="analysis-summary">
        {renderFeedbackBlocks('good', data.good)}
        {renderFeedbackBlocks('bad', data.bad)}
      </div>

      <div className="action-list-card">
        <h2>Weekly Action List (Top Priority)</h2>
        {/* This section would pull the highest priority items from the 'bad' section */}
        <ul>
          <li>**Product Malfunctions:** Investigate critical bug in Checkout feature (2 days overdue).</li>
          <li>**Payment Issues:** Follow up on 5 pending refund requests.</li>
        </ul>
      </div>

    </div>
  );
};

export default EmployeeDashboard;
