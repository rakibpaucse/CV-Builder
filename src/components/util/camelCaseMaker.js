export const nonCamelCaseMaker = text => {
    const data = []   
    var nonCamelCase = []

    for( var i = 0 ; i < text.length ; i++){
      data.push(text[i])
    }
    
    data.map( dt  => ((dt.charCodeAt(0) > 65) && (dt.charCodeAt(0) < 90)) ? 
        nonCamelCase.push(` ${dt}`) : nonCamelCase.push(dt)  
    )
    
    nonCamelCase = nonCamelCase.join('')
    nonCamelCase = nonCamelCase.charAt(0).toUpperCase() + nonCamelCase.slice(1)

   
    return nonCamelCase;
  }
  

export const camalCaseMaker = text => {

    text = text.toLowerCase()
    const a = text.trim().split(' ').map( t => t.toLowerCase())
    if(a.length >= 2){
        const b = a[0] +  a[1].charAt(0).toUpperCase() + a[1].slice(1)
        return b
    }

    return a[0]
}

export const renameObjectKey = (oldObj, oldName, newName) => {
    oldName = camalCaseMaker(oldName)
    newName = camalCaseMaker(newName)
    
    const newObj = {};

    Object.keys(oldObj).forEach(key => {
        const value = oldObj[key];

        if (key === oldName) {
            newObj[newName] = value;
        } else {
            newObj[key] = value;
        }
    });
console.log(newObj);

    return newObj;
}


export const resetObj = current => {

    for (var key in current){
        if (current.hasOwnProperty(key)){
            
            if (typeof current[key] === 'string'){ 
                current[key] = '';               
            }
        }
    }

    return current

}



