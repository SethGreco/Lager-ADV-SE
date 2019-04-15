from django.urls import path, re_path, include;
from . import views
from django.views import generic
from rest_framework.schemas import get_schema_view
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from rest_framework import routers


router = routers.DefaultRouter()
router.register(r'project', views.ProjectListCreate, 'ProjectStatus')

urlpatterns = [
    path('api/', include(router.urls)),
    re_path(r'api/$', get_schema_view()),
    re_path(r'^api/auth/', include(
        'rest_framework.urls', namespace='rest_framework')),
    re_path(r'^api/auth/token/obtain/$', TokenObtainPairView.as_view()),
    re_path(r'^api/auth/token/refresh/$', TokenRefreshView.as_view()),

]