import {SET_COLOR} from '../action/actionTypes'
import {SET_FONT} from '../action/actionTypes'
import {SET_LANG} from '../action/actionTypes'
import {SET_ACTION} from '../action/actionTypes'
import initialState from '../../../constant/leftJson'

const leftReducer = ( state = initialState , action) => {
    switch(action.type){
        case SET_COLOR : {
            return{
                ...state ,
                color : {
                    ...state.color ,
                    mainColor : action.mainColor,
                    SecondaryColor : action.SecondaryColor,
                }
            }
        }

        case SET_FONT : {
            return{
                ...state ,
                font : {
                    ...state.font ,
                    selectedFont : action.font,
                }
            } 
        }


        case SET_LANG : {
            return{
                ...state ,
                lang : {
                    ...state.lang ,
                    selectedLang : action.lang,
                }
            } 
        } 


        case SET_ACTION : {
            const tab = Object.keys(action)[1]
            const value = Object.values(action)[1]

            return{
                ...state ,
                action : {
                    ...state.action,
                        [tab] : value,
                    }                   
                

            } 
        }


        default : {
            return state
        }
    }
}

export default leftReducer