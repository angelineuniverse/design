import React, { Component, ReactNode } from "react";
import Button from "../../../components/Button/Button";
class Buttons extends Component {
  render(): ReactNode {
    return (
      <div>
        <Button
          title="Simpan Perubahan"
          theme="error"
          isDisable={true}
          size="small"
          width="block"
        />
      </div>
    );
  }
}

export default Buttons;
