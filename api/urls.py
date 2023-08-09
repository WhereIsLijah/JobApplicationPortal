from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('get-data/', views.getData),
    path('post-data/', views.addData),
    path('delete-data/', views.deleteData),
    path('form-list/', views.formList, name="form-list"),
]
