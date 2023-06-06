from django.shortcuts import render
from django.http import JsonResponse
import json
from .models import Technician, AutomobileVO, Appointment
from django.views.decorators.http import require_http_methods
from common.json import *

class AutoVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin", "sold"]


class TechListEncoder(ModelEncoder):
    model = Technician
    properties = [
        "first_name",
        "last_name",
        "employee_id"
    ]

@require_http_methods(["GET"])
def api_list_autovo(request):
    if request.method == "GET":
        autos = AutomobileVO.objects.all()
        return JsonResponse(
            {"auto VOs": autos},
            encoder=AutoVOEncoder,
            safe=False
        )

@require_http_methods(["GET", "POST"])
def api_list_techs(request):
    if request.method == "GET":
        techs = Technician.objects.all()
        return JsonResponse(
            {"technicians": techs},
            encoder=TechListEncoder,
            safe=False
        )
    else:
        content = json.loads(request.body)

        tech = Technician.objects.create(**content)
        return JsonResponse(
            tech,
            encoder=TechListEncoder,
            safe=False
        )
@require_http_methods(["GET", "POST"])
def api_list_techs(request):
    if request.method == "GET":
        techs = Technician.objects.all()
        return JsonResponse(
            {"technicians": techs},
            encoder=TechListEncoder,
            safe=False
        )
    else:
        content = json.loads(request.body)

        tech = Technician.objects.create(**content)
        return JsonResponse(
            tech,
            encoder=TechListEncoder,
            safe=False
        )