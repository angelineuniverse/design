import React from "react";
type InputSize = "small" | "medium" | "large";
export interface ModelSelectSearch {
    label: string;
    size?: InputSize;
    value?: any;
    value_label?: any;
    className?: string;
    placeholder?: string;
    isRequired?: boolean;
    readonly?: boolean;
    openChildren?: boolean;
    children?: React.ReactNode;
    search_method: (e: any) => void;
}
export {};
