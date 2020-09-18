---
group:
  path: /TablePro
  title: TablePro
title: TablePro
---

## TablePro

```tsx
import React, { useState } from 'react';
import { Form, Input, Select } from 'antd';
import { TablePro } from 'battle-library';

const columnsConfig = [
  {
    title: '项目ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '项目名',
    dataIndex: 'name',
    key: 'name',
    component: <Input />,
  },
  {
    title: '所属组织',
    dataIndex: 'organizationId',
    key: 'organizationId',
    component: <Select />,
  },
  {
    title: '项目描述',
    dataIndex: 'description',
    key: 'description',
    component: <Input />,
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
  {
    title: '更新时间',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
  },
];

export default () => {
  const [drawerVisible, setDrawerVisible] = useState<any>(false);
  const [drawerFooterVisible, setDrawerFooterVisible] = useState<any>(false);
  const [drawerTitle, setDrawerTitle] = useState<any>('创建项目');
  const [form] = Form.useForm();
  return (
    <TablePro
      columns={columnsConfig}
      initialValues={{}}
      needSearch={true}
      needCreate={true}
      needRefresh={true}
      needSetting={true}
      needFullScreen={true}
      needCustomSize={true}
      drawerTitle={drawerTitle}
      drawerVisible={drawerVisible}
      drawerChildren={<span>a</span>}
      drawerFooterVisible={drawerFooterVisible}
      drawerWidth={600}
      onSearch={values => console.log(values)}
      onCreateButtonClick={() => {
        setDrawerVisible(true);
        setDrawerFooterVisible(true);
        setDrawerTitle('创建项目');
      }}
      onOk={() => {
        form.submit();
        setDrawerVisible(false);
        setDrawerTitle('创建项目');
      }}
      onClose={() => {
        setDrawerVisible(false);
        setDrawerTitle('创建项目');
      }}
      onRefresh={() => console.log('onRefresh')}
    />
  );
};
```
