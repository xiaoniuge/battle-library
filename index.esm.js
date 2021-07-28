import 'antd/lib/row/style';
import _Row from 'antd/lib/row';
import 'antd/lib/empty/style';
import _Empty from 'antd/lib/empty';
import 'antd/lib/config-provider/style';
import _ConfigProvider from 'antd/lib/config-provider';
import 'antd/lib/button/style';
import _Button from 'antd/lib/button';
import 'antd/lib/space/style';
import _Space from 'antd/lib/space';
import 'antd/lib/col/style';
import _Col from 'antd/lib/col';
import 'antd/lib/form/style';
import _Form from 'antd/lib/form';
import React, { useState, useEffect, useRef } from 'react';
import {
    UpOutlined,
    DownOutlined,
    createFromIconfontCN,
    ColumnHeightOutlined,
    FullscreenOutlined,
    FullscreenExitOutlined,
} from '@ant-design/icons';
import 'antd/lib/checkbox/style';
import _Checkbox from 'antd/lib/checkbox';
import 'antd/lib/list/style';
import _List from 'antd/lib/list';
import 'antd/lib/input/style';
export { default as Input } from 'antd/lib/input';
import 'antd/lib/table/style';
import _Table from 'antd/lib/table';
import 'antd/lib/modal/style';
import _Modal from 'antd/lib/modal';
import 'antd/lib/drawer/style';
import _Drawer from 'antd/lib/drawer';
import 'antd/lib/popover/style';
import _Popover from 'antd/lib/popover';
import 'antd/lib/tooltip/style';
import _Tooltip from 'antd/lib/tooltip';
import 'antd/lib/divider/style';
import _Divider from 'antd/lib/divider';
export * from 'antd';

function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);

        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }

        keys.push.apply(keys, symbols);
    }

    return keys;
}

function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};

        if (i % 2) {
            ownKeys(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
            });
        } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source),
            );
        } else {
            ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(
                    target,
                    key,
                    Object.getOwnPropertyDescriptor(source, key),
                );
            });
        }
    }

    return target;
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
        });
    } else {
        obj[key] = value;
    }

    return obj;
}

function _extends() {
    _extends =
        Object.assign ||
        function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];

                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }

            return target;
        };

    return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }

    return target;
}

function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

        for (i = 0; i < sourceSymbolKeys.length; i++) {
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key))
                continue;
            target[key] = source[key];
        }
    }

    return target;
}

function _slicedToArray(arr, i) {
    return (
        _arrayWithHoles(arr) ||
        _iterableToArrayLimit(arr, i) ||
        _unsupportedIterableToArray(arr, i) ||
        _nonIterableRest()
    );
}

function _toConsumableArray(arr) {
    return (
        _arrayWithoutHoles(arr) ||
        _iterableToArray(arr) ||
        _unsupportedIterableToArray(arr) ||
        _nonIterableSpread()
    );
}

function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
    if (
        (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) ||
        iter['@@iterator'] != null
    )
        return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
    var _i =
        arr == null
            ? null
            : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) ||
              arr['@@iterator'];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);

            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally {
        try {
            if (!_n && _i['return'] != null) _i['return']();
        } finally {
            if (_d) throw _e;
        }
    }

    return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === 'Object' && o.constructor) n = o.constructor.name;
    if (n === 'Map' || n === 'Set') return Array.from(o);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
}

function _nonIterableSpread() {
    throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
    );
}

function _nonIterableRest() {
    throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
    );
}

var rowCols = 4;

