import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Button = styled.button`
    border: 1px solid ${theme.colors.accent};
    border-radius: 6px;
    padding: 12px 32px;
    width: 157px;
    height: 52px;
    font-weight: 500;
    font-size: 18px;
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.accent};

    &:hover {
        transform: scale(0.9);
        transition: 1s;
        border-radius: 6px;
        padding: 12px 32px;
        background-color: ${theme.colors.accent};
        color: ${theme.colors.secondary};
        cursor: pointer;
    }
`