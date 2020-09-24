import React, { useState } from 'react';
import { Form, Col, Row, Space, Button, ConfigProvider, Empty } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { AdvancedSearchFormConfig } from '../../configs';

const rowCols: number = 4;

interface IAdvancedSearchFormProps {
    configs?: AdvancedSearchFormConfig[];
    initialValues?: any;
    onFinish?: (values?: any) => void;
}

interface IAdvacedSearchForm extends React.FC<IAdvancedSearchFormProps> {}

const AdvancedSearchForm: IAdvacedSearchForm = ({
    configs = [],
    initialValues,
    onFinish,
}) => {
    const [expand, setExpand] = useState(false);
    const [form] = Form.useForm();

    const renderFormItem = () => {
        let tmp: any[] = [];
        for (let i = 0; i < configs.length; i++) {
            let config: AdvancedSearchFormConfig = configs[i];
            if (config.visible) {
                tmp.push(configs[i]);
            }
        }
        const size: number = tmp.length;
        const length: number = expand ? size : size >= rowCols ? rowCols : size;
        const children: any[] = [];
        for (let i = 0; i < length; i++) {
            let config: AdvancedSearchFormConfig = tmp[i];
            children.push(
                <Col span={24 / rowCols} key={i}>
                    <Form.Item name={config.name} label={config.label}>
                        {config.component}
                    </Form.Item>
                </Col>,
            );
        }
        let span: number = (24 / rowCols) * (rowCols - (length % rowCols));
        if (length !== 0)
            children.push(
                <Col span={span} style={{ textAlign: 'right' }} key={length}>
                    <Space>
                        <Button type="primary" htmlType="submit">
                            查询
                        </Button>
                        <Button onClick={() => form.resetFields()}>重置</Button>
                        {tmp.length > rowCols ? (
                            <a
                                style={{ fontSize: 12 }}
                                onClick={() => setExpand(!expand)}
                            >
                                {expand ? <UpOutlined /> : <DownOutlined />}{' '}
                                {expand ? '收起' : '展开'}
                            </a>
                        ) : null}
                    </Space>
                </Col>,
            );
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
                >
                    <Row gutter={24}>{renderFormItem()}</Row>
                </Form>
            </ConfigProvider>
        </div>
    ) : null;
};

export default AdvancedSearchForm;
