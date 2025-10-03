import { Icon } from "../../components/icon/Icon"
import { FlexWrapper } from "../../components/FlexWrapper"
import { Container } from "../../components/Container"
import { S } from "./Footer_Styles"

const socialItemsData = [
    {
        iconId: "twitter"
    },
    {
        iconId: "dribble"
    },
    {
        iconId: "facebook"
    },
    {
        iconId: "codepen"
    },
    {
        iconId: "at-sign"
    },
    {
        iconId: "instagram"
    }
]

export const Footer: React.FC = () => {
    return(
        <S.Footer>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <S.Contact>Contact</S.Contact>
                    <S.Text>I’m not currently taking on new client work but feel free to contact me for any other inquiries.</S.Text>
                    <S.SocialList>

                        {socialItemsData.map((items,index) => {
                            return  <S.SocialItem key={index}>
                                        <S.SocialLink href="#">
                                            <Icon iconId={items.iconId} width={"35"} height={"35"} viewBox={"0 0 35 35"} path={"/public/contacts-spite.svg"}/>
                                        </S.SocialLink>
                                    </S.SocialItem>
                        })}
                        
                    </S.SocialList>
                </FlexWrapper>
            </Container>
        </S.Footer>
    )
}


