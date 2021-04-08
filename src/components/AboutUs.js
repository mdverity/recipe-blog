import React from "react"
import styled from "styled-components"
import AboutBackground from "../assets/images/board-large.jpg"

const AboutUs = () => {
  return (
    <AboutContainer id="about">
      <TextWrapper>
        <h1>Hi there!</h1>
        <h2 style={{ fontWeight: "300" }}>
          We're all about the <strong>best food</strong>!
        </h2>
        <BodyText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos commodi,
          velit explicabo sunt atque ad perspiciatis temporibus officiis ullam
          unde nisi, exercitationem eaque doloremque quos cumque amet voluptate
          iusto, expedita dolorum accusantium autem consectetur. Amet tempora
          numquam aspernatur eius dolor iusto voluptatum alias? Atque, excepturi
          libero natus molestias aliquam adipisci.
        </BodyText>
        <BodyText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime earum
          aliquam modi vitae molestiae, reprehenderit magnam, possimus provident
          rem accusamus perspiciatis, beatae consequatur iste laudantium! Eum
          quaerat eius, voluptatibus impedit, saepe hic odit aspernatur sint
          minus itaque quod fugit aut id nisi consequatur amet explicabo eveniet
          inventore, perferendis suscipit voluptatem molestiae. Amet minima
          animi labore tempore dolorum quasi reprehenderit velit architecto
          asperiores, blanditiis facilis rem accusantium sint nam dolor nobis
          ratione cupiditate, voluptas voluptate facere vel! Rerum dicta eaque
          provident odit harum maxime optio adipisci laboriosam? Nam,
          exercitationem, repellat architecto quisquam, aspernatur minus iusto
          aut sit ipsum necessitatibus quia libero.
        </BodyText>
        <BodyText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam illum
          rerum ad explicabo doloribus quis aliquid repudiandae mollitia quidem,
          nisi cupiditate neque quasi quibusdam accusamus doloremque voluptatem.
          Voluptate, iusto a?
        </BodyText>
      </TextWrapper>
    </AboutContainer>
  )
}

export default AboutUs

const AboutContainer = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.95) 0%,
      rgba(0, 0, 0, 0.75) 35%,
      rgba(0, 0, 0, 0.6) 75%,
      rgba(0, 0, 0, 0.25) 100%
    ),
    url(${AboutBackground}) no-repeat center;
  background-size: cover;
  width: 100%;
  height: fit-content;
  padding: 5rem calc((100vw - 1300px) / 2);
  padding-top: 10rem;
  color: #fefae6;
  border-bottom: 5px solid #101110;
  margin-top: -120px;
`
const TextWrapper = styled.div`
  margin: 2rem;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
`

const BodyText = styled.p`
  font-size: 21px;
  margin: 2rem 0;
  padding: 0 1rem;
`
