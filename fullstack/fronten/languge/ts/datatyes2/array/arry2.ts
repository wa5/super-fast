var obj=[{a:10,b:'boll'},
{a:10,b:'boll',c:'cat'},
{a:10,b:'boll',c:'cat',d:'dog'}]

console.log(obj.find((a)=>{return a.c=='cat'}))
console.log(obj.filter((a)=>{return a.c=='cat'}))