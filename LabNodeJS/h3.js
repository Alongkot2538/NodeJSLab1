exports = h3 =() => {
const members = [ 
   {name: "Alongkot", age: 24,salary: 10000,}, 
   {name: "Haow", age: 48,salary: 15000,}, 
   {name: "Chis", age: 18,salary: 20000,}, 
   {name: "John", age: 30,salary: 25000,}
]
const result = members.filter((member) => {
  return member.salary > 20000
})
console.log(result)}
