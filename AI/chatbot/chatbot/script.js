const responses = {
  greeting: ["Hello!", "Hi there!", "Hey!", "Nice to meet you!"],
  goodbye: ["Goodbye!", "See you later!", "Take care!"],
  thanks: ["You're welcome!", "Glad to help!", "No problem!"],
  default: ["I'm not sure how to respond to that."]
};

function classifyIntent(msg) {
  msg = msg.toLowerCase();
  if (msg.includes("hi") || msg.includes("hello") || msg.includes("hey")) return "greeting";
  if (msg.includes("bye") || msg.includes("goodbye")) return "goodbye";
  if (msg.includes("thank")) return "thanks";
  return "default";
}

function getBotResponse(message) {
  const intent = classifyIntent(message);
  const reply = responses[intent];
  return reply[Math.floor(Math.random() * reply.length)];
}

function sendMessage() {
  const input = document.getElementById("user-input");
  const msg = input.value.trim();
  if (msg === "") return;

  appendMessage(msg, "user");
  input.value = "";

  setTimeout(() => {
    const reply = getBotResponse(msg);
    appendMessage(reply, "bot");
  }, 500);
}

function appendMessage(message, sender) {
  const chatBox = document.getElementById("chat-box");
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message", sender);
  msgDiv.textContent = message;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}
