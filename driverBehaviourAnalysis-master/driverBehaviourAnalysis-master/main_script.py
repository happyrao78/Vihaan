#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun May  5 22:25:18 2019

@author: scion01
"""
import data_preprocessing as pre
import global_vals as global_vals
import csv
from time import gmtime, strftime

class main_script:
    
    def __init__(self):
        preprocess = pre.data_preprocess()
        self.dataset = preprocess.clean()
        self.file_init = False
        self.file_name = 'feature_outputs/'
        
    def get_dataset(self):
        return self.dataset
    
    def generate_features_csv(self,feature_vector,row_count):
        if(self.file_init == False):
            self.file_name += strftime("%Y-%m-%d %H:%M:%S", gmtime())+".csv"
            self.file_init = True
            header = ['index','max_speed','max_rotation','max_acc','avg_acc','avg_rotation','avg_speed','min_acc','min_speed','min_rotation']
            with open(self.file_name, 'w') as writeFile:
                writer = csv.writer(writeFile)
                writer.writerow(header)
            writeFile.close()
        else:
            feature_vector = list(feature_vector.values())
            feature_vector = [row_count]+feature_vector
            with open(self.file_name, 'a') as writeFile:
                writer = csv.writer(writeFile)
                writer.writerow(feature_vector)
            writeFile.close()
    
    def write_features(self,feature_vector,row_count):
        if(self.file_init == False):
            self.file_name += strftime("%Y-%m-%d %H:%M:%S", gmtime())+".csv"
            self.file_init = True
            header = ['index','max_speed','max_rotation','max_acc','avg_acc','avg_rotation','avg_speed','min_acc','min_speed','min_rotation','score']
            with open(self.file_name, 'w') as writeFile:
                writer = csv.writer(writeFile)
                writer.writerow(header)
            writeFile.close()
        else:
            score = 10.0
            if (feature_vector['max_speed'] > 12.5):
                score = score - 0.4
            elif (feature_vector['max_speed'] >14.0):
                score = score - 2.0
            elif (feature_vector['max_speed'] > 18.0): 
                score = score - 5.0
            if (feature_vector['avg_speed'] >12.5):
                score = score - 0.6
            #no need for other speed conditions since max conditions covers them
            if (feature_vector['max_rotation'] >0.1):
                score = score - 0.2
            elif (feature_vector['max_rotation'] >0.8):
                score = score - 0.5
            if (feature_vector['avg_rotation'] >0.1):
                score = score - 0.3
            if (feature_vector['max_acc'] >1.5 and feature_vector['max_acc'] <2.0):
                score = score - 1.5
            elif (feature_vector['max_acc'] >1.0 and feature_vector['max_acc'] <2.0):
                score = score - 0.7
            if (feature_vector['avg_acc'] >1.0):
                score = score - 0.1
            #since avg acc is not reliable
            feature_vector = list(feature_vector.values())
            feature_vector = [row_count]+feature_vector+[score]
            with open(self.file_name, 'a') as writeFile:
                writer = csv.writer(writeFile)
                writer.writerow(feature_vector)
            writeFile.close()
    
    def generate_feature_vectors(self):
        self.data_rows = self.dataset.iloc[:,:-1].values.tolist()
        self.feature_vector = {}
        #add angle detection logic here
        speed = self.dataset.Speed.values
        acc = self.dataset.accZ.values
        gyro = self.dataset.gyroZ.values
        print(len(self.data_rows))
        for row_count in range(len(self.data_rows)):
            feature_element = {}
            max_speed = 0
            min_speed = 999
            avg_speed = 0
            max_acc = 0
            min_acc =999
            avg_acc = 0
            max_rotation = 0
            min_rotation = 999
            avg_rotation = 0
            count=0
            if (row_count+global_vals.sample_size>len(self.data_rows)):
                global_vals.sample_size = global_vals.sample_size - row_count - 1
            while count in range(global_vals.sample_size):
                max_speed = abs(speed[row_count+count]) if abs(speed[row_count+count])>max_speed else max_speed
                max_rotation = abs(gyro[row_count+count]) if abs(gyro[row_count+count])>max_rotation else max_rotation
                max_acc = abs(acc[row_count+count]) if abs(acc[row_count+count])>max_acc else max_acc

                avg_speed+=abs(speed[row_count+count])
                avg_acc+=abs(acc[row_count+count])
                avg_rotation+=abs(gyro[row_count+count])
                
                min_speed = abs(speed[row_count+count]) if abs(speed[row_count+count])<min_speed else min_speed
                min_rotation = abs(gyro[row_count+count]) if abs(gyro[row_count+count])<min_rotation else min_rotation
                min_acc = abs(acc[row_count+count]) if abs(acc[row_count+count])<min_acc else min_acc
                count+=1
            
            if(count>0):
                avg_acc/=global_vals.sample_size
                avg_speed/=global_vals.sample_size
                avg_rotation/=global_vals.sample_size
                
                feature_element['max_speed'] = max_speed
                feature_element['max_rotation'] = max_rotation
                feature_element['max_acc'] = max_acc
                feature_element['avg_acc'] = avg_acc
                feature_element['avg_rotation'] = avg_rotation
                feature_element['avg_speed'] = avg_speed
                feature_element['min_acc'] = min_acc
                feature_element['min_speed'] = min_speed
                feature_element['min_rotation'] = min_rotation
                
                
                if global_vals.train_mode == True:
                    self.write_features(feature_element,row_count)
                else:
                    self.generate_features_csv(feature_element,row_count)
                
                
                self.feature_vector[row_count] = feature_element

        return self.feature_vector


main_script_obj = main_script()
print(main_script_obj.generate_feature_vectors())
