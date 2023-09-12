import {TThemeVariants} from "./types";

export enum Subscription{
    Subscribed,
    NotSubscribed,
    Other
}
export const ThemeTypes: Record<TThemeVariants, TThemeVariants> = {
    dark: "dark",
    light: "light"
}
