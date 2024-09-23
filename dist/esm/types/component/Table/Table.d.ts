import { Component, ReactNode } from "react";
import { ModelTable } from "./model";
declare class Table extends Component<ModelTable> {
    previewFile(event: any): void;
    render(): ReactNode;
}
export default Table;
