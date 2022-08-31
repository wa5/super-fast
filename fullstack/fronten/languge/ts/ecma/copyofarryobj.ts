interface r<T>{
    [key:string]:T
}
type u<T> = r<T> &{
    a:number,
    b:number,
    c:number,

}

var objorg:u<number>={a:1,b:2,c:3}
var objcopy={...objorg}
console.log(objorg)
console.log(objcopy)
objcopy.d=34
console.log(objorg)
console.log(objcopy)

// var ag=[2,3,4]
// var copy=[...ag]
// console.log(copy)
// console.log(ag)
// copy.push(99)
// console.log(copy)
// console.log(ag)