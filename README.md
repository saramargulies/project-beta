# CarCar

Team:

* Sara - Service
* Noah - Sales

## Design

## Service microservice

Explain your models and integration with the inventory
microservice, here.

This microservice contains three models. Two are normal models that define a technician object and an appointment object and one that is a VO that points to the automobile model in the inventory microservice via the poller.py in /poll. If there is an automobile in the inventory db with a VIN field that matches a VIN field on an appointment object, then the frontend will note that the customer for that appointment is a VIP.


## Sales microservice

Explain your models and integration with the inventory
microservice, here.
