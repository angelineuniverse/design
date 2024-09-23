import { Component, ReactNode } from "react";
import { ModelDropdown } from "./model";
declare class Dropdown extends Component<ModelDropdown> {
    state: Readonly<{
        show: boolean;
    }>;
    constructor(props: ModelDropdown);
    render(): ReactNode;
}
export default Dropdown;
