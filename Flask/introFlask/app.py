from flask import Flask, send_file

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello, this is FAITH and welcome to my first Flask server!"

@app.route("/about")
def about():
    return "This is the about page of my first Flask app."

@app.route("/pic")
def pic():
    file_path="one.png"
    return send_file(file_path)

if __name__ == "__main__":
    app.run(debug=True)

