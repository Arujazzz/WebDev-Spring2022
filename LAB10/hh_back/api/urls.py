from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token
from api.views import*

urlpatterns = [
    path('login/', obtain_jwt_token),
    path('companies/', companies_list),
    path('companies/<int:company_id>/', company_details),
    path('companies/<int:company_id>/vacancies/', company_vacancies),
    path('vacancies/', VacanciesListAPIView.as_view()),
    path('vacancies/<int:vacancy_id>/', VacancyDetailsAPIVIEW.as_view()),
    path('vacancies/top_ten/', VacanciesToptenAPIView.as_view()),
]