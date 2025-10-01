import styled from "styled-components"
import { theme } from "../../../styles/Theme"
import { font } from "../../../styles/Common"


// Careers
const Careers = styled.section`

`

const Table = styled.table`
    width: 100%;
`

//Career

const Tr = styled.tr`
    display: flex;
    justify-content: space-between;

    @media ${theme.media.mobile} {
        gap: 15px;
    }
`

const Td = styled.td`
    padding-top: 80px;
    color: ${theme.colors.font};
    ${font({weight: 400, Fmax: 16, Fmin: 12})};
   
    span{
        color: ${theme.colors.Fontfirst};
        font-weight: 600;
        ${font({weight: 600, Fmax: 16, Fmin: 12})};
    }

    @media ${theme.media.mobile} {
        padding-top: 40px;
    }
`

// Career Header 

const HeaderTr = styled.tr`
    display: flex;
    justify-content: space-between;
`

const HeaderTh = styled.th`
    ${font({weight: 500, Fmax: 16, Fmin: 12})};
    color: ${theme.colors.font};
`


export const S = {
    Careers,
    Table,
    Tr,
    Td,
    HeaderTr,
    HeaderTh
}

