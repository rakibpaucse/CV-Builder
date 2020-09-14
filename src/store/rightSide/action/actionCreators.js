import {SET_COLOR} from './actionTypes'
import {SET_FONT} from './actionTypes'
import {SET_LANG} from './actionTypes'
import {SET_ACTION} from './actionTypes'

export const setTheColor = ({SecondaryColor , mainColor}) => ({
    type : SET_COLOR,
    SecondaryColor : SecondaryColor,
    mainColor : mainColor,
})

export const setTheFont = (font) => ({
    type : SET_FONT,
    font : font
})

export const setTheLang = (lang) => ({
    type : SET_LANG,
    lang : lang
})

export const setTheAction = ({action , value}) => ({
    type : SET_ACTION,
    [action] : value
})