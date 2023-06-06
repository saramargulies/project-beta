from django.urls import path
from .views import api_list_salespeople, api_details_salespeople, api_list_customers, api_details_customers, api_list_sales, api_details_sales

urlpatterns = [
    path("salespeople/", api_list_salespeople, name="list_salespeople"),
    path("salespeople/<int:id>/", api_details_salespeople, name="detail_salespeople"),
    path("customers/", api_list_customers, name="list_customers"),
    path("customers/<int:id>/", api_details_customers, name="detail_customers"),
    path("sales/", api_list_sales, name="list_sales"),
    path("sales/<int:id>/", api_details_sales, name="detail_sales"),
]
