import { SectionTitle } from "../../../components/SectionTitle"
import { TabMenu, type TabStatusType } from "./tabMenu/TabMenu"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Work } from "./Work"
import socialImg from '../../../assets/Imges/image12.png'
import timerImg from '../../../assets/Imges/image14.png'
import { Container } from "../../../components/Container"
import { S } from "./Works_Styles"
import { useState } from "react"

const tabItems: Array<{title: string, status: TabStatusType}> = [
    {
        title: "All",
        status: "all"
    },
    {
        title: "Landing page",
        status: "landing page"
    },
    {
        title: "React",
        status: "react"
    },
    {
        title: "Spa",
        status: "spa"
    },
]

const worksData = [
    {
        title: "Social Network",
        src: socialImg,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni officiis ducimus laboriosam fugiat alias corrupti? Harum neque at exercitationem in! Lorem consectetur adipisicing elit. Magni officiis ducimus laboriosam fugiat alias corrupti? Harum neque at exercitationem in!",
        type: "spa"
    },
    {
        title: "Timer",
        src: timerImg,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni officiis ducimus laboriosam fugiat alias corrupti? Harum neque at exercitationem in! Lorem consectetur adipisicing elit. Magni officiis ducimus laboriosam fugiat alias corrupti? Harum neque at exercitationem in!",
        type: "react"
    },
]

export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filteredWorks = worksData

    if(currentFilterStatus === "landing page") {
        filteredWorks = worksData.filter(work => work.type === "landing page");
    }

    if(currentFilterStatus === "react") {
        filteredWorks = worksData.filter(work => work.type === "react");
    }

    if(currentFilterStatus === "spa") {
        filteredWorks = worksData.filter(work => work.type === "spa");
    }

    function changeFilterStatus(value: TabStatusType) {
        setCurrentFilterStatus(value)
    }

    return(
        <S.Works id="works">
            <Container>
                <SectionTitle fontWeight={600}>My works</SectionTitle>
                <TabMenu tabItems={tabItems} changeFilterStatus={changeFilterStatus} currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    {filteredWorks.map((work, index) => {
                        return <Work title={work.title} 
                            key={index}
                            src={work.src}
                            text={work.text}>
                        </Work>
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    )
}


