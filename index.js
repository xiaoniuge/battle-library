'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('antd/lib/row/style');
var _Row = require('antd/lib/row');
require('antd/lib/empty/style');
var _Empty = require('antd/lib/empty');
require('antd/lib/config-provider/style');
var _ConfigProvider = require('antd/lib/config-provider');
require('antd/lib/button/style');
var _Button = require('antd/lib/button');
require('antd/lib/space/style');
var _Space = require('antd/lib/space');
require('antd/lib/col/style');
var _Col = require('antd/lib/col');
require('antd/lib/form/style');
var _Form = require('antd/lib/form');
var React = require('react');
var icons = require('@ant-design/icons');
require('antd/lib/checkbox/style');
var _Checkbox = require('antd/lib/checkbox');
require('antd/lib/list/style');
var _List = require('antd/lib/list');
require('antd/lib/input/style');
var _Input = require('antd/lib/input');
require('antd/lib/table/style');
var _Table = require('antd/lib/table');
require('antd/lib/modal/style');
var _Modal = require('antd/lib/modal');
require('antd/lib/drawer/style');
var _Drawer = require('antd/lib/drawer');
require('antd/lib/popover/style');
var _Popover = require('antd/lib/popover');
require('antd/lib/tooltip/style');
var _Tooltip = require('antd/lib/tooltip');
require('antd/lib/divider/style');
var _Divider = require('antd/lib/divider');
var antd = require('antd');

function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : { default: e };
}

