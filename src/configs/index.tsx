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
 * 多选list的配置
 */
export interface MultipleSelectListConfig {
    label: string;
    selected: boolean;
}
