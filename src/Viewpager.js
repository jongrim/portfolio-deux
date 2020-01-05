import React, { useRef } from "react";
import clamp from "lodash-es/clamp";
import { useSprings, animated } from "react-spring";
import { useGesture } from "react-use-gesture";
import StateMachine from "./StateMachine";

/**
 * Projects:
 * This site?
 * State machines talk
 */

const pages = [
  {
    navColor: "#03254E",
    url:
      "https://images.pexels.com/photos/1883385/pexels-photo-1883385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260&fp-y=0.48&fit=crop&crop=focalpoint",
    component: () => (
      <div>grimcoding.xyz is under improvement. Check back soon!</div>
    )
  },
  {
    navColor: "#03254E",
    url:
      "https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    component: () => <StateMachine />
  },
  {
    navColor: "white",
    url:
      "https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    component: () => <div>3</div>
  }
];

const handleGesture = ({ index, setNavColor, set }) => ({
  down,
  direction: [, yDir],
  distance,
  cancel
}) => {
  if (down && distance > window.innerHeight / 2) {
    cancel(
      (index.current = clamp(
        index.current + (yDir > 0 ? -1 : 1),
        0,
        pages.length - 1
      ))
    );
    pages[index.current].navColor && setNavColor(pages[index.current].navColor);
  }
  set(i => {
    if (i < index.current - 1 || i > index.current + 1)
      return { display: "none" };
    const y =
      (i - index.current) * window.innerHeight + (down ? distance * yDir : 0);
    const sc = down ? 1 - distance / window.innerHeight / 2 : 1;
    return { y, sc, display: "block" };
  });
};

function Viewpager({ setNavColor }) {
  const index = useRef(0);
  const [props, set] = useSprings(pages.length, i => ({
    y: i * window.innerHeight,
    sc: 1,
    display: "block"
  }));
  const bind = useGesture({
    onDrag: handleGesture({ index, setNavColor, set })
  });
  return props.map(({ y, display, sc }, i) => {
    return (
      <animated.div
        {...bind()}
        className="outer"
        key={i}
        style={{
          display,
          transform: y.interpolate(y => `translate3d(0,${y}px,0)`)
        }}
      >
        <animated.div
          className="inner"
          style={{
            transform: sc.interpolate(s => `scale(${s})`),
            backgroundImage: `url(${pages[i].url})`
          }}
        >
          <div className="project-card">{pages[i].component()}</div>
        </animated.div>
      </animated.div>
    );
  });
}

export default Viewpager;
