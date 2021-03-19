import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    html, body {
        width: 100%;
   
        @media screen and (max-width: 420px) {
            * > {
                overflow-x: none;
            }
        }
    }
    
    * {
        
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }
`
