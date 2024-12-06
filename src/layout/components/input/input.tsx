import React, { Component, ReactNode } from "react";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";

class Inputs extends Component {
  state: Readonly<{
    rupiah: any;
  }>;
  constructor(props: any) {
    super(props);
    this.state = {
      rupiah: 13554354,
    };
  }
  render(): ReactNode {
    return (
      <div>
        <Input
          label="Currency"
          defaultValue={this.state.rupiah}
          type="currency"
          onValueChange={(value: any) =>
            this.setState({
              rupiah: value,
            })
          }
        />
        <Button
          title="Simpan Perubahan"
          theme="error"
          onClick={() => {
            console.log(this.state.rupiah);
          }}
          size="small"
          width="block"
        />
      </div>
    );
  }
}

export default Inputs;
