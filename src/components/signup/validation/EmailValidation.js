const EmailValidation = (email) => {
    const re = /(.+)@(.+){2,}\.(.+){2,}/;

    return re.test(String(email).toLowerCase());
}

export default EmailValidation;
