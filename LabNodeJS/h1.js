exports = h1 = () => {

let stdin = process.openStdin()
stdin.addListener("data",(d) => {
	for(let i=1;i<12;i++)
	{
		console.log(d.toString().trim() + " x " + i + " = " + (d*i))

	}
	
	stdin.destroy()
})}

