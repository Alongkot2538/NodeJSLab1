/*exports = test1 = () => {
  let stdin = process.openStdin()
  stdin.addListener("data",(score) => {
      if(score < 50 && score >= 0)
          console.log("Grade : E")
      else if(score >= 50 && score < 55)
          console.log("Grade : D")
      else if(score >= 55 && score < 60)
          console.log("Grade : D+")
      else if(score >= 60 && score < 65)
          console.log("Grade : C")
      else if(score >= 65 && score < 70)
          console.log("Grade : C+")
      else if(score >= 70 && score < 75)
          console.log("Grade : B")
      else if(score >= 75 && score < 80)
          console.log("Grade : B+")
      else if(score >= 80 && score <= 100)
          console.log("Grade : A")
      else
          console.log("Error!!!")
      stdin.destroy()
  })
}*/

exports = test1 = () => {
    let stdin = process.openStdin()
    stdin.addListener("data",(score) => {
              if(score < 50 && score >= 0)
          console.log("Grade : E")
      else if(score >= 50 && score < 55)
          console.log("Grade : D")
      else if(score >= 55 && score < 60)
          console.log("Grade : D+")
      else if(score >= 60 && score < 65)
          console.log("Grade : C")
      else if(score >= 65 && score < 70)
          console.log("Grade : C+")
      else if(score >= 70 && score < 75)
          console.log("Grade : B")
      else if(score >= 75 && score < 80)
          console.log("Grade : B+")
      else if(score >= 80 && score <= 100)
          console.log("Grade : A")
      else
          console.log("Error!!!")
        stdin.destroy()
    })
}
