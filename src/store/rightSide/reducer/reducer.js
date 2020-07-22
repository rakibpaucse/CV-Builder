import {SET_COLOR} from '../action/actionTypes'
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

        default : {
            return state
        }
    }
}

export default leftReducer