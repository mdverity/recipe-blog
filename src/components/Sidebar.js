import React from "react"
import styled from "styled-components"
import { FaTimes } from "react-icons/fa"
import { Link } from "gatsby"

const Sidebar = ({ isOpen, toggleOpen }) => {
  const sidebarData = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Recipes",
      path: "/recipes",
    },
  ]

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggleOpen}>
      <Icon onClick={toggleOpen}>
        <CloseIcon />
      </Icon>
      <ul>
        {sidebarData.map((sidebarItem, index) => (
          <SidebarLink to={sidebarItem.path} key={index}>
            {sidebarItem.title}
          </SidebarLink>
        ))}
      </ul>
    </SidebarContainer>
  )
}

export default Sidebar

const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 100%;
  background: #101110;
  display: grid;
  align-items: center;
  /* justify-items: center; */
  left: 0%;
  transition: 0.3s ease-in-out;
  /* opacity: "1";
  top: "0"; */
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`
const Icon = styled.div`
  background: transparent;
  position: absolute;
  cursor: pointer;
  right: 1rem;
  top: 1rem;
`

const CloseIcon = styled(FaTimes)`
  font-size: 2rem;
  color: #fff;
`

const SidebarLink = styled(Link)`
  color: #fefae6;
  display: flex;
  width: fit-content;
  padding: 5px;
  margin-inline: auto;
  text-decoration: none;
  cursor: pointer;
  transition: 0.1s ease-out;
  font-size: 24px;

  &:hover {
    transform: scale(1.2);
    font-style: bold;
  }
`
