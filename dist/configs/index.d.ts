import React from 'react';
/**
 * 高级搜索表单的配置
 */
export interface AdvancedSearchFormConfig {
    visible: boolean;
    name: string;
    label: string;
    component: React.ReactNode;
}
/**
 * 高级表单的配置
 */
export interface AdvancedFormConfig {
    name: string;
    label: string;
    type: string;
    rules: Array<Object>;
    component: React.ReactNode;
}
/**
 * 多选list的配置
 */
export interface MultipleSelectListConfig {
    label: string;
    field: string;
    selected: boolean;
}
/**
 * menu config
 */
export interface MenuOptionConfig {
    name: string;
    path: string;
    icon: string;
    children: MenuOptionConfig[];
}
