#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu May 30 07:22:20 2019

@author: scion01
"""

import numpy as np
import pandas as pd
import keras
import math
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
from tensorflow.keras.models import load_model
from tensorflow.keras.models import model_from_json
from flask import request
from flask import Flask

app = Flask(__name__)

@app.route('/singalService')
def hello_world():
   return "DBA service RUNNING!"

@app.route('/dba_service', methods=["GET"])
def dba_service():
    json_file = open('model_dba.json', 'r')
    
    loaded_model_json = json_file.read()
    json_file.close()
    loaded_model = model_from_json(loaded_model_json)
    
    # load weights into new model
    loaded_model.load_weights("model_dba.h5")
    
    loaded_model.save('model_dba.hdf5')
    loaded_model=load_model('model_dba.hdf5')
    
    dataset = pd.read_csv('feature_outputs/'+ request.args.get('file_name'))
    X = dataset.iloc[:, 1:7].values
    y_pred = loaded_model.predict(X)
    
    y_pred_label = [None]*len(y_pred)
    
    for i in range(0,len(y_pred)):
        if(y_pred[i]<=0.81):
            y_pred_label[i]="Poor"
        elif(y_pred[i]>0.81 and y_pred[i]<=0.86):
            y_pred_label[i]="Bad"
        else:
            y_pred_label[i]="Good"
    return ' '.join(str(label) for label in y_pred_label)
if __name__ == '__main__':
   app.run('0.0.0.0',9240)