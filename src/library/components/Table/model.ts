export interface Model {
    tableName: string;
    column: Array<Columns>
}

interface Columns {
    key: string;
    title: string;
    sort: number;
}