import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: '-',
    email: '-',
  });

  const {username, email} = formState;

  const onInputChange = ({target}) => {
    const {name, value} = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  }

  useEffect( () => {
    // console.log("useEffect called");
  }, [] );

  useEffect( () => {
    // console.log("formSate Changed!");
  }, [formState] );

  return (
    <>
      <h1>Formulario simple</h1>
      <hr />

      <input 
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        onChange={onInputChange}
      />

      {
        (username === 'David') && <Message />
      }

      <input 
        type="email"
        className="form-control mt-2"
        placeholder="Email"
        name="email"
        onChange={onInputChange}
      />
    </>
  )
}
