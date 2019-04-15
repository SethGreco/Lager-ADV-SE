from rest_framework import serializers
from .models import ProjectStatus







class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectStatus
        fields = ('id', 'who', 'when', 'what', 'how')


