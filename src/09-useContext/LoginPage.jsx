import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LoginPage = () => {

  const {user, setUser} = useContext( UserContext );
  // console.log(user);

  return (
    <>
      <h1>Login Page</h1>
      <hr />

      <pre aria-label="pre">
        {JSON.stringify(user, null, 3)}
      </pre>

      
      <button
        type="button"
        className="btn btn-primary"
        onClick={ () => setUser({id: 123, name: 'David', email: 'asd@asd.asd'}) }
      >
        Establecer usuario
      </button>
    </>
  )
}