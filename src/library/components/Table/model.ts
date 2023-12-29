export interface Model {
    tableName: string;
    column: Array<Columns>;
    data: Array<any>;
    isCompact?: boolean;
    isBorder?: boolean;
    columnstyle?: string;
}


type ColumnAlign = 'start' | 'center' | 'justify' | 'end';
type ColumnDataType = 'text' | 'number' | 'array' | 'array_code' | 'action';
interface Columns {
    key: string;
    title: string;
    align?: ColumnAlign;
    width?: string;
    datatype?: ColumnDataType;
    child?: Array<ActionChild>;
    rowStyle?: string;
    className?: string;
    props?: React.TdHTMLAttributes<HTMLTableCellElement>
}

type ActionType = 'show' | 'edit' | 'delete' | 'download' | 'outline';
interface ActionChild {
    key: string;
    childclassName?: string;
    childtype?: ActionType;
    childtitle?: string;
}