import React, { Component } from "react";
import { ModelTabItem, sanitizeForId } from "./model";

class TabItem extends Component<ModelTabItem> {
  render(): React.ReactNode {
    return (
      <div
        role="tabpanel"
        aria-labelledby={`tab-${sanitizeForId(this.props.label)}`}
        id={`panel-${sanitizeForId(this.props.label)}`}
      >
        {this.props.children}
      </div>
    );
  }
}

export default TabItem;
