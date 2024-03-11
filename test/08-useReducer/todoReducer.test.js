import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('pruebas en todoReducer.js', () => { 

  const initialState = [{
    id: 1,
    description: 'Demo ToDo',
    done: false
  }];

  test('debe de regresar el estado inicial', () => { 

    const newState = todoReducer(initialState, {});

    /* 
    * El toBe funciona en este caso porque el una referencia al mismo objeto, 
    * seria diferente si se desestructurara el objeto en el return de todoReducer.js
    */
    expect( newState ).toBe( initialState );

  });

  test('debe agregar un toDo', () => {

    const action = {
      type: '[TODO] Add Todo',
      payload: {
        id: 2,
        description: 'NEW ToDo',
        done: false
      }
    }

    const newState = todoReducer(initialState, action);

    expect( newState.length ).toBe(2);
    expect(newState).toContain( action.payload );
  });

  test('debe de eliminar un ToDo', () => { 

    const removeIdToDo = 2;

    const addAction = {
      type: '[TODO] Add Todo',
      payload: {
        id: removeIdToDo,
        description: 'NEW ToDo',
        done: false
      }
    }

    // agrego un ToDo
    const newAddState = todoReducer(initialState, addAction);

    expect(newAddState.length).toBe(2);

    const removeAction = {
      type: '[TODO] Remove Todo',
      payload: removeIdToDo
    }

    const newRemoveState = todoReducer(newAddState, removeAction);

    expect(newRemoveState.length).toBe(1);
    expect(newRemoveState).not.toContain( addAction.payload );

  });

  test('debe de hacer el toggle en el done del ToDo', () => {
    const toggleIdToDo = 1;
    const initDone = false;

    const initialState = [{
      id: toggleIdToDo,
      description: 'Demo ToDo',
      done: initDone
    }];

    const endState = {
      id: toggleIdToDo,
      description: 'Demo ToDo',
      done: !initDone
    };

    
    const toggleAction = {
      type: '[TODO] Toggle Todo',
      payload: toggleIdToDo
    }


    const newToggleState = todoReducer(initialState, toggleAction);
    expect(newToggleState).toContainEqual(endState);
    expect(newToggleState[0].done).toBe(!initDone);

    const newToggleState2 = todoReducer(newToggleState, toggleAction);
    expect(newToggleState2).toContainEqual(initialState[0]);
    expect(newToggleState2[0].done).toBe(initDone);

  })

})