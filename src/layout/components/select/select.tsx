import React, { Component } from "react";
import Form from "../../../components/Form";
import Button from "../../../components/Button";
import Select from "../../../components/Select";
class Selected extends Component {
  state: Readonly<{
    value: any;
    selected: undefined;
  }>;
  constructor(props: any) {
    super(props);
    this.state = {
      value: [
        {
          key: "title",
          type: "select",
          label: "Pilih Nama",
          isRequired: true,
          readonly: false,
          useClear: true,
          autosize: true,
          title: null,
          list: {
            options: [
              { id: 1, name: "Nama 1" },
              { id: 2, name: "Nama 2" },
            ],
            keyValue: "id",
            keyOption: "name",
          },
        },
        {
          key: "info",
          type: "select",
          label: "Pilih Infor",
          isRequired: true,
          readonly: false,
          useClear: true,
          autosize: true,
          info: null,
          list: {
            options: [
              { id: 1, name: "Tile 1" },
              { id: 2, name: "Tile 2" },
            ],
            keyValue: "id",
            keyOption: "name",
          },
        },
        {
          key: "desc",
          type: "select",
          label: "Pilih Desc",
          isRequired: true,
          readonly: false,
          useClear: true,
          autosize: true,
          desc: null,
          list: {
            options: [
              { id: 1, name: "Desc 1" },
              { id: 2, name: "Desc 2" },
            ],
            keyValue: "id",
            keyOption: "name",
          },
        },
      ],
      selected: undefined,
    };
  }
  testing() {
    console.log(this.state.value, this.state.selected);
  }
  onchange(value: any, key: string) {
    if (key === "title") {
      const newState = this.state.value.map((obj: any) => {
        if (obj.key === "info") {
          this.setState({
            selected: null,
          });
          return {
            ...obj,
            info: undefined,
            label: value.target.value,
          };
        }
        return obj;
      });

      this.setState({
        value: newState,
      });
    }
    return value;
  }
  render() {
    return (
      <div>
        <Form
          form={this.state.value}
          onSelect={(e, key) => this.onchange(e, key)}
        />
        <Select
          keys="title"
          options={[
            { id: 1, title: "saya" },
            { id: 2, title: "saya 2" },
          ]}
          value={this.state.selected}
          keyValue="id"
          keyOption="title"
          label="Check title"
          onSelected={(value) => {
            this.setState({
              selected: value,
            });
          }}
        />
        <Button
          title="Add"
          size="small"
          width="block"
          theme="primary"
          onClick={() => this.testing()}
        />
      </div>
    );
  }
}

export default Selected;
