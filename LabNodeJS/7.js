//non case sensitive
let stdin = process.openStdin()
stdin.addListener("data",(d) => {
    if((d.length%2) == 0){
      var half = (d.length-2)/2
      var check = 0
      for(let i=0 ; i<=half ; i++){
          if(d.toString().toLowerCase().substring(half-(i+1),half-i) == d.toString().toLowerCase().substring(half+i,half+(i+1)))
                check += 1
      }
      if(check == half)
          console.log("Is Palindrome")
      else
          console.log("Not Palindrome")
    }
    else
        console.log("Not Palindrome")
    stdin.end()
})
