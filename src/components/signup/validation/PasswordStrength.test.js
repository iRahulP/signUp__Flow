import PasswordStrength from './PasswordStrength';

test("check if password is weak", () => {
    expect(PasswordStrength('aaa')).toBe('weak');
});

test("check if password is medium", () => {
    expect(PasswordStrength('abbca')).toBe('medium');
});

test("check if password is strong", () => {
    expect(PasswordStrength('aaaabbbQwerrty')).toBe('strong');
});

test("check if password is invalid", () => {
    expect(PasswordStrength('')).toBe('');
});