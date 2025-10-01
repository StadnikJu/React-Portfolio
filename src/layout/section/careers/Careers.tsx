import { SectionTitle } from "../../../components/SectionTitle"
import { Career } from "./Career"
import { CareerHeader } from "./CareerHeader"
import { Container } from "../../../components/Container"
import { S } from "./Career_Styles"

const careerData = [
    {
        titleCompany: "Massa Fames",
        titleCity: "New York",
        text: "Junior Front-End Developer",
        year: "2016"
    },
    {
        titleCompany: "Massa Fames",
        titleCity: "New York",
        text: "Junior Front-End Developer",
        year: "2016"
    },
    {
        titleCompany: "Massa Fames",
        titleCity: "New York",
        text: "Junior Front-End Developer",
        year: "2016"
    },
    {
        titleCompany: "Massa Fames",
        titleCity: "New York",
        text: "Junior Front-End Developer",
        year: "2016"
    },
    {
        titleCompany: "Massa Fames",
        titleCity: "New York",
        text: "Junior Front-End Developer",
        year: "2016"
    }
]

export const Careers: React.FC = () => {
    return(
        <S.Careers id="careers">
            <Container>
                <SectionTitle>Careers</SectionTitle>
                    <S.Table>
                        <CareerHeader/>
                        <tbody>
                            {careerData.map((career, index)=> {
                                return <Career titleCompany={career.titleCompany} titleCity={career.titleCity} text={career.text} year={career.year} key={index}></Career>
                            })}
                        </tbody>
                    </S.Table>
            </Container>
        </S.Careers>
    )
}

