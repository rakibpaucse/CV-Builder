import {
        ADD_TAB_VALUE , 
        ADD_INPUT_VALUE , 
        ADD_LIST_ITEM , 
        RESET_OBJ ,
        DELETE_LIST_VALUE
        } from '../action/actionTypes'
        
import info from '../../../constant/jsonFile'
import {renameObjectKey , resetObj } from '../../../components/util/camelCaseMaker'

const initial_state =  info;

const reducer = ( state = initial_state , action ) => {

    switch(action.type) {
        
        case ADD_INPUT_VALUE : {

                const tab = action.tab 
                const path = action.path
                const value = action.value

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
        }

        case ADD_TAB_VALUE : {
            const oldKey = action.oldValue 
            const newKey = action.value
            
            state = renameObjectKey(state , oldKey , newKey)
            
            return state
            
        }

        case ADD_LIST_ITEM : {
            const item = action.item 
            const tab = action.tab     
            return {
                ...state ,
                [tab] : {
                    ...state[tab],
                    items : {
                        ...state[tab].items,
                        list : [...state[tab].items.list ,item]
                    }
                }
            }
            
        }

        case RESET_OBJ : {
            let tab = action.tab
            let resetedState = resetObj(state[tab].items)
            
            return {
                ...state ,
                [tab] : {
                    ...state[tab],
                    items : resetedState
                }
            }
        }


       case DELETE_LIST_VALUE : {
           const tab = action.tab
           const list = action.list
           return{
               ...state ,
                [tab] : {
                    ...state[tab],
                    items : {
                        ...state[tab].items,
                        list: list
                    }
                }
           }
       }


        default : {  
            return state
        }
    } 
}


export default reducer