import React, { useState } from 'react';
import '../styles/App.css';

function App() {
    const [activeTab, setActiveTab] = useState('Home');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="App">
            <Tabs activeTab={activeTab} handleTabClick={handleTabClick} />
            <Viewport activeTab={activeTab} />
        </div>
    );
}

function Tabs({ activeTab, handleTabClick }) {
    const tabs = ['Home', 'About', 'Features'];

    return (
        <div className="tabs">
            {tabs.map((tab) => (
                <div
                    key={tab}
                    className={`tab ${activeTab === tab ? 'active' : ''}`}
                    id={`${tab}-tab`}
                    onClick={() => handleTabClick(tab)}
                >
                    {tab}
                </div>
            ))}
        </div>
    );
}

function Viewport({ activeTab }) {
    return (
        <div className="viewport">
            Pages Go Here: {activeTab}
        </div>
    );
}

export default App;
