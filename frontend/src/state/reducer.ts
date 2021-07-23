// https://codesandbox.io/s/quirky-grass-4f0yf?fontsize=14&hidenavigation=1&theme=dark&file=/src/state/reducer.ts
// https://www.youtube.com/watch?v=kK_Wqx3RnHk
import { BatteryPercentages, State } from './state'
import { ActionType, SetBatteryLevel, SetIsRiding, SetMapLoaded, StateActions } from './actions'

export function AppReducer(state: State, action: StateActions): State {
    switch (action.type) {

        /* --User State Cases-- */
        case ActionType.SetIsRiding:
            return {
                ...state, // Copy existing state
                user: {
                    ...state.user,
                    isRiding: action.payload // Override isRiding with payload
                }   
            }

        /* --Scooter State Cases-- */
        case ActionType.SetBatteryLevel:
            return {
                ...state, // Copy existing state
                scooter: {
                    ...state.scooter,
                    batteryLevel: action.payload // Override isRiding with payload
                }
            }

        /* --App State Cases-- */
        case ActionType.SetMapLoaded:
            return {
                ...state, // Copy existing state
                app: {
                    ...state.app,
                    mapIsLoaded: action.payload // Override isRiding with payload
                }
            }

        default:
            return state;
    }
}

/* ========================================================================= */

/* --User State Setter Functions-- */
export const setIsRiding = (isRiding: boolean): SetIsRiding => ({
    type: ActionType.SetIsRiding,
    payload: isRiding,
})

/* --Scooter State Setter Functions-- */
export const setBatteryLevel = (batteryLevel: BatteryPercentages): SetBatteryLevel => ({
    type: ActionType.SetBatteryLevel,
    payload: batteryLevel,
})

/* --App State Setter Functions-- */
export const setMapLoaded = (mapIsLoaded: boolean): SetMapLoaded => ({
    type: ActionType.SetMapLoaded,
    payload: mapIsLoaded,
})