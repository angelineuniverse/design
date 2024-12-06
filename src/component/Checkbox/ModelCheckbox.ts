type CheckboxType = 'default' | 'button';
export interface ModelCheckbox{
    className?: string,
    label: string,
    onChange?: (e: any) => void;
    onValueChange?: (e: boolean) => void;
    checked?: boolean;
    type?: CheckboxType;
}