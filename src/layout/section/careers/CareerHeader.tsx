import { S } from "./Career_Styles"


export const CareerHeader: React.FC = () => {
    return (
        <thead>
            <S.HeaderTr>
                <S.HeaderTh>COMPANY</S.HeaderTh>
                <S.HeaderTh>POSITION</S.HeaderTh>
                <S.HeaderTh>YEAR</S.HeaderTh>
            </S.HeaderTr>
        </thead>
    )
}

