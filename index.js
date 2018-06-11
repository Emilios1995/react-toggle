"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _createReactClass = require("create-react-class");

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _check = require("./check");

var _check2 = _interopRequireDefault(_check);

var _x = require("./x");

var _x2 = _interopRequireDefault(_x);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_React$PureComponent) {
  _inherits(_class, _React$PureComponent);

  function _class(props) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

    _this.handleClick = function (event) {
      var checkbox = _this.input;
      if (event.target !== checkbox) {
        event.preventDefault();
        checkbox.focus();
        checkbox.click();
        return;
      }

      if (!("checked" in _this.props)) {
        _this.setState({ checked: checkbox.checked });
      }
    };

    _this.handleFocus = function () {
      _this.setState({ hasFocus: true });
    };

    _this.handleBlur = function () {
      _this.setState({ hasFocus: false });
    };

    var checked = false;
    if ("checked" in props) {
      checked = props.checked;
    } else if ("defaultChecked" in props) {
      checked = props.defaultChecked;
    }

    _this.state = {
      checked: !!checked,
      hasFocus: false
    };
    return _this;
  }

  _createClass(_class, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if ("checked" in nextProps) {
        this.setState({ checked: !!nextProps.checked });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = (0, _classnames2.default)("react-toggle", {
        "react-toggle--checked": this.state.checked,
        "react-toggle--focus": this.state.hasFocus,
        "react-toggle--disabled": this.props.disabled
      });

      var labelText = this.props.label;
      var label = labelText ? _react2.default.createElement(
        "span",
        { className: "toggle-input-label" },
        labelText
      ) : undefined;

      return _react2.default.createElement(
        "div",
        { className: classes, onClick: this.handleClick },
        _react2.default.createElement(
          "div",
          { className: "react-toggle-track" },
          _react2.default.createElement(
            "div",
            { className: "react-toggle-track-check" },
            _react2.default.createElement(_check2.default, null)
          ),
          _react2.default.createElement(
            "div",
            { className: "react-toggle-track-x" },
            _react2.default.createElement(_x2.default, null)
          ),
          label
        ),
        _react2.default.createElement("div", { className: "react-toggle-thumb" }),
        _react2.default.createElement("input", _extends({
          ref: function ref(_ref) {
            _this2.input = _ref;
          },
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          className: "react-toggle-screenreader-only",
          type: "checkbox"
        }, this.props))
      );
    }
  }]);

  return _class;
}(_react2.default.PureComponent);

_class.displayName = "Toggle";
_class.propTypes = {
  checked: _propTypes2.default.bool,
  defaultChecked: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  name: _propTypes2.default.string,
  value: _propTypes2.default.string,
  id: _propTypes2.default.string,
  label: _propTypes2.default.string,
  "aria-labelledby": _propTypes2.default.string,
  "aria-label": _propTypes2.default.string
};
exports.default = _class;
