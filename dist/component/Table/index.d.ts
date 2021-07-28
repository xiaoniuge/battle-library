import React from 'react';
import { TableProps as AntdTableProps } from 'antd/es/table';
export interface ITableProps<RecordType> extends AntdTableProps<RecordType> {}
export interface ITable<T> extends React.FC<ITableProps<T>> {
    Summary: any;
}
declare const Table: ITable<any>;
export default Table;
