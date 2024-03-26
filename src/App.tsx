import { RouteSectionProps } from "@solidjs/router";
import type { Component } from "solid-js";

const App: Component<RouteSectionProps> = (props) => {
  return (
    <div class="w-full h-full">
      {/* app */}
      {props.children}
      {/* <A href="/button-example-abc">跳转</A> */}
    </div>
  );
};

export default App;
