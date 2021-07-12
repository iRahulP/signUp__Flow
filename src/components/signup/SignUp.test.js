import {render, cleanup, fireEvent, screen, getByTestId } from "@testing-library/react";
import { isElement } from "react-dom/test-utils";
import SignUp from './SignUp';

describe("Initial signup component with tests", () => {
    test.todo("email box should be outlined red if invalid");
    test.todo("email input value needs to be validated as `$test@$text.$text` style");
    test.todo("A password length Meter depicting if it is `weak|medium|strong`");
    test.todo("A password match span rendering if both passwords match or not");
    test.todo("All the inputs should be individually dynamically styled so as the text box color changes to red if value is invalid.");
    test.todo("Submit button should be disabled if no inputs present in form");
    test.todo("Add a blink icon next to passowrd fields for UX")
});

beforeEach(() => {
    render(<SignUp />);
  });

afterEach(() => {
    cleanup();
})

test.skip("debug mode", () => {
    screen.debug();
})

test("should render an input element", () => {
  const input = screen.getByTestId("email");
  expect(input).toBeInTheDocument();  
})

test("check button disabled", () => {
    // const button = document.querySelector("button");
    const btn = screen.getByTestId("submit-btn");
    expect(btn).toBeDisabled();
});

test("check button not disabled", () => {
    const email = screen.getByTestId("email");
    const pass1 = screen.getByTestId("pass1");
    const pass2 = screen.getByTestId("pass2");

    fireEvent.change(email, { target: { value: 'abc@abc.xyz' } });
    fireEvent.change(pass1, { target: { value: 'HzdkXy' } });
    fireEvent.change(pass2, { target: { value: 'HzdkXy' } });
    
    const button = document.querySelector("button");
    expect(button).toBeEnabled();
});

test("check all required components", () => {
    expect(document.querySelector('#email')).toBeInTheDocument();
    expect(document.querySelector('#pass1')).toBeInTheDocument();
    expect(document.querySelector('#pass2')).toBeInTheDocument();
    expect(
        getByTestId(document.documentElement, 'submit-btn'),
    ).toBeInTheDocument()
    expect(
        getByTestId(document.documentElement, 'match-password'),
    ).toBeInTheDocument()
})

test("check input fields which require values" , () => {
    isElement(<SignUp />);
    expect(document.querySelector('#email')).toBeRequired();
    expect(document.querySelector('#pass1')).toBeRequired();
    expect(document.querySelector('#pass2')).toBeRequired();
})

test("check if passwords match", () => {
    const pass1 = screen.getByTestId("pass1");
    const pass2 = screen.getByTestId("pass2");

    fireEvent.change(pass1, { target: { value: 'HzdkXy' } });
    fireEvent.change(pass2, { target: { value: 'HzdkXy' } });
    
    screen.getByText('passwords match');
})