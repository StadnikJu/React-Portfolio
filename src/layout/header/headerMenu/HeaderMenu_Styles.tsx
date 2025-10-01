import styled, { css } from "styled-components"
import { theme } from "../../../styles/Theme"
import { Link } from "react-scroll"


// Menu
const MenuItem = styled.li`

`

const NavLink = styled(Link)`
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    color: ${theme.colors.font};
    &:hover, &.active {
        color: ${theme.colors.Fontfirst};
        font-size: 22px;
        transition: 0.4s;
    }
`


// Mobile Menu 

const MobileMenu = styled.nav`
   
`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: #fef2f2f6;
    display: none;

    ${props => props.isOpen && css<{isOpen: boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}


    ul {
        display: flex;
        gap: 80px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 999999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.Fontfirst};
        position: absolute;
        left: 40px;
        bottom: 50px;

    ${props => props.isOpen && css<{isOpen: boolean}>`
        background-color: rgba(255, 255, 255, 0);
    `}

        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.Fontfirst};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.Fontfirst};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(45deg) translateY(0);
                width: 36px;
            `}
        }
    }
`

// Desktop Menu 

const DesktopMenu = styled.nav`
    display: flex;
    gap: 80px;

    ul {
        display: flex;
        align-items: center;
        gap: 80px;
        justify-content: center;
    }
`

export const S = {
    NavLink,
    MenuItem,
    MobileMenu,
    MobileMenuPopup,
    BurgerButton,
    DesktopMenu
}