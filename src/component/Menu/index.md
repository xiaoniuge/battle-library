<!-- ---
group:
    path: /Menu
    title: 菜单
title: 菜单
---

## AdvancedSearchForm

```tsx
import React , {useState,useEffect} from 'react';
import { Button } from 'antd';
import { SiderMenu } from 'battle-library';

const menuData = [
  {
    path: '/home',
    name: '首页',
    icon: 'icon-home',
    children: null,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'icon-dashboard',
    children: [
      {
        path: '/dashboard/analysis',
        name: '分析页',
        icon: 'icon-analysis',
        children: null,
      },
    ],
  },
  {
    path: '/control',
    name: '控制台',
    icon: 'icon-control',
    children: [
      {
        path: '/control/organization',
        name: '组织管理',
        icon: 'icon-organization',
        children: [
          {
            path: '/control/organization/establish',
            name: '组织架构',
            icon: 'icon-organization-structure',
          },
        ],
      },
      {
        path: '/control/project',
        name: '项目管理',
        icon: 'icon-project',
        children: null,
      },
      {
        path: '/control/application',
        name: '应用管理',
        icon: 'icon-application',
        children: null,
      },
      {
        path: '/control/store',
        name: '仓库管理',
        icon: 'icon-store',
        children: [
          {
            path: '/control/store/code',
            name: '代码库',
            icon: 'icon-code',
            children: null,
          },
        ],
      },
      {
        path: '/control/server',
        name: '服务器管理',
        icon: 'icon-server',
        children: null,
      },
    ],
  },
];

export default () => {
    const [collapsed, setCollapsed] = useState(false);
    const [currentMenuTitle, setCurrentMenuTitle] = useState();
    const [breadcrumbs, setBreadcrumbs] = useState();
    const [currentSelectedKey, setCurrentSelectedKey] = useState();

    return (
        <div style={{width: 300}}>
            <Button type="primary" onClick={() => setCollapsed(!collapsed)}>点击</Button>
            <SiderMenu 
                data={menuData} 
                collapsed={collapsed} 
                setCurrentMenuTitle={setCurrentMenuTitle}
                setBreadcrumbs={setBreadcrumbs}
                currentSelectedKey={currentSelectedKey}
                setCurrentSelectedKey={setCurrentSelectedKey}/>
        </div>
    );
};
``` -->
