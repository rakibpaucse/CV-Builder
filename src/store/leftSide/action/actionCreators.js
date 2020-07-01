import { ADD_TAB_VALUE , ADD_INPUT_VALUE } from './actionTypes'
import {camalCaseMaker} from '../../../components/util/camelCaseMaker'

export const addTabValue = tabObj => ({
    type : ADD_TAB_VALUE ,
    path : tabObj.path ,
    value : tabObj.value
})

export const addInputValue = tabObj => ({
    type : ADD_INPUT_VALUE ,
    path : camalCaseMaker(tabObj.path) ,
    tab : camalCaseMaker(tabObj.tab) , 
    value : tabObj.value
})