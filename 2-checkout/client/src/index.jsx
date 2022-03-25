import React from "react";
import { render } from "react-dom";
import Forms from './Forms.jsx';

render(
  <div>
    <p>Hello, World!</p>
    <p>
      <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
    </p>
    <Forms />
  </div>,
  document.getElementById("root")
);
