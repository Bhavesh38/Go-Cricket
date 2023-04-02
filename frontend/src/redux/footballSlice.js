import {createSlice} from '@reduxjs/toolkit';

export const footballSlice= createSlice({
    name: 'footballSlice',
    initialState: {
        serieA: [],
    },
    reducers: {
        setSerieA: (state, action) => {
            // console.log(action.payload.events);
            state.serieA = action.payload.events.filter((value) => value?.tournament?.name === 'Serie A');
        },
    },
});
export const { setSerieA } = footballSlice.actions;
export default footballSlice.reducer;