import React from "react";
type InputSize = "small" | "medium" | "large";
export interface ModelSelect {
    label: string;
    size?: InputSize;
    placeholder?: string;
    className?: string;
    isRequired?: boolean;
    onchange?: any;
    onClick?: (e: React.MouseEventHandler<HTMLOptionElement>) => void;
    keyValue: string;
    keyoption: string;
    options: Array<any>;
}
export {};
