from django.urls import path

from .views import api_list_autovo, api_list_techs, api_list_appts

urlpatterns = [
    path("autovo/", api_list_autovo, name="api_list_autovo"),
    path("technicians/", api_list_techs, name="api_list_techs"),
    path("technicians/:id", api_list_techs, name="api_list_techs"),
    path("appointments/", api_list_appts, name="api_list_appts"),
]
