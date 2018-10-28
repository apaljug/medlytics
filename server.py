from flask import Flask, request, jsonify, render_template, send_from_directory, send_file
from pymongo import MongoClient
from datetime import datetime
import pymongo
import os

application = Flask(__name__, static_folder="public")
client = MongoClient("ds143603.mlab.com:43603",43603)
db = client["medlytics"]
# static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), 'public')

@application.route('/login', methods=['GET'])
def login():
    # print(static_file_dir)
    print("hi")
    return send_file("static/public/pages/index.html")
if __name__ == '__main__':
    application.run(host='0.0.0.0',debug=True)
