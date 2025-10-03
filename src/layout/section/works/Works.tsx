import { SectionTitle } from "../../../components/SectionTitle"
import { TabMenu, type TabStatusType } from "./tabMenu/TabMenu"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Work } from "./Work"
import socialImg from '../../../assets/Imges/image12.png'
import timerImg from '../../../assets/Imges/image14.png'
import { Container } from "../../../components/Container"
import { S } from "./Works_Styles"
import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"

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
        type: "spa",
        id: 1
    },
    {
        title: "Timer",
        src: timerImg,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni officiis ducimus laboriosam fugiat alias corrupti? Harum neque at exercitationem in! Lorem consectetur adipisicing elit. Magni officiis ducimus laboriosam fugiat alias corrupti? Harum neque at exercitationem in!",
        type: "react",
        id: 2
    },
    {
        title: "Social Network",
        src: socialImg,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni officiis ducimus laboriosam fugiat alias corrupti? Harum neque at exercitationem in! Lorem consectetur adipisicing elit. Magni officiis ducimus laboriosam fugiat alias corrupti? Harum neque at exercitationem in!",
        type: "spa",
        id: 3
    },
    {
        title: "Timer",
        src: timerImg,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni officiis ducimus laboriosam fugiat alias corrupti? Harum neque at exercitationem in! Lorem consectetur adipisicing elit. Magni officiis ducimus laboriosam fugiat alias corrupti? Harum neque at exercitationem in!",
        type: "react",
        id: 4
    },
    {
        title: "Social Network",
        src: socialImg,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni officiis ducimus laboriosam fugiat alias corrupti? Harum neque at exercitationem in! Lorem consectetur adipisicing elit. Magni officiis ducimus laboriosam fugiat alias corrupti? Harum neque at exercitationem in!",
        type: "spa",
        id: 5
    },
     {
        title: "Timer",
        src: timerImg,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni officiis ducimus laboriosam fugiat alias corrupti? Harum neque at exercitationem in! Lorem consectetur adipisicing elit. Magni officiis ducimus laboriosam fugiat alias corrupti? Harum neque at exercitationem in!",
        type: "react",
        id: 6
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
                <AnimatePresence>

                    {filteredWorks.map((work) => {
                        return(
                            <motion.div style={{width: "330px", flexGrow: 1, maxWidth: "400px"}}
                               layout
                               initial={{ x: 300, opacity: 0 }}
                               animate={{ x: 0, opacity: 1 }}
                               exit={{ x: -300, opacity: 0 }}
                               key={work.id}
                            >
                                <Work title={work.title} 
                                    key={work.id}
                                    src={work.src}
                                    text={work.text}>
                                </Work>
                            </motion.div>
                        )
                    })}
                </AnimatePresence>
                </FlexWrapper>
            </Container>
        </S.Works>
    )
}


