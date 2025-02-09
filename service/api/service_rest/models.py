from django.db import models


class Technician(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    employee_id = models.CharField(max_length=200)

    def __str__(self):
        return self.first_name


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=200, unique=True)
    sold = models.BooleanField()


class Appointment(models.Model):
    date_time = models.DateTimeField()
    reason = models.TextField()
    status = models.CharField(max_length=200, default="created")
    customer = models.CharField(max_length=200, null=True)
    vin = models.CharField(max_length=200)
    technician = models.ForeignKey(
        Technician,
        related_name="appointments",
        on_delete=models.CASCADE
    )
