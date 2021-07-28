import React from 'react';
import { AdvancedFormConfig } from '../../configs';
interface IAdvancedFormProps {
    configs?: AdvancedFormConfig[];
    initialValues?: any;
    rowCols?: number;
    form?: any;
    onFinish?: (values?: any) => void;
}
interface IAdvacedForm extends React.FC<IAdvancedFormProps> {}
declare const AdvancedSearchForm: IAdvacedForm;
export default AdvancedSearchForm;
