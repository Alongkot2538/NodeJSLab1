/*add(2)(3)

console.log(add)
console.log(add.x)
//console.log(y)*/

function add(x) {
	return function(y){
		return x+y;
	}

}
console.log(add(2)(3));
//
function Add(x,y){
	return x+y;
}
console.log (Add(2,3))