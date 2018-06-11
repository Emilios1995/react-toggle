var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import PropTypes from 'prop-types';
import React from "react";
import createReactClass from "create-react-class";
import classNames from "classnames";
import Check from "./check";
import X from "./x";

export default class _class extends React.PureComponent {

  constructor(props) {
    super(props);

    this.handleClick = event => {
      var checkbox = this.input;
      if (event.target !== checkbox) {
        event.preventDefault();
        checkbox.focus();
        checkbox.click();
        return;
      }

      if (!("checked" in this.props)) {
        this.setState({ checked: checkbox.checked });
      }
    };

    this.handleFocus = () => {
      this.setState({ hasFocus: true });
    };

    this.handleBlur = () => {
      this.setState({ hasFocus: false });
    };

    var checked = false;
    if ("checked" in props) {
      checked = props.checked;
    } else if ("defaultChecked" in props) {
      checked = props.defaultChecked;
    }

    this.state = {
      checked: !!checked,
      hasFocus: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if ("checked" in nextProps) {
      this.setState({ checked: !!nextProps.checked });
    }
  }

  render() {
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
}
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
