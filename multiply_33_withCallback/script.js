const callFunc = callback => {
     const number = 33
     callback(number)
   }
   
   callFunc(mult => {
     console.log(mult * 3)
   })