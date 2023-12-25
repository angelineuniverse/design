import React from "react";
import clsx from "clsx";
import { Model } from "./model";
const Button: React.FC<Model> = (model: Model) => {
  const variantColor = {
    primary: "bg-primary-light hover:bg-primary text-white",
    secondary: "bg-secondary-light hover:bg-secondary text-white",
    outline:
      "bg-transparent hover:bg-slate-50 border border-slate-300 shadow-lg shadow-gray-200",
  };
  const buttonWidth = {
    wrap: "w-auto",
    block: "w-full",
  };
  const buttonSize = {
    xs: "text-xs px-3",
    sm: "text-sm px-3",
    lg: "text-lg px-5",
    xl: "text-xl px-5 pb-1.5",
  };
  return (
    <button
      className={clsx(
        "font-medium tracking-wide relative pt-0.5 pb-1",
        "subpixel-antialiased rounded-md cursor-pointer no-underline",
        "inline-flex justify-center items-center",
        "duration-150 transition translate -translate-y-0.5 hover:translate-y-0",
        "ring-offset-2",
        "focus-visible:ring-2 focus:scale-[0.98]",
        buttonSize[model.size!],
        variantColor[model.variant!],
        buttonWidth[model.width!],
        model.anotherClass
      )}
      {...model.props!}
      type={model.type}
    >
      {model.label}
    </button>
  );
};

export default Button;
