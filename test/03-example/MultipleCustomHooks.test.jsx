import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-example/MultipleCustomHooks";
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('test on <MultipleCustomHooks />', () => { 

  const pokemonId = 69;
  const pokemonName = 'Pitochu';

  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement
  });

  beforeEach( () => {
    jest.clearAllMocks();
  })


  test('Debe mostrar el componente por defecto', () => {
    
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });

    render(<MultipleCustomHooks />);

    // screen.debug();

    const heading = screen.getByRole('heading', { name: 'Información del Pokemon' });
    const loadingText = screen.getByRole('heading', { name: 'Cargando información del Pokemon #1' });
    const prevButton = screen.getByRole('button', { name: 'Anterior' });
    const nextButton = screen.getByRole('button', { name: 'Siguiente' });
    
    expect( heading ).toBeTruthy();
    expect( loadingText ).toBeTruthy();
    expect( prevButton ).toBeTruthy();
    expect( nextButton ).toBeTruthy();


  });


  test('Debe mostrar un Pokemon', () => {    

    useFetch.mockReturnValue({
      data: {
        name: pokemonName,
        id: pokemonId,
        sprites: {
          back_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
          back_female:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/25.png",
          back_shiny:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png",
          back_shiny_female:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/25.png",
          front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
          front_female:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/25.png",
          front_shiny:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png",
          front_shiny_female:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/25.png"
        }
      },
      isLoading: false,
      hasError: false,
      error: null,
    });

    render(<MultipleCustomHooks />);

    // screen.debug();

    const heading = screen.getByRole('heading', { name: `#${pokemonId} - ${pokemonName}` });

    expect( heading ).toBeTruthy();

  });

  test('should call increment function', () => {

    useFetch.mockReturnValue({
      data: {
        name: pokemonName,
        id: pokemonId,
        sprites: {
          back_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
          back_female:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/25.png",
          back_shiny:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png",
          back_shiny_female:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/25.png",
          front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
          front_female:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/25.png",
          front_shiny:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png",
          front_shiny_female:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/25.png"
        }
      },
      isLoading: false,
      hasError: false,
      error: null,
    });


    render(<MultipleCustomHooks />);

    const nextButton = screen.getByRole('button', { name: 'Siguiente' });
    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
    expect(mockIncrement).toHaveBeenCalledTimes(1);

  });

});