import { ADD_TAB_VALUE ,
         ADD_INPUT_VALUE , 
         ADD_LIST_ITEM , 
        RESET_OBJ,
        ADD_RATING_VALUE
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