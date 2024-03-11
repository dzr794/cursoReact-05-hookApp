import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('Tests on <HomePage />', () => { 

  const emptyUserMock = null;

  const normalUserMock = {
    id: 1,
    name: 'David',
    email: 'david@mail.com'
  };

  
  test('should show component without user', () => { 
    

    render( 
      <UserContext.Provider value={{ user: emptyUserMock }}>
        <HomePage /> 
      </UserContext.Provider>
    );

    // screen.debug();

    const preElement = screen.getByLabelText('pre');
    
    expect(preElement.innerHTML).toBe('null');
  });


  test('should show component with normal user', () => { 
    

    render( 
      <UserContext.Provider value={{ user: normalUserMock }}>
        <HomePage /> 
      </UserContext.Provider>
    );

    screen.debug();

    const preElement = screen.getByLabelText('pre');

    expect( preElement.innerHTML ).toContain( JSON.stringify(normalUserMock, null, 3) );
    
  });

});