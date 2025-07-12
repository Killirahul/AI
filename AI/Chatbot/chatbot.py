import random
import spacy

nlp = spacy.load("en_core_web_sm")

responses = {
    "greeting": ["Hi there!", "Hello!", "Hey!", "How can I help you?"],
    "goodbye": ["Bye!", "See you later!", "Goodbye!"],
    "thanks": ["You're welcome!", "No problem!", "Glad to help!"],
    "default": ["I'm not sure how to respond to that."]
}

def classify_intent(text):
    doc = nlp(text.lower())
    if any(token.lemma_ in ['hi', 'hello', 'hey'] for token in doc):
        return "greeting"
    elif any(token.lemma_ in ['bye', 'goodbye', 'see', 'later'] for token in doc):
        return "goodbye"
    elif any(token.lemma_ in ['thank', 'thanks'] for token in doc):
        return "thanks"
    else:
        return "default"

def chatbot():
    print("Bot: Hello! I'm your assistant. Type 'exit' to quit.")
    while True:
        user_input = input("You: ")
        if user_input.lower() == 'exit':
            print("Bot: Goodbye!")
            break
        intent = classify_intent(user_input)
        print("Bot:", random.choice(responses[intent]))