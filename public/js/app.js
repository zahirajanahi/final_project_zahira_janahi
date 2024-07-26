//? User data storage
const users = [];

//? choose an option   
function choose() {
  while (true) {
    const choice = prompt("Choose an option: signup, login, change password, exit");
    if (choice === "signup") {
      signUp();
    } else if (choice === "login") {
      login();
    } else if (choice === "change password") {
      
    } else if (choice === "exit") {
      break;
    } else {
      console.log("Invalid choice");
    }
  }
}

choose();

//? Function to prompt user input
//* get the input frm the user nd return it after removing whitespace
function promptUser(message) {
return prompt(message).trim();
}

//? validate name  
function checkName(name) {
    if (name !== name.trim()); //! Check that there are no spaces at the beginning or end
    if (name.length < 5); //! Do not register the Name if it has fewer than 5 characters *(excluding spaces)* 
    if (/[\d@!#$%^&*(),.?":{}|<>]/.test(name)); //!  Do not register the Name if it contains numbers, an @, or similar special characters.
    const elements = name.split(' ');
    for (let e of elements) {
        if (e.charAt(0) !== e.charAt(0).toUpperCase()); //!The first letter must be uppercase
        if (e.slice(1) !== e.slice(1).toLowerCase()); //! All other characters must be lowercase
    }
    return true;
}

//? validate email
 function checkEmail(email) {
        if (email !== email.trim()) ; //! Check that there are no spaces at the beginning or end
        if (email.length < 10) ; //! Do not register the Email if it has fewer than 10 characters (excluding spaces)
        if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)) ; //! Check email format and ensure it has exactly one @
        if (users.some(user => user.email === email)) ; //! The email must be unique
        return true;
    }

//? Validate age
function checkAge(age) {
    if (age !== age.trim()) ; //! Check that there are no spaces at the beginning, end, or in the middle
    if (!/^\d+$/.test(age)) ; //! Ensure only numbers are entered
    if (age.length === 0 || age.length >= 3) ; //! Do not register the Age if it has 0 characters, or if it has 3 or more characters
    return true;
}


//? Validate password
function checkPassword(password) {
    if (password !== password.trim()); //! Check that there are no spaces at the beginning or end
    if (/\s/.test(password)); //! Do not register the Password if there is a space in the middle
    if (!/[!@#\-+*/]/.test(password)); //! It must contain at least one special character from: ["@" , "#" , "-" , "+" , "*" , "/"]
    if (password.length < 7); //! It must be at least 7 characters long
    return true;
}

//? sign up 
function signUp() {
    let name = promptUser("Enter your full name:");
    while (!checkName(name)) {
    name = promptUser("enter ur name again");
    }
    let email = promptUser("Enter your email:");
    while (!checkEmail(email)) {
        email = promptUser("Enter your email again");
    }
    
    let age = promptUser("Enter your age:");
    while (!checkAge(age)) {
        age = promptUser("enter ur age again");
    }
    
    let password = promptUser("Enter your password:");
    while (!checkPassword(password)) {
        password = promptUser("Enter your password again");
    }
    
    let confirmPassword = promptUser("Confirm your password");
    while (password !== confirmPassword) {
        confirmPassword = promptUser("Passwords do not match. try again");
    }
    //! registeration
    users.push({ name, email, age, password });
    alert("User registered successfully!");
}
