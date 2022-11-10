import React, { useState } from "react";

import styled from "styled-components";

export default function SignUp() {
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
      setName('')
      setEmail('')
      setPassword('')
    }
    
  };

  return (
    <Main>
      <h1>Register</h1>
      <form onSubmit={registerUser}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="inputname"
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="inputemail"
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="inputpassword"
        />
        <br />
        <input type="submit" value="Sign Up" className="buttonsubmit" />
      </form>
    </Main>
  );
}

const Main = styled.div`

  .buttonsubmit {
    width: 80%;
    margin: .5rem;
    padding: 16px 0;
    color: #ffffff;
    border: 1px solid #ffffff;
    background-color: rgba(255, 79, 79, 1);
    cursor: pointer;
    border-radius: 5px;
    margin-top: 20px;
    font-weight: 600;
    font-size: 15px;
  }

  .buttonsubmit:hover {
    background-color: #ffffff;
    color: #000000;
  }

`