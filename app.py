from flask import Flask, request, jsonify
from tensorflow.keras.preprocessing import image
import numpy as np
import tensorflow as tf
import io
from PIL import Image
from flask_cors import CORS


# Load your pre-trained model (update path as needed)
model = tf.keras.models.load_model('deepfake_classifier.h5')

app = Flask(__name__)
# Specific origin
CORS(app, resources={r"/predict": {"origins": "http://localhost:5173"}})

ALLOWED_IMAGE_EXTENSIONS = {'png', 'jpg', 'jpeg'}


def allowed_image(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_IMAGE_EXTENSIONS


@app.route('/')
def home():
    return "Welcome to the Deepfake Detector API! Please POST to /predict."


@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({"error": "No image file found"}), 400

    image_file = request.files['image']

    if image_file.filename == '':
        return jsonify({"error": "No selected image file"}), 400

    if not allowed_image(image_file.filename):
        return jsonify({"error": "Invalid image file type"}), 400

    # Process the image and pass it to the model
    image = Image.open(image_file.stream)
    image = image.convert('RGB')
    image = image.resize((256, 256))

    # Convert the image to a numpy array and preprocess it
    image_array = np.array(image) / 255.0  # Normalize pixel values to [0, 1]
    image_array = np.expand_dims(image_array, axis=0)  # Add batch dimension

    # Make a prediction
    prediction = model.predict(image_array)

    # Interpret the result (e.g., deepfake or not deepfake)
    result = "Deepfake detected" if prediction[0] > 0.5 else "No deepfake detected"

    # Convert prediction to a percentage
    confidence = float(prediction[0]) * 100

    # Return the prediction as a JSON response
    return jsonify({'prediction': result, 'confidence': confidence})


if __name__ == '__main__':
    app.run(debug=True)
