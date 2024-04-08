import { configureStore, createSlice } from '@reduxjs/toolkit'

let event = createSlice({
    name: 'events',
    initialState: {
        currentEvent: 1,
        nextEventA: 2,
        nextEventB: 3,
    },
    reducers: {
        changeEvent(state, action) {
            state.currentEvent = action.payload.currentEvent;
            state.nextEventA = action.payload.nextEventA;
            state.nextEventB = action.payload.nextEventB;
        }
    }
});

export let { changeEvent } = event.actions

export default configureStore({
    reducer: {
        event: event.reducer
    },
});