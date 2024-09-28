export interface ModelForm{
    className?: string;
    classNameLoading?: string;
    form: Array<FormProps> | undefined;
    lengthLoading?: number;
    preview_file?: any;
    children?: any;
    select_option?: any;
    search_method?: (e: any) => void
}

type FormType = "password" | "number" | "text" | "textarea" | "upload" | "time" | "date" | "datetime-local" | "month" | "select" | "select-search" | "checkbox";
type CheckboxType = 'default' | 'button';
export interface FormProps {
    key?: string;
    type: FormType;
    label: string;
    isRequired: boolean;
    readonly?: boolean;
    description?: string;
    placeholder?: string;
    autosize: boolean;
    list?: ListProps;
    checkboxType?: CheckboxType;
    children_custom?: any;
    className?: string;
    classNameOption?: string;
}

interface ListProps {
    options: Array<any>,
    keyValue: string,
    keyOption: string;
}