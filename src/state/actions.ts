// https://codesandbox.io/s/quirky-grass-4f0yf?fontsize=14&hidenavigation=1&theme=dark&file=/src/state/actions.ts
import { AppState } from './state';

export enum ActionType {
    SetIsRiding,
    SetMapLoaded,
}

export interface SetIsRiding {
    type: ActionType.SetIsRiding;
    payload: boolean;
}

export interface SetMapLoaded {
    type: ActionType.SetMapLoaded;
    payload: boolean;
}

export type StateActions = SetIsRiding | SetMapLoaded;