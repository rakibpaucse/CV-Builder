

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
console.log('in rest' , current);

    for (var key in current){
        if (current.hasOwnProperty(key)){
            if (typeof current[key] === 'string'){
                current[key] = '';
            }
        }
    }
    console.log('in rest' , current);

    return current

}