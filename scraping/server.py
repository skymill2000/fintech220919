from flask import Flask, jsonify, request
import dental_scraper
from flask_cors import CORS
app = Flask(__name__)
cors = CORS(app)
scraper = dental_scraper

# 아래 내용 복사해서 터미널에 붙여넣기
# pip install flask
# pip install jsonify
# pip install flask_cors
# cmd) python server.py

@app.route('/aia', methods=['POST'])
def AIAData():
    name = request.form['name']
    birth = request.form['birth']
    gender = request.form['gender']
    return jsonify(scraper.getAIAData(name, birth, gender))

@app.route('/lina', methods=['POST'])
def LinaData():
    name = request.form['name']
    birth = request.form['birth']
    gender = request.form['gender']
    return jsonify(scraper.getRinaData(name, birth, gender))

app.run()