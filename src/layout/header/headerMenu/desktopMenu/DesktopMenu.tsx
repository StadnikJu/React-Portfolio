import { Button } from "../../../../components/Button";
import { Menu } from "../menu/Menu";
import { S } from "../HeaderMenu_Styles";

export type MenuPropsType = {
    menuItems: Array<string>;
}

export const DesktopMenu: React.FC = () => {
    return (
        <S.DesktopMenu>
            <Menu/>
            <Button>Hire me</Button>
        </S.DesktopMenu>
    );
};
