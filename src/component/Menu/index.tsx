// import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
// import { Menu as AntdMenu } from "antd";
// import { MenuOptionConfig } from '../../configs';
// import { Icon } from '../../component';
// const { SubMenu } = AntdMenu;

// interface ISiderMenuProps {
//   data: MenuOptionConfig[];
//   setCurrentMenuTitle: (value: string) => void;
//   setBreadcrumbs: (values: string[]) => void;
//   currentSelectedKey: string;
//   setCurrentSelectedKey: (value: string) => void;
//   collapsed: boolean;
// }

// interface ISiderMenu extends React.FC<ISiderMenuProps> { }

// const SiderMenu: ISiderMenu = ({
//   setCurrentMenuTitle,
//   setBreadcrumbs,
//   currentSelectedKey,
//   setCurrentSelectedKey,
//   collapsed,
//   data = [],
// }) => {
//   const [openKeys, setOpenKeys] = useState<string[]>([]);

//   const renderMenu = (node: MenuOptionConfig) => {
//     if (node.children) {
//       return renderSubMenu(node);
//     } else {
//       return renderMenuItem(node);
//     }
//   };
//   const renderSubMenu = (node: MenuOptionConfig) => {
//     return (
//       <SubMenu
//         key={node.path}
//         title={node.name}
//         icon={<Icon type={node.icon} style={{ color: 'white' }} />}
//         children={
//           node.children.map((subNode) => {
//             if (subNode.children) {
//               return renderSubMenu(subNode);
//             } else {
//               return renderMenuItem(subNode);
//             }
//           })
//         }
//       />
//     );
//   };
//   const renderMenuItem = (node: MenuOptionConfig) => {
//     return (
//       <AntdMenu.Item
//         key={node.path}
//         title={node.name}
//         icon={<Icon type={node.icon} style={{ color: 'white' }} />}
//       >
//         <Link to={node.path}>{node.name}</Link>
//       </AntdMenu.Item>
//     );
//   };
//   const menuNodeClickHandler = (node: any, key: any) => {
//     setCurrentSelectedKey(key);
//     setCurrentMenuTitle(node.props.title);
//   };

//   const getCurrentMenuTitle = (data: MenuOptionConfig[], path: string) => {
//     let menuTitle: string = '';
//     for (let i = 0; i < data.length; i++) {
//       if (data[i].children && menuTitle === '') {
//         menuTitle = getCurrentMenuTitle(data[i].children, path);
//       } else {
//         if (path === data[i].path) {
//           menuTitle = data[i].name;
//           return menuTitle;
//         }
//       }
//     }
//     return menuTitle;
//   };

//   const breadcrumbs = (data: MenuOptionConfig[]) => {
//     let tmp: any = {};
//     for (let i = 0; i < data.length; i++) {
//       if (data[i].children) {
//         tmp = { ...tmp, ...breadcrumbs(data[i].children) };
//       } else {
//         if (data[i].path.replace('/', '') !== 'home')
//           tmp[data[i].path.replace('/', '')] = [
//             { path: data[i].path, breadcrumbName: data[i].name, icon: data[i].icon },
//           ];
//       }
//     }
//     return tmp;
//   };

//   const handlerOpenKeys = (path: string, keys: string[], data: MenuOptionConfig[]) => {
//     let opens: string[] = [...keys];
//     for (let i = 0; i < data.length; i++) {
//       let node: MenuOptionConfig = data[i];
//       if (node.children) {
//         opens.push(node.path);
//         let tmp = handlerOpenKeys(path, opens, node.children);
//         if (tmp.length !== 0) {
//           opens = [...tmp];
//           return opens;
//         } else {
//           opens = [...keys];
//         }
//       } else {
//         if (node.path !== path && i === data.length - 1) return [];
//         else if (node.path === path) return opens;
//       }
//     }
//     return opens;
//   }

//   useEffect(() => {
//     setCurrentSelectedKey(window.location.pathname);
//     if (data && data.length !== 0) {
//       setBreadcrumbs(breadcrumbs(data));
//       setCurrentMenuTitle(getCurrentMenuTitle(data, window.location.pathname));
//       setOpenKeys(handlerOpenKeys(window.location.pathname, [], data));
//     }
//   }, []);

//   useEffect(() => {
//     if (!collapsed && data.length !== 0) {
//       setOpenKeys(handlerOpenKeys(window.location.pathname, [], data));
//     }
//   }, [collapsed])

//   return (
//     <>
//       <AntdMenu
//         theme="dark"
//         mode="inline"
//         defaultOpenKeys={openKeys}
//         defaultSelectedKeys={[data[0]?.path]}
//         selectedKeys={[currentSelectedKey]}
//         onSelect={({ item, key }) => menuNodeClickHandler(item, key)}
//         onOpenChange={(openKeys: string[]) => setOpenKeys(openKeys)}
//         openKeys={openKeys}
//         triggerSubMenuAction="click"
//         inlineCollapsed={collapsed}
//       >
//         {data.map((node) => renderMenu(node))}
//       </AntdMenu>
//     </>
//   )
// }

// export default SiderMenu;

