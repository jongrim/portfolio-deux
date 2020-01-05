import React from "react";
import "./About.css";

function About() {
  return (
    <div className="aboutContent">
      <div className="intro">
        <p>
          Hi! I'm Jon. I build web applications for a living. Learning to code
          has brought a new level of freedom and indepence to me for which I'm
          extremely grateful. I love the feeling of being able to take an idea
          and produce a product.
        </p>
        <p>
          I'm passionate about delivering great user experiences. I think
          getting software in the hands of users is priority one and you
          shouldn't be afraid to try new things. Expirement, measure, iterate.
        </p>
      </div>
      <div className="programmingLikes">
        <p>A few things I'm really excited about:</p>
        <ul>
          <li>
            Functional programming (
            <code>[x | x &lt;- languages, x == "Haskell"]</code>)
          </li>
          <li>State machines</li>
          <li>Animations</li>
        </ul>
      </div>
      <div className="hobbies">
        <p>
          Outside of work, I enjoy video games and tabletop games, rock
          climbing, traveling, cooking, and going to Atlanta United games{" "}
          <span role="img" aria-label="soccer ball">
            ⚽️
          </span>
        </p>
      </div>
    </div>
  );
}

export default About;
