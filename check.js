import React from 'react';

export default class extends React.Component {
  render() {
    return React.createElement(
      "svg",
      { width: "14", height: "11", viewBox: "0 0 14 11" },
      React.createElement(
        "title",
        null,
        "switch-check"
      ),
      React.createElement("path", { d: "M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0", fill: "#fff", fillRule: "evenodd" })
    );
  }
}
