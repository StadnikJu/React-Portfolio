import styled, { css } from "styled-components"
import { theme } from "../styles/Theme"


export const Link = styled.a<{active?: boolean}>`
    font-weight: 500;
    font-size: 18px;
    color: ${theme.colors.font};
    text-decoration: none;
    padding: 10px;
    position: relative;
    z-index: 0;

    &:hover {
        color: ${theme.colors.Fontfirst};
        &::before{
            height: 10px;
        }
    }

    &::before {
        content: "";
        display: inline-block;
        background-color: ${theme.colors.accent};
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        z-index: 1;
        height: 0;
        transition: ${theme.animations.transition};

        ${props => props.active && css<{active?: boolean}> `
            height: 10px;
        `}
    }
`