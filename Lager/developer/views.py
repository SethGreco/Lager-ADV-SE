from django.shortcuts import render
from .models import ProjectStatus

from .serializers import ProjectSerializer

from rest_framework import viewsets
# Create your views here.


class ProjectListCreate(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = ProjectStatus.objects.all()

