import {render, cleanup, screen } from "@testing-library/react";
import Congrats from "./Congrats";

describe("Create an initial signup working component with tests", () => {
    test.todo("the final flow will end based on selection of referral input value or the no referral checkbox.");
    test.todo("for each case different component will be rendered");
});

beforeEach(() => {
    render(<Congrats />);
  });

afterEach(() => {
    cleanup();
})

test.skip("debug mode", () => {
    screen.debug();
})