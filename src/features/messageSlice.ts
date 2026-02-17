import { createSlice } from "@reduxjs/toolkit";
import { Message } from "@/types/types";

type InitialStateType = {
    onyourdata: Message[];
}

const initialState: InitialStateType = {
    onyourdata: []
}

export const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        inputMessageToReduxStore: (state, action) => {
            if (action.payload.pathname === "/") {
                state.onyourdata.push(action.payload);
            }
        }
    }
})

export const { inputMessageToReduxStore } = messageSlice.actions;
export const selectMessage = (state: { message: InitialStateType }) => state.message;
export default messageSlice.reducer;