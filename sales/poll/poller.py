import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sales_project.settings")
django.setup()

# Import models from sales_rest, here.
# from sales_rest.models import Something
from sales_rest import models
from sales_rest.models import AutomobileVO


def poll(repeat=True):
    while True:
        print('Sales poller polling for data')
        try:
            # Write your polling logic, here
            # Do not copy entire file
            url = "http://project-beta-inventory-api-1:8000/api/automobiles/"
            response = requests.get(url)
            content = json.loads(response.content)
            for vehicle in content["autos"]:
                AutomobileVO.objects.update_or_create(
                    vin=vehicle["vin"],
                    sold=vehicle["sold"],
                )
        except Exception as e:
            print(e, file=sys.stderr)

        if (not repeat):
            break

        time.sleep(60)


if __name__ == "__main__":
    poll()
