const PasswordStrength = (pass) => {
    if (pass.length === 0){
        return '';
    }
    else if(pass.length > 0 && pass.length < 4) {
        return '__ weak';
    }
    else if(pass.length >= 4 && pass.length < 8)  {
        return '__ __ medium';
    }
    else {
        return '__ __ __ strong';
    }
}

export default PasswordStrength;
