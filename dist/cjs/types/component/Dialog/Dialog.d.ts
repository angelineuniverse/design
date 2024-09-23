import { Component, ReactNode, RefObject } from "react";
import { ModelDialog } from "./ModelDialog";
import "./style.css";
declare class Dialog extends Component<ModelDialog> {
    modal: RefObject<HTMLDivElement>;
    constructor(props: ModelDialog);
    render(): ReactNode;
}
export default Dialog;
