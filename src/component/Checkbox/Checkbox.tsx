import clsx from "clsx";
import React, { Component } from "react";
import { ModelCheckbox } from "./ModelCheckbox";

class Checkbox extends Component<ModelCheckbox> {
  render(): React.ReactNode {
    return (
      <div>
        {this.props.type !== "button" && (
          <div className="w-fit">
            <div className={clsx("flex justify-start gap-x-3 h-fit w-fit")}>
              <input
                id="checkbox"
                type="checkbox"
                checked={this.props.checked}
                defaultChecked={this.props.defaultchecked}
                className={clsx(
                  "peer relative w-4 h-4 border rounded-sm focus:outline-none",
                  "checked:bg-blue-500 my-auto accent-blue-700",
                  "after:content-[''] after:w-full after:h-full after:absolute"
                )}
                onChange={(event: any) => {
                  if (this.props.onValueChange)
                    this.props.onValueChange(event.target.checked);
                  if (this.props.onChange) this.props.onChange(event);
                }}
              />
              <label
                className={clsx(
                  this.props.classNameLabel ?? "font-interregular text-xs"
                )}
              >
                {this.props.label}
              </label>
            </div>
            {this.props.description && (
              <p
                className={clsx(
                  this.props.classNameDescription ??
                    "font-interregular text-[11px]",
                  "w-full"
                )}
              >
                {this.props.description}
              </p>
            )}
          </div>
        )}
        {this.props.type === "button" && (
          <div
            className={clsx(
              "h-fit w-fit flex-col flex border cursor-pointer px-3 py-1.5 rounded-md",
              this.props.checked ? "border-primary" : "border-gray-300"
            )}
            aria-hidden={true}
            onClick={(event: React.MouseEvent<any, MouseEvent>) => {
              if (this.props.onValueChange)
                this.props.onValueChange(!this.props.checked);
              if (this.props.onChange) this.props.onChange(event);
            }}
          >
            <span
              className={clsx(
                this.props.classNameLabel ?? "font-interregular text-xs",
                "cursor-pointer",
                this.props.checked ? "text-primary" : ""
              )}
            >
              {this.props.label}
            </span>
            {this.props.description && (
              <span
                className={clsx(
                  this.props.classNameDescription ??
                    "font-interregular text-[11px]",
                  "w-fit cursor-pointer",
                  this.props.checked ? "text-primary" : ""
                )}
              >
                {this.props.description}
              </span>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Checkbox;
