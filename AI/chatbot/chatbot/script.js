const responses = {
    greeting: ["Hi!", "Hello!", "Hey there!", "How can I help you?"],
    goodbye: ["Goodbye!", "See you later!", "Bye!"],
    thanks: ["You're welcome!", "No problem!", "Glad to help!"],
    default: ["Sorry, I didn't understand that."]
};

function classifyIntent(message) {
    const msg = message.toLowerCase();
    if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) {
        return "greeting";
    } else if (msg.includes("bye") || msg.includes("goodbye")) {
        return "goodbye";
    } else if (msg.includes("thank")) {
        return "thanks";
    } else {
        return "default";
    }
}

function getBotResponse(message) {
    const intent = classifyIntent(message);
    const replyList = responses[intent];
    return replyList[Math.floor(Math.random() * replyList.length)];
}

function sendMessage() {
    const userInput = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
    const message = userInput.value.trim();
    if (message === "") return;

    // User message
    chatBox.innerHTML += `<div><strong>You:</strong> ${message}</div>`;

    // Bot response
    const botResponse = getBotResponse(message);
    setTimeout(() => {
        chatBox.innerHTML += `<div><strong>Bot:</strong> ${botResponse}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);

    userInput.value = "";
}
