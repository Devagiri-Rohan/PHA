from django.urls import path
from django.urls.conf import include
from . import views


urlpatterns=[
    #path('main/',views.home,name="home"),
    path('check.html',views.index,name="check"),
    path('stack/skin.html',views.skin,name="skin"),
    path('stack/anus.html',views.anus,name="anus"),
    path('stack/baj.html',views.baj,name="baj"),
    path('stack/bas.html',views.bas,name="bas"),
    path('stack/base.html',views.base,name="base"),
    path('stack/eyes.html',views.eyes,name="eyes"),
    path('stack/fatigue.html',views.fatigue,name="fatigue"),
    path('stack/fever.html',views.fever,name="fever"),
    path('stack/head.html',views.head,name="head"),
    path('stack/heart.html',views.heart,name="heart"),
    path('stack/legs.html',views.legs,name="legs"),
    path('stack/lungs.html',views.lungs,name="lungs"),
    path('stack/nae.html',views.nae,name="nae"),
    path('stack/others.html',views.others,name="others"),
    path('stack/',views.stack,name="stack"),
    path('stack/stack.html',views.stack,name="stack"),
    path('stack/stomach.html',views.stomach,name="stomach"),
    path('stack/urinary.html',views.urinary,name="urinary"),
    # path('stack/style.css',views.style,name="style_css")
    path('submit',views.submit,name="result"),




]