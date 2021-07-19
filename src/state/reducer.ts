// https://codesandbox.io/s/quirky-grass-4f0yf?fontsize=14&hidenavigation=1&theme=dark&file=/src/state/reducer.ts
// https://www.youtube.com/watch?v=kK_Wqx3RnHk
import { AppState } from './state'
import { ActionType, SetIsRiding, StateActions } from './actions'

export function AppReducer(state: AppState, action: StateActions): AppState {
    switch (action.type) {
        case ActionType.SetIsRiding:
            let newState = {
                ...state, // Copy existing state
                isRiding: action.payload // Override isRiding with payload
            }
            return newState;
        default:
            return state;
    }
}

export const setIsRiding = (isRiding: boolean): SetIsRiding => ({
    type: ActionType.SetIsRiding,
    payload: isRiding,
})