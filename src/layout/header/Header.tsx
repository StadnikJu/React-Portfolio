
import { Logo } from '../../components/logo/Logo';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { MobileMenu } from './headerMenu/mobileMenu/MobileMenu';
import { S } from './Header_Styles';
import { DesktopMenu } from './headerMenu/desktopMenu/DesktopMenu';
import React from 'react';


export const Header: React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    const [isTransparent, setIsTransparent] = React.useState(false) 

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize );

        window.addEventListener ("scroll", () => {
            if(window.scrollY > 200) {
                setIsTransparent(true);
            } else {
                setIsTransparent(false);
            }
        })

        return() => window.removeEventListener("resize", handleWindowResize)
    }, []);


    return (
        <S.Header isTransparent = {isTransparent}>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    {width < breakpoint ? <MobileMenu/> : <DesktopMenu/>}
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};
