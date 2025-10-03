import { useEffect, useState } from "react";
import { S } from "../HeaderMenu_Styles";
import { Menu } from "../menu/Menu";

export const MobileMenu: React.FC = () => {
    const [menuIsOpen, setmenuIsOpen] = useState(false);
    const onBurgerBtnClick = () => {setmenuIsOpen( !menuIsOpen )};
    useEffect(() => {
        document.body.style.overflow = menuIsOpen ? "hidden" : "auto";
    }, [menuIsOpen])

    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={ () => {setmenuIsOpen(false)}}>
                <Menu onClick={onBurgerBtnClick}/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};

