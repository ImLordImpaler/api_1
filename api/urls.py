from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from basic import views

router = routers.DefaultRouter()
router.register(r'todos', views.index, 'todo')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/' , include(router.urls))
]
