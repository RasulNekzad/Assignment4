/**
 * this functions checks where the password entered by the user is 12345678
 */

function checkPassword(){
    const password = document.getElementById("password").value;
    console.log(password);
    if(password == 12345678){
        document.getElementById("status").textContent = 'Signed In Successfully';
    }else{
        document.getElementById("status").textContent = 'Sign In';
        alert('Incorrect Password!!!');
    }
}