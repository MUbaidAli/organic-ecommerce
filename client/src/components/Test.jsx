import { useParallax } from "react-scroll-parallax";

const Test = () => {
  const mage = useParallax({ scale: [0.5, 1, "easeInQuad"] });
  const frog = useParallax({ scaleX: [1, 0, "easeInQuad"] });
  const moon = useParallax({ scale: [1.5, 1, "easeInQuad"] });
  //
  // const mage =
  //     useParallax <
  //     HTMLDivElement >
  //     {
  //       scale: [0.5, 1, "easeInQuad"],
  //     };

  //   const frog =
  //     useParallax <
  //     HTMLDivElement >
  //     {
  //       scaleX: [1, 0, "easeIn"],
  //     };

  //   const moon =
  //     useParallax <
  //     HTMLDivElement >
  //     {
  //       scale: [1.5, 1, "easeInQuad"],
  //     };
  return (
    <div className="spinner">
      <div className="mage" ref={mage.ref}>
        🧙🏻‍♂️
      </div>
      <div className="frog" ref={frog.ref}>
        🐸
      </div>
      <div className="moon" ref={moon.ref}>
        🌚
      </div>
    </div>
  );
};

export default Test;
