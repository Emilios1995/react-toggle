var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React from "react";
import createReactClass from "create-react-class";
import classNames from "classnames";
import Check from "./check";
import X from "./x";

let _class = function (_React$PureComponent) {
  _inherits(_class, _React$PureComponent);

  function _class(props) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

    _this.handleClick = event => {
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

    _this.handleFocus = () => {
      _this.setState({ hasFocus: true });
    };

    _this.handleBlur = () => {
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
      var classes = classNames("react-toggle", {
        "react-toggle--checked": this.state.checked,
        "react-toggle--focus": this.state.hasFocus,
        "react-toggle--disabled": this.props.disabled
      });

      var labelText = this.props.label;
      var label = labelText ? React.createElement(
        "span",
        { className: "toggle-input-label" },
        labelText
      ) : undefined;

      return React.createElement(
        "div",
        { className: classes, onClick: this.handleClick },
        React.createElement(
          "div",
          { className: "react-toggle-track" },
          React.createElement(
            "div",
            { className: "react-toggle-track-check" },
            React.createElement(Check, null)
          ),
          React.createElement(
            "div",
            { className: "react-toggle-track-x" },
            React.createElement(X, null)
          ),
          label
        ),
        React.createElement("div", { className: "react-toggle-thumb" }),
        React.createElement("input", _extends({
          ref: ref => {
            this.input = ref;
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
}(React.PureComponent);

_class.displayName = "Toggle";
_class.propTypes = {
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  "aria-labelledby": PropTypes.string,
  "aria-label": PropTypes.string
};
export default _class;
