import React from "react";

type InputSize = 'xs' | 'sm' | 'lg';
type InputWidth = 'wrap' | 'block';
type InputType = 'text' | 'number' | 'password';
type InputLabelPosition = 'horizontal' | 'vertical';

export interface Model {
    value: any;
    type: InputType;
    size: InputSize;
    max?: number;
    label?: string;
    width?: InputWidth;
    isRequired?: boolean;
    isError?: boolean;
    isErrorDescription?: string;
    labelPosition?: InputLabelPosition;
    placeholder?: string,
    description?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onValueChange?: any;
    props?: React.InputHTMLAttributes<HTMLInputElement>
}