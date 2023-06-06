from django.contrib import admin
from .models import Appointment, AutomobileVO, Technician

@admin.register(Appointment)
class ApptAdmin(admin.ModelAdmin):
    list_display = (
        "date_time",
        "reason",
        "status",
        "vin",
        "technician",
        "id"
    )
