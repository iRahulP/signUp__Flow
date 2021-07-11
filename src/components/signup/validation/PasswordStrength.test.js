import PasswordStrength from './PasswordStrength';

test("check if password is weak", () => {
    expect(PasswordStrength('aaa')).toBe('__ weak');
});

test("check if password is medium", () => {
    expect(PasswordStrength('abbca')).toBe('__ __ medium');
});

test("check if password is strong", () => {
    expect(PasswordStrength('aaaabbbQwerrty')).toBe('__ __ __ strong');
});

test("check if password is invalid", () => {
    expect(PasswordStrength('')).toBe('');
});