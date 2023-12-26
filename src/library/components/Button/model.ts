import React from "react";
import { Model as ModelIcon } from "../Icon/model";


type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'error' | 'edit';
type ButtonType = 'button' | 'submit';
type ButtonSize = 'xxs' | 'xs' | 'sm' | 'lg' | 'xl';
type ButtonWidth = 'wrap' | 'block';
type ButtonIconDirection = 'left' | 'right';
export interface Model{
    label: string;
    width?: ButtonWidth;
    type?: ButtonType;
    size?: ButtonSize;
    variant?: ButtonVariant;
    isLoading?: boolean;
    useIcon?: boolean;
    iconProps?: ModelIcon;
    iconDirection?: ButtonIconDirection;
    prefix?: React.ReactNode;
    anotherClass?: string,
    props?: React.ButtonHTMLAttributes<HTMLButtonElement>
}