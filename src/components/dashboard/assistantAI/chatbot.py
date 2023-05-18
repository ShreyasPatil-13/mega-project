import openai
import os
import os
os.environ["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"] = "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"

openai.api_key = os.environ["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"]
model_engine = "text-davinci-002"

def get_bot_response(user_input):
    prompt = f"User: {user_input}\nBot:"
    response = openai.Completion.create(engine=model_engine, prompt=prompt, max_tokens=1024, n=1, stop=None, temperature=0.5)
    bot_response = response.choices[0].text.strip()
    return bot_response

while True:
    user_input = input("You: ")
    if user_input.lower() == "bye":
        print("Bot: Goodbye!")
        break
    bot_response = get_bot_response(user_input)
    print("Bot:", bot_response)
