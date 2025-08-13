export const performValidation = (email, password) =>{
    //there regex will return true if the regex matches with the input field else false
    //checking the regex
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    //when isEmailValid returns false we need to handle it by showing an error msg
    if(!isEmailValid) return "Invalid Email address. Please give the correct Email";
    if(!isPasswordValid) return "Password must include a capital letter, number and special letters";

    //when they are valid we return null
    return null;
};