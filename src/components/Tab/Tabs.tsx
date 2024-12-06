import React, { Component } from "react";
import { ModelTabs } from "./model";
import clsx from "clsx";
import TabItem from "../TabItem";
import { ModelTabItem, sanitizeForId } from "../TabItem/model";

const classWidth = {
  wrap: "w-fit",
  full: "w-full",
};
const classDirection = {
  horizontal: "flex justify-start",
  vertical: "block",
};

class Tabs extends Component<ModelTabs> {
  state: Readonly<{
    selected: number;
  }>;
  constructor(props: any) {
    super(props);
    this.state = {
      selected: 0,
    };
  }
  componentDidMount(): void {
    this.setState({
      selected: this.props.valueSelected,
    });
  }

  tabs = React.Children.toArray(this.props.children).filter(
    (child): child is React.ReactElement<ModelTabItem> =>
      React.isValidElement(child) && child.type === TabItem
  );

  render(): React.ReactNode {
    return (
      <div className={clsx(this.props.className)}>
        <ul
          role="tablist"
          className={clsx(
            classWidth[this.props.width ?? "wrap"],
            classDirection[this.props.tabDirection ?? "horizontal"],
            this.props.className
          )}
        >
          {this.tabs.map((item: React.ReactElement<ModelTabItem>, index) => (
            <li
              key={`tab-${index}`}
              className={clsx(
                classWidth[this.props.width ?? "wrap"],
                this.props.classNameTab
              )}
            >
              <button
                role="tab"
                key={`tab-btn-${index}`}
                id={`tab-${sanitizeForId(item.props.label)}`}
                aria-controls={`panel-${sanitizeForId(item.props.label)}`}
                aria-selected={this.state.selected === item.props.value}
                className={clsx(
                  " font-intermedium text-sm px-4 pb-1.5 text-gray-500/80 w-full",
                  "aria-selected:text-primary-dark border-b-2 aria-selected:border-b-[3px] border-b-gray-300 aria-selected:border-primary",
                  this.props.classNameTabTitle
                )}
                onClick={() => {
                  if (item.props.onTabSelected)
                    item.props.onTabSelected({
                      value: item.props.value,
                      label: item.props.label,
                    });
                  this.setState({
                    selected: item.props.value,
                  });
                }}
              >
                {item.props.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-3">
          {React.Children.toArray(this.props.children).filter(
            (child): child is React.ReactElement<ModelTabItem> =>
              React.isValidElement(child) &&
              child.props.value === this.state.selected
          )}
        </div>
      </div>
    );
  }
}

export default Tabs;
