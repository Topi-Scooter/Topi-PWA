// https://codesandbox.io/s/quirky-grass-4f0yf?fontsize=14&hidenavigation=1&theme=dark&file=/src/state/actions.ts
import { BatteryPercentages, State } from './state';

export enum ActionType {
    /* --User State Actions-- */
    SetIsRiding,
    SetIsAdmin,

    /* --Scooter State Actions-- */
    SetBatteryLevel, // TODO: UI wont update this, server will | Look into this
    setBikeId,
    /* --App State Actions-- */
    SetMapLoaded,
}


/* --User State Actions-- */
export interface SetIsRiding {
    type: ActionType.SetIsRiding;
    payload: boolean;
}
export interface SetIsAdmin {
    type: ActionType.SetIsAdmin;
    payload: boolean;
}

/* --Scooter State Actions-- */
export interface SetBatteryLevel {
    type: ActionType.SetBatteryLevel;
    payload: BatteryPercentages;
}

export interface setBikeId {
    type: ActionType.setBikeId;
    payload: string;
}
/* --App State Actions-- */
export interface SetMapLoaded {
    type: ActionType.SetMapLoaded;
    payload: boolean;
}

export type StateActions = SetIsRiding | SetMapLoaded | SetBatteryLevel | SetIsAdmin | setBikeId;