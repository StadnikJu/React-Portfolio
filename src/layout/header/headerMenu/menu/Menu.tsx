import { S } from './../HeaderMenu_Styles';

const menuItems = [
    {
        title: "Skills",
        href: "skills"
    },
    {
        title: "Works",
        href: "works"
    },
    {
        title: "Careers",
        href: "careers"
    }
];


export const Menu: React.FC = () => {
    return(
        <ul>
            {menuItems.map((item,index) => {
                return(
                    <S.MenuItem key={index}>
                        <S.NavLink to={item.href} smooth={true} activeClass="active" spy={true}>{item.title}</S.NavLink>
                    </S.MenuItem>
                )
            })}  
        </ul>
    )
}
