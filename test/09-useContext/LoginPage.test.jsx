import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/UserContext";



describe('Tests on <LoginPage />', () => {

  const emptyUserMock = null;

  const normalUserMock = {
    id: 1,
    name: 'David',
    email: 'david@mail.com'
  };

  const setUserMock = jest.fn();

  test('should show component initial state', () => { 

    render(
      <UserContext.Provider value={{ user: emptyUserMock, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    )

    // screen.debug();

    const headerElement = screen.getByRole('heading');
    const preElement = screen.getByLabelText('pre');
    const buttonElement = screen.getByRole('button');
    
    // header test
    expect(headerElement.innerHTML).toBe('Login Page');
    expect(headerElement.tagName).toBe('H1');
    
    // pre test
    expect(preElement.innerHTML).toBe('null');
    
    // button test
    expect(buttonElement.innerHTML).toBe('Establecer usuario');
    expect(buttonElement.className).toBe('btn btn-primary');

  });


  test('button should call setUser on Click', () => { 

    render(
      <UserContext.Provider value={{ user: emptyUserMock, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    )

    
    const buttonElement = screen.getByRole('button');
    
    fireEvent.click( buttonElement );
    
    expect( setUserMock ).toHaveBeenCalled();
    expect( setUserMock ).toHaveBeenCalledWith({"email": "asd@asd.asd", "id": 123, "name": "David"});
    
    // screen.debug();
  });
});