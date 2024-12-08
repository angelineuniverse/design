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
      <div className=" flex flex-col gap-y-5">
        <Checkbox
          label="Simpan Perubahan"
          classNameLabel="font-interbold text-lg"
          description="Informasi yang anda masukan adalah sebagai berikut"
          checked={this.state.check}
          onValueChange={(v: boolean) => this.setState({ check: v })}
        />
        <Checkbox
          label="Simpan Perubahan"
          type="button"
          classNameLabel="font-interbold text-xs"
          checked={this.state.check}
          onValueChange={(v: boolean) => this.setState({ check: v })}
        />
      </div>
    );
  }
}

export default Checkboxs;
