import {render, cleanup, fireEvent, screen } from "@testing-library/react";
import Otp from "./Otp";

describe("Create an OTP Handler", () => {
    test.todo("add 5 user inputs for getting OTP from user under a single div");
    test.todo("Add dynamic styles for valid/invalid OTP input");
    test.todo("A button to be enabled for all 5 inputs availiablility");
});

beforeEach(() => {
    render(<Otp />);
  });

afterEach(() => {
    cleanup();
})

test.skip("debug mode", () => {
    screen.debug();
})

test("should render 5 input elements", () => {
  const one = screen.getByTestId("digit-1");
  expect(one).toBeInTheDocument();
  const two = screen.getByTestId("digit-2");
  expect(two).toBeInTheDocument();
  const three = screen.getByTestId("digit-3");
  expect(three).toBeInTheDocument();
  const four = screen.getByTestId("digit-4");
  expect(four).toBeInTheDocument();
  const five = screen.getByTestId("digit-5");
  expect(five).toBeInTheDocument();  
})

test("check button disabled", () => {
    const btn = screen.getByTestId("submit-btn");
    expect(btn).toBeDisabled();
});

test("check if button enabled", () => {
    const one = screen.getByTestId("digit-1");
    const two = screen.getByTestId("digit-2");
    const three = screen.getByTestId("digit-3");
    const four = screen.getByTestId("digit-4");
    const five = screen.getByTestId("digit-5");
  
    fireEvent.change(one, { target: { value: '1' } });
    fireEvent.change(two, { target: { value: '2' } });
    fireEvent.change(three, { target: { value: '3' } });
    fireEvent.change(four, { target: { value: '4' } });
    fireEvent.change(five, { target: { value: '5' } });
    
    const btn = screen.getByTestId("submit-btn");
    expect(btn).toBeEnabled();
});