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
    gap: 50px;
    margin-top: 100px;
    flex-wrap: wrap;

    @media ${theme.media.mobile} {
        justify-content: center;
        margin-top: 50px;
    }
`

const SocialItem = styled.li`
    &:hover {
        transform: translateY(-4px);
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