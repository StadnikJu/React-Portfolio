import styled from "styled-components"
import { theme } from "../../../styles/Theme"
import { font } from "../../../styles/Common"

// Testimony 
const Testimony = styled.section`
    width: 100%;
`

const FlexWrapperTestimon = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 80px;


    @media ${theme.media.tablet} {
        flex-direction: column;
        align-items: center;
        gap: 50px;
    }
`

const TitleTestimony = styled.h3`
    margin-top: 40px;
    ${font({weight: 600, Fmax: 30, Fmin: 10})};

    @media ${theme.media.tablet} {
        font-size: 24px;
    }
`

const TextTestimony = styled.p`
    ${font({weight: 400, Fmax: 18, Fmin: 12})};

    @media ${theme.media.tablet} {
        font-size: 18px;
    }
`


export const S = {
    Testimony,
    FlexWrapperTestimon,
    TitleTestimony,
    TextTestimony
}