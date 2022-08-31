interface fruitess<T>{
    a:string,
    b:string,
    [key:string]:string|T,
    c?:string,
}
var fruite:fruitess<number>={a:'apple',b:'boll'}
fruite.c='cat'
fruite.c='cath'