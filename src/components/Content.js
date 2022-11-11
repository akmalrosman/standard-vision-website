import { useState } from "react";
import styled from "styled-components";

import Logo from "../images/logo.png";
import IconWindows from "../images/windows.svg";
// import IconApple from "../images/apple.svg";
import IconLinux from "../images/linux.svg";

import ModalSignUp from "./ModalSignUp";

export default function Content() {

    const [openModal, setOpenModal] = useState(false);

    // Download function for windows
    const downloadWindows = () => {
        window.location.href=process.env.REACT_APP_WINDOWS_URL
    }

    // Download function for linux 
    const downloadLinux = () => {
        window.location.href=process.env.REACT_APP_LINUX_URL
    }

  return (
    <>
    <Main>

        <Menu>
            <img className="logo" src={Logo} alt="Logo" />
            <li>
                <a href="https://imagineaigroup.com/">Home</a>
            </li>
            <button onClick={() => setOpenModal(true)}>Sign Up</button>
        </Menu>

        <ContentWrapper>
            <h1>Standard Vision</h1>
            <p>
            A flowchart image processing GUI aimed at making chaining image
            processing tasks easy, intuitive, and customizable. Standard Vision is
            still a work in progress project.
            </p>
        </ContentWrapper>

        <ButtonWrapper>
            <button onClick={downloadWindows} >
                <img src={IconWindows} alt="Download Windows" /> Download for Windows
            </button>
            {/* <button>
                <img src={IconApple} alt="Download Mac" /> Download for Mac
            </button> */}
            <button onClick={downloadLinux} >
                <img src={IconLinux} alt="Download Linux" /> Download for Linux
            </button>
        </ButtonWrapper>

    </Main>

    <ModalSignUp 
    open={openModal}
    onClose={() => setOpenModal(false)}
    />

    </>
  )
}

const Main = styled.div`
    position: absolute;
    top: 30px;
    width: 100%;
    padding-bottom: 100px;
    pointer-events: none;

    display: flex;
    flex-direction: column;
    gap: 80px;

    @media (max-width: 1024px) {
    gap: 40px;
    }

    h1 {
    font-weight: bold;
    font-family: "Spline Sans Mono", monospace;
    font-size: 70px;
    margin: 0;
    max-width: 500px;
    pointer-events: auto;
    text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);

        @media (max-width: 1024px) {
            font-size: 60px;
            max-width: 400px;
        }
        @media (max-width: 800px) {
            font-size: 40px;
            max-width: 300px;
        }
        @media (max-width: 600px) {
            padding-top: 250px;
        }
    }

    p {
    font-weight: normal;
    line-height: 150%;
    max-width: 380px;
    pointer-events: auto;
    text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    }

    button {
    background: rgba(0, 0, 0, 0.2);
    border: 0px;
    font-size: 16px;
    padding: 12px 30px;
    border-radius: 14px;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.1);
    max-width: 280px;
    backdrop-filter: blur(20px);
    font-weight: 600;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
    transition: 1s;
    cursor: pointer;
    pointer-events: auto;

    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;

        :hover {
            border: 1px solid rgba(255, 255, 255, 0.8);
            transform: translateY(-3px);
        }
    }

    h1,
    p,
        button {
        margin: 0 30px 0 100px;

        @media (max-width: 1024px) {
            margin: 0 30px;
        }
    }
`;

const Menu = styled.ul`
    display: flex;
    justify-content: flex-end;
    gap: 30px;
    align-items: center;
    margin: 0 30px 0 100px;
    padding: 0;
    pointer-events: auto;

    @media (max-width: 1024px) {
    margin: 0 30px;
    }

    li {
    list-style: none;
    margin: 0;

        a {
            text-decoration: none;
            color: white;
            padding: 8px 20px;
            border-radius: 14px;
            border: 1px solid rgba(255, 255, 255, 0);
            transition: 1s;

            :hover {
            border: 1px solid rgba(255, 255, 255, 0.2);
            }
        }
    }

    button {
    margin: 0;
    width: auto;
    background: rgba(255, 79, 79, 1);
    border: 1px solid rgba(255, 255, 255, 0.4);
    }
        @media (max-width: 800px) {
        justify-content: space-between;
        li:nth-child(2),
        li:nth-child(3),
        li:nth-child(4),
            li:nth-child(5) {
                display: none;
            }
        }
    
    .logo {
        margin-right: auto;
    }
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    a {
        text-decoration: none;
    }
`;