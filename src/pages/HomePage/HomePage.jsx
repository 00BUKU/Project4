import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="title">
        <h1>Welcome to PodLux</h1>
      </div>
      <div className="image">
        <a href="https://imgur.com/lmaY3Mw">
          <img
            src="https://i.imgur.com/lmaY3Mw.png"
            title="source: imgur.com"
          />
        </a>
      </div>
    </div>
  );
};

export default HomePage;
