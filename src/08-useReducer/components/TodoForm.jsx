
import { useForm } from "../../hooks/useForm";


export const TodoForm = ({ onNewTodo }) => {

  

  const { description, onInputChange, onFormReset,} = useForm({ 
    description: '' 
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    
    if (description.length < 3) return;
    
    const newTodo = {
      description: description,
      done: false,
      id: new Date().getTime(),
    }
    
    onNewTodo( newTodo );
    onFormReset();
    
  }

  return (
    
    <form onSubmit={ onFormSubmit }>
      <input 
        type="text" 
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        name="description"
        value={ description }
        onChange={ onInputChange }
      />

      <button
        type="submit"
        className="btn btn-outline-primary mt-1"
        
        >
        Agregar
      </button>
        
    </form>

  )
}
