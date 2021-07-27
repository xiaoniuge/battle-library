---
group:
    path: /AdvancedForm
    title: 高级表单
title: 高级表单
---

## AdvancedForm

```tsx
import React from 'react';
import { Input, Select } from 'antd';
import { AdvancedForm } from 'battle-library';

const configs = [
    {
        name: 'input',
        label: 'input',
        component: <Input />,
    },
    {
        name: 'select',
        label: 'select',
        component: <Select />,
    },
    {
        name: 'input3',
        label: 'input3',
        component: <Input />,
    },
    {
        name: 'input4',
        label: 'input4',
        component: <Input />,
    },
    {
        name: 'input5',
        label: 'input5',
        component: <Input />,
    },
];

export default () => <AdvancedForm configs={configs} rowCols={2} />;
```
