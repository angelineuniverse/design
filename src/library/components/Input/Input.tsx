import clsx from "clsx";
import { Model } from "./model";
import React from "react";
import Icon from "../Icon";
const Input: React.FC<Model> = (model: Model) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const InputSize = {
    xs: "text-xs px-2.5 py-2",
    sm: "text-sm p-3",
    lg: "text-lg px-3 py-2",
  };
  const IconSize = {
    xs: 15,
    sm: 18,
    lg: 21,
  };
  const InputWidth = {
    block: "w-full",
    wrap: "w-2/6",
  };
  return (
    <div
      className={clsx(
        model.labelPosition === "horizontal"
          ? "flex items-center gap-x-12"
          : "",
        "gap-y-2",
        InputWidth[model.width!],
        "relative"
      )}
    >
      {model.label && (
        <div
          className={clsx(
            model.labelPosition === "horizontal" ? "my-auto" : "",
            "text-xs",
            "mb-1 font-bold",
            model.isError ? "text-red-600" : "text-gray-600"
          )}
        >
          <span>{model.label}</span>
          {model.isRequired && (
            <span className=" text-red-600 font-bold ml-1">*</span>
          )}
        </div>
      )}
      {model.type === "password" && (
        <div className="absolute inset-y-0 right-0 flex items-center pe-3 top-1 bottom-0 cursor-pointer">
          {showPassword && (
            <Icon
              icon="eye"
              width={IconSize[model.size]}
              height={IconSize[model.size]}
              props={{
                onClick: () => setShowPassword(!showPassword),
              }}
            />
          )}
          {showPassword === false && (
            <Icon
              icon="hideEye"
              width={IconSize[model.size]}
              height={IconSize[model.size]}
              props={{
                onClick: () => setShowPassword(!showPassword),
              }}
            />
          )}
        </div>
      )}
      <input
        defaultValue={model.value}
        className={clsx(
          "rounded-md block",
          "p-2.5 w-full",
          "focus:outline-none",
          "focus:ring-1",
          "bg-gray-50 border border-gray-300 text-gray-900",
          model.type === "password" ? "pr-10" : "",
          model.isError
            ? "ring-1 ring-red-500 border-red-500"
            : "focus:ring-blue-500 focus:border-blue-50 dark:focus:ring-blue-500 dark:focus:border-blue-500",
          InputSize[model.size]
        )}
        onChange={model.onChange}
        onInput={(event) =>
          model.onValueChange
            ? model.onValueChange(event.currentTarget.value)
            : null
        }
        type={
          model.type === "password"
            ? showPassword
              ? "text"
              : "password"
            : model.type
        }
        placeholder={model.placeholder}
        maxLength={model.max}
      />
      {model.isError && (
        <div className="mt-1 inline-flex justify-start gap-x-1 text-red-600 text-xxs items-center">
          <Icon
            icon="error"
            width={13}
            height={13}
            props={{
              className: "my-auto",
            }}
          />
          <span className="my-auto font-semibold">
            {model.isErrorDescription}
          </span>
        </div>
      )}
      {model.description && (
        <p className=" w-full mt-0.5 text-xxs text-gray-400">
          {model.description}
        </p>
      )}
    </div>
  );
};

export default Input;
