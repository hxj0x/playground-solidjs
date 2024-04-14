/* @refresh reload */
import { render } from "solid-js/web";

import { Route, Router } from "@solidjs/router";
import { For, JSX } from "solid-js";
import { createStore } from "solid-js/store";
import App from "./App";
import { DatepickerPage } from "./components/DatepickerPage";
import "./index.css";
import { Layout } from "./layout";
import { ButtonExample } from "./pages/ButtonExample";
import { DiscordPage } from "./pages/discord";
import { CollapsibleTestPage } from "./pages/headless/CollapsibleTestPage";
import { HeadlessTestPage } from "./pages/headless/HeadLessTestPage";
import { LoginPage } from "./pages/login/loginPage";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

const Main = () => {
  // 可以通过这样实现动态添加或删除路由
  const [routes, setRoutes] = createStore<RouterTable[]>([
    { path: "/button-example", component: ButtonExample },
    { path: "/discord-page", component: DiscordPage },
    { path: "/", component: Layout },
    { path: "/login", component: LoginPage },
    { path: "/datepicker", component: DatepickerPage },
    { path: "/HeadlessTestPage", component: HeadlessTestPage },
    { path: "/CollapsibleTestPage", component: CollapsibleTestPage },
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
    <Router root={App}>
      <For each={routes}>
        {(item, getI) => {
          // console.log("rerender", item.path);
          return <Route path={item.path} component={item.component} />;
        }}
      </For>
    </Router>
  );
};
render(Main, root!);

interface RouterTable {
  path: string;
  component: (props: any) => JSX.Element;
}
