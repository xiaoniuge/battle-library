---
group:
  path: /MultipleSelectList
  title: MultipleSelectList
title: MultipleSelectList
---

## MultipleSelectList

```tsx
import React, { useState } from 'react';
import { MultipleSelectList } from 'battle-library';

const configsTmp = [
  {
    label: '选项一',
    selected: true,
  },
  {
    label: '选项二',
    selected: true,
  },
];

export default () => {
  const [configs, setConfigs] = useState(configsTmp);
  const selectHandler = (selected, index) => {
    let tmp = [...configs];
    tmp[index].selected = selected;
    setConfigs(tmp);
  };
  return <MultipleSelectList selectHandler={selectHandler} configs={configs} />;
};
```
