import { Component, ReactNode } from "react";
import { ModelSelect } from "./ModelSelect";
declare class Select extends Component<ModelSelect> {
    state: Readonly<{
        open: boolean;
        placeholder: string;
    }>;
    constructor(props: ModelSelect);
    handleClickOutside: (e: any) => void;
    componentDidMount(): void;
    render(): ReactNode;
}
export default Select;
