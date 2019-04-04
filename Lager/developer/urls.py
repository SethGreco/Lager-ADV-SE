from django.urls import path, include;
from . import views

urlpatterns = [
    path('login/', views.home),
    path('api/user', views.UserListCreate.as_view() ),
    path('api/project/', views.ProjectListCreate.as_view() ),


]