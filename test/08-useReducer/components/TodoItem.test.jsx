import { fireEvent, getByRole, render, screen } from '@testing-library/react';
import { TodoItem } from '../../../src/08-useReducer/components/TodoItem';

describe('tests in TodoItem.jsx', () => { 

  const todoMock = {
    id: 1,
    description: 'lavar la loza',
    done: false
  }

  const onToggleTodoMock = jest.fn();
  const onDeleteTodoMock = jest.fn();

  beforeEach( () => jest.clearAllMocks() );

  test('debe mostrar el toDo pendiente de completar', () => { 
    render( 
      <TodoItem 
        todo={ todoMock } 
        onToggleTodo={ onToggleTodoMock } 
        onDeleteTodo={ onDeleteTodoMock }
      />
    );

            
    const liElement = screen.getByRole( 'listitem' );
    expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');
    
    
    const spanElement = screen.getByLabelText('span');
    expect( spanElement.className ).toContain('align-self-center');
    expect( spanElement.className ).not.toContain('text-decoration-line-through');
            
            
    // screen.debug();
            
  });

  test('debe mostrar el toDo completado', () => { 

    todoMock.done = true;

    render( 
      <TodoItem 
        todo={ todoMock } 
        onToggleTodo={ onToggleTodoMock } 
        onDeleteTodo={ onDeleteTodoMock }
      />
    );
    
    const spanElement = screen.getByLabelText('span');
    expect( spanElement.className ).toContain('text-decoration-line-through');
            
            
    // screen.debug();
            
  });

  test('span debe de llamar al onToggleTodo cuando le hacen click', () => { 

    render( 
      <TodoItem 
        todo={ todoMock } 
        onToggleTodo={ onToggleTodoMock } 
        onDeleteTodo={ onDeleteTodoMock }
      />
    );
    
    const spanElement = screen.getByLabelText('span');
    fireEvent.click( spanElement );

    expect( onToggleTodoMock ).toHaveBeenCalledWith( todoMock.id );
            
            
    // screen.debug();
            
  });

  test('The button should call onDeleteTodo on click', () => { 

    render( 
      <TodoItem 
        todo={ todoMock } 
        onToggleTodo={ onToggleTodoMock } 
        onDeleteTodo={ onDeleteTodoMock }
      />
    );
    
    const buttonElement = screen.getByRole('button');
    fireEvent.click( buttonElement );

    expect( onDeleteTodoMock ).toHaveBeenCalledWith( todoMock.id );
            
    // screen.debug();
            
  });

  

});