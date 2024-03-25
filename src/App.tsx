import { RouteSectionProps } from "@solidjs/router";

const App: Component<RouteSectionProps> = (props) => {
    // console.log(props);
    return (
        <div class="w-full h-full">
            {props.children}
        </div>


    );
};

import type { Component } from 'solid-js';

export default App;
