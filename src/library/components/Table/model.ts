export interface Model {
    tableName: string;
    column: Array<Columns>;
    data: Array<any>;
    isCompact?: boolean;
    isBorder?: boolean;
}


type ColumnAlign = 'start' | 'center' | 'justify' | 'end';
type ColumnDataType = 'text' | 'number' | 'array' | 'action';
interface Columns {
    key: string;
    title: string;
    align?: ColumnAlign;
    datatype?: ColumnDataType;
    child?: Array<ActionChild>;
    slot?: React.ReactNode;
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