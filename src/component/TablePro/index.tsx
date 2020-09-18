import React, { useState, useEffect, useRef } from 'react';
import {
  Table,
  Row,
  Space,
  Divider,
  Button,
  Tooltip,
  Popover,
  Checkbox,
  Drawer,
} from 'antd';
import { TableProps as AntdTableProps } from 'antd/es/table';
import {
  FullscreenOutlined,
  FullscreenExitOutlined,
  ColumnHeightOutlined,
} from '@ant-design/icons';
import AdvancedSearchForm from '../AdvancedSearchForm';
import {
  MultipleSelectListConfig,
  AdvancedSearchFormConfig,
} from '../../configs';
import MultipleSelectList from '../MultipleSelectList';
import Icon from '../Icon';

/**
 * actions的统一样式
 */
const actionIconStyle = { fontSize: 20, color: '#595959', cursor: 'pointer' };

/**
 * 表格大小配置
 */
const tableSizes = [
  {
    code: 'default',
    name: '默认',
  },
  {
    code: 'middle',
    name: '中等',
  },
  {
    code: 'small',
    name: '紧凑',
  },
];

/**
 * 高级表格的属性
 */
interface ITableProProps<RecordType> extends AntdTableProps<RecordType> {
  needSearch?: boolean;
  needCreate?: boolean;
  needRefresh?: boolean;
  needSetting?: boolean;
  needFullScreen?: boolean;
  needCustomSize?: boolean;
  drawerTitle?: string;
  drawerChildren?: React.ReactNode;
  drawerWidth?: number;
  drawerVisible?: boolean;
  drawerFooterVisible?: boolean;
  initialValues?: any;
  onOk?: (values?: any) => void;
  onClose?: () => void;
  onCreateButtonClick?: () => void;
  onRefresh?: () => void;
  onSearch?: () => void;
}

/**
 * 高级表格
 */
interface ITablePro<T> extends React.FC<ITableProProps<T>> {}

/**
 * 具体实现
 * @param param0
 */
