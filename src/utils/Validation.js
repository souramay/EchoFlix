export const ValidateDetails=(email,password,name)=>{
// console.log(email);
// console.log(password);
// console.log(name);


    const Email=/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const Password=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const Name = /^[a-zA-Z\s]+$/.test(name);

    if(name !==undefined && !Name){
        return "Invalid Name"
    }
    if(!Email){
        return "Invalid Email"
    }
    if(!Password){
        return "Invalid Password"
    }
    return null
}