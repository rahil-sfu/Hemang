import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      {/* Sidebar */}
      <nav className="sidebar">
        <div className="logo">Hemang</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Discover</li>
          <li>History</li>
          <li>Library</li>
        </ul>
        <div className="user-section">
          <span>rahilsharm48</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {/* Top bar with user logo in the top-right */}
        <div className="top-bar">
          {/* <img
            className="user-logo"
            src="https://via.placeholder.com/40"
            alt="User"
          /> */}
          <button>Sign in</button>
        </div>

        {/* Search area with button */}
        <div className="search-area">
          <h1>What do you want to know?</h1>
          <div className="search-bar">
            <input
              className="search-input"
              type="text"
              placeholder="Ask anything..."
            />
            <button className="send-button">Send</button>
          </div>
        </div>

        {/* Cards or widgets below the search area */}
        <div className="cards-container">
          <div className="card">
            <h3>DOGE Cancels $420M Government Contracts</h3>
          </div>
          <div className="card">
            <h3>Port Moody</h3>
            <p>35°F – Clear</p>
          </div>
          <div className="card">
            <h3>Chemistry Nobel goes to developers of AlphaFold AI that predicts protein structures
</h3>
          </div>
          <div className="card">
            <h3>TSLA</h3>
            <p>$406.58 (-1.41%)</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