var AdvancedSearchForm = function AdvancedSearchForm(_ref) {
    var _ref$configs = _ref.configs,
        configs = _ref$configs === void 0 ? [] : _ref$configs,
        initialValues = _ref.initialValues,
        onFinish = _ref.onFinish,
        onReset = _ref.onReset;

    var _useState = useState(configs),
        _useState2 = _slicedToArray(_useState, 2),
        configsTmp = _useState2[0],
        setConfigsTmp = _useState2[1];

    var _useState3 = useState(false),
        _useState4 = _slicedToArray(_useState3, 2),
        expand = _useState4[0],
        setExpand = _useState4[1];

    var _Form$useForm = _Form.useForm(),
        _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
        form = _Form$useForm2[0];

    useEffect(
        function() {
            setConfigsTmp(configs);
        },
        [configs],
    );

    var reset = function reset() {
        form.resetFields();
        onReset();
    };

    var renderFormItem = function renderFormItem() {
        var tmp = [];

        for (var i = 0; i < configsTmp.length; i++) {
            var config = configs[i];

            if (config.visible) {
                tmp.push(configsTmp[i]);
            }
        }

        var size = tmp.length;
        var length = expand ? size : size >= rowCols ? rowCols : size;
        var children = [];

        for (var _i = 0; _i < length; _i++) {
            var _config = tmp[_i];
            children.push(
                /*#__PURE__*/ React.createElement(
                    _Col,
                    {
                        span: 24 / rowCols,
                        key: _i,
                    },
                    /*#__PURE__*/ React.createElement(
                        _Form.Item,
                        {
                            name: _config.name,
                            label: _config.label,
                        },
                        _config.component,
                    ),
                ),
            );
        }

        var span = (24 / rowCols) * (rowCols - (length % rowCols));
        if (length !== 0)
            children.push(
                /*#__PURE__*/ React.createElement(
                    _Col,
                    {
                        span: span,
                        style: {
                            textAlign: 'right',
                        },
                        key: length,
                    },
                    /*#__PURE__*/ React.createElement(
                        _Space,
                        null,
                        /*#__PURE__*/ React.createElement(
                            _Button,
                            {
                                type: 'primary',
                                htmlType: 'submit',
                            },
                            '\u67E5\u8BE2',
                        ),
                        /*#__PURE__*/ React.createElement(
                            _Button,
                            {
                                onClick: function onClick() {
                                    return reset();
                                },
                            },
                            '\u91CD\u7F6E',
                        ),
                        tmp.length > rowCols
                            ? /*#__PURE__*/ React.createElement(
                                  'a',
                                  {
                                      style: {
                                          fontSize: 12,
                                      },
                                      onClick: function onClick() {
                                          return setExpand(!expand);
                                      },
                                  },
                                  expand
                                      ? /*#__PURE__*/ React.createElement(
                                            UpOutlined,
                                            null,
                                        )
                                      : /*#__PURE__*/ React.createElement(
                                            DownOutlined,
                                            null,
                                        ),
                                  ' ',
                                  expand ? '收起' : '展开',
                              )
                            : null,
                    ),
                ),
            );
        return children;
    };

    return configsTmp.length !== 0
        ? /*#__PURE__*/ React.createElement(
              'div',
              {
                  style: {
                      paddingRight: 16,
                      paddingLeft: 16,
                  },
              },
              /*#__PURE__*/ React.createElement(
                  _ConfigProvider,
                  {
                      renderEmpty: function renderEmpty() {
                          return /*#__PURE__*/ React.createElement(_Empty, {
                              description: '\u6682\u65E0\u6570\u636E',
                          });
                      },
                  },
                  /*#__PURE__*/ React.createElement(
                      _Form,
                      {
                          form: form,
                          initialValues: initialValues,
                          onFinish: onFinish,
                          labelCol: {
                              span: 6,
                          },
                          wrapperCol: {
                              span: 18,
                          },
                      },
                      /*#__PURE__*/ React.createElement(
                          _Row,
                          {
                              gutter: 24,
                          },
                          renderFormItem(),
                      ),
                  ),
              ),
          )
        : null;
};

var Icon = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1708261_dmnzwaci3nd.js',
});

var MultipleSelectList = function MultipleSelectList(_ref) {
    var selectHandler = _ref.selectHandler,
        _ref$configs = _ref.configs,
        configs = _ref$configs === void 0 ? [] : _ref$configs;
    return /*#__PURE__*/ React.createElement(_List, {
        dataSource: configs,
        split: false,
        renderItem: function renderItem(item, index) {
            return /*#__PURE__*/ React.createElement(
                _List.Item,
                {
                    key: index,
                },
                /*#__PURE__*/ React.createElement(
                    _Space,
                    null,
                    /*#__PURE__*/ React.createElement(Icon, {
                        type: 'icon-item-prefix',
                        style: {
                            fontSize: 12,
                            color: '#595959',
                        },
                    }),
                    /*#__PURE__*/ React.createElement(
                        _Checkbox,
                        {
                            defaultChecked: true,
                            onChange: function onChange(e) {
                                return selectHandler(
                                    e.target.checked,
                                    index,
                                    item.field,
                                );
                            },
                            checked: configs[index].selected,
                        },
                        item.label,
                    ),
                ),
            );
        },
    });
};

