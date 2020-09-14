import { ADD_TAB_VALUE ,
         ADD_INPUT_VALUE , 
         ADD_LIST_ITEM , 
        RESET_OBJ,
        DELETE_LIST_VALUE,
        RESET_STORE,
        DEMO_STATE
     } from './actionTypes'
import {camalCaseMaker} from '../../../components/util/camelCaseMaker'

 

export const addInputValue = tabObj => ({
    type : ADD_INPUT_VALUE ,
    path : camalCaseMaker(tabObj.path) ,
    tab : camalCaseMaker(tabObj.tab) , 
    value : tabObj.value
})


export const addTabValue = tabObj => ({
    type : ADD_TAB_VALUE ,
    oldValue : tabObj.oldValue ,
    value : tabObj.value
})


export const addlistItem = tabObj => ({
    type : ADD_LIST_ITEM ,
    tab : camalCaseMaker(tabObj.tab) , 
    item : tabObj.item
})


export const resetObj = tabObj => ({
    type : RESET_OBJ ,
    tab : tabObj.tab
})


export const addRatingValue = tabObj => ({
    type : ADD_INPUT_VALUE ,
    path : camalCaseMaker(tabObj.path) ,
    tab : camalCaseMaker(tabObj.tab) , 
    value : tabObj.value.newValue
})

export const deleteListValue = tabObj => ({
    type: DELETE_LIST_VALUE ,
    tab : camalCaseMaker(tabObj.tab) , 
    list : tabObj.list
})


export const resetStore = () => ({
    type: RESET_STORE ,

})

export const demoStore = () => ({
    type: DEMO_STATE ,
})