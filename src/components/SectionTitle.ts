import styled from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";

type SectionTitlePropsType = {
    fontWeight?: number;
}

export const SectionTitle= styled.h2<SectionTitlePropsType> `
    font-weight: ${(props) => props.fontWeight || 600};
    font-family: "Inter", sans-serif;
    max-width: 1039px;
    font-size: 48px;
    ${font({weight: 600, Fmax: 48, Fmin: 24})};
    text-align: center;
    color: ${theme.colors.Fontfirst};
    margin: 0 auto;
    margin-bottom: 120px;
    
    span {
        color: ${theme.colors.accent};
    }

    @media ${theme.media.tablet} {
        margin-bottom: 60px;
    }
`
    
 