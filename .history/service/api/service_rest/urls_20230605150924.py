from django.urls import path

from .views import api_list_autovo

urlpatterns = [
    path("shoes/", api_list_autovo, name="api_list_shoes"),
]
