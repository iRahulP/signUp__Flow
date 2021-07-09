import { render } from "react-dom";
import SignUp from './SignUp';

describe("Initial signup component with tests", () => {
    test.todo("email box should be outlined red if invalid");
    test.todo("email input value needs to be validated as `$test@$text.$text` style");
    test.todo("A password length Meter depicting if it is `weak|medium|strong`");
    test.todo("A password match span rendering if both passwords match or not");
    test.todo("All the inputs should be individually dynamically styled so as the text box color changes to red if value is invalid.");
    test.todo("Submit button should be disabled if no inputs present in form");
});

test("check button disabled", () => {
    const root = document.createElement('div');
    render(<SignUp />, root);

    const button = root.querySelector("button");
    expect(button.disabled).toBe(true);
});

// test("check")