import { render } from "react-dom";
import SignUp from './SignUp';

describe("Create an initial signup working component", () => {
    test.todo("create input components and a signup button along with tests for validity");
});

test("check button disabled", () => {
    const root = document.createElement('div');
    render(<SignUp />, root);

    const button = root.querySelector("button");
    expect(button.disabled).toBe(true);
});