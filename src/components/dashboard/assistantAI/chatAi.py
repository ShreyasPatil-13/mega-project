from flask import Flask, jsonify, request
import openai
import os

app = Flask(__name__)

os.environ["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"] = "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"
openai.api_key = os.environ["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"]
model_engine = "text-davinci-002"

@app.route("/api/chatbot", methods=["POST"])
def chatbot():
    data = request.get_json()
    user_input = data["user_input"]
    prompt = f"User: {user_input}\nBot:"
    response = openai.Completion.create(engine=model_engine, prompt=prompt, max_tokens=1024, n=1, stop=None, temperature=0.5)
    bot_response = response.choices[0].text.strip()
    return jsonify({"bot_response": bot_response})

if __name__ == "__main__":
    app.run()
