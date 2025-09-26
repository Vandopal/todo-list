import { configureStore } from "@reduxjs/toolkit";
import todoReducer from  "./todoSlice/todoSlice.js"

export const store = configureStore({
    reducer : {
        todos : todoReducer
    }
})