import React, { useRef } from "react";
import clamp from "lodash-es/clamp";
import debounce from "lodash-es/debounce";
import { useSprings, animated } from "react-spring";
import { useGesture } from "react-use-gesture";

/**
 * Projects:
 * This site?
 * State machines talk
 */

const pages = [
  {
    navColor: "black",
    url:
      "https://images.pexels.com/photos/1883385/pexels-photo-1883385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260&fp-y=0.48&fit=crop&crop=focalpoint"
  },
  {
    navColor: "#03254E",
    url:
      "https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    navColor: "green",
    url:
      "https://images.pexels.com/photos/296878/pexels-photo-296878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    navColor: "white",
    url:
      "https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  }
];

// function updateCurrent({ index, setNavColor, yDir }) {
//   index.current = clamp(
//     index.current + (yDir > 0 ? 1 : -1),
//     Math.max(index.current - 1, 0),
//     Math.min(pages.length - 1, index.current + 1)
//   );
//   pages[index.current].navColor && setNavColor(pages[index.current].navColor);
// }

// const debounced = debounce(updateCurrent, 750);

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
    onDrag: handleGesture({ index, setNavColor, set }),
    onScroll: state => {
      console.log({ state });
    },
    onWheel: ({ direction: [, yDir], first, ...rest }) => {
      console.log({ rest });
      function updateCurrent() {
        index.current = clamp(
          index.current + (yDir > 0 ? 1 : -1),
          Math.max(index.current - 1, 0),
          Math.min(pages.length - 1, index.current + 1)
        );
        pages[index.current].navColor &&
          setNavColor(pages[index.current].navColor);
      }
      if (first) {
        updateCurrent({ index, setNavColor, yDir });
      }
      set(i => {
        // if (i < index.current - 1 || i > index.current + 1)
        //   return { display: "none" };
        const y = (i - index.current) * window.innerHeight * Math.abs(yDir);
        const sc = 0.95;
        return { y, sc, display: "block" };
      });
    },
    onWheelEnd: () => {
      set(() => {
        return { sc: 1, display: "block" };
      });
    }
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
          <div className="project-card">Inner content for things</div>
        </animated.div>
      </animated.div>
    );
  });
}

export default Viewpager;
