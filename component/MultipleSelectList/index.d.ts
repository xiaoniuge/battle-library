import React from 'react';
import { MultipleSelectListConfig } from '../../configs';
interface IMultipleSelectListProps {
    configs?: MultipleSelectListConfig[];
    selectHandler?: any;
}
interface IMultipleSelectList extends React.FC<IMultipleSelectListProps> {}
declare const MultipleSelectList: IMultipleSelectList;
export default MultipleSelectList;
