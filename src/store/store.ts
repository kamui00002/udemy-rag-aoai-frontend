import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import messageReducer from "../features/messageSlice";

export const makeStore = () =>
    configureStore({
        reducer: {
            message: messageReducer,
        },
    });

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;