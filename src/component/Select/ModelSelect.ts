import React from "react";

type InputSize = "small" | "medium" | "large";
export interface ModelSelect {
    key?: any;
    value: any;
    label: string;
    size?: InputSize;
    placeholder?: string;
    className?: string;
    classNameOption?: string;
    isRequired?: boolean;
    useClear?: boolean;
    description?: string | React.ReactNode;
    onchange?: any;
    onClear?: any;
    onClick?: (e: React.MouseEventHandler<HTMLOptionElement>) => void;
    keyValue: string,
    keyOption: string,
    options: Array<any>
}