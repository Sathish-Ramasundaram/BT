from flask import Flask, jsonify, request
from flask_cors import CORS   # Import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Example posts (array of objects)
posts = [
    {"id": 1, "author": "Sathish", "content": "Be the energy you want to attract", "likes": 25},
    {"id": 2, "author": "Anita", "content": "Learning never stops!", "likes": 12},
    {"id": 3, "author": "Rahul", "content": "Consistency beats intensity.", "likes": 19}
]

# GET endpoint: fetch posts
@app.route("/api/posts", methods=["GET"])
def get_posts():
    return jsonify(posts)

# POST endpoint: add a new post
@app.route("/api/posts", methods=["POST"])
def add_post():
    new_post = request.json
    posts.append(new_post)
    return jsonify({"message": "Post added successfully!", "post": new_post})

if __name__ == "__main__":
    app.run(debug=True, port=5000)
