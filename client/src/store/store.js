import { configureStore } from "@reduxjs/toolkit";
import userSlice from '../features/home/homeSlice.js'

//Создаём слайсы в папке features

export const store = configureStore({
    reducer: {
        home: userSlice,
    },
})