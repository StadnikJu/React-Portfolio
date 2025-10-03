import styled from "styled-components"
import { font } from "../../styles/Common"
import { theme } from "../../styles/Theme"

const Footer = styled.footer`
    background-color: ${theme.colors.primary};
    padding: 110px 0;
`

const Contact = styled.h3`
    ${font({weight: 500, Fmax: 48, Fmin: 36})};
`

const Text = styled.p`
    font-weight: 400;
    font-size: 18px;
    max-width: 664px;
`

const SocialList = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    margin-top: 100px;
    
    @media ${theme.media.mobile} {
        margin-top: 50px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
`

const SocialItem = styled.li`
    &:hover {
        transform: translateY(-4px);
        transition: ${theme.animations.transition};
    }
`

const SocialLink = styled.a`
    color: ${theme.colors.font};

    &:hover {
        color: ${theme.colors.Fontfirst};
    }
`

export const S = {
    Footer,
    Contact,
    Text,
    SocialList,
    SocialItem,
    SocialLink
}