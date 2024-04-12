#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun May  5 21:35:18 2019

@author: scion01
"""
import numpy as np
import pandas as pd
import glob


class data_preprocess:
    def __init__(self):
        pathRegex = "Sat May 11 00_06_39 GMT+05_30 2019 Values.csv"
        source_files = glob.glob(pathRegex)
        #if the current directory has multiple files then datatset can be an array, right now
        #it is intialised with the last file
        for source_file in source_files:
            self.dataset = pd.read_csv(source_file)
    def clean(self):
        self.dataset = self.dataset[np.isfinite(self.dataset['LAT'])]
        self.dataset = self.dataset[np.isfinite(self.dataset['LONG'])]
        self.dataset = self.dataset[np.isfinite(self.dataset['Speed'])]
        self.dataset = self.dataset[np.isfinite(self.dataset['accX'])]
        self.dataset = self.dataset[np.isfinite(self.dataset['accY'])]
        self.dataset = self.dataset[np.isfinite(self.dataset['accZ'])]
        return self.dataset
        