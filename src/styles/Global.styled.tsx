import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyled = createGlobalStyle`
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

   body{
    margin: 0;
    font-family: "Montserrat", 'Segoe UI', 'Roboto', 'Oxygen' ,
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.2;
    min-width: 360px;
   }

   a {
    text-decoration: none;
    cursor: pointer;
   }

   ul {
    list-style: none;
   }

   button {
    background-color: unset;
    border: none;
    cursor: pointer;
   }

   section {
    padding: 150px 0;
   }

   section:nth-of-type(odd) {
    background-color: ${theme.colors.secondary};
   }

   section:nth-of-type(even) {
    background-color: ${theme.colors.primary};
   }

   h3 {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 18px;
    color: ${theme.colors.Fontfirst};
   }

   p {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.4;
    color: ${theme.colors.font};
    margin: 20px 0;
   }
`