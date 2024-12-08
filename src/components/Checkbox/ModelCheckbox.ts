type CheckboxType = 'default' | 'button';
export interface ModelCheckbox{
    classNameLabel?: string,
    classNameDescription?: string,
    label: string,
    description?: string,
    onValueChange?: (e: boolean) => void,
    onChange?: (e: any) => void,
    checked?: boolean;
    defaultchecked?: boolean;
    type?: CheckboxType;
}