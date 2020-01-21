import React from "react";
import "./App.css";
import BrowsingSvg from "./BrowsingSvg";
import TwitterSvg from "./TwitterSvg";

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <nav>
          <ul>
            <li>
              <a href="https://blog.grimcoding.xyz">Blog</a>
            </li>
          </ul>
          <a href="https://twitter.com/jonjongrim" className="social-link">
            <TwitterSvg />
          </a>
        </nav>
        <div className="browsing">
          <div className="browsing-svg">
            <BrowsingSvg />
          </div>
          <p className="intro">
            Hi! I'm Jon. I build web applications for a living. Learning to code
            has brought a new level of freedom and indepence to me for which I'm
            extremely grateful. I love the feeling of being able to take an idea
            and turn it into working software.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
