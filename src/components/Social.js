import styled from "styled-components";

import IconTwitter from "../images/twitter.svg";
import IconYoutube from "../images/youtube.svg";

export default function Social() {
  return (
    <Main id="social">

        <div />
        <img src={IconTwitter} alt="Twitter" />
        <img src={IconYoutube} alt="Youtube" />

    </Main>
  )
}

const Main = styled.div`
    position: absolute;
    top: 150px;
    left: 30px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;

    @media (max-width: 1024px) {
    display: none;
    }

    div {
    width: 1px;
    height: 500px;
    background: linear-gradient(180deg, #526eff 22.72%, #ff4f4f 75.53%);
    }
`;
