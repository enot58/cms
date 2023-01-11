import { createSlice } from "@reduxjs/toolkit";


// создаём стейты для полей

const initialState = {
    nameHome: '',
    numberHome: ''
}
// инициализация слайса(создаётся сам слайс)
export const homeSlice = createSlice({
    // Содержит опции
    // Даём имя этому редьюсеру
    name: 'home',
    // Изначальное состояние
    initialState,
    // Третий параметр редьюсеры
    // т.е. функции которыми будет управляться состояние
    reducers: {
        setNameHome: (state, action) => {
            state.nameHome = action.payload
        }
    }
})

export const { setNameHome } = homeSlice.actions;
export default homeSlice.reducer