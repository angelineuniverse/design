import { Component, ReactNode } from "react";
import { ModelPagination } from "./model";
declare class Pagination extends Component<ModelPagination> {
    state: Readonly<{
        paginate: Array<any>;
    }>;
    constructor(props: any);
    componentDidUpdate(prevProps: ModelPagination): void;
    classpaginatePage(index: number, currentPage: number): "bg-blue-600 text-white border-blue-300" | "border-gray-300";
    render(): ReactNode;
}
export default Pagination;
