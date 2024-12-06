export interface ModelPagination{
    currentPage: number;
    totalPage: number;
    countItem: number;
    totalItem: number;
    className?: string;
    lastPage?: React.MouseEventHandler<HTMLButtonElement>;
    firstPage?: React.MouseEventHandler<HTMLButtonElement>;
    changePage?: (event: number) => void
}

export interface ModelPaginationLink {
    className?: string,
    children: React.ReactNode,
    isActive?: boolean
}