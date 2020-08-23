var submit = document.getElementById("sub");
var inputName = document.getElementById("username");
var inputMail = document.getElementById("usermail");
var inputMessage = document.getElementById("usermessage");

function sendToConsole() {
    if (inputName.value.length > 0 && inputName.value.length > 0 && inputMessage.value.length > 0) {
        console.log(inputName.value);
        console.log(inputMail.value);
        console.log(inputMessage.value);
        inputName.value = "";
        inputMail.value = "";
        inputMessage.value = "";
    }
}

submit.addEventListener("click", sendToConsole);