// https://codesandbox.io/s/quirky-grass-4f0yf?fontsize=14&hidenavigation=1&theme=dark&file=/src/state/state.ts
export enum BatteryPercentages {
    Battery20 = "Battery20",
    Battery30 = "Battery30",
    Battery50 = "Battery50",
    Battery60 = "Battery60",
    Battery80 = "Battery80",
    Battery90 = "Battery90",
    BatteryFull = "BatteryFull"
}


export type UserState = {
    isRiding: boolean;
    isAdmin: boolean;
};
export type ScooterState = {
    batteryLevel: BatteryPercentages;
    bikeId: string;
};
export type AppState = {
    mapIsLoaded: boolean
};

export interface State {
    user: UserState;
    scooter: ScooterState;
    app: AppState
}

// TODO: fetch data
export const initialAppState: State = {
    user: {
        isRiding: false,
        isAdmin: false,
    },
    scooter: {
        batteryLevel: BatteryPercentages.BatteryFull,
        bikeId: " "
    },
    app: {
        mapIsLoaded: false,
    },
}