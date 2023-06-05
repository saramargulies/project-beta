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


class ApptListEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "date_time",
        "reason",
        "status",
        "vin",
        "technician"
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

@require_http_methods(["DELETE"])
def api_delete_tech(request, id):
    if request.method == "DELETE":
        count, _ = Technician.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})

@require_http_methods(["GET", "POST"])
def api_list_appts(request):
    if request.method == "GET":
        appts = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appts},
            encoder=ApptListEncoder,
            safe=False
        )
    else:
        content = json.loads(request.body)

        try:
            tech = Technician.objects.get(id=content["technician"])
            content["technician"] = tech
        except Technician.DoesNotExist:
            return JsonResponse({'message':'That tech does not exist'}, status=400)
        tech = Appointment.objects.create(**content)
        return JsonResponse(
            tech,
            encoder=TechListEncoder,
            safe=False
        )
    
@require_http_methods(["DELETE", "PUT"])
def api_update_appt(request, id):
    if request.method == "PUT":
        content = json.loads(request.body)
        Appointment.objects.filter(id=id).update(status=content["status"])
        appt = Appointment.objects.get(id=id)
        return JsonResponse(
            appt,
            encoder=ApptListEncoder,
            safe=False
        )
    elif request.method == "DELETE"

@require_http_methods(["PUT"])
def api_update_status(request, id):
    pass