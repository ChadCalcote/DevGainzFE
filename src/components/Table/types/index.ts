export interface Column {
    heading: string
}

export interface TableProps {
    columns: Column[]
}

export interface TableHeaderItemProps {
    item: Column
}