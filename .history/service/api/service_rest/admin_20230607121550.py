from django.contrib import admin
from .models import Appointment, AutomobileVO, Technician

@admin.register(Appointment)
class AppoinmentAdmin(admin.ModelAdmin):
    list_display = (
        "date_time",
        "reason",
        "status",
        "vin",
        "technician",
        "id"
    )

@admin.register(Technician)
class TechnicianAdmin(admin.ModelAdmin):
    list_display = (
        "first_name",
        "last_name",
        "employee_id",
        "id"
    )

