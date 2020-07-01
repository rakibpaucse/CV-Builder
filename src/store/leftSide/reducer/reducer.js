import { ADD_TAB_VALUE , ADD_INPUT_VALUE } from '../action/actionTypes'
import info from '../../../constant/jsonFile'

const initial_state =  info;

const reducer = ( state = initial_state , action ) => {

    console.log(action);
    
//  action: {
//      type : ADD_INPUT_VALUE ,
//      value : 'https://www.example.me',
//      path : 'state[0].items[0].photoUrl'
//  }

        const tab = action.tab 
        const path = action.path
        const value = action.value


    switch(action.type) {
        
        case ADD_INPUT_VALUE : {
            return {
                ...state , 
                [tab] : {
                    ...state[tab],
                        items : {
                           ...state[tab].items , 
                           [path] : value
                       }

                    
                }
        }



            // return [

            //     {...state },
            //     state.profile[items][photoUrl] : 'rakib'
            // ]
                // state[0].items[0].photoUrl = action.value
            

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