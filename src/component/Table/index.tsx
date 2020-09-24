import React from 'react';
import { Table as AntdTable, ConfigProvider, Empty } from 'antd';
import { TableProps as AntdTableProps } from 'antd/es/table';

export interface ITableProps<RecordType> extends AntdTableProps<RecordType> {}

export interface ITable<T> extends React.FC<ITableProps<T>> {
    Summary: any;
}

const Table: ITable<any> = ({ ...props }) => {
    return (
        <ConfigProvider renderEmpty={() => <Empty description="暂无数据" />}>
            <AntdTable bordered {...props} />
        </ConfigProvider>
    );
};

Table.Summary = AntdTable.Summary;

export default Table;
