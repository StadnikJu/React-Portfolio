import { FlexWrapper } from "../../../components/FlexWrapper"
import { Icon } from "../../../components/icon/Icon"
import { S } from "./Testimon_Styles";


type TestimonPropsType = {
    iconId: string;
    title: string;
    text: string;
}


export const Testimon: React.FC<TestimonPropsType> = (props: TestimonPropsType) => {
    return (
        <FlexWrapper direction="column" align={"center"} width={"360px"}>
            <Icon iconId={props.iconId} path={"/public/skills-spite.svg"} viewBox={"0 0 140 140"} width={"140"} height={"140"}/>
            <S.TitleTestimony>{props.title}</S.TitleTestimony>
            <S.TextTestimony>{props.text}</S.TextTestimony>
        </FlexWrapper>
    )
}

