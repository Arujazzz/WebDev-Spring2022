from django.contrib import admin

# Register your models here.
from api.models import *

admin.site.register(Category)
admin.site.register(Product)
admin.site.register(Feedback)
admin.site.register(Shipping)