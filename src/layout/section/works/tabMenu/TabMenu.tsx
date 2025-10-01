import { Link } from "../../../../components/Link"
import { S } from "./TabMenu_Styles"

export type TabStatusType = "all" | "landing page" | "react" | "spa";

type TabMenuPropsType = {
    showButton?: boolean;
    tabItems: Array<{title: string, status: TabStatusType }>,
    changeFilterStatus: (value: TabStatusType ) => void,
    currentFilterStatus: string
}

export const TabMenu: React.FC<TabMenuPropsType> = (props: TabMenuPropsType) => {
    return (
        <S.TabMenu>
            <ul>
                {props.tabItems.map((item,index) => {
                    return(
                        <S.ListItem key={index}><Link active={props.currentFilterStatus === item.status} onClick={() => {props.changeFilterStatus(item.status)}}>{item.title}</Link></S.ListItem>
                    )
                })}  
            </ul>
            {props.showButton ? <button>Hire me</button> : <></> }
        </S.TabMenu>
    );
};
