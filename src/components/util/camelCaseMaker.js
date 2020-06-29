const a  = ' AMi RaKIb'  //amiRakib

const aa = a.trim().split(' ').map( t => t.toLowerCase())

const aaa = aa[0] +  aa[1].charAt(0).toUpperCase() + aa[1].slice(1)

console.log(aaa)