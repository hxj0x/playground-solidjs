/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import { Route, Router } from "@solidjs/router";
import App from "./App";
import { ButtonExample } from "./pages/ButtonExample";

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => <Router root={App}>
  <Route path={"/button-example"} component={ButtonExample} />
</Router>, root!);