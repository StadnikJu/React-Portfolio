import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "./../../../components/Button";
import { Container } from "../../../components/Container";
import { S } from "./Contact_Styles";
import emailjs from '@emailjs/browser';
import { useRef } from "react";





export const Contacts: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: any) => {
    e.preventDefault();
        if(!form.current) return 

        emailjs
        .sendForm('service_vbie8bd', 'template_uzk7km3', form.current, {publicKey: 't4Sp9M5v_T6QlZ8m5',})
        .then(() => {console.log('SUCCESS!');},(error) => {console.log('FAILED...', error.text);},);
    e.target.reset()
    };

    return(
        <S.Contacts>
            <Container>
                <SectionTitle>Contact with me</SectionTitle>
                <S.Form ref={form} onSubmit={sendEmail}>
                    <S.Field required placeholder={"Name"} name={"user_name"}/>
                    <S.Field required placeholder={"Email"} name={"email"}/>
                    <S.Field required placeholder={"Subject"} name={"subject"}/>
                    <S.Field required placeholder={"Message"} as={"textarea"} name={"message"}/>
                    <Button type={"submit"}>Send</Button>
                </S.Form>
            </Container>
        </S.Contacts>
    )
}

