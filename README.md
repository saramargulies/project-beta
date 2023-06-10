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

The sales microservice has 4 models:
1. AutomobileVO - this value object is used to poll the automobiles listed in the inventory microservice. These objects are used to associate sales instances with an automobile.
2. Salesperson - this model is used to create salespeople (first name, last name, employee id) who can be associated with many sales.
3. Customer - this model is used to create customers (first name, last name, address, phone #) who can be associated with many sales.
4. Sale - this model is used to document sales. All of the fields in this model are foreign keys to the other classes in this microservice (automobile, customer, salesperson)
