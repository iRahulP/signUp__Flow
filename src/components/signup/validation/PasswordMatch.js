const PasswordMatch = (pass1, pass2) => {
    if(pass1 === '' || pass2 === ''){
        return '';
    }
    else if (pass1 === pass2){
        return 'passwords match';
    }
    else {
        return 'passwords do not match';
    }
}

export default PasswordMatch;