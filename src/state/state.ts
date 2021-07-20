// https://codesandbox.io/s/quirky-grass-4f0yf?fontsize=14&hidenavigation=1&theme=dark&file=/src/state/state.ts
export interface AppState {
    isRiding: boolean;
    mapIsLoaded: boolean
}

// TODO: fetch data
export const initialAppState: AppState = {
    isRiding: false,
    mapIsLoaded: false,
}