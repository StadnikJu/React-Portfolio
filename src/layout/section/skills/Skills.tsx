import { FlexWrapper } from "../../../components/FlexWrapper"
import { SectionTitle } from "../../../components/SectionTitle"
import { Skill } from "./skill/Skill"
import picture from '../../../assets/Imges/image.png'
import { Container } from "../../../components/Container"
import { S } from "../../section/skills/skill/Skills_Styles"


const skillData = [
    {
        title: "Html", 
        text: "Provide our customers with optimized user-friendly experience to increase the efficiency of digital products."
    },
    {
       title: "CSS",
       text: "Mobile application development is a highlight that businesses are interested in at the moment and in the future."
    },
    {
       title: "JavaScript",
       text: "Understanding the business and their target customers, I’m the bridges to bring the brand closer to their clients."
    },
    {
       title: "React",
       text: "Help you translate your existing design or concept into CAD or to work with you to develop the ideal design. 3D Models great for modern digital art"
    },
    {
       title: "Git",
       text: "While stock photography is a great option for sourcing high-quality photos, it’s important that you choose your photos thoughtfully."
    },
    {
       title: "Github",
       text: "Create high-impact social videos with our easy video maker. Use custom video templates to find the right story for your business."
    }
]

export const Skills: React.FC = () => {
    return(
        <S.Skills id="skills">
            <Container>
                <SectionTitle>From beginning ideas to individual integrity, rich identity from the line <span>on the paper to final projects</span></SectionTitle>
                <S.FlexWrapperSkills>
                <S.Picture src={picture}></S.Picture>
                    <FlexWrapper direction={"row"} wrap={"wrap"} justify={"center"} gap={"40px"}>
                        {skillData.map((skill, index) => {
                            return <Skill iconId={"left-arrow"} title={skill.title} text={skill.text} key={index}/>
                        })}
                    </FlexWrapper>
                </S.FlexWrapperSkills>
            </Container>
        </S.Skills>
    )
}

