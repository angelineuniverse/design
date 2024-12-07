type CheckboxType = 'default' | 'button';
export interface ModelCheckbox{
    className?: string,
    label: string,
    onValueChange?: (e: boolean) => void,
    onChange?: (e: any) => void,
    checked?: boolean;
    defaultchecked?: boolean;
    type?: CheckboxType;
}