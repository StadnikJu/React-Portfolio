import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Contacts = styled.section`
    background-color: white !important; 
    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
`

const Form = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    padding: 20px;
    margin: 0 auto;


    textarea {
        resize: none;
        height: 155px;
    }
`

const Field = styled.input`
    width: 100%; 
    border: 1px solid ${theme.colors.font};
    border-radius: 7px;
    padding: 15px 20px;

    font-size: 16px;
    color: ${theme.colors.Fontfirst};
    font-weight: 400;
    letter-spacing: 0.05em;

    &::placeholder {
        color: ${theme.colors.font};
    }

    &:focus-visible {
        outline: 1px solid ${theme.colors.font};
    }
` 


export const S = {
    Contacts,
    Form,
    Field
}