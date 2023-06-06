from django.http import JsonResponse
from django.db import IntegrityError
from django.views.decorators.http import require_http_methods
from common.json import ModelEncoder
import json
from .models import Customer, Salesperson, Sale, AutomobileVO


class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "first_name",
        "last_name",
        "address",
        "phone_number",
    ]


class SalesPersonEncoder(ModelEncoder):
    model = Salesperson
    properties = [
        "first_name",
        "last_name",
        "employee_id",
    ]


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "sold",
    ]


class SaleEncoder(ModelEncoder):
    model = Sale
    properties = [
        "salesperson",
        "customer",
        "automobile",
        "price",
    ]
    encoders = {
        "salesperson": SalesPersonEncoder(),
        "customer": CustomerEncoder(),
        "automobile": AutomobileVOEncoder(),
    }



@require_http_methods(["GET", "POST"])
def api_list_salespeople(request):
    if request.method == "GET":
        salespersons = Salesperson.objects.all()
        return JsonResponse(
            {"salespeople": salespersons},
            SalesPersonEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)
        try:
            salesperson = Salesperson.objects.create(**content)
        except IntegrityError:
            return JsonResponse({"Could not create salesperson": "All employees need a unique employee ID"}, status=400)
        return JsonResponse(
            salesperson,
            encoder=SalesPersonEncoder,
            safe=False,
        )


@require_http_methods(["GET", "DELETE"])
def api_details_salespeople(request, id):
    if request.method == "GET":
        try:
            salesperson = Salesperson.objects.get(id=id)
        except Salesperson.DoesNotExist:
            return JsonResponse(
                {"message": "Sales Person Does Not Exist"},
                status=400,
            )
        return JsonResponse(
            salesperson,
            encoder=SalesPersonEncoder,
            safe=False,
        )
    else:
        try:
            salesperson = Salesperson.objects.get(id=id)
        except Salesperson.DoesNotExist:
            return JsonResponse(
                {"message": "This salesperson does not exist"},
                status=400,
            )
        salesperson.delete()
        return JsonResponse({"Deleted": "True"}, status=200)


@require_http_methods(["GET", "POST"])
def api_list_customers(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            CustomerEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)
        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False,
        )


@require_http_methods(["GET", "DELETE"])
def api_details_customers(request, id):
    if request.method == "GET":
        try:
            customer = Customer.objects.get(id=id)
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "This customer does not exist"},
                status=400,
            )
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False,
        )
    else:
        try:
            customer = Customer.objects.get(id=id)
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "This customer does not exist"},
                status=404,
            )
        customer.delete()
        return JsonResponse({"Deleted": "True"})


@require_http_methods(["GET", "POST"])
def api_list_sales(request):
    if request.method == "GET":
        sales = Sale.objects.all()
        return JsonResponse(
            {"sales": sales},
            SaleEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)
        try:
            automobile = AutomobileVO.objects.get(vin=content["automobile"])
            content["automobile"] = automobile
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Automobile VIN"},
                status=400,
            )
        try:
            customer = Customer.objects.get(id=content["customer"])
            content["customer"] = customer
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Customer ID"},
                status=400,
            )
        try:
            salesperson = Salesperson.objects.get(id=content["salesperson"])
            content["salesperson"] = salesperson
        except Salesperson.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Salesperson ID"},
                status=400,
            )

        sale = Sale.objects.create(**content)

        return JsonResponse(
            sale,
            encoder=SaleEncoder,
            safe=False,
        )


@require_http_methods(["GET", "DELETE"])
def api_details_sales(request, id):
    if request.method == "GET":
        try:
            sale = Sale.objects.get(id=id)
        except Sale.DoesNotExist:
            return JsonResponse(
                {"message": "This sale does not exist"},
                status=400,
            )

        return JsonResponse(
            sale,
            encoder=SaleEncoder,
            safe=False,
        )
    else:
        try:
            sale = Sale.objects.get(id=id)
        except Sale.DoesNotExist:
            return JsonResponse(
                {"message": "This sale does not exist"},
                status=400,
            )
        sale.delete()
        return JsonResponse({"Deleted": "True"})
