import photo from '../../../assets/Imges/IMG_7215.jpg'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Container } from '../../../components/Container'
import { Button } from '../../../components/Button'
import { S } from './Main_Styles'
// import Typewriter from 'typewriter-effect';
// import Tilt from 'react-parallax-tilt';

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={'center'} justify={"space-around"} wrap={"wrap"}>
                    <S.TextBlock>
                        <S.Name><span></span>Yuliia Stadnyk</S.Name>
                        <S.MainTitle>Creative thinker Minimalism lover</S.MainTitle>
                        <S.MainTitle>
                            <p>Creative thinker Minimalism lover</p>
                            {/* <Typewriter
                                options={{
                                    strings: ['Creative thinker Minimalism lover'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 150
                                }}
                            /> */}
                        </S.MainTitle>
                        <S.MainDescription>Hi, I’m Yuliia. I’m Begginer Developer. If you are looking for Developer to build your brands and grow your business Let’s shake hands with me.</S.MainDescription>
                        <FlexWrapper gap={'20px'}>
                            <Button>Hire me</Button>
                            <Button>Read more</Button>
                        </FlexWrapper>
                        <S.SmallText>I am currently open for part-time work.</S.SmallText>
                    </S.TextBlock>
                            {/* <Tilt> </Tilt> */}
                            <S.Photo src={photo} alt=""></S.Photo>       
                </FlexWrapper>
            </Container>
        </S.Main>
    )
}
