import { useCallback, useState } from "react"
import {ShowIncrement} from './ShowIncrement'


export const CallbackHook = () => {

  const [counter, setCounter] = useState(10);

  // el useCallback nos permite evitar que se vuelvan a llamar funciones guardandolas en memoria
  const incrementar = useCallback(
    (value) => {
      setCounter ( (count) => count + value );
    },
    [],
  )
  

  // const incrementar = () => {
  //   setCounter (counter +1);
  // }

  return (
    <>
      <h1>useCallback Hook: {counter} </h1>
      <hr />

      <ShowIncrement fn={incrementar} />
    </>
  )
}
