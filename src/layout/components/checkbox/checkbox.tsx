import React, { Component, ReactNode } from "react";
import Checkbox from "../../../components/Checkbox/Checkbox";
class Checkboxs extends Component {
  state: Readonly<{
    check: boolean;
  }>;

  constructor(props: any) {
    super(props);
    this.state = {
      check: false,
    };
    this.changes = this.changes.bind(this);
  }
  changes() {
    this.setState({
      check: false,
    });
  }
  render(): ReactNode {
    return (
      <div>
        <Checkbox
          label="Simpan Perubahan"
          checked={this.state.check}
          onValueChange={(v: boolean) => this.setState({ check: v })}
        />
      </div>
    );
  }
}

export default Checkboxs;
