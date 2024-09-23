import { Component, ReactNode } from "react";
import { ModelSelectSearch } from "./ModelSelectSearch";
declare class SelectSearch extends Component<ModelSelectSearch> {
    state: Readonly<{
        open: boolean;
        placeholder: string;
    }>;
    constructor(props: ModelSelectSearch);
    render(): ReactNode;
}
export default SelectSearch;
