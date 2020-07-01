// const a  = ' AMi RaKIb'  //amiRakib

// const aa = a.trim().split(' ').map( t => t.toLowerCase())


// console.log(aaa)


export const camalCaseMaker = text => {
console.log(text);

    const a = text.trim().split(' ').map( t => t.toLowerCase())
    if(a.length >= 2){
        const b = a[0] +  a[1].charAt(0).toUpperCase() + a[1].slice(1)
        return b
    }

    return a
}