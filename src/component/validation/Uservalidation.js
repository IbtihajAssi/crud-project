export const validationUserData =(user)=>{
let errors={};
if(user.name.trim()==""){
    errors.name="user name is requierd";
}
else if(user.name.trim().length < 3){
    errors.name="user name must at least up to 3 characyer";
}
if(user.email.trim()==""){
    errors.email="user email is requierd";
}
else if(user.email.trim().length < 10){
    errors.email="user email must at least up to 10 characyer";
}
if(user.password.trim()==""){
    errors.password="user name is requierd";
}
else if(user.password.trim().length < 5){
    errors.password="user password must at least up to 5 characyer";
}
return errors;
}