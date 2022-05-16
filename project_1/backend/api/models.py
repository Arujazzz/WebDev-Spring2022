from itertools import product
from tabnanny import verbose
from tkinter import CASCADE
from unicodedata import category
from django.db import models

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=200)
    
    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def __str__(self):
        return f'{self.id}:{self.name}'

class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.FloatField(default=0)
    rating = models.FloatField(default=0)
    image = models.ImageField()
    link = models.TextField(default='')
    description = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True, related_name='products')
    
    class Meta: 
        verbose_name = 'Product'
        verbose_name_plural = 'Products'

    def _str__(self):
        return f' {self.id}: {self.name} | {self.price} | {self.description} '

class Feedback(models.Model):
    body = models.TextField()
    product = models.ForeignKey(Product, on_delete=models.CASCADE, null=True, related_name='comments')
    
    class Meta:
        verbose_name = 'Feedback'
        verbose_name_plural = 'Feedbacks'

    def __str__(self):
        return f' {self.id} - {self.body}'

class Shipping(models.Model):
    type = models.CharField(max_length=200)
    price = models.FloatField(default=0)

    class Meta:
        verbose_name = 'Shipping'
        verbose_name_plural = 'Shippings'
    
    def __str__(self):
        return f' {self.id}: {self.type} - {self.price} '

