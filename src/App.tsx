import { RouteSectionProps } from "@solidjs/router";
import type { Component } from "solid-js";

const App: Component<RouteSectionProps> = (props) => {
  return <div class="w-full h-full">{props.children}</div>;
};

export default App;
