import { useState } from "react"

export const useCounter = ( initValue = 1) => {

  const [counter, setCounter] = useState(initValue);

  const increment = ( step = 1 ) => { 
    setCounter(counter + step);
  }
  const decrement = ( step = 1 ) => { 
    if (counter <= 0 + step ) {
      setCounter(0);
      return
    }
    
    setCounter(counter - step);
  }
  const reset = () => { 
    setCounter(initValue);
  }

  return {
    counter,
    increment,
    decrement, 
    reset
  }

}