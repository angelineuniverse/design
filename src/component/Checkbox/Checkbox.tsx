import clsx from "clsx";
import React, { Component } from "react";
import { ModelCheckbox } from "./ModelCheckbox";

const typeStyle = {
  default: "",
  button: "border border-gray-300 px-3 py-4 rounded-md",
};
class Checkbox extends Component<ModelCheckbox> {
  render(): React.ReactNode {
    return (
      <div
        className={clsx(
          "flex justify-start gap-x-3",
          this.props.className,
          typeStyle[this.props.type ?? "default"]
        )}
      >
        <input
          id="checkbox"
          type="checkbox"
          defaultValue={this.props.defaultValue}
          onClick={(event: any) =>
            this.props.onValueChange
              ? this.props.onValueChange(event.target.checked)
              : null
          }
          className={clsx(
            "peer relative w-4 h-4 border rounded-sm focus:outline-none",
            "checked:bg-blue-500 my-auto accent-blue-700",
            "after:content-[''] after:w-full after:h-full after:absolute"
          )}
          onChange={this.props.onChange}
        />
        <label htmlFor="checkbox" className="my-auto font-interregular text-xs">
          {this.props.label}
        </label>
      </div>
    );
  }
}

export default Checkbox;
