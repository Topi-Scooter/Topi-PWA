// https://codesandbox.io/s/quirky-grass-4f0yf?fontsize=14&hidenavigation=1&theme=dark&file=/src/state/reducer.ts
// https://www.youtube.com/watch?v=kK_Wqx3RnHk
import { BatteryPercentages, State } from './state'
import { ActionType, SetBatteryLevel, SetIsAdmin, SetIsRiding, SetMapLoaded, StateActions } from './actions'

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
        case ActionType.SetIsAdmin:
            return {
                ...state, // Copy existing state
                user: {
                    ...state.user,
                    isAdmin: action.payload 
                }   
            }

        /* --Scooter State Cases-- */
        case ActionType.SetBatteryLevel:
            return {
                ...state, // Copy existing state
                scooter: {
                    ...state.scooter,
                    batteryLevel: action.payload 
                }
            }

        case ActionType.setBikeId:
            return {
                ...state, // Copy existing state
                scooter: {
                    ...state.scooter,
                    bikeId: action.payload 
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
export const setIsAdmin = (isAdmin: boolean): SetIsAdmin => ({
    type: ActionType.SetIsAdmin,
    payload: isAdmin,
})

/* --Scooter State Setter Functions-- */
export const setBatteryLevel = (batteryLevel: BatteryPercentages): SetBatteryLevel => ({
    type: ActionType.SetBatteryLevel,
    payload: batteryLevel,
})

export const setBikeId = (bikeId: string): any => ({
    type: ActionType.setBikeId,
    payload: bikeId,
})

/* --App State Setter Functions-- */
export const setMapLoaded = (mapIsLoaded: boolean): SetMapLoaded => ({
    type: ActionType.SetMapLoaded,
    payload: mapIsLoaded,
})