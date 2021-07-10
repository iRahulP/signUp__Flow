import PasswordMatch from './PasswordMatch';

test("check if passwords match", () => {
    expect(PasswordMatch('aaa','aaa')).toBe('passwords match');
});

test("check if password do not match", () => {
    expect(PasswordMatch('abbca','abbc')).toBe('passwords do not match');
});
