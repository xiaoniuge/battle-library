import React from 'react';
import { MenuOptionConfig } from '../../configs';
interface ISiderMenuProps {
    data: MenuOptionConfig[];
    setCurrentMenuTitle: (value: string) => void;
    setBreadcrumbs: (values: string[]) => void;
    currentSelectedKey: string;
    setCurrentSelectedKey: (value: string) => void;
    collapsed: boolean;
}
interface ISiderMenu extends React.FC<ISiderMenuProps> {}
declare const SiderMenu: ISiderMenu;
export default SiderMenu;
