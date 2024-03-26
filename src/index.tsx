/* @refresh reload */
import { render } from "solid-js/web";

import { Route, Router } from "@solidjs/router";
import { For, JSX } from "solid-js";
import { createStore } from "solid-js/store";
import App from "./App";
import "./index.css";
import { Button } from "./pages/ButtonExample";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

const Main = () => {
  // 可以通过这样实现动态添加或删除路由
  const [routes, setRoutes] = createStore<RouterTable[]>([
    { path: "/button-example", component: Button },
    // { path: "/promise-example", component: PromiseExample },
  ]);
  // const [getRoutes, setRoutes] = createSignal<RouterTable[]>([
  //   { path: "/button-example", component: ButtonExample },
  //   { path: "/button-example223", component: ButtonExample },
  // ]);

  // setTimeout(() => {
  //   setRoutes(
  //     (route, i) => {
  //       console.log("do");
  //       return route.path === "/button-example";
  //     },
  //     "path",
  //     "/button-example-abc"
  //   );
  // }, 5_000);

  return (
    <div>
      {/* hello */}
      <div>
        <Router root={App}>
          <For each={routes}>
            {(item, getI) => {
              // console.log("rerender", item.path);
              return <Route path={item.path} component={item.component} />;
            }}
          </For>
        </Router>
      </div>
    </div>
  );
};
render(Main, root!);

interface RouterTable {
  path: string;
  component: (props: any) => JSX.Element;
}
