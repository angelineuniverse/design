import { ModelTabItem } from "../TabItem/model";

type TabsDirection = 'horizontal' | 'vertical';
type TabsWidth = 'wrap' | 'full';
export interface ModelTabs {
    tabDirection: TabsDirection;
    width?: TabsWidth;
    className?: string;
    classNameTab?: string;
    classNameTabTitle?: string;
    valueSelected: string | number;
    children?: Array<React.ReactElement<ModelTabItem>> | React.ReactElement<ModelTabItem>;
}