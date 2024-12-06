import React, { Component, ReactNode } from "react";
import Tab from "../../../components/Tab";
import TabItem from "../../../components/TabItem";
class TabComponent extends Component {
  state: Readonly<{
    testing: string;
    testing2: string;
  }>;
  constructor(props: any) {
    super(props);
    this.state = {
      testing: "testing",
      testing2: "testing2",
    };
  }
  render(): ReactNode {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              testing: "diganti parent",
            });
          }}
        >
          click
        </button>
        <Tab width="full" tabDirection="horizontal" valueSelected={"nomor1"}>
          <TabItem
            key={"nomor1"}
            value={"nomor1"}
            label="Nomor 1"
            onTabSelected={(item) => {
              console.log(item, "item nomor 1 ");
            }}
          >
            <button
              onClick={() => {
                this.setState({
                  testing: "diganti",
                });
              }}
            >
              klick
            </button>
            <p>{this.state.testing}</p>
          </TabItem>
          <TabItem key={"nomor2"} value={"nomor2"} label="Nomor 1">
            <button
              onClick={() => {
                this.setState({
                  testing2: "diganti 2",
                });
              }}
            >
              klick
            </button>
            <p>{this.state.testing2}</p>
          </TabItem>
        </Tab>
      </div>
    );
  }
}

export default TabComponent;
