import { createElement } from "react";
import { render } from "react-dom";

import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import "@/main/global.scss";
import { App } from "@/components/App";

render(createElement(App, {}, null), document.getElementById("root"));
