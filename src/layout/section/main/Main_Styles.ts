import styled from "styled-components"
import { theme } from "../../../styles/Theme"
import { font } from "../../../styles/Common"

const Main = styled.section`
    //min-height: 100vh;
`

const TextBlock = styled.div`
    text-align: left;
    max-width: 620px;
`

const Name = styled.span`
    ${font({weight: 500, Fmax: 20, Fmin: 18})};
    color: ${theme.colors.accent};
    position: relative;
    z-index: 0;

    span {
        margin-left: 112px;
        &::before{
            content: "";
            display: inline-block;
            width: 102px;
            height: 1px;
            background-color: ${theme.colors.accent};
            position: absolute;
            left: 0;
            top: 50%;
            z-index: 1;
        }
    }
`

const MainTitle = styled.h1`
    ${font({weight: 700, Fmax: 64, Fmin: 36})};
    color: ${theme.colors.Fontfirst};
    max-width: 600px;
    margin-top: 40px;
    text-align: left;

    /* p {
        display: none;
    } */
`
const MainDescription = styled.p`
    ${font({weight: 400, Fmax: 18, Fmin: 16})};
    color: ${theme.colors.font};
    max-width: 550px;
    margin-top: 40px;
    text-align: left;
`

const SmallText = styled.span`
    font-weight: 400;
    font-size: 12px;
    color: ${theme.colors.font};
    margin-top: 40px;
    display: block;
    position: relative;
    z-index: 0;

    &::before{
        content: "";
        display: inline-block;
        width: 100%;
        max-width: 620px;
        height: 1px;
        background-color: ${theme.colors.font};
        opacity: 0.3; 
        position: absolute; 
        left: 0;
        top: -100%;
        z-index: 1;
    }
`

const Photo = styled.img`
    width: 450px;
    height: 500px;
    border-radius: 6px;
    object-fit: cover;
    filter: contrast(0.85);
    margin-top: 15px;

    @media ${theme.media.mobile} {
        width: 320px;
        height: 400px;
        margin-top: 15px;
    }
`


export const S = {
    Main,
    TextBlock,
    Name,
    MainTitle,
    MainDescription,
    SmallText,
    Photo
}