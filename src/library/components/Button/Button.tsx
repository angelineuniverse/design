import React from "react";
import clsx from "clsx";
import { Model } from "./model";
import Icon from "../Icon";
const Button: React.FC<Model> = (model: Model) => {
  const variantColor = {
    primary: "bg-primary-light hover:bg-primary text-white",
    secondary: "bg-secondary-light hover:bg-secondary text-white",
    outline:
    "bg-transparent hover:bg-slate-50 border border-slate-300 shadow-lg shadow-gray-200",
    error: "bg-rose-500 hover:bg-rose-600 text-white",
    edit: "bg-green-light hover:bg-green text-white",
  };
  const buttonWidth = {
    wrap: "w-auto",
    block: "w-full",
  };
  const buttonSize = {
    xxs: "text-xxs px-2 py-1",
    xs: "text-xs px-3 py-1",
    sm: "text-sm px-3 py-1",
    lg: "text-lg px-5 py-1",
    xl: "text-xl px-5 py-1",
  };
  return (
    <button
      className={clsx(
        "font-medium tracking-wide relative",
        "subpixel-antialiased rounded-md cursor-pointer no-underline",
        "inline-flex justify-center items-center",
        "ring-offset-2",
        "focus-visible:ring-2 focus:scale-[0.98]",
        model.useIcon
          ? "inline-flex gap-x-1.5 items-center justify-center"
          : "block",
        buttonSize[model.size ?? "xxs"],
        variantColor[model.variant ?? "primary"],
        buttonWidth[model.width ?? "wrap"],
        model.anotherClass
      )}
      {...model.props!}
      type={model.type}
    >
      {model.isLoading && (
        <Icon
          icon={model.iconProps?.icon!}
          width={model.iconProps?.width!}
          height={model.iconProps?.height!}
          color={model.iconProps?.color}
          props={model.iconProps?.props}
        />
      )}
      {model.useIcon && model.iconDirection === "left" && (
        <Icon
          width={model.iconProps?.width!}
          height={model.iconProps?.height!}
          color={model.iconProps?.color ?? "#ffffff"}
          icon={model.iconProps?.icon!}
          props={model.iconProps?.props}
        />
      )}
      <span>{model.label}</span>
      {model.useIcon && model.iconDirection === "right" && (
        <Icon
          width={model.iconProps?.width!}
          height={model.iconProps?.height!}
          color={model.iconProps?.color ?? "#ffffff"}
          icon={model.iconProps?.icon!}
          props={model.iconProps?.props}
        />
      )}
    </button>
  );
};
// "duration-150 transition translate -translate-y-0.5 hover:translate-y-0";
export default Button;
