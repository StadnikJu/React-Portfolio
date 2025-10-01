import { Icon } from "../../../../components/icon/Icon"
import { S } from "./Skills_Styles";

type SkillPropsType = {
    iconId: string;
    title: string;
    text: string;
}

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
    return(
        <S.Skill>
            <S.SkillTitle>{props.title}</S.SkillTitle>
            <S.SkillText>{props.text}</S.SkillText>
            <S.SkillLink href="#">See Works<Icon path={"/iconst-sprite.svg"} iconId={props.iconId} width={"16"} height={"16"} viewBox={"0 0 16 16"}/></S.SkillLink>
        </S.Skill>
    )
}
