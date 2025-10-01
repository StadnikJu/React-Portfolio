import styled from "styled-components"

const TabMenu = styled.nav`
    display: flex;

    ul {
        display: flex;
        justify-content: space-between;
        margin: 0 auto 40px;
        max-width: 350px;
        width: 100%;
        //border: 1px solid red;
    }

    button {
        border: 1px solid #3730a3;
        border-radius: 6px;
        width: 131px;
        height: 52px;
        background-color: #fff;
        margin-left: 80px;
        font-weight: 500;
        font-size: 18px;
        line-height: 156%;
        color: #3730a3;
    }

`

const ListItem = styled.li`
    position: relative;
    z-index: 0;
`

export const S = {
    TabMenu,
    ListItem
}