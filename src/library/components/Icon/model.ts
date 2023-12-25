type IconType = 'check' | 'copy' | 'error' | 'eye' | 'hideEye';
export interface Model {
    icon: IconType,
    width: number,
    height: number,
    color?: string,
    props?: React.HTMLAttributes<HTMLDivElement>
}