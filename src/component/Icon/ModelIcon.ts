
type IconsType =
  | "check"
  | "copy"
  | "library"
  | "document"
  | "rocket"
  | "money"
  | "error"
  | "eye"
  | "hideEye"
  | "sort"
  | "download"
  | "chart"
  | "arrow_down"
  | "close"
  | "arrow_left"
  | "arrow_left_simple"
  | "arrow_right_simple"
  | "arrow_down_simple"
  | "arrow_prev"
  | "arrow_next"
  | "arrow_up_light"
  | "arrow_down_light"
  | "phone"
  | "marker"
  | "mail"
  | "home_simple"
  | "menu"
  | "role"
  | "database"
  | "person"
  | "arrow_down_button"
  | "arrow_up_button"
  | "emoji_happy"
  | "element"
  | "logout"
  | "setting"
  | "loading";
export interface ModelIcon {
    icon: IconsType;
    width: number;
    height: number;
    color?: string;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLOrSVGElement>;
  }