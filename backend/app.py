from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
import os

load_dotenv()

frontend_url = os.getenv('FRONTEND')

app = Flask(__name__)
CORS(app, origins=frontend_url)


@app.route('/', methods = ['GET'])
def hello_world():
    return 'Hello from Flask & Docker'


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)