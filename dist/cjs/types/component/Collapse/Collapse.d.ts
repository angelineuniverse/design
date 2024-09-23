import React, { Component } from "react";
import { ModelCollapse } from "./ModelCollapse";
declare class Collapse extends Component<ModelCollapse> {
    state: Readonly<{
        open: boolean;
    }>;
    constructor(props: any);
    render(): React.JSX.Element;
}
export default Collapse;
