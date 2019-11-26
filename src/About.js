import React from "react";

function About() {
  return (
    <div className="aboutContent">
      <div className="intro">
        <p>
          Hi! I'm Jon. I build web applications for a living. Learning to code
          has brought a new level of freedom and indepence to me. I love the
          feeling of being able to take an idea and produce a product.
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
          Outside of work, I enjoy gaming (video games and tabletop games), rock
          climbing, traveling, cooking, and going to Atlanta United games.
        </p>
      </div>
    </div>
  );
}

export default About;
