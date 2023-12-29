export type IconType = 'check' | 'copy' | 'error' | 'eye' | 'hideEye' | 'download' | 'loading';
export interface Model {
    icon: IconType,
    width: number,
    height: number,
    color?: string,
    props?: React.HTMLAttributes<HTMLOrSVGElement>
}