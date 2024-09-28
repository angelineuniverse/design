import React, { Component } from "react";
import { ModelCollapse } from "./ModelCollapse";
import Icon from "../Icon/Icon";
class Collapse extends Component<ModelCollapse> {
  state: Readonly<{
    open: boolean;
  }>;
  constructor(props: any) {
    super(props);
    this.state = {
      open: false,
    };
  }
  render() {
    return (
      <div className="border border-gray-300">
        <div
          aria-hidden="true"
          onClick={() =>
            this.setState((prevState: Readonly<{ open: boolean }>) => ({
              open: !prevState["open"],
            }))
          }
          className="border cursor-pointer bg-slate-100 border-gray-300 flex gap-x-3 justify-start my-auto px-3 py-2.5 text-sm font-intersemibold"
        >
          {!this.props.hideIcon && this.props.iconDirection === "left" && (
            <Icon
              icon={
                this.state.open ? "arrow_down_simple" : "arrow_right_simple"
              }
              width={20}
              height={20}
            />
          )}
          {!this.props.hideIcon && !this.props.iconDirection && (
            <Icon
              icon={
                this.state.open ? "arrow_down_simple" : "arrow_right_simple"
              }
              width={20}
              height={20}
            />
          )}
          <p>{this.props.title}</p>
          {!this.props.hideIcon && this.props.iconDirection === "right" && (
            <Icon
              icon={
                this.state.open ? "arrow_down_simple" : "arrow_right_simple"
              }
              width={20}
              height={20}
            />
          )}
        </div>
        {this.state.open && (
          <div className="px-3 py-2">{this.props.children}</div>
        )}
      </div>
    );
  }
}

export default Collapse;
