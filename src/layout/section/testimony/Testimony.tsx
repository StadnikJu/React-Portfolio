import { Testimon } from "./Tesimon"
import { Container } from "../../../components/Container"
import { S } from "./Testimon_Styles"

const testimonyData = [
    {
        iconId: "planning",
        title: "Business planning",
        text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        iconId: "financial",
        title: "Financial planning",
        text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        iconId: "market",
        title: "Market Analytics",
        text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
]

export const Testimony: React.FC = () => {
    return(
        <S.Testimony>
                <Container>
                    <S.FlexWrapperTestimon>
                        {testimonyData.map((testimon, index)=> {
                            return <Testimon iconId={testimon.iconId} title={testimon.title} text={testimon.text} key={index}/>
                        })}
                    </S.FlexWrapperTestimon>
                </Container>
        </S.Testimony>
    )
}


