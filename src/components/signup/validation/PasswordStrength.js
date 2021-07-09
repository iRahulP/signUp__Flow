const PasswordStrength = (pass) => {
    if (pass.length === 0){
        return 'invalid';
    }
    else if(pass.length > 0 && pass.length < 4) {
        return 'weak';
    }
    else if(pass.length >= 4 && pass.length < 8)  {
        return 'medium';
    }
    else {
        return 'strong';
    }
}

export default PasswordStrength;
