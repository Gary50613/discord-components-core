import { h } from '@stencil/core';
export default function UserLeave(props) {
  return (h("svg", Object.assign({}, props, { "aria-hidden": "false", width: "18", height: "18", viewBox: "0 0 18 18" }),
    h("g", { fill: "none", "fill-rule": "evenodd", stroke: "none", "stroke-width": "1" },
      h("path", { d: "M18 0H0v18h18z" }),
      h("path", { fill: "#ed4245", d: "M3.8 8l3.6-3.6L6 3 0 9l6 6 1.4-1.4L3.8 10H18V8" }))));
}
