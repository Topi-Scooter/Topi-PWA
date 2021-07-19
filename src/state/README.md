Using AppState:
    - Import AppContext.
        - i.e. ```import { AppContext } from '../state/context';```
    - Import your setter method from reducer.ts
        - i.e. ```import { setIsRiding } from '../state/reducer';```
    - Within in the components function get state and dispatch from the context
        - i.e. ```const { state, dispatch } = useContext(AppContext);```
    - Read state variables with ```state.VAR_NAME```
        - i.e. ```state.isRiding```
    - Write state variable with ```dispatch(VAR_SETTER(value))```
        - i.e. ```dispatch(setIsRiding(true))```

    Example file:
    - BottomMenu.tsx

    



Adding to the AppState:

    state.ts
    - Add any new state variables to the propper state interface

    actions.ts
    - Create new interface for the new action
        - Note: Every action has a type, and payload (See existing examples)
    - Add that action type to ActionType
    - Export the new ActionType

    reducer.ts
    - Import your new action
    - Create a new case within the AppReducer for that action
    - Create a call able function for creating Action

    context.ts
    - This is the context for the state, allowing all parts of the App to access the state.
    - Nothing to add here.


Resources:
 - Blog: https://dev.to/hellomuthu23/how-to-use-usereducer-and-usecontext-hooks-with-typescript-in-react-14d1
 - Blog Code: https://codesandbox.io/s/quirky-grass-4f0yf?fontsize=14&hidenavigation=1&theme=dark
 - useReducer: https://www.youtube.com/watch?v=kK_Wqx3RnHk
 - React hooks overview: https://www.youtube.com/watch?v=TNhaISOUy6Q
