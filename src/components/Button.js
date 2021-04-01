import styled from "styled-components"
import { Link } from "react-scroll"

export const Button = styled(Link)`
  background: #b26231;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  font-size: 16px;
  transition: 0.3s !important;
  text-decoration: none;
  white-space: nowrap;
  min-width: 100px;
  cursor: pointer;
  outline: none;
  border: none;
  color: #fff;

  &:hover {
    /* background: ${({ primary }) => (primary ? "#FE8E3C" : "#9d4117")}; */
    /* color: #402e32; */
    transform: translateY(-2px);
    text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.75);
    filter: brightness(125%);
  }
`
