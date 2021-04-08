import React, { useState } from "react"
import styled from "styled-components"
import { Button } from "./Button"
import EmailBackground from "../assets/images/board-herbs.jpg"

const EmailForm = () => {
  const [email, setEmail] = useState("")

  const handleChange = e => {
    setEmail(e.target.value)
  }

  return (
    <>
      <EmailContainer id="contact">
        <EmailContent>
          <h1>Don't miss out on anything!</h1>
          <p>Subscribe to our newsletter for regular updates.</p>
          <FormWrap
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              required
              placeholder="Enter Your Email"
            />
            <Button
              as="button"
              type="submit"
              primary="true"
              round="true"
              css={`
                  height: 48px;

                  @media screen and (max-width: 768px) {
                      width: 100%
                      min-width: 350px;
                  }
                  
                  @media screen and (max-width: 400px) {
                      width: 100%
                      min-width: 250px;
                  }
                `}
            >
              Sign Up
            </Button>
          </FormWrap>
        </EmailContent>
      </EmailContainer>
    </>
  )
}

export default EmailForm

const EmailContainer = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.25) 100%
    ),
    url(${EmailBackground}) no-repeat center;
  background-size: cover;
  width: 100%;
  height: 450px;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fefae6;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 5px solid #101110;
  border-bottom: 5px solid #101110;
`

const EmailContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 5vw, 3rem);
    padding: 0 1rem;
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
  }

  p {
    text-align: center;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    padding: 0 1rem;
    margin-bottom: 2rem;
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
  }

  form {
    z-index: 10;
  }
`

const FormWrap = styled.form`
  input {
    padding: 1rem 1.5rem;
    outline: none;
    width: 350px;
    height: 48px;
    border-radius: 50px;
    border: none;
    margin-right: 1rem;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;

    input {
      margin-bottom: 1rem;
      width: 100%;
      margin-right: 0;
      text-align: center;
    }
  }
`
