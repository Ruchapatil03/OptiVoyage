from flask import Flask, request, jsonify
import flask_cors as cors

app = Flask(__name__)
cors.CORS(app)

def predict_output(input):
    # code to request a prediction from model with the given input
    pass

@app.route('/predict', methods=['POST'])
def predict():
    if request.method == "POST":
        pass
        # input = request.something

        try:
            # code to parse the input and call the predict function
            return jsonify(predict())

        except Exception as e:
            return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=False)