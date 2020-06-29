import { ADD_TAB_VALUE , ADD_INPUT_VALUE } from './actionTypes'

export const addTabValue = tabObj => ({
    type : ADD_TAB_VALUE ,
    path : tabObj.path ,
    value : tabObj.value
})

export const addInputValue = tabObj => ({
    type : ADD_INPUT_VALUE ,
    path : tabObj.path ,
    value : tabObj.value
})