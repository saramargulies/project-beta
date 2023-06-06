from django.contrib import admin
from .models import Sale, Salesperson, Customer, AutomobileVO
# Register your models here.


@admin.register(Sale)
class SaleAdmin(admin.ModelAdmin):
    list_display = [
        "salesperson",
        "customer",
        "price",
    ]


@admin.register(Salesperson)
class SalespersonAdmin(admin.ModelAdmin):
    list_display = [
        "first_name",
        "last_name",
        "employee_id",
    ]


@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    list_display = [
        "first_name",
        "last_name",
        "phone_number",
    ]


@admin.register(AutomobileVO)
class AutomobileVOAdmin(admin.ModelAdmin):
    list_display = [
        "vin",
    ]
