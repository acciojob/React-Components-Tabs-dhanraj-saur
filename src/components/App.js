import React, { useState } from 'react';
import '../styles/App.css';



const TABS = [
  { id: 'Home', label: 'Home' },
  { id: 'About', label: 'About' },
  { id: 'Features', label: 'Features' },
];

const App = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="App">
      <div className="tabs">
        {TABS.map((tab) => (
          <div
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="viewport">
        Pages Go Here
      </div>
    </div>
  );
};

export default App;