import styled from "styled-components"
import { Icon } from "../icon/Icon"
import { animateScroll as scroll } from "react-scroll"
import { useEffect, useState } from "react"


export const GoTopBtn: React.FC = () => {
    const [showBtn, setshowBtn] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 200) {
                setshowBtn(true);
            } else {
                setshowBtn(false);
            }
        })
    }, [])

    return (
        <>
        {showBtn && (
            <StyledGoTopBtn onClick={() => {scroll.scrollToTop()}}>
                <Icon iconId={"up"} path={"./../../../public/Vector (1).svg"} width={"16"} height={"15"} viewBox={"0 0 16 15"}/>
            </StyledGoTopBtn>
        )}
        </>
    )
}


const StyledGoTopBtn = styled.button`
    background-color: rgb(55, 48, 163, 74%);
    border-radius: 50%;
    padding: 20px;
    position: fixed;
    right: 30px;
    bottom: 30px;
`