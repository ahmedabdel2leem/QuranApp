import { configureStore } from "@reduxjs/toolkit";
import chapterReducer from './chaptersSlice'
export const store = configureStore({
    reducer:{
        reChapters : chapterReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch