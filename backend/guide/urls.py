from django.contrib import admin
from django.urls import path

from django.conf import settings
from django.conf.urls.static import static

from . import views

app_name = 'guide'

urlpatterns = [
    path('', views.guide_index, name='guide_index'),
]