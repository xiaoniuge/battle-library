import React from 'react';
import { List, Checkbox, Space } from 'antd';
import { MultipleSelectListConfig } from '../../configs';
import Icon from '../Icon';

interface IMultipleSelectListProps {
    configs?: MultipleSelectListConfig[];
    selectHandler?: any;
}

interface IMultipleSelectList extends React.FC<IMultipleSelectListProps> {}

const MultipleSelectList: IMultipleSelectList = ({
    selectHandler,
    configs = [],
}) => {
    return (
        <List
            dataSource={configs}
            split={false}
            renderItem={(item: any, index: number) => (
                <List.Item key={index}>
                    <Space>
                        <Icon
                            type={'icon-item-prefix'}
                            style={{ fontSize: 12, color: '#595959' }}
                        />
                        <Checkbox
                            defaultChecked={true}
                            onChange={e =>
                                selectHandler(
                                    e.target.checked,
                                    index,
                                    item.field,
                                )
                            }
                            checked={configs[index].selected}
                        >
                            {item.label}
                        </Checkbox>
                    </Space>
                </List.Item>
            )}
        />
    );
};

export default MultipleSelectList;
