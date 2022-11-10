import styled from "styled-components";

import nft from '../images/nft.jpg';

import SignUp from "./SignUp";

export default function ModalSignUp({ open, onClose }) {

  if (!open) return null;

  return (
    <Overlay>
      <ModalContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <img src={nft} alt="/" />
        <ModalRight>
          <CloseButton onClick={onClose}>
            X
          </CloseButton>
          <Content>
            <SignUp />
          </Content>
        </ModalRight>
      </ModalContainer>
    </Overlay>
  );
}

const Overlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
`

const ModalContainer = styled.div`
    max-width: 600px;
    width: 100%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    background-color: #000000;
    box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
    border-radius: 8px;

    img {
        width: 250px;
        object-fit: cover;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }
`

const ModalRight = styled.div`
    width: 100%;
`

const CloseButton = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 5px;
    right: 15px;
    padding: 5px;
    width: 20px;
    cursor: pointer;
    color: #ffffff;
    background-color: rgba(255, 79, 79, 1);
    border-radius: 20px;
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-top: 3rem;
    padding: 1rem 2rem;
    margin-top: 15px;

    .inputname {
        padding: 15px;
        border-radius: 25px;
        margin-top: 5px;
    }

    .inputemail {
        padding: 15px;
        border-radius: 25px;
        margin-top: 5px;
    }

    .inputpassword {
        padding: 15px;
        border-radius: 25px;
        margin-top: 5px;
    }
`

// const ButtonContainer = styled.div`
//     display: flex;
//     padding: 1rem 1rem;

//     button {
//         width: 100%;
//         margin: .5rem;
//         padding: 16px 0;
//         color: #ffffff;
//         border: 1px solid #ffffff;
//         background-color: rgba(255, 79, 79, 1);
//         cursor: pointer;
//         border-radius: 5px;
//     }

//     button:hover {
//         background-color: #ffffff;
//         color: #000000;
//     }

//     .bold {
//         font-weight: 600;
//         font-size: 15px;
//     }
// `