from itertools import product
from api.models import*
from api.serializers import*

from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import Http404

""" @permission_classes([IsAuthenticated]) """
@api_view(['GET', 'POST'])
def category_list(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    
@api_view(['GET', 'PUT', 'DELETE'])
def category_details(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as e:
        return Response({'message': str(e)}, status=400)

    if request.method == 'GET':
        serializer = CategorySerializer(category)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = CategorySerializer(instance=category,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    elif request.method == 'DELETE':
        category.delete()
        return Response({}, status=204)

@api_view(['GET'])
def category_products(request, category_id):
    try:
        products = Product.objects.all().filter(category_id=category_id)
    except Product.DoesNotExist as e:
        return Response({'message': str(e)}, status=400)

    if request.method == 'GET':
        serializers = ProductSerializer(products, many=True)
        return Response(serializers.data)


class ProductListAPIView(APIView):
    """ permission_classes = (IsAuthenticated,) """

    def get(self, request):
        products = Product.objects.all()
        serializers = ProductSerializer(products, many=True)
        return Response(serializers.data)

    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


class ProductDetailsAPIVIEW(APIView):
    def get_object(self, product_id):
        try:
            return Product.objects.get(id=product_id)
        except Product.DoesNotExist as e:
            raise Http404

    def get(self, request, product_id=None):
        product = self.get_object(product_id)
        serializer = ProductSerializer(product)
        return Response(serializer.data)

    def put(self, request, product_id=None):
        product = self.get_object(product_id)
        serializer = ProductSerializer(instance=product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, product_id=None):
        product = self.get_object(product_id)
        product.delete()
        return Response({}, status=204)


class FeedbackListAPIView(APIView):
    """ permission_classes = (IsAuthenticated,) """

    def get(self, request):
        feedbacks = Feedback.objects.all()
        serializers = FeedbackSerializer(feedbacks, many=True)
        return Response(serializers.data)

    def post(self, request):
        serializer = FeedbackSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

class FeedbackDetailsAPIVIEW(APIView):
    def get_object(self, feedback_id):
        try:
            return Feedback.objects.get(id=feedback_id)
        except Feedback.DoesNotExist as e:
            raise Http404

    def get(self, request, feedback_id=None):
        feedback = self.get_object(feedback_id)
        serializer = FeedbackSerializer(feedback)
        return Response(serializer.data)

    def put(self, request, feedback_id=None):
        feedback = self.get_object(feedback_id)
        serializer = FeedbackSerializer(instance=feedback, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, feedback_id=None):
        feedback = self.get_object(feedback_id)
        feedback.delete()
        return Response({}, status=204)


@api_view(['GET'])
def product_feedbacks(request, product_id):
    try:
        feedbacks = Feedback.objects.all().filter(product_id=product_id)
    except Feedback.DoesNotExist as e:
        return Response({'message': str(e)}, status=400)

    if request.method == 'GET':
        serializers = FeedbackSerializer(feedbacks, many=True)
        return Response(serializers.data)

@api_view(['GET', 'POST'])
def shipping_list(request):
    if request.method == 'GET':
        shippings = Shipping.objects.all()
        serializer = ShippingSerializer(shippings, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = ShippingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    
@api_view(['GET', 'PUT', 'DELETE'])
def shipping_details(request, shipping_id):
    try:
        shipping = Shipping.objects.get(id=shipping_id)
    except Shipping.DoesNotExist as e:
        return Response({'message': str(e)}, status=400)

    if request.method == 'GET':
        serializer = ShippingSerializer(shipping)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = ShippingSerializer(instance=shipping,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


    elif request.method == 'DELETE':
        shipping.delete()
        return Response({}, status=204)



""" from django.shortcuts import render
from rest_framework import generics

from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.

from api.serializers import *
from api.models import *


class CategoryListApiView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryDetailApiView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ProductListAPIView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializers


class ProductDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializers


 """