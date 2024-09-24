import React, { Component, ReactNode } from "react";
import { ModelButton } from "./ModelButton";
import { clsx } from "clsx";

const theme = {
  primary:
    "bg-primary hover:bg-primary-dark text-white border border-primary-border",
  success:
    "bg-success hover:bg-success-dark text-white border border-success-dark",
  error: "bg-error hover:bg-error-dark text-white border border-error-border",
  warning:
    "bg-warning hover:bg-warning-dark text-black border border-warning-border",
  outline: "bg-white hover:bg-white text-black border border-gray-500",
  "outline-primary": "bg-white text-primary border border-primary-border",
  "outline-error": "bg-white text-error border border-error-border",
  "outline-warning": "bg-white text-warning-dark border border-warning-dark",
  "outline-success": "bg-white text-success-dark border border-success-dark",
  transparent: "bg-white text-black",
};

const sizeButton = {
  extrasmall: "text-[10.5px] px-3 py-[5px] rounded-[5px]",
  small: "text-[12px] px-[14px] pt-[7px] pb-[8px] rounded-[6px]",
  medium: "text-sm px-4 pt-2 pb-2.5 rounded-[7px]",
  large: "text-[17px] px-4 pt-[7px] pb-[9px] rounded-[7px]",
};

const widthButton = {
  block: "w-fit",
  full: "w-full",
};

const disabled = "cursor-not-allowed bg-gray-300 border-none hover:bg-gray-300";

class Button extends Component<ModelButton> {
  render(): ReactNode {
    return (
      <div className={this.props.className}>
        <button
          onClick={this.props.onClick}
          className={clsx(
            "font-intermedium",
            "flex justify-center items-center",
            this.props.isDisable === false ? disabled : "",
            widthButton[this.props.width],
            sizeButton[this.props.size],
            theme[this.props.theme]
          )}
          {...this.props.props}
        >
          {this.props.isLoading && (
            <svg
              className="animate-spin mr-2.5 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-50"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="1"
              ></circle>
              <path
                className="opacity-80"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          )}
          {this.props.title}
        </button>
      </div>
    );
  }
}

export default Button;
