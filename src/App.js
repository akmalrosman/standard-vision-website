import Spline from "@splinetool/react-spline";
import styled from "styled-components";

// Layout components
import Content from "./components/Content";
import Social from "./components/Social";

export default function App() {
  return (
    <Wrapper>

      {/* Spline 3D animated */}
      <Spline
        id="spline"
        className="spline"
        scene="https://prod.spline.design/hEFpSY4Lxaa7eHgx/scene.splinecode"
      />

      {/* Content layout */}
      <Content />

      {/* Social layout */}
      <Social />

    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: "Spline Sans", sans-serif;
  color: white;
  font-size: 16px;
  margin: 0 auto;
  position: relative;
  height: 100%;
  overflow-x: hidden;

  .spline {
    position: absolute;
    margin: 0;
    top: 0;
    right: 0;
    width: 1200px;
    height: 1000px;

    @media (max-width: 1024px) {
      transform: scale(0.8) translateX(200px);
      transform-origin: top;
    }
    @media (max-width: 800px) {
      transform: scale(0.7) translateX(600px);
    }
    @media (max-width: 600px) {
      transform: scale(0.5) translateX(-100px);
      right: auto;
      left: 50%;
      margin-left: -600px;
    }
    @media (max-width: 375px) {
      transform: scale(0.45) translateX(-50px);
    }
  }
`;