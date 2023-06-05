from django.shortcuts import render

@require_http_methods(["GET"])
def api_list_binvo(request):
    if request.method == "GET":
        bins = BinVO.objects.all()
        return JsonResponse(
            {"bins": bins},
            encoder=BinVODetailEncoder,
            safe=False
        )