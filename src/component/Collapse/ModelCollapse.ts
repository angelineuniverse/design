type IconDirection = 'left' | 'right';
export interface ModelCollapse{
    hideIcon?: boolean;
    iconDirection?: IconDirection;
    title: string;
    children?: React.ReactNode;
}