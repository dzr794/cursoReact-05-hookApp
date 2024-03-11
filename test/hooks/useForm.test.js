import { renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";
import { act } from "react-dom/test-utils";

describe('Pruebas en useForm', () => { 

  const initialForm = {
    name: 'David',
    email: 'dzr@hotmail.com'
  }

  test('Debe retornar valores por defecto', () => {

    const { result } = renderHook( () => useForm( initialForm ) );
    expect(result.current).toEqual(
      {
        name: initialForm.name,
        email: initialForm.email,
        formState: initialForm,
        onInputChange: expect.any( Function ),
        onFormReset: expect.any( Function )
      }
    );
  });


  test('should change form name', () => { 
    const newName = 'Jorge';
    
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;


    act( () => {
      onInputChange(
        {
          target: {
            name: 'name',
            value: newName
          }
        }
      );
    });

    expect(result.current.name).toBe(newName);
    expect(result.current.formState.name).toBe(newName);
  });

  test('should change email', () => {
    const newEmail = 'email@mail.com';

    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;


    act(() => {
      onInputChange(
        {
          target: {
            name: 'email',
            value: newEmail
          }
        }
      );
    });

    expect(result.current.email).toBe(newEmail);
    expect(result.current.formState.email).toBe(newEmail);
  });


  test('should reset form', () => {
    const newName = 'Jorge';
    const newEmail = 'email@mail.com';

    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onFormReset } = result.current;


    act(() => {
      onInputChange(
        {
          target: {
            name: 'name',
            value: newName
          }
        }
      );

      onInputChange(
        {
          target: {
            name: 'email',
            value: newEmail
          }
        }
      );
      
      onFormReset();

    });

    expect(result.current).toEqual(
      {
        name: initialForm.name,
        email: initialForm.email,
        formState: initialForm,
        onInputChange: expect.any(Function),
        onFormReset: expect.any(Function)
      }
    );
    
  });

});