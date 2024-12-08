type CheckboxType = 'default' | 'button';
export interface ModelCheckbox{
    classNameLabel?: string,
    classNameDescription?: string,
    label: string,
    description?: string,
    onChange?: (e: any) => void;
    onValueChange?: (e: boolean) => void,
    checked?: boolean;
    defaultchecked?: boolean;
    type?: CheckboxType;
}