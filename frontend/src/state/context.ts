// https://codesandbox.io/s/quirky-grass-4f0yf?fontsize=14&hidenavigation=1&theme=dark&file=/src/state/context.ts
import React from "react";
import { State, initialAppState } from "./state";
import { StateActions } from "./actions";

export const AppContext = React.createContext<{
    state: State;
    dispatch: React.Dispatch<StateActions>
}>({
    state: initialAppState,
    dispatch: () => undefined,
})