var Table = function Table(_ref) {
    var props = _extends({}, _ref);

    return /*#__PURE__*/ React.createElement(
        _ConfigProvider,
        {
            renderEmpty: function renderEmpty() {
                return /*#__PURE__*/ React.createElement(_Empty, {
                    description: '\u6682\u65E0\u6570\u636E',
                });
            },
        },
        /*#__PURE__*/ React.createElement(
            _Table,
            _objectSpread2(
                {
                    bordered: true,
                },
                props,
            ),
        ),
    );
};

Table.Summary = _Table.Summary;

var _excluded = [
    'needSearch',
    'needRefresh',
    'needSetting',
    'needFullScreen',
    'needCustomSize',
    'drawerTitle',
    'drawerChildren',
    'drawerWidth',
    'drawerVisible',
    'drawerFooterVisible',
    'modalTitle',
    'modalVisible',
    'modalWidth',
    'modalOkProps',
    'modalCancelProps',
    'modalChildren',
    'initialValues',
    'onDrawerOk',
    'onDrawerClose',
    'onModalOk',
    'onModalClose',
    'onRefresh',
    'onSearch',
    'onReset',
    'actions',
];
/**
 * actions的统一样式
 */

var actionIconStyle = {
    fontSize: 20,
    color: '#595959',
    cursor: 'pointer',
};
/**
 * 表格大小配置
 */

