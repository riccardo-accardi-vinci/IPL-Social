export class Main{

has8Char(password){
    if (password.lenght < 8){
        return false;
    }
    return true;
}

hasSpecialChar(password){
    const specialChars = /[!@#$%^&*(),.?":{}|<>]/;
    for (let i = 0; i < password.length; i++) {
        if (specialChars.includes(password[i])) {
            return true;
        }
    }
    return false;
}

hasNumber(password){
    return false;
}
    


};
