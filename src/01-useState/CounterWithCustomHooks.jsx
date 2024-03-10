import { useCounter } from "../hooks/useCounter"


export const CounterWithCustomHooks = () => {
  
  const { counter, increment, decrement, reset } = useCounter(11);



  return (
    <>
      <h1>CounterWithCustomHooks: {counter}</h1>
      <hr />

      <button className="btn btn-primary" onClick={ () => decrement(5) }>-1</button>
      <button className="btn btn-primary" onClick={reset}>RESET</button>
      <button className="btn btn-primary" onClick={ () => increment(5) }>+1</button>
    </>
  )
}
