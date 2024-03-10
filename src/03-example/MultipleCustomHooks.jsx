import { useCounter, useFetch } from "../hooks"
import { IsLoading } from "./IsLoading";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHooks = () => {

  const { counter, increment, decrement } = useCounter(1);
  const {data, isLoading, hasError} = useFetch( `https://pokeapi.co/api/v2/pokemon/${ counter }` );
 
  const spritesArray = {
      "default":{
        "front": data?.sprites.front_default,
        "back": data?.sprites.back_default,
      },
      "shiny": {
        "front": data?.sprites.front_shiny, 
        "back": data?.sprites.back_shiny,
      }
  };

  return (
    <>
      <h1>Información del Pokemon</h1>
      <hr />

      { 
        isLoading ? 
        <IsLoading counter={counter} /> : 
        (
          <PokemonCard 
            name={data?.name} 
            id={data?.id} 
            sprites={spritesArray} 
            />
        )
      }
    
        {/* <IsLoading number={1} /> 
     */}

      

      <button
        type="button"
        className="btn btn-primary"
        onClick={() =>  counter > 1 ? decrement() : null }
      >
        Anterior
      </button>

      <button
        type="button"
        className="btn btn-primary"
        onClick={ () => increment() }
      >
        Siguiente
      </button>
      
      {/* <pre>{ JSON.stringify( data, null, 2 ) }</pre> */}
    </>
  )
}
