import { createSlice } from "@reduxjs/toolkit";

export const articleSlice = createSlice({
    name: "articleSlice",
    initialState: {
        articles: [],
    },
    reducers: {
        setArticles: (state, action) => {
            state.articles = action.payload;
        }
    }
})

export const { setArticles } = articleSlice.actions;
export default articleSlice.reducer;