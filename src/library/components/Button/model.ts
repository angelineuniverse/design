import React from "react";

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonType = 'button' | 'submit';
type ButtonSize = 'xs' | 'sm' | 'lg' | 'xl';
type ButtonWidth = 'wrap' | 'block';
export interface Model{
    label: string;
    width?: ButtonWidth;
    type?: ButtonType;
    size?: ButtonSize;
    variant?: ButtonVariant;
    isLoading?: boolean;
    prefix?: React.ReactNode;
    anotherClass?: string,
    props?: React.ButtonHTMLAttributes<HTMLButtonElement>
}