const TablePro: ITablePro<any> = ({
  needSearch,
  needCreate,
  needRefresh,
  needSetting,
  needFullScreen,
  needCustomSize,
  drawerTitle,
  drawerChildren,
  drawerWidth,
  drawerVisible,
  drawerFooterVisible,
  initialValues,
  onOk,
  onClose,
  onCreateButtonClick,
  onRefresh,
  onSearch,
  ...props
}) => {
  const { columns } = props;
  const [advancedSearchFormConfigs, setAdvancedSearchFormConfigs] = useState<
    AdvancedSearchFormConfig[]
  >([]);
  const [multipleSelectListConfigs, setMultipleSelectListConfigs] = useState<
    MultipleSelectListConfig[]
  >([]);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [customSizeVisible, setCustomSizeVisible] = useState(false);
  const [tableSize, setTableSize] = useState<any>('default');
  const container = useRef<any>();
  const customSizeContainer = useRef<any>();
  const customSizeTooltipContainer = useRef<any>();
  const searchSettingContainer = useRef<any>();
  const searchSettingTooltipContainer = useRef<any>();
  const refreshContainer = useRef<any>();
  const fullScreenContainer = useRef<any>();
  const multipleSelectListConfigsHandler = (
    selected: boolean,
    index: number,
  ) => {
    let tmpSelect = [...multipleSelectListConfigs];
    tmpSelect[index].selected = selected;
    setMultipleSelectListConfigs(tmpSelect);
    let tmpForm = [...advancedSearchFormConfigs];
    tmpForm[index].visible = selected;
    setAdvancedSearchFormConfigs(tmpForm);
  };
  const searchConfigsHandler = (visible: boolean) => {
    let formConfigs: AdvancedSearchFormConfig[] = [];
    let selectConfigs: MultipleSelectListConfig[] = [];
    if (columns && columns.length !== 0) {
      for (let i = 0; i < columns.length; i++) {
        let item: any = columns[i];
        if (item.component) {
          formConfigs.push({
            name: item.dataIndex,
            label: item.title,
            component: item.component,
            visible: visible,
          });
          selectConfigs.push({
            label: item.title,
            selected: visible,
          });
        }
      }
    }
    setAdvancedSearchFormConfigs(formConfigs);
    setMultipleSelectListConfigs(selectConfigs);
  };

  const fullScreenHandler = () => {
    if (document.fullscreenElement) {
      exitFullscreen();
    } else {
      requestFullScreen();
    }
  };
  const requestFullScreen = () => {
    const dom = container.current;
    if (dom.requestFullscreen) dom.requestFullscreen();
    else if (dom.mozRequestFullScreen) dom.mozRequestFullScreen();
    else if (dom.webkitRequestFullScreen) dom.webkitRequestFullScreen();
  };
  const exitFullscreen = () => {
    if (document.exitFullscreen) document.exitFullscreen();
  };
  const watchFullScreen = () => {
    document.addEventListener(
      'webkitfullscreenchange',
      () => setIsFullScreen((c: boolean) => !c),
      false,
    );
    document.addEventListener(
      'mozfullscreenchange',
      () => setIsFullScreen((c: boolean) => !c),
      false,
    );
    document.addEventListener(
      'fullscreenchange',
      () => setIsFullScreen((c: boolean) => !c),
      false,
    );
  };
  const removeFullScreen = () => {
    document.removeEventListener(
      'webkitfullscreenchange',
      () => setIsFullScreen((c: boolean) => !c),
      false,
    );
    document.removeEventListener(
      'mozfullscreenchange',
      () => setIsFullScreen((c: boolean) => !c),
      false,
    );
    document.removeEventListener(
      'fullscreenchange',
      () => setIsFullScreen((c: boolean) => !c),
      false,
    );
  };
  useEffect(() => {
    searchConfigsHandler(true);
  }, []);
  useEffect(() => {
    watchFullScreen();
    return () => removeFullScreen();
  }, []);
  return (
    <div
      style={{ background: '#ffffff', padding: isFullScreen ? '16px' : '0px' }}
      ref={container}
    >
      <Space direction="vertical" style={{ width: '100%' }}>
        {columns && columns.length !== 0 && needSearch ? (
          <>
            <AdvancedSearchForm
              configs={advancedSearchFormConfigs}
              onFinish={onSearch}
              initialValues={initialValues}
            />
            <Divider style={{ margin: '8px 0' }} />
          </>
        ) : null}
        <Row
          justify="space-between"
          style={{ paddingRight: 16, paddingLeft: 16 }}
        >
          <span></span>
          <Space size={16}>
            {needCreate ? (
              <Button
                type="primary"
                icon={<Icon type="icon-plus" style={{ color: 'white' }} />}
                onClick={onCreateButtonClick}
              >
                新建
              </Button>
            ) : null}
            {needRefresh || needSetting ? (
              <Divider type="vertical" style={{ margin: '16px 0' }} />
            ) : null}
            {needRefresh ? (
              <Tooltip
                title="刷新"
                destroyTooltipOnHide={{ keepParent: false }}
                getPopupContainer={() => refreshContainer.current}
              >
                <Icon
                  type="icon-refresh"
                  style={actionIconStyle}
                  onClick={onRefresh}
                  ref={refreshContainer}
                />
              </Tooltip>
            ) : null}
            {needCustomSize ? (
              <Popover
                placement="bottom"
                destroyTooltipOnHide={{ keepParent: false }}
                trigger="click"
                getPopupContainer={() => customSizeContainer.current}
                visible={customSizeVisible}
                onVisibleChange={visible => setCustomSizeVisible(visible)}
                content={
                  <Space direction="vertical">
                    {tableSizes.map((item, index) => (
                      <span
                        key={index}
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          setTableSize(item.code);
                          setCustomSizeVisible(false);
                        }}
                      >
                        {item.name}
                      </span>
                    ))}
                  </Space>
                }
              >
                <Tooltip
                  title="密度"
                  destroyTooltipOnHide={{ keepParent: false }}
                  getPopupContainer={() => customSizeTooltipContainer.current}
                >
                  <ColumnHeightOutlined
                    style={actionIconStyle}
                    ref={customSizeContainer}
                  />
                  <span ref={customSizeTooltipContainer}></span>
                </Tooltip>
              </Popover>
            ) : null}
            {needSetting && columns && columns.length !== 0 && needSearch ? (
              <Popover
                placement="bottomLeft"
                destroyTooltipOnHide={{ keepParent: false }}
                trigger="click"
                getPopupContainer={() => searchSettingContainer.current}
                content={
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Space>
                      <Icon
                        type={'icon-item-prefix'}
                        style={{ fontSize: 12, color: '#595959' }}
                      />
                      <Checkbox
                        defaultChecked={true}
                        onChange={e => searchConfigsHandler(e.target.checked)}
                      >
                        全选(查询条件)
                      </Checkbox>
                    </Space>
                    <Divider style={{ margin: '4px 0' }} />
                    <MultipleSelectList
                      configs={multipleSelectListConfigs}
                      selectHandler={multipleSelectListConfigsHandler}
                    />
                  </Space>
                }
              >
                <Tooltip
                  title="设置查询条件"
                  destroyTooltipOnHide={{ keepParent: false }}
                  getPopupContainer={() =>
                    searchSettingTooltipContainer.current
                  }
                >
                  <Icon
                    type="icon-system"
                    style={actionIconStyle}
                    ref={searchSettingContainer}
                  />
                  <span ref={searchSettingTooltipContainer}></span>
                </Tooltip>
              </Popover>
            ) : null}
            {needFullScreen ? (
              <div onClick={() => fullScreenHandler()}>
                <Tooltip
                  placement="top"
                  getPopupContainer={() => fullScreenContainer.current}
                  destroyTooltipOnHide={{ keepParent: false }}
                  title={isFullScreen ? '退出全屏' : '全屏'}
                >
                  {!isFullScreen ? (
                    <FullscreenOutlined
                      style={actionIconStyle}
                      ref={fullScreenContainer}
                    />
                  ) : (
                    <FullscreenExitOutlined
                      style={actionIconStyle}
                      ref={fullScreenContainer}
                    />
                  )}
                </Tooltip>
              </div>
            ) : null}
          </Space>
        </Row>
        <Table {...props} size={tableSize} />
      </Space>
      <Drawer
        destroyOnClose={true}
        title={drawerTitle}
        visible={drawerVisible}
        width={drawerWidth}
        onClose={onClose}
        getContainer={() => container.current}
        footer={
          drawerFooterVisible ? (
            <Row justify="space-between">
              <span></span>
              <Space>
                <Button onClick={onClose}>取消</Button>
                <Button type="primary" onClick={onOk}>
                  确定
                </Button>
              </Space>
            </Row>
          ) : null
        }
      >
        {drawerChildren}
      </Drawer>
    </div>
  );
};

export default TablePro;
