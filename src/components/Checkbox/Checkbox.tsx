import clsx from "clsx";
import React, { Component } from "react";
import { ModelCheckbox } from "./ModelCheckbox";

const typeStyle = {
  default: "p-0",
  button: "border border-gray-300 px-3 py-4 rounded-md",
};
class Checkbox extends Component<ModelCheckbox> {
  render(): React.ReactNode {
    return (
      <section
        className={clsx(
          "flex justify-start flex-wrap gap-x-3 h-fit",
          typeStyle[this.props.type ?? "default"]
        )}
      >
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
        <span
          className={clsx(
            this.props.classNameDescription ?? "font-interregular text-[11px]",
            "w-full"
          )}
        >
          {this.props.description}
        </span>
      </section>
    );
  }
}

export default Checkbox;
