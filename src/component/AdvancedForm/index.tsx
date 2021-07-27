import React from 'react';
import { Form, Col, Row, ConfigProvider, Empty } from 'antd';
import { AdvancedFormConfig } from '../../configs';

const defaultRowCols: number = 2;

interface IAdvancedFormProps {
    configs?: AdvancedFormConfig[];
    initialValues?: any;
    rowCols?: number;
    form?: any;
    onFinish?: (values?: any) => void;
}

interface IAdvacedForm extends React.FC<IAdvancedFormProps> {}

const AdvancedSearchForm: IAdvacedForm = ({
    configs = [],
    initialValues,
    rowCols,
    form,
    onFinish,
}) => {
    let tmpRowCols: number;
    if (!rowCols) tmpRowCols = defaultRowCols;
    else tmpRowCols = rowCols;
    const normFile = (e: any) => {
        //如果是typescript, 那么参数写成 e: any
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
    const renderFormItem = () => {
        let tmp: any[] = [];
        for (let i = 0; i < configs.length; i++) {
            let config: AdvancedFormConfig = configs[i];
            tmp.push(config);
        }
        const size: number = tmp.length;
        const length: number = size;
        const children: any[] = [];
        for (let i = 0; i < length; i++) {
            let config: AdvancedFormConfig = tmp[i];
            children.push(
                <Col span={24 / tmpRowCols} key={i}>
                    {config.type === 'file' ? (
                        <Form.Item
                            name={config.name}
                            label={config.label}
                            rules={config.rules}
                            valuePropName={'fileList'}
                            getValueFromEvent={normFile}
                            noStyle
                        >
                            {config.component}
                        </Form.Item>
                    ) : (
                        <Form.Item
                            name={config.name}
                            label={config.label}
                            rules={config.rules}
                        >
                            {config.component}
                        </Form.Item>
                    )}
                </Col>,
            );
        }
        return children;
    };

    return configs.length !== 0 ? (
        <div style={{ paddingRight: 16, paddingLeft: 16 }}>
            <ConfigProvider
                renderEmpty={() => <Empty description="暂无数据" />}
            >
                <Form
                    form={form}
                    initialValues={initialValues}
                    onFinish={onFinish}
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 18 }}
                    preserve={false}
                >
                    <Row gutter={24}>{renderFormItem()}</Row>
                </Form>
            </ConfigProvider>
        </div>
    ) : null;
};

export default AdvancedSearchForm;
