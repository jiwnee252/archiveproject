from django.contrib import admin
from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

app_name = 'bubble'

urlpatterns = [
        path('<int:year>/<int:month>/<int:day>/', views.bubble_day, name="bubble_day")
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)