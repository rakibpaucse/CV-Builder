import React from 'react'

const ListItem = ({itemData}) => {

    const iteratableData =[]

    for (var key in itemData){
        if (itemData.hasOwnProperty(key)){
            
            if (typeof itemData[key] === 'string'){ 
                iteratableData.push(itemData[key])               
            }
        }
    }

    console.log(iteratableData);
    
    
    return (
        <div>
            {
                Object.keys(itemData).map( data => {
                    if(iteratableData.includes(data)){
                                        
                    }
                })
            }
        </div>
    )
}

export default ListItem
