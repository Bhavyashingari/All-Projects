from django.db import models

class Search(models.Model):
    query = models.CharField(max_length=255)
    timestamp = models.DateTimeField(auto_now_add=True)

class Product(models.Model):
    name = models.CharField(max_length=255)
    category = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    store = models.CharField(max_length=255)
    cetegeory = models.CharField(max_length=255)
    quantity = models.CharField(max_length=255)
    disc = models.TextField()
    ingredient = models.TextField()
    img = models.CharField(max_length=255)
