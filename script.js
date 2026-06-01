function sendMessage() {

    let input = document.getElementById("userInput");
    let message = input.value.toLowerCase();

    let response = "Sorry, I don't understand.";

    if(message === "hello"){
        response = "Hi! How can I help you?";
    }
    else if(message === "bus timings"){
        response = "Bus timings are from 6 AM to 10 PM.";
    }
    else if(message === "thank you"){
        response = "You are welcome!";
    }

    let chatbox = document.getElementById("chatbox");

    chatbox.innerHTML += "<p><b>You:</b> " + input.value + "</p>";
    chatbox.innerHTML += "<p><b>Bot:</b> " + response + "</p>";

    input.value = "";
}