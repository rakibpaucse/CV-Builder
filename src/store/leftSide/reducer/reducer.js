import { ADD_TAB_VALUE , ADD_INPUT_VALUE } from '../action/actionTypes'
import info from '../../../constant/index'

const initial_state =  info;

const reducer = ( state = initial_state , action ) => {

    switch(action.type) {


        case ADD_INPUT_VALUE : {
           let a = state[0].items[0]
           console.log(a);
           
            return {
                ...state ,
                a : {
                    photoUrl : action.value
                }
            }
        }

        case ADD_TAB_VALUE : {
            
            let b = action.path
                return {
                    ...state ,
                    [b] : action.value
                }
            
        }

        default : { 
            return state
        }
    } 
}


export default reducer