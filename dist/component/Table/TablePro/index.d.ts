import React from 'react';
import { TableProps as AntdTableProps } from 'antd/es/table';
/**
 * 高级表格的属性
 */
interface ITableProProps<RecordType> extends AntdTableProps<RecordType> {
    needSearch?: boolean;
    needRefresh?: boolean;
    needSetting?: boolean;
    needFullScreen?: boolean;
    needCustomSize?: boolean;
    drawerTitle?: string;
    drawerChildren?: React.ReactNode;
    drawerWidth?: number;
    drawerVisible?: boolean;
    drawerFooterVisible?: boolean;
    modalTitle?: string;
    modalVisible?: boolean;
    modalWidth?: number;
    modalOkProps?: any;
    modalCancelProps?: any;
    modalChildren?: React.ReactNode;
    initialValues?: any;
    onDrawerOk?: () => void;
    onDrawerClose?: () => void;
    onModalOk?: () => void;
    onModalClose?: () => void;
    onRefresh?: () => void;
    onSearch?: () => void;
    onReset: () => void;
    actions: React.ReactNode;
}
/**
 * 高级表格
 */
interface ITablePro<T> extends React.FC<ITableProProps<T>> {}
/**
 * 具体实现
 * @param param0
 */
declare const TablePro: ITablePro<any>;
export default TablePro;
