from flask import Flask
from flask_cors import CORS, cross_origin

import brew

app = Flask(__name__)
CORS(app)

def run_script():
    brew.main()


@app.route('/')
@cross_origin()
def hello_world():
    run_script()
    return '{}'


if __name__ == '__main__':
    app.run()
