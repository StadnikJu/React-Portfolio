import { S } from "./Career_Styles";


type CareerPropsType = {
    titleCity: string;
    titleCompany: string;
    text: string;
    year: string;
}

export const Career: React.FC<CareerPropsType> = (props: CareerPropsType) => {
    return (
        <S.Tr>
            <S.Td><span>{props.titleCompany} </span> / {props.titleCity}</S.Td>
            <S.Td>{props.text}</S.Td>
            <S.Td>{props.year}</S.Td> 
        </S.Tr>
    )
}


