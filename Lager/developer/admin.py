from django.contrib import admin

# Register your models here.

from .models import ProjectStatus

class ProjectStatusAdmin(admin.ModelAdmin):
    list_display = ('who', 'when', 'what', 'how')


admin.site.register(ProjectStatus, ProjectStatusAdmin)