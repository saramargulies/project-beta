from django.urls import path

from .views import (
    api_list_autovo, 
    api_list_techs, 
    api_list_appts, api_delete_tech, api_finish_appt, api_cancel_appt, api_delete_appt
)


urlpatterns = [
    path("autovo/", api_list_autovo, name="api_list_autovo"),
    path("technicians/", api_list_techs, name="api_list_techs"),
    path("technicians/<int:id>", api_delete_tech, name="api_delete_techs"),
    path("appointments/", api_list_appts, name="api_list_appts"),
    path("appointments/<int:id>/cancel", api_cancel_appt, name="api_cancel_appt"),
    path("appointments/<int:id>/finish", api_finish_appt, name="api_finish_appt"),
    path("appointments/<int:id>", api_delete_appt, name="api_delete_appt"),
]
