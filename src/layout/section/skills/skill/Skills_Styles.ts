import styled from "styled-components"
import { theme } from "../../../../styles/Theme"


// Skills

const Skills = styled.section`
   
`
const FlexWrapperSkills = styled.div`
    display: flex;
    gap: 50px;

    > div:last-child {
        align-self: center;
    }

    @media ${theme.media.tablet} {
        flex-direction: column;
        align-items: center;
    }
`

const Picture = styled.img`
    width: 440px;
    height: 620px;
    object-fit: cover;

    @media ${theme.media.mobile} {
        width: 220px;
        height: 310px;
    }
`

// Skill

const Skill = styled.div`
    max-width: 311px;

    @media ${theme.media.tablet} {
        text-align: center;
    }
`

const SkillTitle = styled.h3`

`

const SkillText = styled.p`
    line-height: 1.4;
`

const SkillLink = styled.a`
    font-weight: 500;
    font-size: 12px;
    vertical-align: middle;
    color: ${theme.colors.accent};
    display: flex;
    align-items: center;
    gap: 5px;

    @media ${theme.media.tablet} {
        justify-content: center;
    }
`

export const S = {
    Skills,
    FlexWrapperSkills,
    Picture,
    Skill,
    SkillTitle,
    SkillText,
    SkillLink
}