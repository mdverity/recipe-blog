import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { Button } from "./Button"

const Header = () => {
  const menuData = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Recipes",
      path: "/recipes",
    },
  ]

  return (
    <Nav>
      <LogoLink to="/">FOOD!</LogoLink>
      <Bars />
      <NavMenu>
        {menuData.map((menuItem, index) => (
          <NavLink to={menuItem.path} key={index}>
            {menuItem.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button primary="true" round="true" to="/recipes">
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 99;
  position: sticky;
  top: 0;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.35) 50%,
    rgba(0, 0, 0, 0.75) 90%
  );
`

const NavLink = styled(Link)`
  color: #fefae6;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: 0.1s ease-out;
  font-size: 1.25rem;

  &:hover {
    transform: scale(1.2);
    font-style: bold;
  }
`

const LogoLink = styled(NavLink)`
  padding-left: 2rem;
`

const Bars = styled(FaBars)`
  display: none;
  color: #fefae6;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -50px;
  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.75), 0px 4px 10px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 768px) {
    display: none;
  }
`
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
