type CheckboxType = 'default' | 'button';
export interface ModelCheckbox{
    className?: string,
    label: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onValueChange?: any;
    checked?: boolean;
    type?: CheckboxType;
}