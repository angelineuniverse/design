import React from "react";

type InputSize = "small" | "medium" | "large";
type InputType = "text" | "password" | 'number' | 'textarea' | 'time' | "upload" | "date" | "datetime-local" | "month";
export interface ModelInput {
    defaultValue?: any;
    label: string;
    hideLabel?: boolean;
    placeholder?: string;
    size?: InputSize;
    type: InputType;
    accept?: string;
    filename?: string;
    preview_action?: string;
    preview?: any;
    readonly?: boolean;
    autosize?: boolean;
    className?: string;
    onValueChange?: any;
    isRequired?: boolean;
    isSuccess?: boolean;
    isError?: boolean;
    description?: string | React.ReactNode;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}