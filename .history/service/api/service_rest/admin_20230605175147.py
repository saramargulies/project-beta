from django.contrib import admin
from .models import Appointment, AutomobileVO, Technician

@admin.register(Appointment)
class ApptAdmin(admin.ModelAdmin):
    pass
