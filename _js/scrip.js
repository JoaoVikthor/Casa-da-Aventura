
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfimation = document.getElementById("password-confirmation");

form.addEventListener("submit",(event) =>{
    event.preventDefault();

    checkform();
  
})
username.addEventListener("blur", () => {
    checkImputUsername();
})

email.addEventListener("blur", () => {
    checkImputEmail();
})
password.addEventListener("blur", () => {
    checkImputPassword();
})


function checkImputUsername(){
    const usernameValue = username.value;

    if(usernameValue ===""){
        errorInput(username, "Por favor coloque o nome de usuário!")
    }else{
        const formItem =username.parentElement;
        formItem.className = "form-contant"
    }
}

function checkImputEmail(){
    const emailValue = email.value;

    if(emailValue ===""){
        errorInput(email, "Por favor coloque seu email!")
    }else{
        const formItem =email.parentElement;
        formItem.className = "form-contant"
    }
}
 function checkImputPassword(){
    const passwordValue = password.value;
    if(passwordValue === ""){
        errorInput(password, "Por favor escolha uma senha!")
    }else if(passwordValue.length < 8){ 
        errorInput(password, "A senha precisa ter no mínimo 8 caracters")
    }else{
        const formItem = password.parentElement;
        formItem.className = "form-contant"
    }
 }

 function checkImputPasswordConfirmation(){
    const passwordValue = password.value;
    const confirmationPasswordValue = passwordConfimation.value
    if(confirmationPasswordValue === ""){
        errorInput(passwordConfimation, "Por favor digite a senha novamente!")
    }else if(confirmationPasswordValue !== passwordValue){ 
        errorInput(passwordConfimation, "Senhas diferentes")
    }else{
        const formItem = passwordConfimation.parentElement;
        formItem.className = "form-contant"
    }
 }

 function checkform(){
    checkImputUsername();
    checkImputEmail();
    checkImputPassword();
    checkImputPasswordConfirmation();

    const formItem = form.querySelectorAll(".form-contant")

    const isValid = [...formItem].every((item) => {
        return item.className ==="form-contant"
    });
     
    if(isValid){
        alert("CADASTRADO COM SUCESSO!")
    }
 }

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;
    
    formItem.className = "form-contant error"
}
