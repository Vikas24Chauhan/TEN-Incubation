from flask import Flask, request, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
import re

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///emails.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Gmail(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True, nullable=False)


with app.app_context():
    db.create_all()


def is_valid_gmail(email):
    return re.match(r'^[a-zA-Z0-9_.+-]+@gmail\.com$', email)


@app.route('/')
def index():
    return render_template('index.html')



@app.route('/submit', methods=['POST'])
def submit_email():
    email = request.form.get('email')  

    
    if not email or not is_valid_gmail(email):
        return jsonify({'error': 'Invalid Gmail address!'}), 400
    
    
    if Gmail.query.filter_by(email=email).first():
        return jsonify({'error': 'Email already exists!'}), 400
    
    
    new_email = Gmail(email=email)
    db.session.add(new_email)
    db.session.commit()

    return jsonify({'success': 'Gmail stored successfully!'})

if __name__ == '__main__':
    app.run(debug=True)
