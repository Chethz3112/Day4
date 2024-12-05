/*write a JavaScript program to create  one user  which consists email and password and to check whether the stored 
email is correct with the given email or not*/

let user = {
    email: "chethanagowda3112@gmail.com",  
    password: "Password123"  
};
function checkEmail(inputEmail) {
    if (user.email === inputEmail) {
        console.log("Email is correct!");
        return true;
    } else {
        console.log("Email is incorrect.");
        return false;
    }
}


let enteredEmail = "chethanagowda3112@gmail.com";  
checkEmail(enteredEmail);


if (checkEmail(enteredEmail)) {
    let enteredPassword = "Password123"; 
    if (user.password === enteredPassword) {
        console.log("Password is correct.");
    } else {
        console.log("Password is incorrect.");
    }
}
