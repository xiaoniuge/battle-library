---
group:
  path: /AdvancedSearchForm
  title: AdvancedSearchForm
title: AdvancedSearchForm
---

## AdvancedSearchForm

```tsx
import React from 'react';
import { Input, Select } from 'antd';
import { AdvancedSearchForm } from 'battle-library';

const configs = [
  {
    visible: true,
    name: 'input',
    label: 'input',
    component: <Input />,
  },
  {
    visible: true,
    name: 'select',
    label: 'select',
    component: <Select />,
  },
  {
    visible: true,
    name: 'input3',
    label: 'input3',
    component: <Input />,
  },
  {
    visible: true,
    name: 'input4',
    label: 'input4',
    component: <Input />,
  },
  {
    visible: true,
    name: 'input5',
    label: 'input5',
    component: <Input />,
  },
];

export default () => <AdvancedSearchForm configs={configs} />;
```
