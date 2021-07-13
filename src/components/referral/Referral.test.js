import {render, cleanup, fireEvent, screen } from "@testing-library/react";
import Referral from "./Referral";

describe("Create an initial signup working component with tests", () => {
    test.todo("Referral will have referral input box and the `no referral` checkbox along with a button");
    test.todo("a /sign-up?referral-abc route can be added which will autofill when the user gets to Referral Code Fragment.");
    test.todo("button should be disabled if either one of the inputs are not filled");
});

beforeEach(() => {
    render(<Referral />);
  });

afterEach(() => {
    cleanup();
})

test.skip("debug mode", () => {
    screen.debug();
})

test("should render input element and a checkbox", () => {
  const referral = screen.getByTestId("referral");
  const referralCheck = screen.getByTestId("referral-check");
  expect(referral).toBeInTheDocument();  
  expect(referralCheck).toBeInTheDocument();  
})

test("check button disabled", () => {
    const btn = screen.getByTestId("btn");
    expect(btn).toBeDisabled();
});

test("check if button enabled", () => {
    const test1 = screen.getByTestId("referral");
  
    fireEvent.change(test1, { target: { value: 'abc' } });
    
    const btn = screen.getByTestId("btn");
    expect(btn).toBeEnabled();
});