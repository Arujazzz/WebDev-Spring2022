from dataclasses import fields
from rest_framework import serializers
from api.models import*

class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    description = serializers.CharField()
    city = serializers.CharField()
    address = serializers.CharField()

    def create(self, validated_data):
        company = Company.objects.create(**validated_data)
        return company

    def update(self, instance, validated_data):
        instance.name = validated_data.get("name")
        instance.description = validated_data.get("description")
        instance.city = validated_data.get("city")
        instance.address = validated_data.get("address")
        instance.save()
        return instance
    
    """ def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.city = validated_data.get('city', instance.city)
        instance.address = validated_data.get('address', instance.address)
        instance.save()
        return instance """
    
class CompanySerializer_2(serializers.ModelSerializer):
    vacancies = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Company
        fields = ('id', 'name', 'description', 'city', 'address', 'vacancies')


""" class VacanciesSerializer(serializers.ModelSerializer):
    company = CompanySerializer_2()
    company_id = serializers.IntegerField()

    class Meta:
        model = Vacancy
        fields = ('id', 'name', 'description', 'salary', 'company') """

class VacanciesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = ('id', 'name', 'description', 'salary', 'company',) 