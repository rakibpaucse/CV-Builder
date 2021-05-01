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


export const removeUnderScore = text => {
    const data = []   
    var removeUnderScoreText = []

    for( var i = 0 ; i < text.length ; i++){
      data.push(text[i])
    }
    
    data.map( dt  => (dt === '_') ? 
        removeUnderScoreText.push(' ') : removeUnderScoreText.push(dt)  
    )

    return removeUnderScoreText
}



export const hexToRgb = (hexCode, opacity) => {

    let hex = hexCode.replace('#', '');
    
    if (hex.length === 3) {
        hex += hex
    }    
    
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgba(${r},${g},${b},${opacity / 100})`;
}