var tableSizes = [
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
 * 具体实现
 * @param param0
 */

var TablePro = function TablePro(_ref) {
    var needSearch = _ref.needSearch,
        needRefresh = _ref.needRefresh,
        needSetting = _ref.needSetting,
        needFullScreen = _ref.needFullScreen,
        needCustomSize = _ref.needCustomSize,
        drawerTitle = _ref.drawerTitle,
        drawerChildren = _ref.drawerChildren,
        drawerWidth = _ref.drawerWidth,
        drawerVisible = _ref.drawerVisible,
        drawerFooterVisible = _ref.drawerFooterVisible,
        modalTitle = _ref.modalTitle,
        modalVisible = _ref.modalVisible,
        modalWidth = _ref.modalWidth,
        modalOkProps = _ref.modalOkProps,
        modalCancelProps = _ref.modalCancelProps,
        modalChildren = _ref.modalChildren,
        initialValues = _ref.initialValues,
        onDrawerOk = _ref.onDrawerOk,
        onDrawerClose = _ref.onDrawerClose,
        onModalOk = _ref.onModalOk,
        onModalClose = _ref.onModalClose,
        onRefresh = _ref.onRefresh,
        onSearch = _ref.onSearch,
        onReset = _ref.onReset,
        actions = _ref.actions,
        props = _objectWithoutProperties(_ref, _excluded);

    var columns = props.columns;

    var _useState = useState([]),
        _useState2 = _slicedToArray(_useState, 2),
        advancedSearchFormConfigs = _useState2[0],
        setAdvancedSearchFormConfigs = _useState2[1];

    var _useState3 = useState([]),
        _useState4 = _slicedToArray(_useState3, 2),
        multipleSelectListConfigs = _useState4[0],
        setMultipleSelectListConfigs = _useState4[1];

    var _useState5 = useState(false),
        _useState6 = _slicedToArray(_useState5, 2),
        isFullScreen = _useState6[0],
        setIsFullScreen = _useState6[1];

    var _useState7 = useState(false),
        _useState8 = _slicedToArray(_useState7, 2),
        customSizeVisible = _useState8[0],
        setCustomSizeVisible = _useState8[1];

    var _useState9 = useState('default'),
        _useState10 = _slicedToArray(_useState9, 2),
        tableSize = _useState10[0],
        setTableSize = _useState10[1];

    var _useState11 = useState([]),
        _useState12 = _slicedToArray(_useState11, 2),
        currentColumns = _useState12[0],
        setCurrentColumns = _useState12[1];

    var _useState13 = useState([]),
        _useState14 = _slicedToArray(_useState13, 2),
        multipleColumnListConfigs = _useState14[0],
        setMultipleColumnListConfigs = _useState14[1];

    var container = useRef();
    var customSizeContainer = useRef();
    var customSizeTooltipContainer = useRef();
    var searchSettingContainer = useRef();
    var searchSettingTooltipContainer = useRef();
    var refreshContainer = useRef();
    var fullScreenContainer = useRef();

    var searchConfigsHandler = function searchConfigsHandler(visible) {
        var formConfigs = [];
        var selectConfigs = [];

        if (columns && columns.length !== 0) {
            for (var i = 0; i < columns.length; i++) {
                var item = columns[i];

                if (item.component) {
                    formConfigs.push({
                        name: item.dataIndex,
                        label: item.title,
                        component: item.component,
                        visible: visible,
                    });
                    selectConfigs.push({
                        label: item.title,
                        field: item.dataIndex,
                        selected: visible,
                    });
                }
            }
        }

        setAdvancedSearchFormConfigs(formConfigs);
        setMultipleSelectListConfigs(selectConfigs);
    };

    var columnsConfigsHandler = function columnsConfigsHandler(visible) {
        var columnConfigs = [];
        var selectConfigs = [];

        if (columns && columns.length !== 0) {
            for (var i = 0; i < columns.length; i++) {
                var item = columns[i];

                if (item.dataIndex !== 'id' && item.key !== 'action') {
                    selectConfigs.push({
                        label: item.title,
                        field: item.dataIndex,
                        selected: visible,
                    });
                }

                if (visible) {
                    columnConfigs.push(
                        _objectSpread2(
                            _objectSpread2({}, item),
                            {},
                            {
                                visible: visible,
                            },
                        ),
                    );
                } else {
                    if (item.dataIndex !== 'id' && item.key !== 'action') {
                        columnConfigs.push(
                            _objectSpread2(
                                _objectSpread2({}, item),
                                {},
                                {
                                    visible: visible,
                                },
                            ),
                        );
                    } else {
                        columnConfigs.push(
                            _objectSpread2(
                                _objectSpread2({}, item),
                                {},
                                {
                                    visible: true,
                                },
                            ),
                        );
                    }
                }
            }
        }

        setCurrentColumns(columnConfigs);
        setMultipleColumnListConfigs(selectConfigs);
    };

    var columnsListConfigsHandler = function columnsListConfigsHandler(
        selected,
        index,
        field,
    ) {
        var tmpSelect = _toConsumableArray(multipleColumnListConfigs);

        tmpSelect[index].selected = selected;
        setMultipleColumnListConfigs(tmpSelect);

        var tmpForm = _toConsumableArray(currentColumns);

        for (var i = 0; i < tmpForm.length; i++) {
            if (tmpForm[i].dataIndex === field) {
                tmpForm[i].visible = selected;
            }
        }

        setCurrentColumns(tmpForm);
    };

    var fullScreenHandler = function fullScreenHandler() {
        if (document.fullscreenElement) {
            exitFullscreen();
        } else {
            requestFullScreen();
        }
    };

    var requestFullScreen = function requestFullScreen() {
        var dom = container.current;
        if (dom.requestFullscreen) dom.requestFullscreen();
        else if (dom.mozRequestFullScreen) dom.mozRequestFullScreen();
        else if (dom.webkitRequestFullScreen) dom.webkitRequestFullScreen();
    };

    var exitFullscreen = function exitFullscreen() {
        if (document.exitFullscreen) document.exitFullscreen();
    };

    var watchFullScreen = function watchFullScreen() {
        document.addEventListener(
            'webkitfullscreenchange',
            function() {
                return setIsFullScreen(function(c) {
                    return !c;
                });
            },
            false,
        );
        document.addEventListener(
            'mozfullscreenchange',
            function() {
                return setIsFullScreen(function(c) {
                    return !c;
                });
            },
            false,
        );
        document.addEventListener(
            'fullscreenchange',
            function() {
                return setIsFullScreen(function(c) {
                    return !c;
                });
            },
            false,
        );
    };

    var removeFullScreen = function removeFullScreen() {
        document.removeEventListener(
            'webkitfullscreenchange',
            function() {
                return setIsFullScreen(function(c) {
                    return !c;
                });
            },
            false,
        );
        document.removeEventListener(
            'mozfullscreenchange',
            function() {
                return setIsFullScreen(function(c) {
                    return !c;
                });
            },
            false,
        );
        document.removeEventListener(
            'fullscreenchange',
            function() {
                return setIsFullScreen(function(c) {
                    return !c;
                });
            },
            false,
        );
    };

    useEffect(
        function() {
            searchConfigsHandler(true);
            columnsConfigsHandler(true);
        },
        [columns],
    );
    useEffect(function() {
        watchFullScreen();
        return function() {
            return removeFullScreen();
        };
    }, []);
    return /*#__PURE__*/ React.createElement(
        'div',
        {
            style: {
                background: '#ffffff',
                padding: isFullScreen ? '16px' : '0px',
            },
            ref: container,
        },
        /*#__PURE__*/ React.createElement(
            _Space,
            {
                direction: 'vertical',
                style: {
                    width: '100%',
                },
            },
            columns && columns.length !== 0 && needSearch
                ? /*#__PURE__*/ React.createElement(
                      React.Fragment,
                      null,
                      /*#__PURE__*/ React.createElement(AdvancedSearchForm, {
                          configs: advancedSearchFormConfigs,
                          onFinish: onSearch,
                          onReset: onReset,
                          initialValues: initialValues,
                      }),
                      /*#__PURE__*/ React.createElement(_Divider, {
                          style: {
                              margin: '8px 0',
                          },
                      }),
                  )
                : null,
            /*#__PURE__*/ React.createElement(
                _Row,
                {
                    justify: 'space-between',
                    style: {
                        paddingRight: 16,
                        paddingLeft: 16,
                    },
                },
                /*#__PURE__*/ React.createElement(
                    _Space,
                    {
                        size: 16,
                    },
                    actions
                        ? /*#__PURE__*/ React.createElement(
                              React.Fragment,
                              null,
                              actions,
                          )
                        : /*#__PURE__*/ React.createElement('span', null, ' '),
                ),
                /*#__PURE__*/ React.createElement(
                    _Space,
                    {
                        size: 16,
                    },
                    needRefresh
                        ? /*#__PURE__*/ React.createElement(
                              _Tooltip,
                              {
                                  title: '\u5237\u65B0',
                                  destroyTooltipOnHide: {
                                      keepParent: false,
                                  },
                                  getPopupContainer: function getPopupContainer() {
                                      return refreshContainer.current;
                                  },
                              },
                              /*#__PURE__*/ React.createElement(Icon, {
                                  type: 'icon-refresh',
                                  style: actionIconStyle,
                                  onClick: onRefresh,
                                  ref: refreshContainer,
                              }),
                          )
                        : null,
                    needCustomSize
                        ? /*#__PURE__*/ React.createElement(
                              _Popover,
                              {
                                  placement: 'bottom',
                                  destroyTooltipOnHide: {
                                      keepParent: false,
                                  },
                                  trigger: 'click',
                                  getPopupContainer: function getPopupContainer() {
                                      return customSizeContainer.current;
                                  },
                                  visible: customSizeVisible,
                                  onVisibleChange: function onVisibleChange(
                                      visible,
                                  ) {
                                      return setCustomSizeVisible(visible);
                                  },
                                  content: /*#__PURE__*/ React.createElement(
                                      _Space,
                                      {
                                          direction: 'vertical',
                                      },
                                      tableSizes.map(function(item, index) {
                                          return /*#__PURE__*/ React.createElement(
                                              'span',
                                              {
                                                  key: index,
                                                  style: {
                                                      cursor: 'pointer',
                                                  },
                                                  onClick: function onClick() {
                                                      setTableSize(item.code);
                                                      setCustomSizeVisible(
                                                          false,
                                                      );
                                                  },
                                              },
                                              item.name,
                                          );
                                      }),
                                  ),
                              },
                              /*#__PURE__*/ React.createElement(
                                  _Tooltip,
                                  {
                                      title: '\u5BC6\u5EA6',
                                      destroyTooltipOnHide: {
                                          keepParent: false,
                                      },
                                      getPopupContainer: function getPopupContainer() {
                                          return customSizeTooltipContainer.current;
                                      },
                                  },
                                  /*#__PURE__*/ React.createElement(
                                      ColumnHeightOutlined,
                                      {
                                          style: actionIconStyle,
                                          ref: customSizeContainer,
                                      },
                                  ),
                                  /*#__PURE__*/ React.createElement('span', {
                                      ref: customSizeTooltipContainer,
                                  }),
                              ),
                          )
                        : null,
                    needSetting && columns && columns.length !== 0
                        ? /*#__PURE__*/ React.createElement(
                              _Popover,
                              {
                                  placement: 'bottomLeft',
                                  destroyTooltipOnHide: {
                                      keepParent: false,
                                  },
                                  trigger: 'click',
                                  getPopupContainer: function getPopupContainer() {
                                      return searchSettingContainer.current;
                                  },
                                  content: /*#__PURE__*/ React.createElement(
                                      _Space,
                                      {
                                          direction: 'vertical',
                                          style: {
                                              width: '100%',
                                          },
                                      },
                                      /*#__PURE__*/ React.createElement(
                                          _Space,
                                          null,
                                          /*#__PURE__*/ React.createElement(
                                              Icon,
                                              {
                                                  type: 'icon-item-prefix',
                                                  style: {
                                                      fontSize: 12,
                                                      color: '#595959',
                                                  },
                                              },
                                          ),
                                          /*#__PURE__*/ React.createElement(
                                              _Checkbox,
                                              {
                                                  defaultChecked: true,
                                                  onChange: function onChange(
                                                      e,
                                                  ) {
                                                      return columnsConfigsHandler(
                                                          e.target.checked,
                                                      );
                                                  },
                                              },
                                              '\u5168\u9009(\u8868\u683C\u663E\u793A\u5217)',
                                          ),
                                      ),
                                      /*#__PURE__*/ React.createElement(
                                          _Divider,
                                          {
                                              style: {
                                                  margin: '4px 0',
                                              },
                                          },
                                      ),
                                      /*#__PURE__*/ React.createElement(
                                          MultipleSelectList,
                                          {
                                              configs: multipleColumnListConfigs,
                                              selectHandler: columnsListConfigsHandler,
                                          },
                                      ),
                                  ),
                              },
                              /*#__PURE__*/ React.createElement(
                                  _Tooltip,
                                  {
                                      title:
                                          '\u8BBE\u7F6E\u8868\u683C\u663E\u793A\u5217',
                                      destroyTooltipOnHide: {
                                          keepParent: false,
                                      },
                                      getPopupContainer: function getPopupContainer() {
                                          return searchSettingTooltipContainer.current;
                                      },
                                  },
                                  /*#__PURE__*/ React.createElement(Icon, {
                                      type: 'icon-system',
                                      style: actionIconStyle,
                                      ref: searchSettingContainer,
                                  }),
                                  /*#__PURE__*/ React.createElement('span', {
                                      ref: searchSettingTooltipContainer,
                                  }),
                              ),
                          )
                        : null,
                    needFullScreen
                        ? /*#__PURE__*/ React.createElement(
                              'div',
                              {
                                  onClick: function onClick() {
                                      return fullScreenHandler();
                                  },
                              },
                              /*#__PURE__*/ React.createElement(
                                  _Tooltip,
                                  {
                                      placement: 'top',
                                      getPopupContainer: function getPopupContainer() {
                                          return fullScreenContainer.current;
                                      },
                                      destroyTooltipOnHide: {
                                          keepParent: false,
                                      },
                                      title: isFullScreen ? '退出全屏' : '全屏',
                                  },
                                  !isFullScreen
                                      ? /*#__PURE__*/ React.createElement(
                                            FullscreenOutlined,
                                            {
                                                style: actionIconStyle,
                                                ref: fullScreenContainer,
                                            },
                                        )
                                      : /*#__PURE__*/ React.createElement(
                                            FullscreenExitOutlined,
                                            {
                                                style: actionIconStyle,
                                                ref: fullScreenContainer,
                                            },
                                        ),
                              ),
                          )
                        : null,
                ),
            ),
            /*#__PURE__*/ React.createElement(
                Table,
                _objectSpread2(
                    _objectSpread2({}, props),
                    {},
                    {
                        columns: currentColumns.filter(function(item) {
                            return item.visible;
                        }),
                        size: tableSize,
                    },
                ),
            ),
        ),
        /*#__PURE__*/ React.createElement(
            _Drawer,
            {
                destroyOnClose: true,
                title: drawerTitle,
                visible: drawerVisible,
                width: drawerWidth,
                onClose: onDrawerClose,
                getContainer: function getContainer() {
                    return container.current;
                },
                footer: drawerFooterVisible
                    ? /*#__PURE__*/ React.createElement(
                          _Row,
                          {
                              justify: 'space-between',
                          },
                          /*#__PURE__*/ React.createElement('span', null),
                          /*#__PURE__*/ React.createElement(
                              _Space,
                              null,
                              /*#__PURE__*/ React.createElement(
                                  _Button,
                                  {
                                      onClick: onDrawerClose,
                                  },
                                  '\u53D6\u6D88',
                              ),
                              /*#__PURE__*/ React.createElement(
                                  _Button,
                                  {
                                      type: 'primary',
                                      onClick: onDrawerOk,
                                  },
                                  '\u786E\u5B9A',
                              ),
                          ),
                      )
                    : null,
            },
            drawerChildren,
        ),
        /*#__PURE__*/ React.createElement(
            _Modal,
            {
                destroyOnClose: true,
                maskClosable: true,
                title: modalTitle,
                visible: modalVisible,
                width: modalWidth,
                onCancel: onModalClose,
                onOk: onModalOk,
                okButtonProps: modalOkProps
                    ? modalOkProps
                    : {
                          type: 'primary',
                      },
                cancelButtonProps: modalCancelProps
                    ? modalCancelProps
                    : {
                          type: 'default',
                      },
                okText: '\u786E\u5B9A',
                cancelText: '\u53D6\u6D88',
                getContainer: function getContainer() {
                    return container.current;
                },
            },
            modalChildren,
        ),
    );
};

var defaultRowCols = 2;

var AdvancedSearchForm$1 = function AdvancedSearchForm(_ref) {
    var _ref$configs = _ref.configs,
        configs = _ref$configs === void 0 ? [] : _ref$configs,
        initialValues = _ref.initialValues,
        rowCols = _ref.rowCols,
        form = _ref.form,
        onFinish = _ref.onFinish;
    var tmpRowCols;
    if (!rowCols) tmpRowCols = defaultRowCols;
    else tmpRowCols = rowCols;

    var normFile = function normFile(e) {
        //如果是typescript, 那么参数写成 e: any
        if (Array.isArray(e)) {
            return e;
        }

        return e && e.fileList;
    };

    var renderFormItem = function renderFormItem() {
        var tmp = [];

        for (var i = 0; i < configs.length; i++) {
            var config = configs[i];
            tmp.push(config);
        }

        var size = tmp.length;
        var length = size;
        var children = [];

        for (var _i = 0; _i < length; _i++) {
            var _config = tmp[_i];
            children.push(
                /*#__PURE__*/ React.createElement(
                    _Col,
                    {
                        span: 24 / tmpRowCols,
                        key: _i,
                    },
                    _config.type === 'file'
                        ? /*#__PURE__*/ React.createElement(
                              _Form.Item,
                              {
                                  name: _config.name,
                                  label: _config.label,
                                  rules: _config.rules,
                                  valuePropName: 'fileList',
                                  getValueFromEvent: normFile,
                                  noStyle: true,
                              },
                              _config.component,
                          )
                        : /*#__PURE__*/ React.createElement(
                              _Form.Item,
                              {
                                  name: _config.name,
                                  label: _config.label,
                                  rules: _config.rules,
                              },
                              _config.component,
                          ),
                ),
            );
        }

        return children;
    };

    return configs.length !== 0
        ? /*#__PURE__*/ React.createElement(
              'div',
              {
                  style: {
                      paddingRight: 16,
                      paddingLeft: 16,
                  },
              },
              /*#__PURE__*/ React.createElement(
                  _ConfigProvider,
                  {
                      renderEmpty: function renderEmpty() {
                          return /*#__PURE__*/ React.createElement(_Empty, {
                              description: '\u6682\u65E0\u6570\u636E',
                          });
                      },
                  },
                  /*#__PURE__*/ React.createElement(
                      _Form,
                      {
                          form: form,
                          initialValues: initialValues,
                          onFinish: onFinish,
                          labelCol: {
                              span: 6,
                          },
                          wrapperCol: {
                              span: 18,
                          },
                          preserve: false,
                      },
                      /*#__PURE__*/ React.createElement(
                          _Row,
                          {
                              gutter: 24,
                          },
                          renderFormItem(),
                      ),
                  ),
              ),
          )
        : null;
};

export {
    AdvancedSearchForm$1 as AdvancedForm,
    AdvancedSearchForm,
    Icon,
    MultipleSelectList,
    Table,
    TablePro,
};
