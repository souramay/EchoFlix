export const ValidateDetails = (email, password, name) => {
    const Email = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    // At least 6 characters, must contain at least one letter and one digit
    const Password = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/.test(password);
    const Name = /^[a-zA-Z\s]+$/.test(name);

    if (name !== undefined && !Name) {
        return "Invalid Name";
    }
    if (!Email) {
        return "Invalid Email";
    }
    if (!Password) {
        return "Password must be at least 6 characters and include a letter and a digit.";
    }
    return null;
}