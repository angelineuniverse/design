type CheckboxType = 'default' | 'button';
export interface ModelCheckbox{
    className?: string,
    label: string,
    onValueChange?: any;
    value?: any;
    type?: CheckboxType;
}