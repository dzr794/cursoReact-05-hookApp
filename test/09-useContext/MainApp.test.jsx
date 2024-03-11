import { render, screen } from "@testing-library/react";
import { MainApp } from "../../src/09-useContext/MainApp";
import { MemoryRouter } from "react-router-dom";

describe('Test on <MainApp />', () => { 


  test('should render component init state', () => { 
    render( 
    <MemoryRouter>
      <MainApp />
    </MemoryRouter>
    );

    const linksElemnts = screen.getAllByRole('link');
    
    expect( screen.getByText('Home') ).toBeTruthy();
    

    linksElemnts.forEach( link => {
      if (link.className.includes('active')) {
        console.log(link.className);
        expect(link.innerHTML).toBe('Home');
      }
    })
    // linksElemnts.entries( () =>  )

    
  });


  test('should render Login page', () => { 
    render( 
    <MemoryRouter initialEntries={['/login']}>
      <MainApp />
    </MemoryRouter>
    );
    
    
    // screen.debug()

    const linksElemnts = screen.getAllByRole('link');
    
    linksElemnts.forEach( link => {
      if (link.className.includes('active')) {
        console.log(link.className);
        expect(link.innerHTML).toBe('Login');
      }
    })
    
  });


  test('should render About page', () => { 
    render( 
    <MemoryRouter initialEntries={['/about']}>
      <MainApp />
    </MemoryRouter>
    );
    
    
    // screen.debug()

    const linksElemnts = screen.getAllByRole('link');
    
    linksElemnts.forEach( link => {
      if (link.className.includes('active')) {
        console.log(link.className);
        expect(link.innerHTML).toBe('About');
      }
    })
    
  });
});