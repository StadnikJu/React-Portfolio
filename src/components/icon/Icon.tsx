type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    path: string;
}

export const Icon: React.FC<IconPropsType> = (props: IconPropsType) => {
    return(
        <svg width={props.width || "62"} height={props.height || "62"} 
        viewBox={props.viewBox || "0 0 62 62"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${props.path}#${props.iconId}`}/>
        </svg>
    );
};
