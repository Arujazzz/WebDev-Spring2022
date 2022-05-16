from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token
from api.views import *

urlpatterns = [
    path('login/', obtain_jwt_token),
    
    path('categories/', category_list),
    path('categories/<int:category_id>',category_details ),
    path('categories/<int:category_id>/products',category_products ),
    
    path('products/', ProductListAPIView.as_view()),
    path('products/<int:product_id>', ProductDetailsAPIVIEW.as_view()),
    path('products/<int:product_id>/feedbacks', product_feedbacks),
    
    path('feedbacks/', FeedbackListAPIView.as_view()),
    path('feedbacks/<int:feedback_id>', FeedbackDetailsAPIVIEW.as_view()),
    
    path('shippings/', shipping_list),
    path('shippings/<int:shipping_id>', shipping_details),
]