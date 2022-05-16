from api.models import*
from api.serializers import*

from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import Http404

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def companies_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    
@api_view(['GET', 'PUT', 'DELETE'])
def company_details(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return Response({'message': str(e)}, status=400)

    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = CompanySerializer(instance=company,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    elif request.method == 'DELETE':
        company.delete()
        return Response({}, status=204)

@api_view(['GET'])
def company_vacancies(request, company_id):
    try:
        vacancies = Vacancy.objects.all().filter(company_id=company_id)
    except Vacancy.DoesNotExist as e:
        return Response({'message': str(e)}, status=400)

    if request.method == 'GET':
        serializers = VacanciesSerializer(vacancies, many=True)
        return Response(serializers.data)


class VacanciesListAPIView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializers = VacanciesSerializer(vacancies, many=True)
        return Response(serializers.data)

    def post(self, request):
        serializer = VacanciesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

class VacancyDetailsAPIVIEW(APIView):
    def get_object(self, pk):
        try:
            return Vacancy.objects.get(id=pk)
        except Vacancy.DoesNotExist as e:
            raise Http404

    def get(self, request, vacancy_id=None):
        vacancy = self.get_object(vacancy_id)
        serializer = VacanciesSerializer(vacancy)
        return Response(serializer.data)

    def put(self, request, pk=None):
        vacancy = self.get_object(pk)
        serializer = VacanciesSerializer(instance=vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, pk=None):
        vacancy = self.get_object(pk)
        vacancy.delete()
        return Response({}, status=204)

class VacanciesToptenAPIView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all().order_by('-salary')[:10]
        serializer = VacanciesSerializer(vacancies, many=True)
        return Response(serializer.data) 