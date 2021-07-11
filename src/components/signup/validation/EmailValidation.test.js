import EmailValidation from './EmailValidation';

test("check if email valid", () => {
    expect(EmailValidation('abc@xyz.inc')).toBe(true);
});


test("check if email invalid", () => {
    expect(EmailValidation('abc@inc@xyz.ca')).toBe(false);    
});