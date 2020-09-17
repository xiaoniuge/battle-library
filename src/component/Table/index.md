## Table

Demo:

```tsx
import React from 'react';
import { Table } from 'battle-library';

export default () => (
  <Table
    bordered
    columns={[
      { key: 'id', dataIndex: 'id', title: 'id' },
      { key: 'name', dataIndex: 'name', title: 'name' },
    ]}
  />
);
```
