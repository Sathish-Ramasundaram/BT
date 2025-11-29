from flask import Flask, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/posts')
def get_posts():
    return jsonify([
        {
            "company": "Metra Commuter Rail",
            "followers": "30,500 followers",
            "type": "5d",
            "headline": "Hire the best sales talent to grow your business.",
            "content": "Check out our current job posting and apply at https://lnkd.in/g55DyKFt ",
            "image": "/static/img/metra.png",
            "likes": 120,
            "comments": 8
        }
    ])

if __name__ == '__main__':
    app.run(debug=True)
