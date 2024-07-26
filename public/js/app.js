//? User data storage
const users = [];
//? Function to prompt user input
//* get the input frm the user nd return it after removing whitespace
function promptUser(message) {
return prompt(message).trim();
}

//? validate name  
function isValidName(name) {
    if (name !== name.trim()) return false; //! Check that there are no spaces at the beginning or end
    if (name.length < 5) return false; //! Do not register the Name if it has fewer than 5 characters *(excluding spaces)* 
    if (/[^a-zA-Z ]/.test(name)) return false; //!  Do not register the Name if it contains numbers, an @, or similar special characters.
    const elements = name.split(' ');
    for (let e of elements) {
        if (e.charAt(0) !== e.charAt(0).toUpperCase()) return false; //!The first letter must be uppercase
        if (e.slice(1) !== e.slice(1).toLowerCase()) return false; //! All other characters must be lowercase
    }
    return true;
}



//? sign up a new user
function signUp() {
    let name = promptUser("Enter your full name:");
    while (!isValidName(name)) {
    name = promptUser("Invalid name. Enter your full name:");
    }
    users.push({ name });
    console.log("User registered successfully!");
    }


 //? choose an option   
    function choose() {
        while (true) {
        let choice = promptUser("Choose an option: sign up, log in, change password, or exit").toLowerCase();
        if (choice === "exit") break;
            switch (choice) {
                case "sign up":
                    signUp();
                    break;
                case "log in":
                    login();
                    break;
                case "change password":
                    changePassword();
                    break;
                default:
                    console.log("Please try again.");
            }
        
        
        }
    }

choose()