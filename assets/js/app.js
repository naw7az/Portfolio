var firebaseConfig = {
    apiKey: "AIzaSyDi5cCrhZ4rUcPGvTbGE0rn2U3KzMmEp5Q",
    authDomain: "portfolio-an.firebaseapp.com",
    databaseURL: "https://portfolio-an.firebaseio.com",
    projectId: "portfolio-an",
    storageBucket: "portfolio-an.appspot.com",
    messagingSenderId: "991049660178",
    appId: "1:991049660178:web:b558e79399c8ddc5ee65cb",
    measurementId: "G-JYZHG2PV83"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Reference message collection
var messageRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById("sub").addEventListener('click', submitForm);

// Submit Form

function submitForm() {
    // Get values
    var inputName = document.getElementById("username");
    var inputMail = document.getElementById("usermail");
    var inputMessage = document.getElementById("usermessage");

    // Save Message
    if (inputName.value.length > 0 && inputMail.value.length > 0 && inputMessage.value.length > 0) {
        saveMessage(inputName.value, inputMail.value, inputMessage.value);
        inputName.value = "";
        inputMail.value = "";
        inputMessage.value = "";
        alert("Your message has been sent.");
    }
}

function saveMessage(name, email, message) {
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message
    });
}




// var submit = document.getElementById("sub");
// var inputName = document.getElementById("username");
// var inputMail = document.getElementById("usermail");
// var inputMessage = document.getElementById("usermessage");

// function sendToConsole() {
//     if (inputName.value.length > 0 && inputName.value.length > 0 && inputMessage.value.length > 0) {
//         console.log(inputName.value);
//         console.log(inputMail.value);
//         console.log(inputMessage.value);
//         inputName.value = "";
//         inputMail.value = "";
//         inputMessage.value = "";
//     }
// }

// submit.addEventListener("click", sendToConsole);