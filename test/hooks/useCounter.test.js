import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";
import { act } from "react-dom/test-utils";

describe('pruebas en useCounter', () => { 

  const initialValue = 100;
  
  test('Debe de retornar los valores por defecto', () => {

    const { result } = renderHook( () => useCounter() );

    const { counter, decrement, increment, reset } = result.current;

    expect( counter ).toBe(1);
    expect( decrement ).toEqual(expect.any(Function));
    expect( increment ).toEqual(expect.any(Function));
    expect( reset ).toEqual(expect.any(Function ) );

  });

  test('Debe de retornar counter con valor de 100', () => {

    const { result } = renderHook(() => useCounter(initialValue));
    const { counter } = result.current;

    expect(counter).toBe(100);

  });

  test('Debe de retornar counter con valor de 101', () => {

    const { result } = renderHook(() => useCounter(initialValue));
    const { counter, increment } = result.current;

    act(() => {
      /* fire events that update state */
      increment();
    });

    expect( result.current.counter ).toBe(101);

  });

  test('Debe de retornar counter con valor de 105', () => {

    const { result } = renderHook(() => useCounter(initialValue));
    const { counter, increment } = result.current;

    act(() => {
      /* fire events that update state */
      increment(2);
      increment(3);
    });

    expect(result.current.counter).toBe(105);

  });

  test('Debe de retornar counter con valor de 99', () => {


    const { result } = renderHook(() => useCounter(initialValue));
    const { counter, decrement } = result.current;

    act(() => {
      /* fire events that update state */
      decrement();
    });

    expect(result.current.counter).toBe(99);

  });

  test('Debe de retornar counter con valor de 95', () => {

    const { result } = renderHook(() => useCounter(initialValue));
    const { counter, decrement } = result.current;

    act(() => {
      /* fire events that update state */
      decrement(2);
      decrement(3);
    });

    expect(result.current.counter).toBe(95);

  });

  test('Debe ser igual al valor inicial', () => { 
    
    const { result } = renderHook(() => useCounter(initialValue));
    const { counter, increment, reset } = result.current;
    
    act(() => {
      /* fire events that update state */
      increment(2);
      reset();
    });

    expect(result.current.counter).toBe( initialValue );
  });
});