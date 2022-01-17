from django.db import models
import os
import json
import numpy as np
import pickle
from sklearn.preprocessing import LabelEncoder
# Create your models here.
def disease_classifier(names):
    if len(names)==0:
        return "You haven't selected anything! Please select atleast 3 or more symptoms!"

    elif len(names)>=1 and len(names)<3:
        return "Please select {} more symptom(s)!".format(3-len(names))
    else: 
        with open(os.getcwd()+"/PHA/symptoms.json","r") as fp:
            symptoms=json.load(fp)

        symptoms_numbers=[]
        for key,val in symptoms.items():
            for x in names:
                if key==x:
                    symptoms_numbers.append(val)
        input=np.zeros((132,),dtype=int)
        for x in symptoms_numbers:
            input[x]=1
        model_input=input
        model_input=model_input.reshape(1,-1)

        model=pickle.load(open(os.getcwd()+"/PHA/Disease Classifier.md5","rb"))
        res=model.predict(model_input)
        le=LabelEncoder()
        result=le.inverse_transform(res)
        
        return result