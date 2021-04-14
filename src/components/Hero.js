import React from "react"
import styled from "styled-components"
import { Button } from "./Button"
import bgVideo from "../assets/videos/serve-food.mp4"
import { FaArrowAltCircleDown } from "react-icons/fa"

const Hero = () => {
  return (
    <div>
      <HeroContainer>
        <HeroBackground>
          <Video src={bgVideo} type="video/mp4" autoPlay muted playsInLine />
        </HeroBackground>
        <HeroContent>
          <HeroItems>
            <HeroH1>
              Simply the <strong>best</strong> recipes.
            </HeroH1>
            <HeroButton smooth={true} to="recipes">
              <h4
                style={{
                  fontWeight: "400",
                  fontSize: "24px",
                  margin: "0",
                  padding: "10px 20px",
                }}
              >
                Read More
              </h4>
              <FaArrowAltCircleDown size="24px" />
            </HeroButton>
          </HeroItems>
        </HeroContent>
      </HeroContainer>
    </div>
  )
}

export default Hero

const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 102vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -120px;
  color: #fefae6;

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    /* background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%); */
  }
`

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
`

const Video = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`

const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #fefae6;
  line-height: 1.1;
  font-weight: bold;
`

const HeroH1 = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  font-weight: 400;
  margin-bottom: 1.5rem;
  letter-spacing: 2px;
  word-spacing: 1px;
  /* font-weight: bold; */
  padding: 0 1rem;
  margin-left: 0.5rem;
  text-shadow: 0 2px 6px #121111;
`

const HeroButton = styled(Button)`
  margin-top: 2rem;
  font-size: clamp(1.2rem, 2vw, 2rem);
`
