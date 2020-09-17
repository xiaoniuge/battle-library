import React from 'react';
import { Table as AntdTable } from 'antd';
import { TableProps as AntdTableProps } from 'antd/es/table';

export interface TableProps<RecordType> extends AntdTableProps<RecordType> {}

export interface ITable<T> extends React.FC<TableProps<T>> {
  Summary: any;
}

const Table: ITable<any> = ({ ...props }) => {
  return (
    <>
      <AntdTable bordered {...props} />
    </>
  );
};

Table.Summary = AntdTable.Summary;

export default Table;
