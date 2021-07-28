import React from 'react';
import { AdvancedSearchFormConfig } from '../../configs';
interface IAdvancedSearchFormProps {
    configs?: AdvancedSearchFormConfig[];
    initialValues?: any;
    onFinish?: (values?: any) => void;
    onReset: () => void;
}
interface IAdvacedSearchForm extends React.FC<IAdvancedSearchFormProps> {}
declare const AdvancedSearchForm: IAdvacedSearchForm;
export default AdvancedSearchForm;
