from django.shortcuts import render
#from models import disease_classifier
import os
import json
import numpy as np
import pickle
from sklearn.preprocessing import LabelEncoder
import pandas as pd

# Create your views here.
from django.http import HttpResponse

def home(request):
    return render(request,'home.html')

def index(request):
    return render(request,'anus.html')

def anus(request):
    return render(request,'anus.html')

def baj(request):
    return render(request,'baj.html')

def bas(request):
    return render(request,'bas.html')

def base(request):
    return render(request,'base.html')

def eyes(request):
    return render(request,'eyes.html')

def fatigue(request):
    return render(request,'fatigue.html')

def fever(request):
    return render(request,'fever.html')

def home(request):
    return render(request,'home.html')

def head(request):
    return render(request,'head.html')

def heart(request):
    return render(request,'heart.html')

def index(request):
    return render(request,'index.html')

def legs(request):
    return render(request,'legs.html')
    
def lungs(request):
    return render(request,'lungs.html')

def nae(request):
    return render(request,'nae.html')

def next(request):
    return render(request,'next.html')

def others(request):
    return render(request,'others.html')

def skin(request):
    return render(request,'skin.html')

def stack(request):
    return render(request,'stack.html')

def stomach(request):
    return render(request,'stomach.html')

def urinary(request):
    return render(request,'urinary.html')

# def baj(request):
#     return render(request, '/static/bas.js')


BASE_DIR="C:/Users/adity/OneDrive/Desktop/Django Dev/PHA"

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
        le.classes_=np.load(os.getcwd()+"/PHA/le_classes.npy",allow_pickle=True)
        result=le.inverse_transform(res)
        
        return result

def submit(request):
    names = request.POST.getlist("link")
    print(names)
    result= disease_classifier(names)
    return render(request,'result.html',{'Result':result})


