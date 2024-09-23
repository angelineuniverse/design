type IconsType = "check" | "copy" | "error" | "eye" | "hideEye" | "download" | "arrow_down" | "close" | "arrow_left" | "arrow_left_simple" | "arrow_right_simple" | "arrow_down_simple" | "arrow_prev" | "arrow_next" | "phone" | "marker" | "mail" | "home_simple" | "menu" | "database" | "person" | "loading";
export interface ModelIcon {
    icon: IconsType;
    width: number;
    height: number;
    color?: string;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLOrSVGElement>;
}
export {};
