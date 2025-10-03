import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Header = styled.header<{isTransparent: boolean}>`
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    background-color: ${props => props.isTransparent ? "rgba(254, 242, 242, 0.9)" : 'transparent'};
    transition: ${theme.animations.transition};
`

export const S = {
    Header,
}