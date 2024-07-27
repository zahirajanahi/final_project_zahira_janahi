//? data storage
const users = [];

//? Function to prompt user input
//* get the input frm the user nd return it after removing whitespace
function promptUser(message) {
    return prompt(message).trim();
}

//? Validate name
const checkName = (name) => {
    if (name !== name.trim()) return false; //! Check that there are no spaces at the beginning or end
    if (name.length < 5) return false; //! Do not register the Name if it has fewer than 5 characters *(excluding spaces)* 
    if (/[\d@!#$%^&*(),.?":{}|<>]/.test(name)) return false; //!  Do not register the Name if it contains numbers, an @, or similar special characters.
    const elements = name.split(' ');
    for (let e of elements) {
        if (e.charAt(0) !== e.charAt(0).toUpperCase()) return false; //!The first letter must be uppercase nd All other characters must be lowercase
        if (e.slice(1) !== e.slice(1).toLowerCase()) return false; 
    }
    return true;
}

//? Validate email
const checkEmail = (email) => {
    if (email !== email.trim()) return false; //! Check that there are no spaces at the beginning or end
    if (email.length < 10) return false;  //! Do not register the Email if it has fewer than 10 characters (excluding spaces)
    if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)) return false; //! Check email format and ensure it has exactly one @
    if (users.some(user => user.email === email)) return false; //! The email must be unique
    return true;
    return true;
}

//? Validate age
const checkAge = (age) => {
    if (age !== age.trim()) return false; //! Check that there are no spaces at the beginning, end, or in the middle
    if (!/^\d+$/.test(age)) return false; //! Ensure only numbers are entered
    if (age.length === 0 || age.length >= 3) return false; //! Do not register the Age if it has 0 characters, or if it has 3 or more characters
    return true;
}

//? Validate password
const checkPassword = (password) => {
    if (password !== password.trim()) return false; //! Check that there are no spaces at the beginning or end
    if (/\s/.test(password)) return false; //! Do not register the Password if there is a space in the middle
    if (!/[!@#\-+*/]/.test(password)) return false; //! It must contain at least one special character from: ["@" , "#" , "-" , "+" , "*" , "/"]
    if (password.length < 7) return false; //! It must be at least 7 characters long
    return true;
}
//* If the user chooses to sign up
//? Sign up function
const signUp = () => {
    let name = promptUser("Enter your full name:");
    while (!checkName(name)) {
        name = promptUser("Invalid name. Enter your full name again:");
    }

    let email = promptUser("Enter your email:");
    while (!checkEmail(email)) {
        email = promptUser("Invalid email. Enter your email again:");
    }

    let age = promptUser("Enter your age:");
    while (!checkAge(age)) {
        age = promptUser("Invalid age. Enter your age again:");
    }

    let password = promptUser("Enter your password:");
    while (!checkPassword(password)) {
        password = promptUser("Invalid password. Enter your password again:");
    }

    let confirmPassword = promptUser("Confirm your password:");
    while (password !== confirmPassword) {
        confirmPassword = promptUser("Passwords do not match. Confirm your password again:");
    }

    //! Register the user
    users.push({ name, email, age, password });
    alert("User registered successfully!");
}

//*  If the user chooses to log in
//? Log in function
const login = () => {
    let email = promptUser("Enter your email:");
    let user = users.find(user => user.email === email);
    if (!user) {
        console.log("Email not found.");
        return;
    }

    let password = promptUser("Enter your password:");
    if (user.password !== password) {
        console.log("Incorrect password.");
        return;
    }

    console.log("Logged in successfully.");
}


//*  If the user chooses to change the password
//? Change password function
const changePassword = () => {
    let email = promptUser("Enter your email:");
    let user = users.find(user => user.email === email);
    if (!user) {
        console.log("Email not found.");
        return;
    }

    let newPassword = promptUser("Enter new password:");
    while (!checkPassword(newPassword)) {
        newPassword = promptUser("Invalid password. Enter new password again:");
    }

    let confirmPassword = promptUser("Confirm new password:");
    while (newPassword !== confirmPassword) {
        confirmPassword = promptUser("Passwords do not match. Confirm new password again:");
    }

    user.password = newPassword;
    console.log("Password changed successfully.");
}



//? choose an option
const choose = () => {
    while (true) {
        const choice = promptUser("Choose an option: signup, login, change password, exit");
        if (choice === "signup") {
            signUp();
        } else if (choice === "login") {
            login();
        } else if (choice === "change password") {
            changePassword();
        } else if (choice === "exit") {
            break;
        } else {
            console.log("Invalid choice.");
        }
    }
}

choose();

const Services = (user) => {
    while (true) {
        const choice = promptUser("Choose an option: balance, withdraw, deposit, loan, invest, history, logout");
        if (choice === "balance") {
            console.log(`Your balance is: ${user.balance} dirhams`);
        } else if (choice === "withdraw") {
            let amount = parseFloat(promptUser("Enter amount to withdraw:"));
            if (amount > user.balance) {
                console.log("Insufficient balance.");
            } else {
                user.balance -= amount;
                user.transactionHistory.push({ type: 'withdraw', amount });
                console.log(`Withdrawn: ${amount} dirhams`);
            }
        } else if (choice === "logout") {
            console.log("Logged out successfully.");
            break;
        } else {
            console.log("Invalid choice.");
        }
    }
}
