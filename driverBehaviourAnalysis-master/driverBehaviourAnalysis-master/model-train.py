#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue May 28 17:07:52 2019

@author: scion01
"""
# Installing Theano
# pip install --upgrade --no-deps git+git://github.com/Theano/Theano.git

# Installing Tensorflow
# Install Tensorflow from the website: https://www.tensorflow.org/versions/r0.12/get_started/os_setup.html

# Installing Keras
# pip install --upgrade keras

#Data Preprocessing

# Importing the libraries
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

# Importing the dataset
dataset = pd.read_csv('feature_outputs/2019-05-30 20:08:36.csv')
X = dataset.iloc[:, 1:7].values
y = dataset.iloc[:, 10].values

for count in range(0,len(y)):
    y[count]=y[count]/10

# Splitting the dataset into the Training set and Test set
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 0)



# Making the ANN

# Importing the Keras libraries and packages
import keras
import math
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense

# Initialising the ANN
#sequential model is a model with multiple inputs and single output, we stack layer one by one, the other type of models are 
#functional model.     
#after declraing the model, we add layers one by one and then we compile the model by passing the loss function(madatory)
#then we fit the model
model = Sequential()

# Adding the input layer and the first hidden layer
model.add(Dense(units = 6, kernel_initializer = 'uniform', activation = 'relu', input_dim = 6))

# Adding the second hidden layer
model.add(Dense(units = 6, kernel_initializer = 'uniform', activation = 'relu'))

# Adding the output layer
#https://towardsdatascience.com/activation-functions-neural-networks-1cbd9f8d91d6 to know more about activation models
model.add(Dense(units = 1, kernel_initializer = 'uniform', activation = 'sigmoid'))

# Compiling the ANN
#The ReLU is half rectified (from bottom). f(z) is zero when z is less than zero and f(z) is equal to z when z is above or 
#equal to zero

#optimizer is used to control learning rate and other things, its complex so go to 
#https://machinelearningmastery.com/adam-optimization-algorithm-for-deep-learning/

# with the help of some optimization function, loss function learns to reduce the error in prediction.
#https://towardsdatascience.com/common-loss-functions-in-machine-learning-46af0ffc4d23 for about loss function
model.compile(optimizer = 'adam', loss = 'mean_squared_error', metrics = ['accuracy'])



# Fitting the ANN to the Training set
#The batch size defines the number of samples that will be propagated through the network.
#lets say u have 55 entries and u keep the batch_size as 10, then 5 entires would never be used for training
model.fit(X_train, y_train, batch_size = 10, nb_epoch = 100)


model_json = model.to_json()
with open("model_dba.json", "w") as json_file:
    json_file.write(model_json)
 
model.save_weights("model_dba.h5")


#Making the predictions and evaluating the model

# Predicting the Test set results
y_pred = model.predict(X_test)


cor_pred =0
incor_pred =0
diff = 0.0
for i in range(0,len(y_pred)):
    if y_pred[i] == y_test[i]:
        cor_pred=cor_pred+1
    else:
        incor_pred=incor_pred+1
    diff = diff + abs(y_pred[i]-y_test[i])

#creating classes for prediction
y_pred_label = [None]*len(y_pred)
y_test_label = [None]*len(y_test)
for i in range(0,len(y_pred)):
    if(y_pred[i]<0.90):
        y_pred_label[i]="Bad"
    else:
        y_pred_label[i]="Good"
    if(y_test[i]<0.90):
        y_test_label[i]="Bad"
    else:
        y_test_label[i]="Good"

correct = 0
incorrect = 0
inc_label = []
for i in range(0,len(y_pred)):
    if y_pred_label[i] == y_test_label[i]:
        correct = correct+1
    else:
        inc_label.append(y_pred_label[i])
        incorrect = incorrect+1

# Making the Confusion Matrix
from sklearn.metrics import confusion_matrix
cm = confusion_matrix(y_test_label, y_pred_label)