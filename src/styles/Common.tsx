import { theme } from "./Theme"

type FontPropsType = {
    family?: string,
    weight?: number,
    color?: string,
    lineHight?: number,
    Fmin?: number,
    Fmax?: number
}

export const font = ({family, weight, color, lineHight, Fmin, Fmax}: FontPropsType) => `
    font-family: ${family || "Montserrat"};
    font-weight: ${weight || 600};
    color: ${color || theme.colors.Fontfirst};
    line-hight: ${lineHight || 1.2};
    font-size: clamp(${Fmin}px, calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px), ${Fmax}px);
`