from django.shortcuts import render
import json
from .models import Technician, AutomobileVO, Appointment


@require_http_methods(["GET"])
def api_list_autovo(request):
    if request.method == "GET":
        bins = .objects.all()
        return JsonResponse(
            {"bins": bins},
            encoder=BinVODetailEncoder,
            safe=False
        )