var _Row__default = /*#__PURE__*/ _interopDefaultLegacy(_Row);
var _Empty__default = /*#__PURE__*/ _interopDefaultLegacy(_Empty);
var _ConfigProvider__default = /*#__PURE__*/ _interopDefaultLegacy(
    _ConfigProvider,
);
var _Button__default = /*#__PURE__*/ _interopDefaultLegacy(_Button);
var _Space__default = /*#__PURE__*/ _interopDefaultLegacy(_Space);
var _Col__default = /*#__PURE__*/ _interopDefaultLegacy(_Col);
var _Form__default = /*#__PURE__*/ _interopDefaultLegacy(_Form);
var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);
var _Checkbox__default = /*#__PURE__*/ _interopDefaultLegacy(_Checkbox);
var _List__default = /*#__PURE__*/ _interopDefaultLegacy(_List);
var _Input__default = /*#__PURE__*/ _interopDefaultLegacy(_Input);
var _Table__default = /*#__PURE__*/ _interopDefaultLegacy(_Table);
var _Modal__default = /*#__PURE__*/ _interopDefaultLegacy(_Modal);
var _Drawer__default = /*#__PURE__*/ _interopDefaultLegacy(_Drawer);
var _Popover__default = /*#__PURE__*/ _interopDefaultLegacy(_Popover);
var _Tooltip__default = /*#__PURE__*/ _interopDefaultLegacy(_Tooltip);
var _Divider__default = /*#__PURE__*/ _interopDefaultLegacy(_Divider);

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

    var _useState = React.useState(configs),
        _useState2 = _slicedToArray(_useState, 2),
        configsTmp = _useState2[0],
        setConfigsTmp = _useState2[1];

    var _useState3 = React.useState(false),
        _useState4 = _slicedToArray(_useState3, 2),
        expand = _useState4[0],
        setExpand = _useState4[1];

    var _Form$useForm = _Form__default['default'].useForm(),
        _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
        form = _Form$useForm2[0];

    React.useEffect(
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
                /*#__PURE__*/ React__default['default'].createElement(
                    _Col__default['default'],
                    {
                        span: 24 / rowCols,
                        key: _i,
                    },
                    /*#__PURE__*/ React__default['default'].createElement(
                        _Form__default['default'].Item,
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
                /*#__PURE__*/ React__default['default'].createElement(
                    _Col__default['default'],
                    {
                        span: span,
                        style: {
                            textAlign: 'right',
                        },
                        key: length,
                    },
                    /*#__PURE__*/ React__default['default'].createElement(
                        _Space__default['default'],
                        null,
                        /*#__PURE__*/ React__default['default'].createElement(
                            _Button__default['default'],
                            {
                                type: 'primary',
                                htmlType: 'submit',
                            },
                            '\u67E5\u8BE2',
                        ),
                        /*#__PURE__*/ React__default['default'].createElement(
                            _Button__default['default'],
                            {
                                onClick: function onClick() {
                                    return reset();
                                },
                            },
                            '\u91CD\u7F6E',
                        ),
                        tmp.length > rowCols
                            ? /*#__PURE__*/ React__default[
                                  'default'
                              ].createElement(
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
                                      ? /*#__PURE__*/ React__default[
                                            'default'
                                        ].createElement(icons.UpOutlined, null)
                                      : /*#__PURE__*/ React__default[
                                            'default'
                                        ].createElement(
                                            icons.DownOutlined,
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
        ? /*#__PURE__*/ React__default['default'].createElement(
              'div',
              {
                  style: {
                      paddingRight: 16,
                      paddingLeft: 16,
                  },
              },
              /*#__PURE__*/ React__default['default'].createElement(
                  _ConfigProvider__default['default'],
                  {
                      renderEmpty: function renderEmpty() {
                          return /*#__PURE__*/ React__default[
                              'default'
                          ].createElement(_Empty__default['default'], {
                              description: '\u6682\u65E0\u6570\u636E',
                          });
                      },
                  },
                  /*#__PURE__*/ React__default['default'].createElement(
                      _Form__default['default'],
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
                      /*#__PURE__*/ React__default['default'].createElement(
                          _Row__default['default'],
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

var Icon = icons.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1708261_dmnzwaci3nd.js',
});

var MultipleSelectList = function MultipleSelectList(_ref) {
    var selectHandler = _ref.selectHandler,
        _ref$configs = _ref.configs,
        configs = _ref$configs === void 0 ? [] : _ref$configs;
    return /*#__PURE__*/ React__default['default'].createElement(
        _List__default['default'],
        {
            dataSource: configs,
            split: false,
            renderItem: function renderItem(item, index) {
                return /*#__PURE__*/ React__default['default'].createElement(
                    _List__default['default'].Item,
                    {
                        key: index,
                    },
                    /*#__PURE__*/ React__default['default'].createElement(
                        _Space__default['default'],
                        null,
                        /*#__PURE__*/ React__default['default'].createElement(
                            Icon,
                            {
                                type: 'icon-item-prefix',
                                style: {
                                    fontSize: 12,
                                    color: '#595959',
                                },
                            },
                        ),
                        /*#__PURE__*/ React__default['default'].createElement(
                            _Checkbox__default['default'],
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
        },
    );
};

var Table = function Table(_ref) {
    var props = _extends({}, _ref);

    return /*#__PURE__*/ React__default['default'].createElement(
        _ConfigProvider__default['default'],
        {
            renderEmpty: function renderEmpty() {
                return /*#__PURE__*/ React__default['default'].createElement(
                    _Empty__default['default'],
                    {
                        description: '\u6682\u65E0\u6570\u636E',
                    },
                );
            },
        },
        /*#__PURE__*/ React__default['default'].createElement(
            _Table__default['default'],
            _objectSpread2(
                {
                    bordered: true,
                },
                props,
            ),
        ),
    );
};

Table.Summary = _Table__default['default'].Summary;

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

    var _useState = React.useState([]),
        _useState2 = _slicedToArray(_useState, 2),
        advancedSearchFormConfigs = _useState2[0],
        setAdvancedSearchFormConfigs = _useState2[1];

    var _useState3 = React.useState([]),
        _useState4 = _slicedToArray(_useState3, 2),
        multipleSelectListConfigs = _useState4[0],
        setMultipleSelectListConfigs = _useState4[1];

    var _useState5 = React.useState(false),
        _useState6 = _slicedToArray(_useState5, 2),
        isFullScreen = _useState6[0],
        setIsFullScreen = _useState6[1];

    var _useState7 = React.useState(false),
        _useState8 = _slicedToArray(_useState7, 2),
        customSizeVisible = _useState8[0],
        setCustomSizeVisible = _useState8[1];

    var _useState9 = React.useState('default'),
        _useState10 = _slicedToArray(_useState9, 2),
        tableSize = _useState10[0],
        setTableSize = _useState10[1];

    var _useState11 = React.useState([]),
        _useState12 = _slicedToArray(_useState11, 2),
        currentColumns = _useState12[0],
        setCurrentColumns = _useState12[1];

    var _useState13 = React.useState([]),
        _useState14 = _slicedToArray(_useState13, 2),
        multipleColumnListConfigs = _useState14[0],
        setMultipleColumnListConfigs = _useState14[1];

    var container = React.useRef();
    var customSizeContainer = React.useRef();
    var customSizeTooltipContainer = React.useRef();
    var searchSettingContainer = React.useRef();
    var searchSettingTooltipContainer = React.useRef();
    var refreshContainer = React.useRef();
    var fullScreenContainer = React.useRef();

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

    React.useEffect(
        function() {
            searchConfigsHandler(true);
            columnsConfigsHandler(true);
        },
        [columns],
    );
    React.useEffect(function() {
        watchFullScreen();
        return function() {
            return removeFullScreen();
        };
    }, []);
    return /*#__PURE__*/ React__default['default'].createElement(
        'div',
        {
            style: {
                background: '#ffffff',
                padding: isFullScreen ? '16px' : '0px',
            },
            ref: container,
        },
        /*#__PURE__*/ React__default['default'].createElement(
            _Space__default['default'],
            {
                direction: 'vertical',
                style: {
                    width: '100%',
                },
            },
            columns && columns.length !== 0 && needSearch
                ? /*#__PURE__*/ React__default['default'].createElement(
                      React__default['default'].Fragment,
                      null,
                      /*#__PURE__*/ React__default['default'].createElement(
                          AdvancedSearchForm,
                          {
                              configs: advancedSearchFormConfigs,
                              onFinish: onSearch,
                              onReset: onReset,
                              initialValues: initialValues,
                          },
                      ),
                      /*#__PURE__*/ React__default['default'].createElement(
                          _Divider__default['default'],
                          {
                              style: {
                                  margin: '8px 0',
                              },
                          },
                      ),
                  )
                : null,
            /*#__PURE__*/ React__default['default'].createElement(
                _Row__default['default'],
                {
                    justify: 'space-between',
                    style: {
                        paddingRight: 16,
                        paddingLeft: 16,
                    },
                },
                /*#__PURE__*/ React__default['default'].createElement(
                    _Space__default['default'],
                    {
                        size: 16,
                    },
                    actions
                        ? /*#__PURE__*/ React__default['default'].createElement(
                              React__default['default'].Fragment,
                              null,
                              actions,
                          )
                        : /*#__PURE__*/ React__default['default'].createElement(
                              'span',
                              null,
                              ' ',
                          ),
                ),
                /*#__PURE__*/ React__default['default'].createElement(
                    _Space__default['default'],
                    {
                        size: 16,
                    },
                    needRefresh
                        ? /*#__PURE__*/ React__default['default'].createElement(
                              _Tooltip__default['default'],
                              {
                                  title: '\u5237\u65B0',
                                  destroyTooltipOnHide: {
                                      keepParent: false,
                                  },
                                  getPopupContainer: function getPopupContainer() {
                                      return refreshContainer.current;
                                  },
                              },
                              /*#__PURE__*/ React__default[
                                  'default'
                              ].createElement(Icon, {
                                  type: 'icon-refresh',
                                  style: actionIconStyle,
                                  onClick: onRefresh,
                                  ref: refreshContainer,
                              }),
                          )
                        : null,
                    needCustomSize
                        ? /*#__PURE__*/ React__default['default'].createElement(
                              _Popover__default['default'],
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
                                  content: /*#__PURE__*/ React__default[
                                      'default'
                                  ].createElement(
                                      _Space__default['default'],
                                      {
                                          direction: 'vertical',
                                      },
                                      tableSizes.map(function(item, index) {
                                          return /*#__PURE__*/ React__default[
                                              'default'
                                          ].createElement(
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
                              /*#__PURE__*/ React__default[
                                  'default'
                              ].createElement(
                                  _Tooltip__default['default'],
                                  {
                                      title: '\u5BC6\u5EA6',
                                      destroyTooltipOnHide: {
                                          keepParent: false,
                                      },
                                      getPopupContainer: function getPopupContainer() {
                                          return customSizeTooltipContainer.current;
                                      },
                                  },
                                  /*#__PURE__*/ React__default[
                                      'default'
                                  ].createElement(icons.ColumnHeightOutlined, {
                                      style: actionIconStyle,
                                      ref: customSizeContainer,
                                  }),
                                  /*#__PURE__*/ React__default[
                                      'default'
                                  ].createElement('span', {
                                      ref: customSizeTooltipContainer,
                                  }),
                              ),
                          )
                        : null,
                    needSetting && columns && columns.length !== 0
                        ? /*#__PURE__*/ React__default['default'].createElement(
                              _Popover__default['default'],
                              {
                                  placement: 'bottomLeft',
                                  destroyTooltipOnHide: {
                                      keepParent: false,
                                  },
                                  trigger: 'click',
                                  getPopupContainer: function getPopupContainer() {
                                      return searchSettingContainer.current;
                                  },
                                  content: /*#__PURE__*/ React__default[
                                      'default'
                                  ].createElement(
                                      _Space__default['default'],
                                      {
                                          direction: 'vertical',
                                          style: {
                                              width: '100%',
                                          },
                                      },
                                      /*#__PURE__*/ React__default[
                                          'default'
                                      ].createElement(
                                          _Space__default['default'],
                                          null,
                                          /*#__PURE__*/ React__default[
                                              'default'
                                          ].createElement(Icon, {
                                              type: 'icon-item-prefix',
                                              style: {
                                                  fontSize: 12,
                                                  color: '#595959',
                                              },
                                          }),
                                          /*#__PURE__*/ React__default[
                                              'default'
                                          ].createElement(
                                              _Checkbox__default['default'],
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
                                      /*#__PURE__*/ React__default[
                                          'default'
                                      ].createElement(
                                          _Divider__default['default'],
                                          {
                                              style: {
                                                  margin: '4px 0',
                                              },
                                          },
                                      ),
                                      /*#__PURE__*/ React__default[
                                          'default'
                                      ].createElement(MultipleSelectList, {
                                          configs: multipleColumnListConfigs,
                                          selectHandler: columnsListConfigsHandler,
                                      }),
                                  ),
                              },
                              /*#__PURE__*/ React__default[
                                  'default'
                              ].createElement(
                                  _Tooltip__default['default'],
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
                                  /*#__PURE__*/ React__default[
                                      'default'
                                  ].createElement(Icon, {
                                      type: 'icon-system',
                                      style: actionIconStyle,
                                      ref: searchSettingContainer,
                                  }),
                                  /*#__PURE__*/ React__default[
                                      'default'
                                  ].createElement('span', {
                                      ref: searchSettingTooltipContainer,
                                  }),
                              ),
                          )
                        : null,
                    needFullScreen
                        ? /*#__PURE__*/ React__default['default'].createElement(
                              'div',
                              {
                                  onClick: function onClick() {
                                      return fullScreenHandler();
                                  },
                              },
                              /*#__PURE__*/ React__default[
                                  'default'
                              ].createElement(
                                  _Tooltip__default['default'],
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
                                      ? /*#__PURE__*/ React__default[
                                            'default'
                                        ].createElement(
                                            icons.FullscreenOutlined,
                                            {
                                                style: actionIconStyle,
                                                ref: fullScreenContainer,
                                            },
                                        )
                                      : /*#__PURE__*/ React__default[
                                            'default'
                                        ].createElement(
                                            icons.FullscreenExitOutlined,
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
            /*#__PURE__*/ React__default['default'].createElement(
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
        /*#__PURE__*/ React__default['default'].createElement(
            _Drawer__default['default'],
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
                    ? /*#__PURE__*/ React__default['default'].createElement(
                          _Row__default['default'],
                          {
                              justify: 'space-between',
                          },
                          /*#__PURE__*/ React__default['default'].createElement(
                              'span',
                              null,
                          ),
                          /*#__PURE__*/ React__default['default'].createElement(
                              _Space__default['default'],
                              null,
                              /*#__PURE__*/ React__default[
                                  'default'
                              ].createElement(
                                  _Button__default['default'],
                                  {
                                      onClick: onDrawerClose,
                                  },
                                  '\u53D6\u6D88',
                              ),
                              /*#__PURE__*/ React__default[
                                  'default'
                              ].createElement(
                                  _Button__default['default'],
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
        /*#__PURE__*/ React__default['default'].createElement(
            _Modal__default['default'],
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
                /*#__PURE__*/ React__default['default'].createElement(
                    _Col__default['default'],
                    {
                        span: 24 / tmpRowCols,
                        key: _i,
                    },
                    _config.type === 'file'
                        ? /*#__PURE__*/ React__default['default'].createElement(
                              _Form__default['default'].Item,
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
                        : /*#__PURE__*/ React__default['default'].createElement(
                              _Form__default['default'].Item,
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
        ? /*#__PURE__*/ React__default['default'].createElement(
              'div',
              {
                  style: {
                      paddingRight: 16,
                      paddingLeft: 16,
                  },
              },
              /*#__PURE__*/ React__default['default'].createElement(
                  _ConfigProvider__default['default'],
                  {
                      renderEmpty: function renderEmpty() {
                          return /*#__PURE__*/ React__default[
                              'default'
                          ].createElement(_Empty__default['default'], {
                              description: '\u6682\u65E0\u6570\u636E',
                          });
                      },
                  },
                  /*#__PURE__*/ React__default['default'].createElement(
                      _Form__default['default'],
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
                      /*#__PURE__*/ React__default['default'].createElement(
                          _Row__default['default'],
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

Object.keys(antd).forEach(function(k) {
    if (k !== 'default')
        Object.defineProperty(exports, k, {
            enumerable: true,
            get: function() {
                return antd[k];
            },
        });
});
Object.defineProperty(exports, 'Input', {
    enumerable: true,
    get: function() {
        return _Input__default['default'];
    },
});
exports.AdvancedForm = AdvancedSearchForm$1;
exports.AdvancedSearchForm = AdvancedSearchForm;
exports.Icon = Icon;
exports.MultipleSelectList = MultipleSelectList;
exports.Table = Table;
exports.TablePro = TablePro;
