import React from "react";

type InputSize = "small" | "medium" | "large";
export interface ModelSelect {
    keys: any;
    value: any;
    label: string;
    size?: InputSize;
    placeholder?: string;
    className?: string;
    classNameOption?: string;
    isRequired?: boolean;
    useClear?: boolean;
    readonly?: boolean;
    description?: string | React.ReactNode;
    onChange?: (e: any) => void;
    onClear?: (e: any) => void;
    onSelected?: (value: any) => void;
    keyValue: string,
    keyOption: string,
    options: Array<any>
}