from django.urls import path

from .views import api_list_autovo

urlpatterns = [
    path("autovo/", apis, name="api_list_shoes"),
]
