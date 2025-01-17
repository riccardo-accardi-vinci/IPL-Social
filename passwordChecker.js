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
   const numbers = /[0-9]/;
    for (let i = 0; i < password.length; i++) {
        if (numbers.includes(password[i])) {
            return true;
        }
    }
    return false;
}
noIpl(password){
    if (password.toLowerCase().includes("ipl")){
        return false;
    }
    return true;
}
};
