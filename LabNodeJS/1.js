var person = {name:"Bob", age:45, birthday:"5/11/1900",
    max:function max(a,b){
                if(a<b)
                  return b
                else
                  return a
             }}

console.log("Name      : " + person.name)
console.log("Age       : " + person.age)
console.log("Birthday  : " + person.birthday)
console.log("MaxNumber : " + person.max(10,1))
