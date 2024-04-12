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
    if y[count] <9.0:
        y[count]=0
    else:
        y[count]=1
# Splitting the dataset into the Training set and Test set
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 0)


# Fitting SVM to the Training set
# Create your classifier here
from sklearn.svm import SVC
classifier = SVC(gamma='auto', kernel = 'rbf', random_state = 0)
#c is the penalty parameter, kernel value is important
classifier.fit(X_train,y_train)

# Predicting the Test set results
y_pred = classifier.predict(X_test)


# Making the Confusion Matrix
from sklearn.metrics import confusion_matrix
cm = confusion_matrix(y_test, y_pred)
