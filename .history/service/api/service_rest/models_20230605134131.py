from django.db import models

class Technician(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField
