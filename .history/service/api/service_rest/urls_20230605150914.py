from django.urls import path

from .views import api_list_shoes, api_list_binvo, api_shoe_detail

urlpatterns = [
    path("shoes/", api_list_shoes, name="api_list_shoes"),
]
