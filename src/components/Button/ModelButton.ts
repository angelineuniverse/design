import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
type ButtonTheme = "primary" | "error" | "warning" | "success" | "outline" | "outline-primary" | "outline-error" | "outline-warning" | "outline-success" | "transparent";
type ButtonSize = "extrasmall"| "small" | "medium" | "large";
type ButtonWidth = "block" | "full";

export interface ModelButton {
    title: string;
    className?: string;
    theme: ButtonTheme;
    size: ButtonSize;
    width: ButtonWidth;
    isLoading?: boolean;
    isDisable?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    props?: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
}

/**
 * PROPS TAMBAHAN YANG BELUM DI SETUP
 * ? iconDirection
 * ? iconProps
 * ? prefix
 */