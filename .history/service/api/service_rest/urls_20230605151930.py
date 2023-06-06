from django.urls import path

from .views import api_list_autovo, api_list_techs

urlpatterns = [
    path("autovo/", api_list_autovo, name="api_list_autovo"),
    path("techni/", api_list_autovo, name="api_list_autovo"),
]
