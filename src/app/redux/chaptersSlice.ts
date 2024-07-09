import { useFetch } from "@/hooks";
import {  ChapterState, IChapterResponse, IJuzsResponse } from "@/interfaces";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchChapters = createAsyncThunk<IChapterResponse, string|undefined>('chapter/getChapters',()=>useFetch('/chapters'))

export const fetchJuzs = createAsyncThunk<IJuzsResponse, string|undefined>('chapter/getJuzs',()=>useFetch('/juzs'))



const initialState: ChapterState = {
    chapter: {
        data: [],
        loading: false,
        error: null
    },
    juzs:{
        data: [],
        loading: false,
        error: null
    }
};

const chapterSlice = createSlice({
    name: "chapter",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchChapters.pending,(state)=>{
            console.log('loading')
            state.chapter.loading=true
        }),
        builder.addCase(fetchChapters.rejected,(state,action)=>{
            console.log(action.error.message)
            state.chapter.error=null;
        }),
        builder.addCase(fetchChapters.fulfilled,(state,action)=>{
            // console.log("fullfild",action.payload)
            state.chapter.data=action.payload.chapters;
        });
        builder.addCase(fetchJuzs.fulfilled,(state,action)=>{
            // console.log("fullfild",action.payload)
            state.juzs.data=action.payload.juzs;
        });
        builder.addCase(fetchJuzs.pending,(state)=>{
            console.log('loading')
            state.juzs.loading=true
        })
    }
    

})

export default chapterSlice.reducer;