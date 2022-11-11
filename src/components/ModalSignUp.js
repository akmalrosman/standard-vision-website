import React, { useState } from "react";

import styled from "styled-components";
import nft from "../images/nft.jpg";

export default function ModalSignUp({ open, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "https://server-svision.herokuapp.com/api/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    );

    const data = await response.json();

    console.log(data);

    if (data) {
      setName("");
      setEmail("");
      setPassword("");
    }
  };

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
          <CloseButton onClick={onClose}>X</CloseButton>
          <form onSubmit={registerUser}>
            <h1>Register</h1>
            <div className="txt-field">
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <span></span>
              <label>Full Name</label>
            </div>

            <div className="txt-field">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <span></span>
              <label>Email</label>
            </div>

            <div className="txt-field">
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <span></span>
              <label>Password</label>
            </div>

            <input type="submit" value="Sign Up" />
          </form>
        </ModalRight>
      </ModalContainer>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  background-color: #000000;
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
  border-radius: 8px;
  padding: 50px;

  img {
    width: 250px;
    padding-right: 20px;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  h1 {
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(255, 79, 79, 1);
  }

  form .txt-field {
    position: relative;
    border-bottom: 2px solid #ffffff;
    margin: 30px 0;
  }

  .txt-field input {
    background: none;
    color: #ffffff;
    width: 100%;
    padding: 0 5px;
    height: 40px;
    font-size: 16px;
    border: none;
    outline: none;
  }

  .txt-field label {
    position: absolute;
    top: -10px;
    left: 5px;
    color: #adadad;
    transform: translateY(-50);
    font-size: 16px;
    pointer-events: none;
  }

  .txt-field span::before {
    content: "";
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    height: 2px;
  }

  input[type="submit"] {
    width: 100%;
    height: 5 @px;
    border: 1px solid;
    background: rgba(255, 79, 79, 1);
    border-radius: 25px;
    font-size: 18px;
    color: #e9f4fb;
    font-weight: 700;
    cursor: pointer;
    outline: none;
    padding: 10px;
  }

  input[type="submit"]:hover {
    border-color: rgba(255, 79, 79, 1);
    transition: 0.5s;
  }
`;

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
`;
