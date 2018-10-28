from flask import Flask, request, jsonify, render_template, send_from_directory, send_file
from pymongo import MongoClient
from datetime import datetime
import pymongo
import os

application = Flask(__name__)
client = MongoClient("ds143603.mlab.com:43603",43603)
db = client["medlytics"]
# static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), 'public')

@application.route('/index', methods=['GET'])
def index():
    # print(static_file_dir)
    print("hi")
    return render_template("index.html")
@application.route('/analytics', methods=['GET'])
def analytics():
    # print(static_file_dir)
    print("hi")
    return render_template("analytics.html")
if __name__ == '__main__':
    application.run(host='0.0.0.0',debug=True)
