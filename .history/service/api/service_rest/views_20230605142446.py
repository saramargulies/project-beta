from django.shortcuts import render
import json
from .models import Technician, AutomobileVO, Appointment
from django.views.decorators.http import require_http_methods
from common.json import *

class AutoVoEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin", "sold"]


@require_http_methods(["GET"])
def api_list_autovo(request):
    if request.method == "GET":
        autos = AutomobileVO.objects.all()
        return JsonResponse(
            {"auto VOs": autos},
            encoder=BinVODetailEncoder,
            safe=False
        )