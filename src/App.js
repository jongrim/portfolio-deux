import React from "react";
import "./App.css";

import Viewpager from "./Viewpager";
import About from "./About";

function navColorReducer(state, action) {
  const reducer = {
    SET_NAV_COLOR: (state, action) => ({
      navColor: action.payload,
      prevColor: state.navColor
    })
  };
  return reducer[action.type] ? reducer[action.type](state, action) : state;
}

function App() {
  const [current, dispatch] = React.useReducer(navColorReducer, {
    navColor: "black"
  });
  const [position, setPosition] = React.useState("projects");
  return (
    <div style={{ display: "flex" }}>
      <div className="nav" style={{ color: current.navColor }}>
        <button
          onClick={() => {
            setPosition("projects");
            dispatch({ type: "SET_NAV_COLOR", payload: current.prevColor });
          }}
        >
          Projects
        </button>
        <button
          onClick={() => {
            setPosition("about");
            dispatch({ type: "SET_NAV_COLOR", payload: "#FECEE9" });
          }}
        >
          About
        </button>
      </div>
      <Screen position={position}>
        <Viewpager
          setNavColor={color =>
            dispatch({ type: "SET_NAV_COLOR", payload: color })
          }
        />
      </Screen>
      <Screen position={position}>
        <About />
      </Screen>
    </div>
  );
}

function Screen({ children, position }) {
  return <div className={`screen ${position}`}>{children}</div>;
}

export default App;
